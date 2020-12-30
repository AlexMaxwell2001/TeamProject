//Customer model
const Customer = require('../models/customer.model.js');
//Product model
const Product = require('../models/product.model.js');
//Contact model
const Contact= require('../models/contact.model.js');
//Orders model
const Orders = require('../models/order.model.js');
//Cart model
var Cart = require('../models/cart.model');
//Database connection string
const url = "mongodb+srv://mainUser:mainUserPP@cluster0-npb0d.mongodb.net/project?retryWrites=true&w=majority";
var MongoClient = require('mongodb').MongoClient;
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
var flag=false;
//Cart data structure/object
var cart = new Cart(cart ? cart : {});
const { promisify } = require('util');

//When the app is in the root location show the homepage
exports.root = (req, res) => {
    res.render('home_view')
};

//Show the basket view
exports.basket = (req, res) => {
    res.render('basket_view')
}

//Empty the basket
exports.subtraction =(req, res) => {
    var sample = req.params._id;
    cart.empty(sample);
    res.render('basket_view',{products: cart.generateArray(), totalPrice: cart.totalPrice});
}

//Change the price in the basket when the promo is used
exports.promos =(req, res) => {
    var num = req.params._id;
    cart.promo(num);
    res.render('basket_view',{products: cart.generateArray(), totalPrice: cart.totalPrice});
}

//Remove an item from the basket
exports.remove =(req, res) => {
    var sample = req.params._id;
    var num = req.params.s;
    cart.removeItem(sample,num);
    res.render('basket_view',{products: cart.generateArray(), totalPrice: cart.totalPrice});
}

//Show the contactus page
exports.contact = (req, res) => {
    res.render('contact_view')
}

//When the user buys something they recieve something and their order is saved to the DB
exports.Confirmation = async (req, res) => {
    var email = req.params.m;
    try {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'help.jumble@gmail.com',
                    pass: 't3ampr0ject'
                }
        })

        transporter.use('compile', hbs({
            viewEngine: {
                extname: '.hbs', // handlebars extension
                partialsDir: 'views',
                layoutsDir: 'views',
                defaultLayout: 'confirmationEmail_view',
            },
            viewPath: 'views',
            extName: '.hbs'
        }))

        // send mail with defined transport object
        const mailOptions = {
            from: 'help.jumble@gmail.com',
            to: '' + email + '',
            subject: 'Order Confirmation',
            text: 'Hello world?', // plain text body
            template: 'confirmation_view',
            context: {
                    products: cart.generateArray(),
                    totalPrice: cart.totalPrice,
                    totalQty: cart.totalQty,
                    DeliveryPrice : cart.DeliveryPrice,
                    finalPrice : cart.finalPrice,
                    cartNumber : cart.cartNumber
            }
        }
        const info = await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log(error)
    }
    //Render the confimation view
    res.render('confirmation_view',{
        products: cart.generateArray(),
        totalPrice: cart.totalPrice,
        totalQty : cart.totalQty,
        DeliveryPrice : cart.DeliveryPrice,
        finalPrice : cart.finalPrice,
        cartNumber : cart.cartNumber,
        date : cart.date
    });

    //Save the order
    const orders = new Orders({
        items: cart.generateArray(),
        cartNumber: cart.cartNumber,
        totalQty: cart.totalQty,
        totalPrice: cart.totalPrice,
        DeliveryPrice: cart.DeliveryPrice,
        finalPrice: cart.finalPrice,
        username: cart.username,
        orderstatus: cart.orderstatus,
        date: cart.date
    });

    MongoClient.connect(url, function (err, db) {
        if(err) throw err;
        var dbo = db.db("project");
        dbo.collection("orders").insertOne(orders, function(err, res) {
            if(err) throw err;
            console.log("1 document inserted");
            db.close();
        })
    })
    //Reset the cart
    cart.cartReset();
}

//Render the user view with the user's information
exports.User = async (req, res) => {
    //Get the username from the encrypted url
    let encrypted= req.params.k;
    let buff = Buffer.from(encrypted, 'base64');  
    let text = buff.toString('ascii');
    var ar=text.split(" ");
    let user=ar[0];
    var orderdetails, personaldetails;
    await Orders.find({ username: user})
        .then(data => {
                orderdetails = data;
        }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while find the Customer."
        });
    });
    await Customer.find({Username : user}).then(data => {
        personaldetails = data;
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while find the Customer."
        });
    });
    res.render('user_view',{
        Data : personaldetails,
        Orders : orderdetails
    })
}

//Autofill the checkout information and send the basket information
exports.Checkout=(req, res) => {
    var search = req.params.s;
    Customer.find({ Username: search})
        .then(data => {
            res.render('checkout_view',{
                Data : data,
                products: cart.generateArray(),
                totalPrice: cart.totalPrice,
                totalQty : cart.totalQty,
                DeliveryPrice : cart.DeliveryPrice,
                finalPrice : cart.finalPrice,
                }
            );
        }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while find the Customer."
        });
    });
}

//Render the basket view with the current cart
exports.cart =(req,res) => {
    return res.render('basket_view', {products: cart.generateArray(), totalPrice: cart.totalPrice});
}

//Render the basket view and add an item to the cart on the backend
exports.addtocart =(req,res) => {
    var Name=req.params._id;
        Product.findById(Name, function(err, user) {
                cart.add(user,req.params._id,req.params.m);
                req.params.cart=cart;
                res.render('basket_view', {products: cart.generateArray(), totalPrice: cart.totalPrice});
    });
}

//Check the encrypted url user information is correct
exports.check= (req,res) =>{
    let encrypted= req.params.k;
    let buff = Buffer.from(encrypted, 'base64');  
    let text = buff.toString('ascii');
    var ar=text.split(" ");
    let user=ar[0];
    let password=ar[1];
    flag=false;
    Customer.find({ Username: user})
    .then(data=>{
        var temp=JSON.stringify(data);
        if(temp.length>2){
          Customer.find({ Password: password})
          .then(result=>{
                var temp2=JSON.stringify(result);
                if(temp2.length>2){
                    flag=true;
                    res.send(flag);
                }else{
                    console.log("This is not a valid password");
                    res.send(flag);
                }
           });
        }else{
            console.log("This is not a valid username");
            res.send(flag);
        }
    })
}

//Show the reset page
exports.reset = (req, res) => {
    res.render('reset_view')
};

//Make sure the email is registered email
exports.resetEmail = (req, res) => {
    var search = req.params.s;
    Customer.find({ Email: search})
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while find the Customer."
        });
    });
};

//Search all users for Username provided
exports.loginVerification = (req, res) => {
    var search = req.params.s;
    Customer.find({ Username: search})
    .then(data => {
        res.send(data);
        cart.username = search;
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while find the Customer with the username search."
        });
    });
};

//Search Bar
exports.searchProducts = (req, res) => {
    var search = req.params.s;
    console.log("Searching For Products: "+search)
    Product.find({ ProductName: new RegExp(search,"ig")})
    .then(Products => {
        res.render('product_view',{
            results: Products
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Products."
        });
    });
};

//Find All products
exports.findAllProducts = (req, res) => {
    Product.find()
    .then(Products => {
        res.render('product_view',{
            results: Products
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Products."
        });
    });
};

//Login Page View
exports.loginView = (req, res) => {
    res.render('login_view');
};

//Registration Page View
exports.registrationView = (req, res) => {
    res.render('registration_view');
};

//This function is to search the database by a Product Name
exports.searchProductsByName = (req, res) => {
    var Name = req.params._id;
    Product.find({ ProductName: Name})
    .then(Products => {
        res.render('fullProduct_view',{
            results: Products
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Products."
        });
    });
};


//Update Customer informatiion
exports.updatePassword = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Customer content cannot be empty"
        });
    }


    Customer.updateOne({Email:req.params.s},  
    {Password:req.params.m}, 
       { new: true })
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Customeromer not found with Username " + req.params.Username
            });
        }
        res.send(customer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Customer not found with Username" + req.params.Username
            });               
        }
        return res.status(500).send({
            message: "Error updating Customer with Username " + req.params.Username
        });
    });
};

/*Registration
This function is for creating a new customer*/
exports.registration = (req, res) => {
    //Request can't be empty for required fields
    if(!req.body.DOB || !req.body.FirstNames|| !req.body.Surname || !req.body.Mobile|| !req.body.Email || !req.body.AddressLine1 || !req.body.Town|| !req.body.countyORcity || !req.body.EIRCODE) {
        return res.status(400).send({
            message: "Customer content cannot be empty!"
        });
    }

    const customer = new Customer({
        Username: req.body.Username,
        Password: req.body.Password,
        FirstNames: req.body.FirstNames,
        Surname: req.body.Surname,
        Mobile: req.body.Mobile,
        HomePhone: req.body.HomePhone,
        Email: req.body.Email,
        DOB: req.body.DOB,
        "AddressHome.AddressLine1": req.body.AddressLine1,
        "AddressHome.AddressLine2": req.body.AddressLine2,
        "AddressHome.Town": req.body.Town,
        "AddressHome.countyORcity": req.body.countyORcity,
        "AddressHome.EIRCODE": req.body.EIRCODE,
        "AddressBilling.AddressLine1":req.body.AddressLine1,
        "AddressBilling.AddressLine2":req.body.AddressLine2,
        "AddressBilling.Town":req.body.Town,
        "AddressBilling.countyORcity":req.body.countyORcity,
        "AddressBilling.EIRCODE":req.body.EIRCODE,
        "cachedPaymentInfo.CardNumber":req.body.CardNumber,
        "cachedPaymentInfo.CardHolder":req.body.CardHolder,
        "cachedPaymentInfo.PaymentType":req.body.PaymentType,
        "cachedPaymentInfo.SecurityCode":req.body.SecurityCode,
        "cachedPaymentInfo.ExpiryDate":req.body.ExpiryDate
    });

    //save it to the database
    customer.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Customer."
        });
    });
};


//This function is for creating a new contact us message
exports.submitMessage = (req, res) => {
    const message = new Contact({
        Username: req.body.Username,
        Org: req.body.Org,
        Number: req.body.Number,
        Email: req.body.Email,
        Message: req.body.Message
    });

    //save it to the database
    message.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Message."
        });
    });
};

//Send an email to reset the password with a code in it
exports.sendEmails = (req,res) => {
    var rand = req.params.s;
    var email=req.params.m;
    var deliverer = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'help.Jumble@gmail.com',
        pass: 't3ampr0ject'
      }
    });

    var content = {
      from: 'help.Jumble@gmail.com',
      to: ''+email+'',
      subject: 'Code for Resetting your Password',
      html:'<h1>Reset Password</h1><br><p>A password reset event has been triggered.</p><br><p>To complete the password reset process, use this code: <strong>'+rand+'</strong>.</p>'
    };

    deliverer.sendMail(content, function(err, res){
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent: ' + res.response);
      }
    });
}
    

//Update Customer informatiion
exports.updateCustomer = (req, res) => {

    Customer.updateOne({Username : req.params.s}, {
        FirstNames: req.body.FirstNames,
        Surname: req.body.Surname,
        Mobile: req.body.Mobile,
        Email: req.body.Email,
        DOB: req.body.DOB,
        "AddressHome.AddressLine1": req.body.AddressLine1,
        "AddressHome.AddressLine2": req.body.AddressLine2,
        "AddressHome.Town": req.body.Town,
        "AddressHome.countyORcity": req.body.countyORcity,
        "AddressHome.EIRCODE": req.body.EIRCODE,
    },
       { new: true })  
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Customer not found with Username " + req.params.Username
            });
        }
        res.send(customer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Customer not found with Username" + req.params.Username
            });               
        }
        return res.status(500).send({
            message: "Error updating Customer with Username " + req.params.Username
        });
    });
};
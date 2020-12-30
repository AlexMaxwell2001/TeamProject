module.exports = (app) => {
    const Controller = require('../controllers/All.controllers.js');
    //Home view
    app.get('/', Controller.root);
    //Home and logged in
    app.get('/:k/login=true', Controller.root)
    //Make sure they haven't tampered with url
    app.get('/Check/:k', Controller.check)
    //Get login page
    app.get('/Login', Controller.loginView);
    //verify login
    app.get('/Login/:s', Controller.loginVerification);
    //Get registration page
    app.get('/Registration', Controller.registrationView);
    //Save user to db / create account
    app.post('/Registration', Controller.registration);
    //Get reset page
    app.get('/Reset', Controller.reset);
    //Check email is registered
    app.get('/Reset/emails/:s', Controller.resetEmail);
    //Send code to email
    app.get('/Reset/send/:s/:m', Controller.sendEmails);
    //update password in db
    app.put('/Reset/:s/:m', Controller.updatePassword);
    //logged out version of Category button to find all 
    app.get('/Products/ProductName', Controller.findAllProducts); 
    //logged out version of search engine for products 
    app.get('/Products/ProductName/:s', Controller.searchProducts); 
    //Logged in version
    app.get('/:k/login=true/Products/ProductName', Controller.findAllProducts);
    //Logged in version
    app.get('/:k/login=true/Products/ProductName/:s', Controller.searchProducts); 
    //Full view product logged out
    app.get('/Products/ProductName/:s/fullView/:_id', Controller.searchProductsByName); 
    //Full view product logged out
    app.get('/Products/ProductName/fullView/:_id', Controller.searchProductsByName); 
    //Full view logged in
    app.get('/:k/login=true/Products/ProductName/:s/fullView/:_id', Controller.searchProductsByName); 
    //Full view logged in
    app.get('/:k/login=true/Products/ProductName/fullView/:_id', Controller.searchProductsByName);  
    //Show the basket 
    app.get('/:k/login=true/Basket', Controller.cart);
    //Add an item to the basket
    app.get('/:k/login=true/Basket/:_id/:m', Controller.addtocart);
    //Remove an item from the Basket
    app.get('/BasketOps/:_id/:s/:m', Controller.remove);
    //Edit the basket price when promo activated
    app.get('/BasketOps/:_id/:s/:m/:k', Controller.promos);
    //Empty the cart
    app.get('/BasketOps/:s/:m', Controller.subtraction);
    app.get('/Contact', Controller.contact);
    //Post the message to the DB
    app.post('/Contact', Controller.submitMessage);
    //Load the contact us page when logged in
    app.get('/:k/login=true/Contact' , Controller.contact);
    //Post the message to the DB logged in
    app.post('/:k/login=true/Contact' , Controller.submitMessage);
    //Load the checkout
    app.get('/:k/login=true/Checkout/:s', Controller.Checkout);
    //Load the confirmation page
    app.get('/:k/login=true/Confirmation/:m', Controller.Confirmation);
    //Load the user page
    app.get('/:k/login=true/User', Controller.User);
    //Update user information
    app.put('/Update/:s', Controller.updateCustomer);


}

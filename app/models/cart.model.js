module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};  //if no items are present just return empty
    this.cartNumber =  Math.floor(Math.random() * 100000000);
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    this.DeliveryPrice = 4;
    this.finalPrice = oldCart.finalPrice || 0;
    this.username = "";
    this.date = new Date().toLocaleDateString();
    this.orderstatus = "Order Confirmed";

    this.add = function (item, id,sizechosen) {//here id is the id which when the product is stored in the database is assigned with that
            var storedItem = this.items[id];
            if (!storedItem) {//if item is not added still then add it and increment the quantity outside
                storedItem = this.items[id] = {id: item._id, item: item.ProductName,image:item.ProductImage, size:sizechosen, qty: 0, price: parseInt(item.ProductPrice.substring(1))};
            }
            storedItem.qty++;//else just add the quantity
            storedItem.item.price = storedItem.item.price * storedItem.qty;
            this.totalQty++;
            this.totalPrice += parseInt(item.ProductPrice.substring(1));
            this.finalPrice = this.totalPrice+this.DeliveryPrice;
    };
        //Empty the cart
        this.empty = function (id) {
            this.items={};
            this.totalPrice=0;
            this.totalQty = 0;
            this.finalPrice = 0;
        };

        //Promo price edit
        this.promo = function (num) {
            this.totalPrice=num;
            this.finalPrice=num;
        };

        //Remove item from basket and reduce price
        this.removeItem = function (id,num) {
            for(var i=0;i<num;i++){
                this.totalPrice -= this.items[id].price;
                this.finalPrice -= this.items[id].price;
            }
            this.totalQty--;
            delete this.items[id];
        };
        
        this.generateArray = function () {//return the array of items stored in the elements
            var arr = [];
            for (var id in this.items) {
                arr.push(this.items[id]);
            }
            return arr;
        };

        this.cartReset = function () {
            this.items = {};
            this.cartNumber =  Math.floor(Math.random() * 100000000);
            this.date = new Date().toLocaleDateString();
            this.totalPrice = 0;
            this.totalQty = 0;
            this.finalPrice = 0;
        }
    };
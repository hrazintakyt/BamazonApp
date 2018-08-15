var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({

    "username": "root",
    "password": "root",
    "database": "bamazon",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "dialectOptions": {
        "socketPath": "/Applications/MAMP/tmp/mysql/mysql.sock"
    }
})

console.log("Here is our selection of Items");
console.log("------------------------------");


connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM bamazon", function(err, result) {
        if (err) throw err;
        console.log(result);
        //result shows all from bamazon, so now we have to ask what they want
        askForPurchase(result);
    });

    function askForPurchase(items) {
        inquirer.prompt([{
            type: "input"
            name: "pick"
            message: "Pick what you wanna buy"
        }]).then(function(val) {
            var userPick = parseInt(val.pick)
            var productDoesExist = checkForProduct(item_id, inventory);


            if (product) {
                askForQuantity(product)
            } else {
                console.log("======This Item Is Not Available=====");
            }
        });
    }
    //ask how many should be bought 
    function askForQuantity(product) {
        inquirer.prompt([
            type: "input",
            name: "quantity",
            message: "How many of them do you want?"
        ]).then(function(val) {
            var quantity = parseInt(val.quantity);
            //check if there's enough
            if (quantity > product.stock_quantity) {
                console.log("Not enough, Please choose smth else");
                askForPurchase()
            } else {
                buyItem(product, quantity);
            }
        });
    }

    function buyItem(product quantity) {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", [quantity, product.item_id],
            function(err, result) {
                console.log("You bought " + quantity + " of the " + product.product_name + " product.");
                loadProducts();
            });
    }

    function productDoesExist(item_id, items) {

        for (var i = 0; i < items.length; i++) {
            if (items[i].item_id === item_id) {
                return items[i];
            }
        }

        return null;
    }


});
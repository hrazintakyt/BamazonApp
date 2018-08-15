CREATE DATABASE  IF NOT EXISTS `bamazon` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `bamazon`;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  `price` int(11) DEFAULT '0',
  `stock_quantity` int(11) DEFAULT '0',
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;


LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'coffee','beverages',4,25),(2,'tea','beverages',2,30),(3,'Nintendo_switch','games',320,5),(4,'Pokemon_Red','games',20,20),(5,'Pokemon_Yellow','games',25,25),(6,'Moby_Dick','books',8,2),(7,'Dictionary','books',10,0),(8,'Don_Quixote','books',13,770),(9,'Bearded_Dragon','pets',50,4),(10,'Leopard_Gecko','pets',30,12);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;


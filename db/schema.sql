### Schema

USE heroku_7aab7fd98f89c29;

CREATE TABLE `burgers`
(
	`id` int NOT NULL AUTO_INCREMENT,
	`burger` varchar(144) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
    `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

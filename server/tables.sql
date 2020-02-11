/*USE shoe_store;
SET FOREIGN_KEY_CHECKS = 0;
Drop table Orders;
Drop table Product_Types;
Drop table Products;
Drop table Colors;
Drop table Users;*/


CREATE TABLE IF NOT EXISTS users 
  ( 
     user_id   INT auto_increment PRIMARY KEY NOT NULL, 
     username VARCHAR(255) NOT NULL unique, 
     pword    VARCHAR(255) NOT NULL,
     email varchar(255) unique not null,
     salt varchar(500) not null,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  ); 

CREATE TABLE IF NOT EXISTS product_types 
  ( 
     producttype_id INTEGER auto_increment PRIMARY KEY, 
     name           VARCHAR(255) NOT NULL UNIQUE 
  ); 

CREATE TABLE IF NOT EXISTS products 
  ( 
     product_id    INT auto_increment PRIMARY KEY NOT NULL, 
     price        INTEGER NOT NULL, 
     product_type INTEGER not null, 
     name         VARCHAR(255) UNIQUE NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
     image_url    VARCHAR(1000) NOT NULL, 
     FOREIGN KEY (product_type) REFERENCES product_types(producttype_id) 
  ); 
  
  CREATE TABLE IF NOT EXISTS orders
  ( 
     order_id    INT auto_increment PRIMARY KEY NOT NULL, 
     product_id        INTEGER NOT NULL, 
     fulfilled        bool not null DEFAULT false, 
     user_id    integer NOT NULL,
     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
     FOREIGN KEY (product_id) REFERENCES products(product_id) ,
     FOREIGN KEY (user_id) REFERENCES users(user_id)
  ); 
  
  CREATE TABLE IF NOT EXISTS cart_items
  ( 
     belongs_to integer not null,
     product_id integer not null,
     FOREIGN KEY (product_id) REFERENCES products(product_id) ,
     FOREIGN KEY (belongs_to) REFERENCES users(user_id)
  ); 
  
  CREATE TABLE IF NOT EXISTS colors
  ( 
     color_id integer auto_increment not null primary key,
     name varchar(50) not null unique
  ); 
  
  
  

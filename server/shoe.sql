USE shoe_store; 

/*Drop table Users; 
Drop table Product_Types; 
Drop table Products;*/ 
CREATE TABLE IF NOT EXISTS users 
  ( 
     userid   INT auto_increment PRIMARY KEY NOT NULL, 
     username VARCHAR(255) NOT NULL, 
     pword    VARCHAR(255) NOT NULL 
  ); 

CREATE TABLE IF NOT EXISTS product_types 
  ( 
     producttype_id INTEGER auto_increment PRIMARY KEY, 
     name           VARCHAR(255) NOT NULL UNIQUE 
  ); 

CREATE TABLE IF NOT EXISTS products 
  ( 
     productid    INT auto_increment PRIMARY KEY NOT NULL, 
     price        INTEGER NOT NULL, 
     product_type INTEGER, 
     name         VARCHAR(255) UNIQUE NOT NULL, 
     image_url    VARCHAR(1000) NOT NULL, 
     FOREIGN KEY (product_type) REFERENCES product_types(producttype_id) 
  ); 

/* 
INSERT INTO  Products(Price, Product_Type, Image_Url, Name) 
VALUES(289, 1, "/images/Unknown-1.png", "Pro Road Bike"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(400, 1, "/images/Unknown-2.jpeg", "Prestige Road Bike"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(289, 1, "/images/Unknown-3.jpeg", "Darmanatan Cruiser"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(500, 1, "/images/Unknown-4.jpeg", "Korno Road Bike" ); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(289, 1, "/images/Unknown-5.jpeg", "Splinter Road Bike"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(489, 1, "/images/Unknown-6.jpeg", "Paolo Road Bike"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(300, 1, "/images/Unknown-7.jpeg", "Porto Road Bike"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(700, 1, "/images/Unknown-8.jpeg", "Excel Road Bike"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(755, 1, "/images/Unknown-9.jpeg", "Pro Road Cruiser"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(689, 1, "/images/Unknown-10.jpeg", "Porto Road Cruiser"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(289, 1, "/images/Unknown-11.jpeg", "Korno Road Cruiser"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(289, 1, "/images/Unknown-12.jpeg", "Prestige Road Cruiser"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(275, 1, "/images/Unknown-13.jpeg", "Diplomat Road Bike"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(700, 1, "/images/Unknown-14.jpeg", "Exchange Road Bike"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(700, 1, "/images/Unknown-15.jpeg", "Falmo Road Cruiser"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(900, 1, "/images/Unknown-16.jpeg", "Givendales Road Bike"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(500, 1, "/images/Unknown-17.jpeg", "Givendales Road Cruiser"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(567, 1, "/images/Unknown-18.jpeg", "Borker Road Bike"); 
INSERT INTO  Products(Price, Product_Type, Image_Url,Name) 
VALUES(285, 1, "/images/Unknown-19.jpeg", "Borker Road Cruiser"); 
*/ 
/* get all bikes*/ 
SELECT products.name      AS name, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
WHERE  product_types.name = "bicycle"; 

/* get all boards*/ 
SELECT products.name      AS name, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
WHERE  product_types.name = "snowboard"; 

/* sort bikes by price*/ 
SELECT products.name      AS name, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
WHERE  product_types.name = "bicycle" 
ORDER  BY products.price DESC; 

/* sort boards by price*/ 
SELECT products.name      AS name, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
WHERE  product_types.name = "snowboard" 
ORDER  BY products.price DESC; 

/* sort bikes by price*/ 
SELECT products.name      AS name, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
WHERE  product_types.name = "bicycle" 
ORDER  BY products.price ASC; 

/* sort boards by price*/ 
SELECT products.name      AS name, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
WHERE  product_types.name = "snowboard" 
ORDER  BY products.price ASC; 

/* change offset if you want*/ 
SELECT products.name      AS name, 
       products.productid, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
ORDER  BY products.price 
LIMIT  12 offset 0; 

/* trending fake*/ 
SELECT products.name      AS name, 
       products.productid, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
ORDER  BY products.price 
LIMIT  8 offset 7; 








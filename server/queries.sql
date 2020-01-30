SELECT products.name      AS name, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
WHERE  product_types.name = "bicycle"; 


SELECT products.name      AS name, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
WHERE  product_types.name = "snowboard"; 


SELECT products.name      AS name, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
WHERE  product_types.name = "bicycle" 
ORDER  BY products.price DESC; 



SELECT products.name      AS name, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
WHERE  product_types.name = "snowboard" 
ORDER  BY products.price DESC; 


SELECT products.name      AS name, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
WHERE  product_types.name = "bicycle" 
ORDER  BY products.price ASC; 

 
SELECT products.name      AS name, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
WHERE  product_types.name = "snowboard" 
ORDER  BY products.price ASC; 


SELECT products.name      AS name, 
       products.product_id, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
ORDER  BY products.price 
LIMIT  12 offset 0; 


SELECT products.name      AS name, 
       products.product_id, 
       products.price     AS price, 
       product_types.name AS type 
FROM   product_types 
       LEFT JOIN products 
              ON product_types.producttype_id = products.product_type 
ORDER  BY products.price 
LIMIT  8 offset 7; 

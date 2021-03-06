USE shoe_store;

SET foreign_key_checks = 0;

DROP TABLE orders;

DROP TABLE product_types;

DROP TABLE products;

DROP TABLE colors;

DROP TABLE users;

DROP TABLE product_colors;

DROP TABLE likes;

CREATE TABLE IF NOT EXISTS users
  (
     user_id    INT auto_increment PRIMARY KEY NOT NULL,
     username   VARCHAR(255) NOT NULL UNIQUE,
     pword      VARCHAR(255) NOT NULL,
     email      VARCHAR(255) UNIQUE NOT NULL,
     salt       VARCHAR(500) NOT NULL,
     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

CREATE TABLE IF NOT EXISTS product_types
  (
     producttype_id INTEGER auto_increment PRIMARY KEY,
     name           VARCHAR(255) NOT NULL UNIQUE
  );

CREATE TABLE IF NOT EXISTS products
  (
     product_id   INT auto_increment PRIMARY KEY NOT NULL,
     price        INTEGER NOT NULL,
     product_type INTEGER NOT NULL,
     name         VARCHAR(255) UNIQUE NOT NULL,
     created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
     image_url    VARCHAR(1000) NOT NULL,
     FOREIGN KEY (product_type) REFERENCES product_types(producttype_id)
  );

CREATE TABLE IF NOT EXISTS orders
  (
     order_id   INT auto_increment PRIMARY KEY NOT NULL,
     product_id INTEGER NOT NULL,
     fulfilled  BOOL NOT NULL DEFAULT false,
     user_id    INTEGER NOT NULL,
     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
     FOREIGN KEY (product_id) REFERENCES products(product_id),
     FOREIGN KEY (user_id) REFERENCES users(user_id)
  );

CREATE TABLE IF NOT EXISTS cart_items
  (
     belongs_to INTEGER NOT NULL,
     product_id INTEGER NOT NULL,
     FOREIGN KEY (product_id) REFERENCES products(product_id),
     FOREIGN KEY (belongs_to) REFERENCES users(user_id)
  );

CREATE TABLE IF NOT EXISTS colors
  (
     color_id INTEGER auto_increment NOT NULL PRIMARY KEY,
     name     VARCHAR(50) NOT NULL UNIQUE
  );

CREATE TABLE IF NOT EXISTS product_colors
  (
     color_id   INTEGER auto_increment NOT NULL,
     product_id INTEGER NOT NULL,
     FOREIGN KEY (color_id) REFERENCES colors(color_id),
     FOREIGN KEY (product_id) REFERENCES products(product_id)
  );

CREATE TABLE IF NOT EXISTS likes
  (
     user_id    INTEGER auto_increment NOT NULL,
     product_id INTEGER NOT NULL,
     FOREIGN KEY (user_id) REFERENCES users(user_id),
     FOREIGN KEY (product_id) REFERENCES products(product_id)
  ); 

USE shoe_store;

/* product types*/
INSERT INTO product_types
            (NAME)
VALUES     ("bicycle");

INSERT INTO product_types
            (NAME)
VALUES     ("snowboard");

/*
 colors
*/
INSERT INTO colors
            (NAME)
VALUES     ("red");

INSERT INTO colors
            (NAME)
VALUES     ("white");

INSERT INTO colors
            (NAME)
VALUES     ("black");

INSERT INTO colors
            (NAME)
VALUES     ("blue");

INSERT INTO colors
            (NAME)
VALUES     ("orange");

INSERT INTO colors
            (NAME)
VALUES     ("yellow");

/* bikes*/
INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (289,
            1,
            "/images/unknown-1.png",
            "pro road bike");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (400,
            1,
            "/images/unknown-2.jpeg",
            "prestige road bike");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (289,
            1,
            "/images/unknown-3.jpeg",
            "darmanatan cruiser");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (500,
            1,
            "/images/unknown-4.jpeg",
            "korno road bike" );

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (289,
            1,
            "/images/unknown-5.jpeg",
            "splinter road bike");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (489,
            1,
            "/images/unknown-6.jpeg",
            "paolo road bike");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (300,
            1,
            "/images/unknown-7.jpeg",
            "porto road bike");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (700,
            1,
            "/images/unknown-8.jpeg",
            "excel road bike");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (755,
            1,
            "/images/unknown-9.jpeg",
            "pro road cruiser");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (689,
            1,
            "/images/unknown-10.jpeg",
            "porto road cruiser");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (289,
            1,
            "/images/unknown-11.jpeg",
            "korno road cruiser");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (289,
            1,
            "/images/unknown-12.jpeg",
            "prestige road cruiser");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (275,
            1,
            "/images/unknown-13.jpeg",
            "diplomat road bike");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (700,
            1,
            "/images/unknown-14.jpeg",
            "exchange road bike");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (700,
            1,
            "/images/unknown-15.jpeg",
            "falmo road cruiser");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (900,
            1,
            "/images/unknown-16.jpeg",
            "givendales road bike");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (500,
            1,
            "/images/unknown-17.jpeg",
            "givendales road cruiser");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (567,
            1,
            "/images/unknown-18.jpeg",
            "borker road bike");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (285,
            1,
            "/images/unknown-19.jpeg",
            "borker road cruiser");

/* boards*/
INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (100,
            2,
            "/images/untitled-1129_copy_copy_large.jpeg",
            "borkar snowboard");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (400,
            2,
            "/images/untitled-112_copy_copy_large.jpeg",
            "borkar ravage snowboard");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (200,
            2,
            "/images/untitled-112_copy_copy_copy_large.jpeg",
            "borkar shear snowboard");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (500,
            2,
"/images/untitled-12_copy_copy_84666978-c3c0-4651-8ab9-d0b6086a57c2_large.jpeg",
"borkar potrum snowboard");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (500,
            2,
            "/images/capita-volcom-stone-snowboard_large.jpeg",
            "blaze snowboard");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (400,
            2,
"/images/capita-indoor-survival-snowboard-156-top_large_f7aeafff-b798-4e62-9061-5f599c597ab8_large.jpeg"
            ,
"komodo dragon snowboard");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (300,
            2,
            "/images/capita-indoor-survival-snowboard-156-top_large.jpeg",
            "komodo leopard snowboard");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (700,
            2,
"/images/capita-defenders-of-awesome-snowboard-154-top-red-base_large_copy_d7c8ea4b-06cb-49bd-b9f6-6a37c356fb01_large.jpeg"
            ,
"komodo dream snowboard");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (600,
            2,
            "/images/adysb00020_mul_frt6_1800-2400_large.jpeg",
            "komodo sensor snowboard");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (500,
            2,
            "/images/adysb00020_mul_frt4_1800-2400_large.jpeg",
            "komodo dive snowboard");

INSERT INTO products
            (price,
             product_type,
             image_url,
             NAME)
VALUES     (600,
            2,
            "/images/adysb00019_mul_frt4_1800-2400_large.jpeg",
            "komodo drift snowboard");

SELECT *
FROM   products; 

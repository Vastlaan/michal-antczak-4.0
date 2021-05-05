const knex = require("knex");
const { products, categories } = require("./index.js");

const db = knex({
    client: "pg",
    connection: process.env.DB_CONNECTION_STRING,
});

categories.forEach((category) => {
    db("categories")
        .insert({
            type: category.type,
            parent: category.parent,
            displayName: category.displayName,
            link: category.link,
            image: category.image,
        })
        .then((rows) => {
            console.log("Inserted: ", rows);
        })
        .catch((e) => console.error(e));
});

products.forEach((product) => {
    db("products")
        .insert({
            category: product.category,
            productGroup: product.productGroup,
            displayName: product.displayName,
            description: product.description,
            price: product.price,
            color: product.color,
            size: product.size,
            image: product.image,
            stock: product.stock,
            tax: product.tax,
            reviews: product.reviews,
            isPromoted: product.isPromoted,
            isNew: product.isNew,
            discount: product.discount,
        })
        .then((rows) => {
            console.log("Inserted: ", rows);
        })
        .catch((e) => console.error(e));
});

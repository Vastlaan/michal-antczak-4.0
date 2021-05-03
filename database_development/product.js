const { v4 } = require("uuid");

class Product {
    id;
    category;
    productGroup; // actual product's family includes all variations of colors and sizes
    displayName; // usually the same as group
    description;
    price;
    color; // hex value
    size;
    image;
    stock;
    tax;
    reviews;
    isPromoted;
    isNew;
    discount;

    constructor(
        category,
        group,
        displayName,
        description,
        price,
        color,
        image,
        size,
        stock,
        tax,
        isPromoted,
        isNew,
        discount
    ) {
        this.id = v4();
        this.category = category;
        this.productGroup = group;
        this.displayName = displayName;
        this.description = description;
        this.price = price;
        this.color = color;
        this.image = image;
        this.size = size;
        this.stock = stock;
        this.tax = tax;
        this.reviews = []; // when initialize product has no reviews
        this.isPromoted = isPromoted || false;
        this.isNew = isNew || false;
        this.discount = discount || null;
    }
}
module.exports = Product;

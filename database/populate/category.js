const { v4 } = require("uuid");

class Category {
    id;
    type;
    parent;
    displayName;
    link;
    image;

    constructor(type, displayName, link, parent, image) {
        this.id = v4();
        this.type = type;
        this.parent = parent || null;
        this.displayName = displayName;
        this.link = link;
        this.image = image || null;
    }
}

module.exports = Category;

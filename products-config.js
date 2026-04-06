const ProductDB = {
    products: {
        sandhibhadraGhrit: {
            name: "Sandhibhadra Ghrit",
            category: "Ayurvedic Oil",
            price: 750,
            description: "A traditional Ayurvedic formulation for joint health."
        },
        keshKalyaniTel: {
            name: "Kesh Kalyani Tel",
            category: "Hair Oil",
            price: 600,
            description: "Promotes hair growth and reduces hair fall."
        }
    },
    categories: [
        "Ayurvedic Oil",
        "Hair Oil"
    ],
    getProduct: function(productName) {
        return this.products[productName];
    },
    getAllProducts: function() {
        return Object.values(this.products);
    }
};

module.exports = ProductDB;
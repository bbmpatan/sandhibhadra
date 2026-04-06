const products = [
    {
        id: 1,
        name: "Product 1",
        category: "Category A",
        pricing: {
            basePrice: 100,
            discounts: {
                seasonal: 10,
                bulk: 5,
            },
        },
        images: [
            "url/to/image1.jpg",
            "url/to/image1_thumbnail.jpg",
        ],
        features: [
            "Feature 1",
            "Feature 2",
        ],
        benefits: [
            "Benefit 1",
            "Benefit 2",
        ],
    },
    {
        id: 2,
        name: "Product 2",
        category: "Category B",
        pricing: {
            basePrice: 200,
            discounts: {
                seasonal: 20,
                bulk: 15,
            },
        },
        images: [
            "url/to/image2.jpg", 
            "url/to/image2_thumbnail.jpg",
        ],
        features: [
            "Feature A",
            "Feature B",
        ],
        benefits: [
            "Benefit A",
            "Benefit B",
        ],
    },
    // Additional products can be added here
];

export default products;
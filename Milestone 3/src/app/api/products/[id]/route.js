let products = [
    {
        id: 1,
        img: "/img_01.png",
        title: "SAVEMORE",
        desc: "3Pcs/Set Beads flower necklace",
        price: 400,
        off: "25% OFF",
        rating: 4,
        sold: "1.0K sold",
        sign: "|"
    },
    {
        id: 2,
        img:"/img_002.png",
        title: "SAVEMORE",
        desc: "5 layers beaded bracelet for girls ",
        price: "400",
        off:"25% OFF",
        rating: 2,
        sold: "460 sold",
        sign: "|",
        
     },
     {
       id: 3,
       img:"/img_003.png",
       title: "SAVEMORE",
       desc: "metallic jhumka traditional Jhumka",
       price: "500",
       off: "25% OFF",
       rating: 3,
       sold: "150 sold",
       sign: "|",
      
     },
     {
       id: 4,
       img:"/img_04.png",
       title: "PACK OF 6",
       desc: "6Pcs New Fashionable Retro Emerald Moonlight Stone Ring Set",
       price: "320",
       off: "25% OFF",
       rating: 4,
       sold: "900 sold",
       sign: "|",
 
       
     },
     {
       id: 5,
       img:"/img_05.png",
       title: "GET 1 BUY 1 FREE",
       desc: "Big hair bow ribbon for girls and womens",
       price: "290",
       off: "25% OFF",
       rating: 5,
       sold: "95 sold",
       sign: "|",
 
       
     },
     {
       id: 6,
       img:"/img_08.png",
       title: "SAVEMORE",
       desc: "Aesthetic Shades Sunglasses",
       price: "900",
       off: "25% OFF",
       rating: 3,
       sold: "131 sold",
       sign: "|",
 
 
       
     },
     {
       id: 7,
       img:"/img_09.png",
       title: "ANY 3",
       desc: "Aesthetic Pastel mix Scrunchies,",
       price: "150",
       off: "30% OFF",
       rating: 4,
       sold: "640 sold",
       sign:"|",
 
       
     },
     {
       id: 8,
       img:"/img_10.png",
       title: "SAVEMORE",
       desc: "New Padded Headbands  Thick Velvet Hair Hoop",
       price: "384",
       off: "30% OFF",
       rating: 2,
       sold: "873 sold",
       sign: "|",
      
     },
    // More products...
];

// Handle GET request for a specific product by ID
export async function GET(request, { params }) {
    const { id } = params;
    const product = products.find(p => p.id === parseInt(id));

    if (product) {
        return new Response(JSON.stringify(product), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } else {
        return new Response(JSON.stringify({ message: 'Product not found' }), {
            status: 404
        });
    }
}

// Handle PUT request to update a specific product by ID
export async function PUT(request, { params }) {
    const { id } = params;
    const updatedProduct = await request.json();
    const index = products.findIndex(p => p.id === parseInt(id));

    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
        return new Response(JSON.stringify(products[index]), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } else {
        return new Response(JSON.stringify({ message: 'Product not found' }), {
            status: 404
        });
    }
}

// Handle DELETE request to remove a specific product by ID
export async function DELETE(request, { params }) {
    const { id } = params;
    products = products.filter(product => product.id !== parseInt(id));

    return new Response(JSON.stringify({ message: 'Product deleted' }), {
        status: 200
    });
}

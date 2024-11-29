const express = require('express');
const app = express();
const port = 2345;

app.set('view engine', 'ejs');
app.use(express.urlencoded());

let product = [
    {
        id: 1,
        product: "Watch",
        description: "A modern wristwatch featuring solar charging and Bluetooth capabilities",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG/800px-Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG",
        price: 500
    },

    {   
        id:2,

        product: "Laptop",
        image: "https://picsum.photos/200/300?random=1",
        "name": "UltraBook Pro",
        "description": "A sleek and powerful laptop with a high-resolution display and long battery life.",
        "price": 1299.99
    },
    {
        id:3,
        "product": "Smartphone",
        "image": "https://picsum.photos/200/300?random=2",
        name: "Galaxy One",
        "description": "A cutting-edge smartphone with an incredible camera and fast performance.",
        "price": 899.99
    },
    {
        id:4,
        "product": "Headphones",
        "image": "https://picsum.photos/200/300?random=3",
        "name": "NoiseCanceller 3000",
        "description": "Premium noise-cancelling headphones for an immersive audio experience.",
        "price": 299.99
    },
    {
        id:5,
        "product": "Smartwatch",
        "image": "https://picsum.photos/200/300?random=4",
        "name": "FitTracker Z",
        "description": "A versatile smartwatch with health tracking and notification features.",
        "price": 199.99
    }


]
app.get('/',(req,res)=>{
    res.render('index',{product:product});
})
app.post('/addproduct',(res,req)=>{
    const {id,product,image,name,description,price}=req.body;
    const newobj ={
        id:id,
        product:product,
        image:image,
        name:name,
        description:description,
        price:price
    }
    product.push(newobj);
    console.log('new product added');
    return res.redirect("/");
    
})

app.listen(port, (err) => {
    if (err) {
        console.log('server not start');

    }
    else {
        console.log(`server is start at http://localhost:${port}`);

    }
})
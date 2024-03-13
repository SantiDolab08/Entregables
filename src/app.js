import express from 'express';
import ProductManager from './prductManager.js';


const app = express();
const port = 8080;


app.get('/products/:id', (req, res) => {
    const paramId = req.params.id;
    
    if (!!paramId) { 
        console.log("1");
        const productWithId = ProductManager.getProductsById(paramId);
        return res.send(productWithId);
    }else {
        console.log("2");
        const products = ProductManager.getProducts();
        return res.send(products);
}})


app.listen(port, () => {
    console.log(`El servidor Express está escuchando en el puerto ${port}`);
  });
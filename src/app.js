import express from 'express';
import ProductManager from './prductManager.js';


const app = express();

app.use(express.urlencoded({extended: true}));

const port = 8080;

new productManager("./products.json");

app.listen(port, () => {
    console.log(`El servidor Express está escuchando en el puerto ${port}`);
  });
  
  app.get('/products/:id', async (req, res) => {

    try {

        const paramId = req.params.id;

       if (!!paramId) {

            console.log("1");

            const productWithId = ProductManager.getProductsById(paramId);

            return res.send(productWithId);

        }else {

            return res.send('Product not found');

        }

    } catch (error) {

        console.log('Error => ', error)

        res.status(404).send(error.message)

    }

})

app.get('/products', async (req, res) => { 
    try {
        const products = req.params



    } catch{

        console.log('Error => ', error)

        res.status(404).send(error.message)
    }
})

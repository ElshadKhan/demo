import express from 'express'
import {productsRouter} from "./routes/products-router";
import {addressesRouter} from "./routes/addresses-router";

// create express app
const app = express()

const port = process.env.PORT || 3003

app.use(express.json());

app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)

// start app
app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
})

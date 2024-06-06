import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://nb.scene7.com/is/image/NB/m860o13_nb_02_i?$pdpflexf2$&qlt=70&wid=440&hei=440'},
  { id: 1, name: 'Macbook', description: 'Apple macbook', price: '$5', image: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.small.jpg'},
]

const Products = () => {
  return (
    <main>
      <Grid container justifyContent='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
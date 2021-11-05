import React from 'react'; 
import Product from './Product/Product';

import Grid from '@material-ui/core/Grid';
const products = [
    {id:1, name:'Shoes', desc:'Runner' ,media:'https://internshala.com/cached_uploads/logo%2F5e2fde510b7041580195409.png', price:'$10'},
    {id:2, name:'Watch', desc:'Runner',media:'https://internshala.com/cached_uploads/logo%2F5e2fde510b7041580195409.png', price:'$10'},
    {id:3, name:'Band', desc:'Runner',media:'https://internshala.com/cached_uploads/logo%2F5e2fde510b7041580195409.png', price:'$10'},
    {id:4, name:'Blazer', desc:'Runner',media:'https://internshala.com/cached_uploads/logo%2F5e2fde510b7041580195409.png', price:'$10'},
]


const Products = () => {
   return (
<main>
    <Grid container justify="center" spacing={4}>
    {products.map((item) => (
        <Grid item key={item.id} xs={12} md= {4} lg={3} >
        <Product product={item} />
        
        </Grid>
    ))}
    </Grid>
    </main>


   );
   
   
    

}

export default Products; 
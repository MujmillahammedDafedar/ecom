import React from 'react'; 
import Grid from '@material-ui/core'; 

const products = [
    {id:1, name:'Shoes', desc:'Runner'},
    {id:2, name:'Watch', desc:'Runner'},
    {id:3, name:'Band', desc:'Runner'},
    {id:4, name:'Blazer', desc:'Runner'},
]


const Products = () => {
    <main>
    <Grid container justify="center" spacing={4}>
    {products.map(item) => (
        <Grid item key={item.id} xs={12} md= {4} lg={3} >
        <Product />
        
        </Grid>
    )}
    </Grid>
    </main>

}

export default Products; 
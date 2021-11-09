import React from 'react'; 
import Product from './Product/Product';

import Grid from '@material-ui/core/Grid';
import useStyles from './styles';


const Products = ({products}) => {
    const classes = useStyles();
   return (
<main className={classes.content}>
    <div className= {classes.Toolbar}>
    <Grid container justify="center" spacing={4}>
    {products.map((product) => (
        <Grid item key={product.id} xs={12} md= {4} lg={3} >
        <Product product={product} />
        </Grid>
    ))};
    </Grid>
    
    </div>
    </main>


   );
   
   
    

}

export default Products; 
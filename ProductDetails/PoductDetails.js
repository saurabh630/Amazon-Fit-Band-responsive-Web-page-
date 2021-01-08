import React from 'react';
import classes from'./ProductDetails.css';

const ProductDetails = (props) =>{
    return(
        <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>
          <div className={classes.ProductImage}>
            <img src="https://imgur.com/iOeUBV7.png" />
            <img src="https://imgur.com/iOeUBV7.png" />
            <img src="https://imgur.com/iOeUBV7.png" />
            <img src="https://imgur.com/iOeUBV7.png" />        
            
          </div>

          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            <button className={classes.FeatureItem}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>

          <button className={classes.PrimaryButton}>Buy Now</button>
    </div>
    );
}

export default ProductDetails;

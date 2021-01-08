import classes from './App.css';
import React, {Component} from 'react';
import ProductPreview from './ProductPreview';
import ProductData from './ProductData';
import TopBar from './TopBar';

class App extends Component{
  state = {
    ProductData: ProductData
  } 
  
  render(){
    return(
      <div className="App">
           <TopBar />
            
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
                <ProductPreview />
          </div>  
    
          <div className={classes.ProductData}>
              <ProductData data = {this.state.ProductData}  />
          </div>
        </div>
      </div>      
      );
  }

  
}

export default App;

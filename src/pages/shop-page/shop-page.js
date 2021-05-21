import React from 'react';
import SHOP_DATA from './shop-data';
import Collection_preview from './../../components/collectionpreview/collection_preview';
class Shop extends React.Component{
    constructor(){
        super();
        this.state={
            collection:SHOP_DATA
        }
    }
    render(){
        return(
            <div>
               {this.state.collection.map(obj=><Collection_preview object={obj}/>)}
            </div>
        );
    }
}
export default Shop;
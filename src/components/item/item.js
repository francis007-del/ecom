import React from 'react';
import './item.scss'
const Item=({item})=>{
    return(
        <div className='item'>
            <div class='image' style={{backgroundImage:`url(${item.imageUrl})`}}>
            </div>
            <div className='footer'>
                <span className='name'>{item.name}</span>
                <span className='price'>{`$${item.price}`}</span>
            </div>
        </div>
    );
}
export default Item;
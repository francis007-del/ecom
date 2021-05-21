import React from 'react';
import Item from './../item/item';
import './collection_preview.scss';
const Collection_preview=({object})=>{
return(
    <div className='collection-preview'>
        <span className='title'>{object.title}</span>
        <div className='preview'>
           {object.items.map(item=><Item item={item}/>)}
        </div>
    </div>
);
}
export default Collection_preview;
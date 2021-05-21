import React from 'react';
import {BrowserRouter, withRouter} from 'react-router-dom';
import './section.scss';
const Section=({title,size,imageurl,link,history,match})=>{
return(
    <BrowserRouter>
    <div
     className={`section ${size}`} 
     style={{backgroundImage:`url(${imageurl})`,backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className='content'>
            <h1 className='title'>{`${title}`}</h1>
            <h2 className='subtitle'>SHOP NOW</h2>
        </div>
    </div>
    </BrowserRouter>
);
}
export default withRouter(Section);
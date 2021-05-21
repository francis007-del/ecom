import React from 'react';
import './menu.scss';
import Section from './../section/section';
class Menu extends React.Component{
    constructor(){
        super();
        this.state={
       sections:[
        {
          title:'Hats',
          imageurl:'https://www.hutstuebele.com/pic/Julia-straw-hat-with-wide-brim-by-SEEBERGER.44539a.jpg',
          link:'hats'
        },
        {
            title:'Jeans',
            imageurl:'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/6629405/2019/10/3/8db1f4ff-03e3-453a-aac6-e532d07541511570087692408-HERENOW-Men-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable--1.jpg',
            link:'jeans'
        },
        {
            title:'Jackets',
            imageurl:'https://cdn.shopify.com/s/files/1/0752/6435/products/5_4899dbf3-45f0-4d8f-9553-ec238c780904.jpg?v=1607883046',
            link:'jackets'
        },
        {
            title:'Mens',
            imageurl:'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/best-multivitamins-for-men-1296x728-feature.jpg?w=1155&h=1528',
            size:'large',
            link:'mens'
        },
        {
            title:'Womens',
            imageurl:'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=2133&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2017%2F02%2Ftaylor-hill4-2000.jpg',
            size:'large',
            link:'womens'
        }
       ]
        }
    }
render(){
    return(
        <div className='menu'>
        {this.state.sections.map(({title,size,imageurl,link})=>{return <Section title={title.toUpperCase()} size={size} imageurl={imageurl} link={link}/>})}
        </div>
    );
}
}
export default Menu;
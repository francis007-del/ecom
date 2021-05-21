import React,{Component} from 'react';
import {Switch,BrowserRouter,Redirect,Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';
import Shop from './pages/shop-page/shop-page';
import Header from './components/header/header';
function App() {
  return (
  
    
    <>
    <Header />
       <Switch>
         <Route path="/shop" component={Shop}/>
         <Route path="/" component={Homepage}/>
      
       </Switch>
       </>
     
  
  );
}

export default App;

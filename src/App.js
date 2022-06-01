import React from 'react';
import './App.css';
import BsNavBar from './components/BsNavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

    return (      
      
      <>
           <BsNavBar />
           <ItemListContainer greeting = {'Hola'}/>
      </>

    );
    
}

export default App;

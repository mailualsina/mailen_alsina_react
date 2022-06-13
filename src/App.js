import React from 'react';
import './App.css';
import BsNavBar from './components/BsNavBar';
import ItemListContainer from './containers/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';



function App() {

  const onAdd = (count) => {

    alert(count);

  }

    return (      
      
      <>
           <BsNavBar />
           <ItemListContainer />
           <ItemCount inicial={1} max={10} onAdd={onAdd}/>
      </> 

    );
    
}

export default App;

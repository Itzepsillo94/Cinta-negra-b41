import React from 'react';
import ProductsList from './components/ProductsList';
import NewProduct from './components/NewProduct';

function App() {
  return (
    <React.Fragment>
      <h1>Hola Mundo</h1>
      <ProductsList />
      <NewProduct/>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import ProductsList from './components/ProductsList';
import NewProductForm from './components/NewProductForm';

function App() {
  return (
    <React.Fragment>
      <h1>Hola Mundo</h1>
      <ProductsList />
      <NewProductForm/>
    </React.Fragment>
  );
}

export default App;

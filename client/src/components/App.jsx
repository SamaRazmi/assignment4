import React from 'react';
import Login from './Login/Login';
import Conversion from './Conversion/Conversion';
import AddCurrency from './Currency/AddCurrency';
import UpdateCurrency from './Currency/UpdateCurrency';
import DeleteCurrency from './Currency/DeleteCurrency';

const App = () => {
  return (
    <div className="app-container">
      <h1>Welcome to My App</h1>
      <Login /> {/* Render the Login component */}
      <Conversion />
      <AddCurrency />
      <UpdateCurrency />
      <DeleteCurrency />
    </div>
  );
};

export default App;

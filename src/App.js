import React from 'react';
import './App.css';
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import AddCuenta from './components/Cuentas/add/AddCuenta';
const client = new GraphQLClient({
  //url:"http://localhost:4001/graphql",  
  url:"https://tabay-ca-api.herokuapp.com/graphql"
  //FormData: form_node
})

function App() {
  
  return (
    <ClientContext.Provider value={client}>    
    <div className="container-fluid p-0">
      
        <h2 >hola</h2>
      <AddCuenta/>
      
    </div>
    </ClientContext.Provider>    
  );
}

export default App;

import React from 'react';
import './App.css';
import  ApolloClient from 'apollo-boost';
import { ApolloProvider,} from '@apollo/react-hooks';
import MyApollo from './MyApollo';


const client = new ApolloClient({
  uri: "http://localhost:4001/graphql"
});

function App() {
  
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <h2 >hola</h2>
        <MyApollo/>
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;

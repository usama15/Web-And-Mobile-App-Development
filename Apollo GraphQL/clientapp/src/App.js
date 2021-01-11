import logo from './logo.svg';
import './App.css';
import Accounts from './components/accounts'
import client from './config/gql';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <Accounts/>
    </ApolloProvider>
  );
}

export default App;

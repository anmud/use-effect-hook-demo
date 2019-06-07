import React from 'react';
import './App.css';
import UsersList from './components/UsersList'

class App extends React.Component {
  render() {
    return (
      <div className="App">
      
        <h1>useEffect Hook</h1>
        <UsersList />
      </div>
    );
  }
}

export default App;

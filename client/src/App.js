//controls the routes
import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/pages/homepage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import NewItemPage from './components/pages/NewItemPage';
import { Route } from 'react-router-dom';

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = { users: []}
//   }
//
//   componentDidMount(){
//     fetch('/users')
//       .then(res => res.json())
//       .then(users => this.setState({users}));
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <h1>Users</h1>
//         <ul>{this.state.users.map(user =>
//           <li key={user.id}>{user.name}</li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/signup" exact component={SignUpPage} />
    <Route path="/newitem" exact component={NewItemPage} />
  </div>
)

export default App;

//controls the routes
import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/pages/homepage';
import SignInPage from './components/forms/SignIn';
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
    <Route path="/signin" exact component={SignInPage} />
  </div>
)

export default App;

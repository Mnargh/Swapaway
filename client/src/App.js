//controls the routes
import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/pages/homepage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import NewItemPage from './components/pages/NewItemPage';
import ItemPage from './components/pages/ItemPage';
import Items from './components/pages/Items';
import MyItemsPage from './components/pages/MyItemsPage'
import { Switch, Route } from 'react-router-dom';
import ProfilePage from './components/pages/profile';

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
  <div className="App">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="/newitem" exact component={NewItemPage} />
      <Route path="/items" exact component={Items} />
      <Route path="/items/myitems" exact component={MyItemsPage} />
      <Route path="/items/:_id" exact component={ItemPage} />
      <Route path="/profile" exact component={ProfilePage} />
    </Switch>

  </div>
)

export default App;

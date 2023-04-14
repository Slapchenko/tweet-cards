// import logo from './logo.svg';
// import './App.css';
import { UserCard } from "./components";

import users from "./data/users.json"

const App = () => {
  return (
    <div className="App">
      <p>test</p>
      <UserCard users={users}/>
    </div>
  );
};

export default App;

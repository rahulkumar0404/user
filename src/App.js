import React, {useState} from "react";
import AddUser from "./components/Users/AddUsers";
import UsersList from "./components/Users/UserList";


function App() {
  const [usersList, setUserList] = useState([])
  const addUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name: userName, age: userAge, id: Math.random().toString()}]
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser={ addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

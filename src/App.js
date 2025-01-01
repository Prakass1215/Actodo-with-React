import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      username: "prakash",
      password: "123",
    },
    {
      username: "sivanesh",
      password: "456",
    },
  ]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login users={users} setUsers={setUsers} />}
          />
          <Route
            path="/signup"
            element={<Signup users={users} setUsers={setUsers} />}
          />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

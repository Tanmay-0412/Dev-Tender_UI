import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Body from "./Body";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>} >
          {/* Children routes  */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter> 
    </> 
  );
}

export default App;

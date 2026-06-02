import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Body from "./Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utlis/appStore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
    <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>} >
          {/* Children routes  */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>.
      </Routes>
    </BrowserRouter> 
    </Provider>
    </> 
  );
}

export default App;

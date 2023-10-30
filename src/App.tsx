import React from "react";
import "./App.css";
import Directory from "./components/directory/directory.component";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home/home.component";
import SignIn from "./routes/home/sign-in/sign-in.component";
import Navigation from "./routes/home/navigation/navigation.component";
const Shop = () => {
  return <h1>I am the shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;

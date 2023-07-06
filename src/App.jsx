import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link, Outlet } from "react-router-dom";

import './App.css';
import UseEffectLearn from "./components/UseEffectLearn";
import UseStateLearn from "./components/UseStateLearn";
import UseMemoLearn from './components/UseMemoLearn';
import UseCallbackLearn from './components/UseCallbackLearn';
import UseReducerLearn from './components/UserReducerLearn';
import UseReducerLearn2 from './components/UseReducerLearn2';
import UseRefLearn from './components/UseRefLearn';

const Home = lazy(() => wait(1000).then(() => import("./components/Home")))
const Store = lazy(() => wait(1000).then(() => import("./components/Store")))
const About = lazy(() => 
  import("./components/About")
    .then(module => { 
        return { default: module.About }
      }))

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/usestore" element={<UseEffectLearn />}></Route>
        <Route path="/useeffect" element={<UseStateLearn />}></Route>
        <Route path="/usememo" element={<UseMemoLearn />}></Route>
        <Route path="/usecallback" element={<UseCallbackLearn />}></Route>
        <Route path="/usereducer1" element={<UseReducerLearn />}></Route>
        <Route path="/usereducer2" element={<UseReducerLearn2 />}></Route>
        <Route path="/useref" element={<UseRefLearn />}></Route>
      </Route>
    </Routes>
  )
};

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
        <Link to="/useeffect">Use Effect</Link>
        <Link to="/usestore">Use Store</Link>
        <Link to="/usememo">Use Memo</Link>
        <Link to="/usecallback">Use Callback</Link>
        <Link to="/usereducer1">Use Reducer-1</Link>
        <Link to="/usereducer2">Use Reducer-2</Link>
        <Link to="/useref">Use Ref</Link>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  )
}

function wait(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

export default App;
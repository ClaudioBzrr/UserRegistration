import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { Edit } from './pages/Edit';
import { Home } from './pages/Home';
import { List } from './pages/List';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import './styles/globall.css'


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/list" exact component={List}/>
          <Route path="/edit" exact component={Edit}/>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

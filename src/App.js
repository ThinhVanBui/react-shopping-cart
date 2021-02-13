// feature 1
import React from 'react';
import store from "./store";
import HomeScreen from "./screens/HomeScreen"
import AdminScreen from "./screens/AdminScreen"
import { Provider } from "react-redux";
import Modal from "react-modal";
import { BrowserRouter, Route, Link } from "react-router-dom"

class App extends React.Component {
  componentDidMount() {
    Modal.setAppElement("main")
  }
render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">React Shopping Cart</Link>
              <Link to="/admin" className="admin">Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen}/>
              <Route path="/" component={HomeScreen} exact/>
            </main>
            <footer>
              All right is reserved.
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    ); 
  }
}

export default App;

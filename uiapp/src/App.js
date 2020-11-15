import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/landing";
import Navbar from "./components/layout/navbar";
import MyCart from "./components/cart/myCart";
import Checkout from "./components/checkout/step1";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black", color: "white" }}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/my-cart" component={MyCart} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

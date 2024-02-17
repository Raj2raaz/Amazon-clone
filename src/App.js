// RFCE for basic syntax

import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./stateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51OkPkWSJLkssVyf9aVLHAbVSx2BxliV3bpOhfNaZUV9yuCz3FGJFu4oD1mQooVeaZzGv9LCBHRE0gwcUsHtJXFVC00Tq57vVOf"
);

const HomeComponents = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};
const CheckoutComponents = () => {
  return (
    <>
      <Header />
      <Checkout />
    </>
  );
};

const LoginComponents = () => {
  return (
    <>
      <Login />
    </>
  );
};
const PaymentComponents = () => {
  return (
    <>
      <Header />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </>
  );
};
const OrdersComponents = () => {
  return (
    <>
      <Header />
      <Orders/>
    </>
  );
};

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //  Will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);

      if (authUser) {
        //  The user is just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //  The user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeComponents />} />
          <Route path="/checkout" element={<CheckoutComponents />} />
          <Route path="/login" element={<LoginComponents />} />
          <Route path="/payment" element={<PaymentComponents />} />
          <Route path="/orders" element={<OrdersComponents />} />
          {/* <Route path="/orders">
            <Orders/>
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

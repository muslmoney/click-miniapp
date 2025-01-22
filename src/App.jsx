import React, { Fragment, useEffect } from "react";
import "./App.css";
import Header from "./layout/Header/Header.jsx";
import Footer from "./layout/Footer/Footer.jsx";
import "/public/fonts/fonts.css";
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useLocation, useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
const { pathname }     = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/home");
    }
  }, [pathname, navigate]);

  return (
      <Fragment>
        <header>
          <Header />
        </header>



        <main>
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </Fragment>
  );
};



export default App;
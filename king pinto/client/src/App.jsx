// import { Routes, Route } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Gallery from "./pages/Gallery";
import Mural from "./pages/Mural";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV === "development") {
  // Adds messages only in a development environment
  loadDevMessages();
  loadErrorMessages();
}
// import { useStoreContext } from "./utils/store";

import { QUERY_AUTHENTICATE } from "../src/utils/queries";

function App() {
  // const [state, dispatch] = useStoreContext();

  const { loading, error, data: userData } = useQuery(QUERY_AUTHENTICATE);

  useEffect(() => {
    if (userData) {
      dispatch({
        type: UPDATE_USER,
        user: userData.authenticate,
      });
    }
  }, [userData]);

  // add loading later
  return (
    //   <h3 className="d-flex justify-content-center align-items-center vh-100">
    //     Loading...
    //   </h3>
    // ) : (
    <>
      <Header />
      <main>
        <Landing />
        <Mural />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;

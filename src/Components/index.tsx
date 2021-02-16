import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { actions } from "@Core/App/redux";
import Header from "@Components/Header";
import Anime from "@Components/Anime";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.initApp());
  }, []);

  return (
    <div id="app">
      <Header />
      <Anime />
    </div>
  );
}

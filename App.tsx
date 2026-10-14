import * as React from "react";
import { Routes, Route } from "react-router-dom";

function Home() {
  return React.createElement("div", null, "Home");
}

export default function App() {
  return React.createElement(
    Routes,
    null,
    React.createElement(Route, {
      path: "/",
      element: React.createElement(Home),
    })
  );
}
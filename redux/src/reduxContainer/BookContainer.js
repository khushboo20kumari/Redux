// BookContainer.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyBookAction from "./BookShop";

function BookContainer() {
  const numOfBooks = useSelector((state) => state.numberofbook);
  const dispatch = useDispatch();

  return (
    <>
      <p>container {numOfBooks}</p>
      <button onClick={() => dispatch(buyBookAction())}>Click me</button>
    </>
  );
}

export default BookContainer;

import React, { useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Button } from "react-bootstrap";

import "./App.css";

//use state is not the only thing to manage state. we also use useReducer which also allows to manage state and render component

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count };

    case "decrement":
      return { count: state.count };

    default:
      return state;
  }
}

const initialState = {
  count: 0,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [score, setScore] = useState(0);

  // const onIncrement = () => {
  //  setScore(score + 1);
  // };

  // const onDecrement = () => {
  // setScore(score - 1);
  // };
  return (
    <>
      <Card>
        <Card.Header>Counter</Card.Header>
        <Card.Body>
          <Button
            variant="success"
            onClick={() => {
              dispatch({ type: "increment" });
            }}
          >
            Increment
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              dispatch({ type: "decrement" });
            }}
          >
            Decrement
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default App;

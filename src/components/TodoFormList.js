import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/Reducer";

import TodoForm from "./TodoForm";
import CardMap from "./CardMap";

const TodoFormList = () => {
  const [state, dispatch, bMap] = useReducer(reducer, initialState);
  
  const toggleCompleted = () => {
    dispatch ({
        type: "TOGGLE_EDIT",
        payload: bMap.id
    });
};
  const clearCompletedTodo = () => {
    dispatch ({
        type: "DONE_TOGGLE",
        payload: bMap.id
    });
}
  return (
    <div>
      <TodoForm dispatch={dispatch} />
      <div className="container">
        {state.map(bMap => (
          <CardMap key={bMap.id} bMap={bMap} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};
export default TodoFormList;
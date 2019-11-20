import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/Reducer';

import TodoFormList from './TodoFormList';

const Todo = () => {

return (
    <div>
        <TodoFormList />
    </div>
)
}
export default Todo; 
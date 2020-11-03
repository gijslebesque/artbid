import React from 'react';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

export default function Todos() {
  useFirebaseConnect(['todos', 'hi']);

  const firebase = useFirebase();

  function addSampleTodo() {
    const sampleTodo = { text: 'Sample', done: false };
    return firebase.push('hi', sampleTodo);
  }

  const todos = useSelector((state) => state.firebase.ordered.hi);
  console.log(todos);
  return (
    <div>
      <h1>New Sample Todo</h1>
      <button onClick={addSampleTodo}>Add</button>
    </div>
  );
}

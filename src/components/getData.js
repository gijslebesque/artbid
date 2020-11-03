import React from 'react';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

export default function Todos() {
  useFirebaseConnect(['todos', 'hi', 'users']);

  const firebase = useFirebase();

  function addSampleTodo() {
    const sampleTodo = { displayName: 'testy', password: 'cat' };
    return firebase.push('users', sampleTodo);
  }

  const todos = useSelector((state) => state.firebase.ordered.todos);
  const p = useSelector((state) => state.firebase.profile);
  console.log(p);
  return (
    <div>
      <h1>New Sample Todo</h1>
      <button onClick={addSampleTodo}>Add</button>
    </div>
  );
}

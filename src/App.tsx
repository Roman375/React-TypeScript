import React from 'react';
import { Navbar } from './copmonents/Navbar';
import { TodoForm } from './copmonents/TodoForm';
import { TodosList } from './copmonents/TodosList';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <TodoForm />
        <TodosList />
      </div>
    </>
  );
}

export default App;

import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'

class App extends Component {
  render() {
    return (
      <div>
        <form>
        <p>  
          <label>add todo</label>
            <input type="text" />
            </p>
          <input type="text" />   
        </form>
      </div>
    );
  }
}

export default App;

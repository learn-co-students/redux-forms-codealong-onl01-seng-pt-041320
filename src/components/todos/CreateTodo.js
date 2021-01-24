
import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class CreateTodo extends Component {

  // constructor() {
  //   super(); 
  //   this.state

      state = {
        text: ''
      };
    
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
 
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo({ type: 'ADD_TODO', payload: this.state });
  };
 
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <label>Add todo</label>
            <input type="text" onChange={e => this.handleChange(e)} value={this.state.text}/>
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
  
const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
import React from 'react';
require('./form.css');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: 0
    };

    this.submit = props.submit;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
    console.log(event.target.value);
  }

  handleValueChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.submit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input name="name" onChange={this.handleNameChange} />
        <label>Value: </label>
        <input name="value" onChange={this.handleValueChange} />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;

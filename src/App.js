import React from 'react';
import Envelopes from './components/envelopes/envelopes';
import Form from './components/form/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        {
          name: "Car",
          value: 25
        },
        {
          name: "Mortgage",
          value: 15
        },
        {
          name: "Candy",
          value: 40
        }
      ]
    }

    this.addToList = this.addToList.bind(this);
  }

  addToList( data ) {
    console.log(data);
    if ( data.name && data.value ) {
      let newValuesState = this.state.values;
      newValuesState.push({
        name: data.name,
        value: data.value
      });

      this.setState({value: newValuesState});
    }
  }

  render() {
    return (
      <div>
        <Envelopes values={this.state.values} />
        <Form submit={this.addToList} />
      </div>
    );
  }
}

export default App;

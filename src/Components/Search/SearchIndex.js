import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      filteredThings: []
    }
    this.searchFunction = this.searchFunction.bind(this)
  }

  searchFunction(value) {
    let result = this.state.things.filter(thing => thing.includes(value.toLowerCase()))
    this.setState({ filteredThings: result })
  }

  displayResults(newThing, id) {
    return <p key={id}>{newThing}</p>
  }

  render() {
    return (
      <div>
        <Input type="text" placeholder='Search Here' onChange={e => this.searchFunction(e.target.value)} />
        <h3>Results:</h3>
        {this.state.filteredThings && this.state.filteredThings.length > 0
          ? this.state.filteredThings.map(this.displayResults)
          : this.state.things.map(this.displayResults)
        }
      </div>
    )
  }
}

export default SearchIndex;
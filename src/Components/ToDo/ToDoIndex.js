import React, { Component } from 'react'

class ToDoIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: "",
            items: []
        }
        this.addItem = this.addItem.bind(this)
        this.completedItem = this.completedItem.bind(this)
        this.displayItem = this.displayItem.bind(this)
    }

    addItem() {
        if (this.state.task !== ""){
            this.setState({
                task: "",
                items: [...this.state.items, this.state.task]
            })
        }
    }

    displayItem(item, id) {
        return (
        <>
        <li key={id}>{item}</li>
        <button onClick={() => this.completedItem(id)}>Completed</button>
        </>
        )
    }

    // this.state.items.map((item, id) => <p>{item}</p>)

    completedItem(id) {
        const completed = this.state.items
        completed.splice(id, 1)
        this.setState({items: completed})
    }


    render() {
        return (
            <div>
                <input type="text" placeholder="Add a Task Here" onChange={(e) => this.setState({ task: e.target.value })}></input>
                <button onClick={this.addItem}>Add</button>
                <br/>
                <ol>{this.state.items.map(this.displayItem)}</ol>
            </div>
        )
    }
}

export default ToDoIndex
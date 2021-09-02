import React, { Component } from 'react'

class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = { loaded: false, result: '' }
        this.fetchDog = this.fetchDog.bind(this)
    }

    async fetchDog() {
        let res = await fetch("https://dog.ceo/api/breeds/image/random")
        let json = await res.json()

        this.setState({ loaded: true, result: json.message })
        console.log(json);
    }


    render() {
        return (
            <div>
                <button onClick={this.fetchDog}>Fetch</button>
                {!this.state.loaded
                    ? "Loading"
                    : <img src={this.state.result}/>}
            </div>
        )
    }
}

export default DogIndex
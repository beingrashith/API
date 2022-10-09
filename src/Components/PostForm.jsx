import React, { Component } from 'react'
import axios from 'axios'

export default class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            website: " ",
            name: " ",
            username: " ",
            email: " "
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users", this.state)
            .then(res => {
                this.setState({ posts: res.data })
                console.log(res.data)
            })
    }


    render() {

        const { website, name, email, username } = this.state
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label>User name:</label>
                        <input
                            type='text'
                            name='username'
                            value={username}
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label>Website:</label>
                        <input
                            type='website'
                            name='website'
                            value={website}
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div><button type='submit'>Submit</button></div>
                </form>

            </div>
        )
    }
}

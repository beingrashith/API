import React, { Component } from 'react'

export default class AddContacts extends Component {
    state = {
        name: "",
        email: "",
        tel: ""
    }

    add = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.addContactHandler(this.state)
        console.log(this.state)
        this.setState({ name: "", email: "", tel: "" })

    }

    render() {
        return (
            <div>
                <h4>Add details</h4>
                <form onSubmit={this.add}>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" id="name" name="name"
                        value={this.state.name}
                        onChange={(e) => { this.setState({ name: e.target.value }) }}
                        style={{ width: "200px" }}></input><br />

                    <label htmlFor='email'>Email:</label>
                    <input type="email" id="email" name="email"
                        value={this.state.email}
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                        style={{ width: "200px" }}></input><br />

                    <label htmlFor='tel'>Mobile:</label>
                    <input type="tel" id="tel" name="tel"
                        value={this.state.tel}
                        onChange={(e) => { this.setState({ tel: e.target.value }) }}
                        style={{ width: "200px" }}></input><br />

                    <button type="submit" >Add</button><hr />

                </form>

            </div>
        )
    }
}

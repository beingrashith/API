import React, { Component } from 'react'
import axios from 'axios'
import '../Components/PostList.css'
import logo from '../Components/logo192.png'

export default class PostList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                this.setState({ posts: res.data })
            })

    }
    render() {

        const { posts } = this.state
        return (
            <div>
                <h2>datas</h2>

                <div className='container'>
                    {
                        posts.map(post =>
                            <div className='contents' key={post.id} >
                                <img src={logo} alt='banner' className='image' /><br />
                                <span >Name : {post.name}</span><br />
                                <span >User Name : {post.username}</span><br />
                                <span >Website : {post.website}</span><br />
                                <span >Email: {post.email}</span>

                            </div>
                        )
                    }
                </div>

            </div >

        )
    }
}

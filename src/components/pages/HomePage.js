import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render () {
        return (
            <>
                <h1>Home</h1>
                <Link to='/category'>
                    <button>Select a category</button>
                </Link>
            </>
        )
    }
}

export default Home;
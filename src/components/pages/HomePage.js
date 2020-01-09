import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render () {
        const { entries, deleteEntry } = this.props;

        const entriesList = entries.map((entry, index) => {
            return  (
                <li key={`${entry.category}-${entry.entry}`}>
                    [{entry.category}] {entry.entry} <button id={index} onClick={deleteEntry(index)}>Delete</button>
                </li>
            )
        })

        return (
            <>
                <h1>Home</h1>
                <Link to='/category'>
                    <button>Select a category</button>
                </Link>

                <h2>List of entries</h2>
                <ul>
                    {entriesList}
                </ul>
            </>
        )
    }
}

export default Home;
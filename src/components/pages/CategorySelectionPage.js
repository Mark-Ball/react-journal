import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategorySelection extends Component {
    
    render () {
        const { categories } = this.props;

        const listOfCategories = categories.map((category, index) => {
            return (
                <li key={category}>
                    <Link to={`/entry/new/${index}`}>{category}</Link>
                </li>
            )
        })

        return (
            <>
                <h1>What do you want to write about?</h1>
                <ul>
                    {listOfCategories}
                </ul>
            </>
        )
    }

    static defaultProps = {
            categories: []
        }
}

export default CategorySelection;
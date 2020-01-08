import React, { Component } from 'react';
import Home from './pages/HomePage';
import CategorySelection from './pages/CategorySelectionPage';
import NewEntry from './pages/NewEntryPage';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
    state = { 
        categories: ['personal', 'travel', 'dating'],
        entries: []
    };
    
    onEntryFormSubmit = (entry) => {
        this.setState((state, props) => {
            return { entries: [...state.entries, entry] };
        });
    }

    render () {
        const { categories } = this.state;

        return (
            <>
                <BrowserRouter>
                    <>
                        <Link to='/'>Home</Link>
                        <Link to='/category'>Category Selection</Link>
                        <Link to='/entry'>New Entry</Link>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/category' render={(props) => {
                            return <CategorySelection {...props} categories={categories} />
                        }} />
                        <Route exact path='/entry/new/:id' render={(props) => {
                            return <NewEntry 
                                {...props} 
                                categories={categories}
                                onEntryFormSubmit={this.onEntryFormSubmit}
                            />
                        }} />
                    </>
                </BrowserRouter>
            </>
        )
    }
}

export default App;
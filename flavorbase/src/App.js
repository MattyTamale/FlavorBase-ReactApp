import React, { Component } from 'react';
import Categories from './components/Categories.js';
import Form from './components/Form.js';
import Favorites from './components/Favorites.js';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentBeers: [],
            currentCoffees: [],
            currentFoods: [],
            currentWines: []
        }
        this.fetchBeers = this.fetchBeers.bind(this);
        this.fetchFoods = this.fetchFoods.bind(this);
        this.fetchCoffees = this.fetchCoffees.bind(this);
        this.fetchWines = this.fetchWines.bind(this);
    }

    fetchBeers() {
        fetch('http://localhost:3000/beers')
            .then(data => data.json())
        .then(jData => {
            this.setState({
                currentBeers: jData
            })
        })
    }

    fetchCoffees() {
        fetch('http://localhost:3000/coffees')
            .then(data => data.json())
        .then(jData => {
            this.setState({
                currentCoffees: jData
            })
        })
    }

    fetchFoods() {
        fetch('http://localhost:3000/foods')
            .then(data => data.json())
        .then(jData => {
            this.setState({
                currentFoods: jData
            })
        })
    }

    fetchWines() {
        fetch('http://localhost:3000/wines')
            .then(data => data.json())
        .then(jData => {
            this.setState({
                currentWines: jData
            })
        })
    }

    componentDidMount(){
        this.fetchBeers()
        this.fetchFoods()
        this.fetchCoffees()
        this.fetchWines()
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
                <h1> FlavorBase </h1>
            </header>
            <Form
                currentBeers={this.state.currentBeers}
                currentFoods{this.state.currentFoods}
                currentCoffees={this.state.currentCoffees}
                currentWines={this.state.currentWines}
            />
            <Favorites
                currentBeers={this.state.currentBeers}
                currentFoods={this.state.currentFoods}
                currentCoffees={this.state.currentCoffees}
                currentWines={this.state.currentWines}
            />
            <Categories
                currentBeers={this.state.currentBeers}
                currentFoods={this.state.currentFoods}
                currentCoffees={this.state.currentCoffees}
                currentWines={this.state.currentWines}
            />
          </div>
        );
    }
}

export default App;

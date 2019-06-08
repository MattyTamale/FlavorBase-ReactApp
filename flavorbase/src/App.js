import React, { Component } from 'react';

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
            <div>
                <h1>Beers: </h1>
                {this.state.currentBeers
                    ? this.state.currentBeers.map((beer, index) => {
                        return <ul key={index}>
                            <li>{beer.date}</li>
                            <li>{beer.brand}</li>
                            <li>{beer.origin}</li>
                            <li>{beer.location}</li>
                            <li>{beer.rating}</li>
                            <li>{beer.favorite}</li>
                            <li>{beer.flavors}</li>
                        </ul>
                    })
                    : 'test'}
            </div>
            <div>
                <h1>Coffees: </h1>
                {this.state.currentCoffees
                    ? this.state.currentCoffees.map((coffee, index) => {
                        return <ul key={index}>
                            <li>{coffee.date}</li>
                            <li>{coffee.brand}</li>
                            <li>{coffee.origin}</li>
                            <li>{coffee.location}</li>
                            <li>{coffee.rating}</li>
                            <li>{coffee.favorite}</li>
                            <li>{coffee.flavors}</li>
                        </ul>
                    })
                    : 'test'}
            </div>
            <div>
                <h1>Foods: </h1>
                {this.state.currentFoods
                    ? this.state.currentFoods.map((food, index) => {
                        return <ul key={index}>
                            <li>{food.date}</li>
                            <li>{food.brand}</li>
                            <li>{food.origin}</li>
                            <li>{food.location}</li>
                            <li>{food.rating}</li>
                            <li>{food.favorite}</li>
                            <li>{food.flavors}</li>
                        </ul>
                    })
                    : 'test'}
            </div>
            <div>
                <h1>Wines: </h1>
                {this.state.currentWines
                    ? this.state.currentWines.map((wine, index) => {
                        return <ul key={index}>
                            <li>{wine.date}</li>
                            <li>{wine.brand}</li>
                            <li>{wine.origin}</li>
                            <li>{wine.location}</li>
                            <li>{wine.rating}</li>
                            <li>{wine.favorite}</li>
                            <li>{wine.flavors}</li>
                        </ul>
                    })
                    : 'test'}
            </div>
          </div>
        );
    }
}

export default App;

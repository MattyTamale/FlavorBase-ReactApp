import React, { Component } from 'react';
import Categories from './components/Categories.js';
import Form from './components/Form.js';
import Favorites from './components/Favorites.js';
import './App.css';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentBeers: [],
            currentCoffees: [],
            currentFoods: [],
            currentWines: [],
            favorites: [],
            date: '',
            brand: '',
            origin: '',
            location: '',
            rating: 0,
            favorite: false,
            flavors: '',
            currentArray: null,
            showForm: false
        }
        this.fetchBeers = this.fetchBeers.bind(this);
        this.fetchFoods = this.fetchFoods.bind(this);
        this.fetchCoffees = this.fetchCoffees.bind(this);
        this.fetchWines = this.fetchWines.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.updateArray = this.updateArray.bind(this);
    }

    handleCreate(formState){
        const newEntry = {
           date: formState.date,
           brand: formState.brand,
           origin: formState.origin,
           location: formState.location,
           rating: formState.rating,
           favorite: formState.favorite,
           flavors: formState.flavors
           }
         console.log(this.state.currentArray);
         this.setState({
             currentArray: formState.currentArray
         })
         // let prevArray = prevArray.push(newEntry)
         this.updateArray(newEntry);
    }

    updateArray(newEntry){
        this.setState(prevArray => ({
            currentArray: prevArray.currentArray.push(newEntry)
        }))
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
                currentFoods={this.state.currentFoods}
                currentCoffees={this.state.currentCoffees}
                currentWines={this.state.currentWines}
                handleCreate={this.handleCreate}
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

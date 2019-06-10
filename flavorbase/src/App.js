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
            favArray: [],
            randArray: null,
            date: '',
            brand: '',
            origin: '',
            location: '',
            rating: 0,
            // favorite: false,
            flavors: '',
            currentArray: null,
            showForm: false,
            faves: 0
        }
        this.fetchBeers = this.fetchBeers.bind(this);
        this.fetchFoods = this.fetchFoods.bind(this);
        this.fetchCoffees = this.fetchCoffees.bind(this);
        this.fetchWines = this.fetchWines.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.updateArray = this.updateArray.bind(this);
        this.updateFavorites = this.updateFavorites.bind(this);
    }

    handleCreate(formState){
        let newEntry = {
           date: formState.date,
           brand: formState.brand,
           origin: formState.origin,
           location: formState.location,
           rating: formState.rating,
           favorite: formState.favorite,
           flavors: formState.flavors
           }
        let favEntry = {
          date: formState.date,
          brand: formState.brand,
          origin: formState.origin,
          location: formState.location,
          rating: formState.rating,
          favorite: formState.favorite,
          flavors: formState.flavors
          }

         this.setState({
             currentArray: formState.currentArray,
             randArray: this.state.favArray
         })
         this.updateArray(newEntry);
         this.updateFavorites(favEntry)
         // console.log(newEntry.favorite);
    }
    updateFavorites(favEntry){
      console.log(favEntry);
      if (favEntry.favorite === true){
        this.setState(dogArray => ({
            randArray: dogArray.randArray.push(favEntry)
        }))
      }
        // console.log(newEntry);
    }
    updateArray(newEntry){
        console.log(this.state.currentArray);
        this.setState(prevArray => ({
            currentArray: prevArray.currentArray.push(newEntry)
        }))

        // console.log(newEntry);
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
            console.log(jData);
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
                favArray={this.state.favArray}
                faves={this.state.faves}
                randArray={this.state.randArray}
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

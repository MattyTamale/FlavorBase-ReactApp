import React, { Component } from 'react';
import Categories from './components/Categories.js';
import Form from './components/Form.js';
import Favorites from './components/Favorites.js';
import './App.css';

//DEV BRANCH SETUP
// commented out change
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
        this.handleBeerDelete = this.handleBeerDelete.bind(this);
        this.handleCoffeeDelete = this.handleCoffeeDelete.bind(this);
        this.handleFoodDelete = this.handleFoodDelete.bind(this);
        this.handleWineDelete = this.handleWineDelete.bind(this);
        this.updateArray = this.updateArray.bind(this);
        this.updateFavorites = this.updateFavorites.bind(this);
        this.handleCreateBeer = this.handleCreateBeer.bind(this);
        this.handleCreateFood = this.handleCreateFood.bind(this);
        this.handleCreateCoffee = this.handleCreateCoffee.bind(this);
        this.handleCreateWine = this.handleCreateWine.bind(this);
        this.removeFromArray = this.removeFromArray.bind(this);
        this.handleFavorites = this.handleFavorites.bind(this);
        this.handleBeerUpdate = this.handleBeerUpdate.bind(this);
        this.handleFoodUpdate = this.handleFoodUpdate.bind(this);
        this.handleWineUpdate = this.handleWineUpdate.bind(this);
        this.handleCoffeeUpdate = this.handleCoffeeUpdate.bind(this);
        this.handleFaves = this.handleFaves.bind(this);
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
    handleFaves(){
      this.setState(prevState => {
          let len = prevState.favArray.length
          return {
              faves: len
              }
          })
    }
    handleFavorites(entry){

          this.setState(prevState => {
              // console.log("this is prevState:", prevState.favArray);
              prevState.favArray.push(entry)
              return {
                  favArray: prevState.favArray
                  }
              })
              this.handleFaves()
              entry.favorite = false
    }
    // removeFromFaves () {
    //   this.setState(prevState => {
    //       console.log("this is prevState:", prevState.favArray);
    //       prevState.favArray.splice(arrayIndex, 1)
    //       return {
    //           favArray: prevState.currentArray
    //           }
    //       })
    // }
    //=================
    // CREATE METHODS
    //================
    // handleCreateBeer(beer) {
    //     if (beer.favorite === true){
    //         this.handleFavorites(beer)
    //     }
    //     fetch('http://localhost:3000/beers', {
    //         body: JSON.stringify(beer),
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         }
    //         }).then( createdBeer => {
    //             return createdBeer.json()
    //         }).then( jData => {
    //             this.updateBeerArray(jData, 'currentBeers')
    //         }).catch( err => console.log(err));
    //         this.handleFaves()
    // }

    // handleCreateFood(food) {
    //     console.log(food);
    //     if (food.favorite === true){
    //         this.handleFavorites(food)
    //     }
    // fetch('http://localhost:3000/foods', {
    //     body: JSON.stringify(food),
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json'
    //     }
    //     }).then( createdFood => {
    //         return createdFood.json()
    //     }).then( jData => {
    //         this.updateFoodArray(jData, 'currentFoods')
    //     }).catch( err => console.log(err));
    //     this.handleFaves()
    // }
    //
    // handleCreateCoffee(coffee) {
    //   if (coffee.favorite === true){
    //       this.handleFavorites(coffee)
    //   }
    // fetch('http://localhost:3000/coffees', {
    //     body: JSON.stringify(coffee),
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json'
    //     }
    //     }).then( createdCoffee => {
    //         return createdCoffee.json()
    //     }).then( jData => {
    //         this.updateCoffeeArray(jData, 'currentCoffees')
    //     }).catch( err => console.log(err));
    //     this.handleFaves()
    // }
    //
    // handleCreateWine(wine) {
    //   if (wine.favorite === true){
    //       this.handleFavorites(wine)
    //   }
    // fetch('http://localhost:3000/wines', {
    //     body: JSON.stringify(wine),
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json'
    //     }
    //     }).then( createdWine => {
    //         return createdWine.json()
    //     }).then( jData => {
    //         this.updateWineArray(jData, 'currentWines')
    //     }).catch( err => console.log(err));
    //     this.handleFaves()
    // }

    //==============
    //HEROKU CREATE
    //==============
    handleCreateBeer(beer) {
        if (beer.favorite === true){
            this.handleFavorites(beer)
        }
        fetch('https://flavorbase-api.herokuapp.com/beers', {
            body: JSON.stringify(beer),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
            }).then( createdBeer => {
                return createdBeer.json()
            }).then( jData => {
                this.updateBeerArray(jData, 'currentBeers')
            }).catch( err => console.log(err));
            this.handleFaves()
    }

    handleCreateFood(food) {
        console.log(food);
        if (food.favorite === true){
            this.handleFavorites(food)
        }
    fetch('https://flavorbase-api.herokuapp.com/foods', {
        body: JSON.stringify(food),
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
        }).then( createdFood => {
            return createdFood.json()
        }).then( jData => {
            this.updateFoodArray(jData, 'currentFoods')
        }).catch( err => console.log(err));
        this.handleFaves()
    }

    handleCreateCoffee(coffee) {
      if (coffee.favorite === true){
          this.handleFavorites(coffee)
      }
    fetch('https://flavorbase-api.herokuapp.com/coffees', {
        body: JSON.stringify(coffee),
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
        }).then( createdCoffee => {
            return createdCoffee.json()
        }).then( jData => {
            this.updateCoffeeArray(jData, 'currentCoffees')
        }).catch( err => console.log(err));
        this.handleFaves()
    }

    handleCreateWine(wine) {
      if (wine.favorite === true){
          this.handleFavorites(wine)
      }
    fetch('https://flavorbase-api.herokuapp.com/wines', {
        body: JSON.stringify(wine),
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
        }).then( createdWine => {
            return createdWine.json()
        }).then( jData => {
            this.updateWineArray(jData, 'currentWines')
        }).catch( err => console.log(err));
        this.handleFaves()
    }

    // //================
    // //UPDATE METHODS
    // //================
    //
    // handleBeerUpdate(beer, arrayIndex, currentArray, entry_id){
    //     console.log("this is beer:", beer);
    //     this.setState({
    //         currentArray: currentArray
    //     })
    //     fetch(`http://localhost:3000/beers/${entry_id}`, {
    //         body: JSON.stringify(beer),
    //         method: 'PUT',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then( updatedBeer => updatedBeer.json())
    //     .then(jData => {
    //         console.log("this is jData", jData);
    //         this.removeFromArray(currentArray, arrayIndex);
    //         this.updateBeerArray(jData, 'currentBeers');
    //         })
    //     .catch(err => console.log('this is error from handleUpdate', err));
    //     this.handleFaves()
    // }
    //
    // handleFoodUpdate(food, arrayIndex, currentArray, entry_id){
    //     this.setState({
    //         currentArray: currentArray
    //     })
    //     fetch(`http://localhost:3000/foods/${entry_id}`, {
    //         body: JSON.stringify(food),
    //         method: 'PUT',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then( updatedFood => updatedFood.json())
    //     .then(jData => {
    //         console.log("this is jData", jData);
    //         this.removeFromArray(currentArray, arrayIndex);
    //         this.updateFoodArray(jData, 'currentFoods');
    //         })
    //     .catch(err => console.log('this is error from handleUpdate', err));
    //     this.handleFaves()
    // }
    //
    // handleCoffeeUpdate(coffee, arrayIndex, currentArray, entry_id){
    //     this.setState({
    //         currentArray: currentArray
    //     })
    //     fetch(`http://localhost:3000/coffees/${entry_id}`, {
    //         body: JSON.stringify(coffee),
    //         method: 'PUT',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then( updatedCoffee => updatedCoffee.json())
    //     .then(jData => {
    //         console.log("this is jData", jData);
    //         this.removeFromArray(currentArray, arrayIndex);
    //         this.updateFoodArray(jData, 'currentCoffees');
    //         })
    //     .catch(err => console.log('this is error from handleUpdate', err));
    //     this.handleFaves()
    // }
    //
    // handleWineUpdate(wine, arrayIndex, currentArray, entry_id){
    //     this.setState({
    //         currentArray: currentArray
    //     })
    //     fetch(`http://localhost:3000/wines/${entry_id}`, {
    //         body: JSON.stringify(wine),
    //         method: 'PUT',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then( updatedWine => updatedWine.json())
    //     .then(jData => {
    //         console.log("this is jData", jData);
    //         this.removeFromArray(currentArray, arrayIndex);
    //         this.updateFoodArray(jData, 'currentWines');
    //         })
    //     .catch(err => console.log('this is error from handleUpdate', err));
    //     this.handleFaves()
    // }
    //
    // removeFromArray(array, arrayIndex){
    //     console.log(arrayIndex);
    //     console.log("this is array:", array);
    // this.setState(prevState => {
    //     console.log("this is prevState:", prevState.currentArray);
    //     prevState.currentArray.splice(arrayIndex, 1)
    //     return {
    //         [array]: prevState.currentArray
    //         }
    //     })
    // }

    //=====================
    //HEROKU UPDATE METHODS
    //=====================

    handleBeerUpdate(beer, arrayIndex, currentArray, entry_id){
        console.log("this is beer:", beer);
        this.setState({
            currentArray: currentArray
        })
        fetch(`https://flavorbase-api.herokuapp.com/beers/${entry_id}`, {
            body: JSON.stringify(beer),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then( updatedBeer => updatedBeer.json())
        .then(jData => {
            console.log("this is jData", jData);
            this.removeFromArray(currentArray, arrayIndex);
            this.updateBeerArray(jData, 'currentBeers');
            })
        .catch(err => console.log('this is error from handleUpdate', err));
        this.handleFaves()
    }

    handleFoodUpdate(food, arrayIndex, currentArray, entry_id){
        this.setState({
            currentArray: currentArray
        })
        fetch(`https://flavorbase-api.herokuapp.com/foods/${entry_id}`, {
            body: JSON.stringify(food),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then( updatedFood => updatedFood.json())
        .then(jData => {
            console.log("this is jData", jData);
            this.removeFromArray(currentArray, arrayIndex);
            this.updateFoodArray(jData, 'currentFoods');
            })
        .catch(err => console.log('this is error from handleUpdate', err));
        this.handleFaves()
    }

    handleCoffeeUpdate(coffee, arrayIndex, currentArray, entry_id){
        this.setState({
            currentArray: currentArray
        })
        fetch(`https://flavorbase-api.herokuapp.com/coffees/${entry_id}`, {
            body: JSON.stringify(coffee),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then( updatedCoffee => updatedCoffee.json())
        .then(jData => {
            console.log("this is jData", jData);
            this.removeFromArray(currentArray, arrayIndex);
            this.updateCoffeeArray(jData, 'currentCoffees');
            })
        .catch(err => console.log('this is error from handleUpdate', err));
        this.handleFaves()
    }

    handleWineUpdate(wine, arrayIndex, currentArray, entry_id){
        this.setState({
            currentArray: currentArray
        })
        fetch(`https://flavorbase-api.herokuapp.com/wines/${entry_id}`, {
            body: JSON.stringify(wine),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then( updatedWine => updatedWine.json())
        .then(jData => {
            console.log("this is jData", jData);
            this.removeFromArray(currentArray, arrayIndex);
            this.updateFoodArray(jData, 'currentWines');
            })
        .catch(err => console.log('this is error from handleUpdate', err));
        this.handleFaves()
    }

    removeFromArray(array, arrayIndex){
        console.log(arrayIndex);
        console.log("this is array:", array);
    this.setState(prevState => {
        console.log("this is prevState:", prevState.currentArray);
        prevState.currentArray.splice(arrayIndex, 1)
        return {
            [array]: prevState.currentArray
            }
        })
    }

    //===================
    // DELETE METHODS
    // ==================
    // handleBeerDelete(beerId, arrayIndex, currentArray){
    //     this.setState({
    //         currentArray: currentArray
    //     })
    //     console.log('this is delete', beerId, arrayIndex, currentArray);
    //     fetch(`http://localhost:3000/beers/${beerId}`, {
    //         method: 'DELETE'
    //     })
    //     .then(data => {
    //         console.log("It's been deleted, trust me");
    //         this.removeFromArray(currentArray, arrayIndex)
    //     }).catch( err => console.log('this is error from handleDelete:', err))
    //     //update state but only after we set up a delete route
    // }
    //
    // handleFoodDelete(foodId, arrayIndex, currentArray){
    //     this.setState({
    //         currentArray: currentArray
    //     })
    //     console.log('this is delete', foodId, arrayIndex, currentArray);
    //     fetch(`http://localhost:3000/foods/${foodId}`, {
    //         method: 'DELETE'
    //     })
    //     .then(data => {
    //         console.log("It's been deleted, trust me");
    //         this.removeFromArray(currentArray, arrayIndex)
    //     }).catch( err => console.log('this is error from handleDelete:', err))
    // }
    //
    // handleCoffeeDelete(coffeeId, arrayIndex, currentArray){
    //     this.setState({
    //         currentArray: currentArray
    //     })
    //     console.log('this is delete', coffeeId, arrayIndex, currentArray);
    //     fetch(`http://localhost:3000/coffees/${coffeeId}`, {
    //         method: 'DELETE'
    //     })
    //     .then(data => {
    //         console.log("It's been deleted, trust me");
    //         this.removeFromArray(currentArray, arrayIndex)
    //     }).catch( err => console.log('this is error from handleDelete:', err))
    // }
    //
    // handleWineDelete(wineId, arrayIndex, currentArray){
    //     this.setState({
    //         currentArray: currentArray
    //     })
    //     console.log('this is wine delete', wineId, arrayIndex, currentArray);
    //     fetch(`http://localhost:3000/wines/${wineId}`, {
    //         method: 'DELETE'
    //     })
    //     .then(data => {
    //         console.log("It's been deleted, trust me");
    //         this.removeFromArray(currentArray, arrayIndex)
    //     }).catch( err => console.log('this is error from handleDelete:', err))
    // }

    //======================
    // HEROKU DELETE METHODS
    // =====================
    handleBeerDelete(beerId, arrayIndex, currentArray){
        this.setState({
            currentArray: currentArray
        })
        console.log('this is delete', beerId, arrayIndex, currentArray);
        fetch(`https://flavorbase-api.herokuapp.com/beers/${beerId}`, {
            method: 'DELETE'
        })
        .then(data => {
            console.log("It's been deleted, trust me");
            this.removeFromArray(currentArray, arrayIndex)
        }).catch( err => console.log('this is error from handleDelete:', err))
        //update state but only after we set up a delete route
    }

    handleFoodDelete(foodId, arrayIndex, currentArray){
        this.setState({
            currentArray: currentArray
        })
        console.log('this is delete', foodId, arrayIndex, currentArray);
        fetch(`https://flavorbase-api.herokuapp.com/foods/${foodId}`, {
            method: 'DELETE'
        })
        .then(data => {
            console.log("It's been deleted, trust me");
            this.removeFromArray(currentArray, arrayIndex)
        }).catch( err => console.log('this is error from handleDelete:', err))
    }

    handleCoffeeDelete(coffeeId, arrayIndex, currentArray){
        this.setState({
            currentArray: currentArray
        })
        console.log('this is delete', coffeeId, arrayIndex, currentArray);
        fetch(`https://flavorbase-api.herokuapp.com/coffees/${coffeeId}`, {
            method: 'DELETE'
        })
        .then(data => {
            console.log("It's been deleted, trust me");
            this.removeFromArray(currentArray, arrayIndex)
        }).catch( err => console.log('this is error from handleDelete:', err))
    }

    handleWineDelete(wineId, arrayIndex, currentArray){
        this.setState({
            currentArray: currentArray
        })
        console.log('this is wine delete', wineId, arrayIndex, currentArray);
        fetch(`https://flavorbase-api.herokuapp.com/wines/${wineId}`, {
            method: 'DELETE'
        })
        .then(data => {
            console.log("It's been deleted, trust me");
            this.removeFromArray(currentArray, arrayIndex)
        }).catch( err => console.log('this is error from handleDelete:', err))
    }


    //====================
    // ADDITIONAL METHODS
    //====================
    updateFavorites(favEntry){
      // console.log(favEntry);
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

    updateBeerArray(beer, array){
    this.setState( prevState => {
        prevState[array].push(beer)
        return {
            [array]: prevState[array]
            }
        })
    }

    updateFoodArray(food, array){
    this.setState( prevState => {
        prevState[array].push(food)
        return {
            [array]: prevState[array]
            }
        })
    }

    updateCoffeeArray(coffee, array){
    this.setState( prevState => {
        prevState[array].push(coffee)
        return {
            [array]: prevState[array]
            }
        })
    }

    updateWineArray(wine, array){
    this.setState( prevState => {
        prevState[array].push(wine)
        return {
            [array]: prevState[array]
            }
        })
    }

    //===============
    // FETCH METHODS
    //===============
    // fetchBeers() {
    //     fetch('http://localhost:3000/beers')
    //         .then(data => data.json())
    //     .then(jData => {
    //       // console.log('jData',jData);
    //         jData.forEach((entry, index) => {
    //             if (entry.favorite === "t"){
    //                   this.handleFavorites(entry)
    //             }
    //         })
    //         this.setState({
    //             currentBeers: jData
    //         })
    //     })
    //
    // }
    //
    // fetchCoffees() {
    //     fetch('http://localhost:3000/coffees')
    //         .then(data => data.json())
    //     .then(jData => {
    //       jData.forEach((entry, index) => {
    //           if (entry.favorite === "t"){
    //                 this.handleFavorites(entry)
    //           }
    //       })
    //         this.setState({
    //             currentCoffees: jData
    //         })
    //         console.log(jData);
    //     })
    // }
    //
    // fetchFoods() {
    //     fetch('http://localhost:3000/foods')
    //         .then(data => data.json())
    //     .then(jData => {
    //       jData.forEach((entry, index) => {
    //           if (entry.favorite === "t"){
    //                 this.handleFavorites(entry)
    //           }
    //       })
    //         this.setState({
    //             currentFoods: jData
    //         })
    //     })
    // }
    //
    // fetchWines() {
    //     fetch('http://localhost:3000/wines')
    //         .then(data => data.json())
    //     .then(jData => {
    //       jData.forEach((entry, index) => {
    //           if (entry.favorite === "t"){
    //                 this.handleFavorites(entry)
    //           }
    //       })
    //         this.setState({
    //             currentWines: jData
    //         })
    //     })
    // }
    //
    // componentDidMount(){
    //     this.fetchBeers()
    //     this.fetchFoods()
    //     this.fetchCoffees()
    //     this.fetchWines()
    // }

    //=====================
    // HEROKU FETCH METHODS
    //=====================
    fetchBeers() {
        fetch('https://flavorbase-api.herokuapp.com/beers')
            .then(data => data.json())
        .then(jData => {
          // console.log('jData',jData);
            jData.forEach((entry, index) => {
                if (entry.favorite === "t"){
                      this.handleFavorites(entry)
                }
            })
            this.setState({
                currentBeers: jData
            })
        })

    }

    fetchCoffees() {
        fetch('https://flavorbase-api.herokuapp.com/coffees')
            .then(data => data.json())
        .then(jData => {
          jData.forEach((entry, index) => {
              if (entry.favorite === "t"){
                    this.handleFavorites(entry)
              }
          })
            this.setState({
                currentCoffees: jData
            })
            console.log(jData);
        })
    }

    fetchFoods() {
        fetch('https://flavorbase-api.herokuapp.com/foods')
            .then(data => data.json())
        .then(jData => {
          jData.forEach((entry, index) => {
              if (entry.favorite === "t"){
                    this.handleFavorites(entry)
              }
          })
            this.setState({
                currentFoods: jData
            })
        })
    }

    fetchWines() {
        fetch('https://flavorbase-api.herokuapp.com/wines')
            .then(data => data.json())
        .then(jData => {
          jData.forEach((entry, index) => {
              if (entry.favorite === "t"){
                    this.handleFavorites(entry)
              }
          })
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
            <header className="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="display-4"> FlavorBase </h1>
                <hr className="my-4" />
                <p className="lead">Create and explore this wonderful compendium of different flavors.</p>
                <h5 className="lead">Each entry will detail when and where the item was enjoyed as well as notable flavors worth sharing.</h5>
                </div>
            </header>
            <Form
                currentBeers={this.state.currentBeers}
                currentFoods={this.state.currentFoods}
                currentCoffees={this.state.currentCoffees}
                currentWines={this.state.currentWines}
                handleCreate={this.handleCreate}
                handleCreateBeer={this.handleCreateBeer}
                handleCreateFood={this.handleCreateFood}
                handleCreateCoffee={this.handleCreateCoffee}
                handleCreateWine={this.handleCreateWine}
            />
            <Favorites
                currentBeers={this.state.currentBeers}
                currentFoods={this.state.currentFoods}
                currentCoffees={this.state.currentCoffees}
                currentWines={this.state.currentWines}
                favArray={this.state.favArray}
                faves={this.state.faves}
                randArray={this.state.randArray}
                handleFaves={this.handleFaves}
            />
            <Categories
                currentBeers={this.state.currentBeers}
                currentFoods={this.state.currentFoods}
                currentCoffees={this.state.currentCoffees}
                currentWines={this.state.currentWines}
                handleBeerDelete={this.handleBeerDelete}
                handleFoodDelete={this.handleFoodDelete}
                handleCoffeeDelete={this.handleCoffeeDelete}
                handleWineDelete={this.handleWineDelete}
                handleFavorites={this.handleFavorites}
                handleBeerUpdate={this.handleBeerUpdate}
                handleFoodUpdate={this.handleFoodUpdate}
                handleWineUpdate={this.handleWineUpdate}
                handleCoffeeUpdate={this.handleCoffeeUpdate}
            />
          </div>
        );
    }
}

export default App;

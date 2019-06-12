import React, { Component } from 'react'

class UpdateForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: '',
            brand: '',
            origin: '',
            location: '',
            rating: 0,
            favorite: false,
            flavors: '',
            currentArray: null,
            showForm: false,
            randArray: null,
            currentCategory: ""
        }
    }
    handleSubmit = (e) => {
         e.preventDefault()
         if(this.props.currentBeers){
            this.props.handleBeerUpdate(this.state, this.props.arrayIndex, this.props.currentBeers, this.props.beer.entry_id)
        }else if(this.props.currentFoods){
           this.props.handleFoodUpdate(this.state, this.props.arrayIndex, this.props.currentFoods, this.props.food.entry_id)
       }else if(this.props.currentCoffees){
           this.props.handleCoffeeUpdate(this.state, this.props.arrayIndex, this.props.currentCoffees, this.props.coffee.entry_id)
       }else if(this.props.currentWines){
           this.props.handleWineUpdate(this.state, this.props.arrayIndex, this.props.currentWines, this.props.wine.entry_id)
        }
         // this.props.handleCreate(this.state)
         this.hideForm();
    }

    setArray = () => {
        this.setState({
           randArray: this.props.favArray
        })
    }

    handleChange = (e) => {
       this.setState({
         [e.target.id]: e.target.value
       })
    }
    handleForm = () => {
       this.setState({
          showForm: true
       })
       // console.log(this.state.currentArray);
    }
    hideForm = () => {
       this.setState({
          showForm: false
       })
    }
    handleCheck = () => {
       this.setState({
          favorite: !this.state.favorite
       })
       this.setArray()
    }

    handleCategory = (e) => {
        if (e.target.id === "beer"){
            let newArray = this.props.currentBeers
            this.setState({
                currentArray: newArray,
                currentCategory: "beer"
            })
        }else if (e.target.id === "wine"){
            let newArray = this.props.currentWines
            this.setState({
                currentArray: newArray,
                currentCategory: "wine"
            })
        }else if (e.target.id === "food"){
            let newArray = this.props.currentFoods
            this.setState({
                currentArray: newArray,
                currentCategory: "food"
            })
        }else if (e.target.id === "coffee"){
            let newArray = this.props.currentCoffees
            this.setState({
                currentArray: newArray,
                currentCategory: "coffee"
            })
        }
        this.handleForm();
        // console.log(e.target.id);

    }

    clearForm = () => {
      this.setState({
        date: '',
        brand: '',
        origin: '',
        location: '',
        rating: 0,
        favorite: false,
        flavors: '',
        showForm: false
      })
    }

    render () {
      return (
      <div>
            <div className="form-group" onSubmit={this.handleSubmit}>
                   <form>
                        <input
                          className="form-control"
                          id='date'
                          type='text'
                          placeholder="Date"
                          onChange={this.handleChange}
                          value={this.state.date}
                          />
                        <input
                            className="form-control"
                            id='brand'
                            type='text'
                            placeholder="Brand"
                            onChange={this.handleChange}
                            value={this.state.brand}
                        />
                        <input
                            className="form-control"
                            id='origin'
                            type='text'
                            placeholder="Origin"
                            onChange={this.handleChange}
                            value={this.state.origin}
                        />
                        <input
                          className="form-control"
                          id='location'
                          type='text'
                          placeholder="Location"
                          onChange={this.handleChange}
                          value={this.state.location}
                        />
                            <label>
                            Rating 1-10:</label>
                            <input
                              className="form-control"
                              max="10"
                              min="1"
                              id='rating'
                              type='text'
                              placeholder="Rating: 1-10"
                              onChange={this.handleChange}
                              value={this.state.rating}
                            />
                        <input
                          className="form-control"
                          id='flavors'
                          type='text'
                          placeholder="Flavors"
                          onChange={this.handleChange}
                          value={this.state.flavors}
                        />
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                   </form>
                </div>
       </div>
      )
    }
}

export default UpdateForm;

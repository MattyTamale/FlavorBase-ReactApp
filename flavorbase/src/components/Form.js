import React, { Component } from 'react'

class Form extends Component{
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
            showForm: false

        }
    }
    handleSubmit = (e) => {
         e.preventDefault()
         const newEntry = {
            date: this.state.date,
            brand: this.state.artist,
            origin: this.state.origin,
            location: this.state.location,
            rating: this.state.rating,
            favorite: this.state.favorite,
            flavors: this.state.flavors
            }
          this.hideForm();
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
       console.log(this.state.currentArray);
    }
    hideForm = () => {
       this.setState({
          showForm: false
       })
       console.log(this.state.currentArray);
    }

    handleCategory = (e) => {
        let newArray = null
        this.setState({
            currentArray: newArray
        })
        if (e.target.id === "beer"){
            let newArray = this.props.currentBeers
            this.setState({
                currentArray: newArray
            })
        }else if (e.target.id === "wine"){
            let newArray = this.props.currentWines
            this.setState({
                currentArray: newArray
            })
        }else if (e.target.id === "food"){
            let newArray = this.props.currentFoods
            this.setState({
                currentArray: newArray
            })
        }else if (e.target.id === "coffee"){
            let newArray = this.props.currentCoffees
            this.setState({
                currentArray: newArray
            })
        }
        this.handleForm();
        console.log(e.target.id);
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
          <div className="chooseCat">
              <h3>Add Your Entry</h3>
              <button
                  onClick={this.handleCategory}
                  id="beer">
                  Beer</button>
              <button
                  onClick={this.handleCategory}
                  id="food">Food</button>
              <button
                  onClick={this.handleCategory}
                  id="coffee">Coffee</button>
              <button
                  onClick={this.handleCategory}
                  id="wine">Wine</button>
          </div>
          { this.state.showForm ?
            <div className="form" onSubmit={this.handleSubmit}>
                   <form>
                        <input
                         type='text'
                         id='category'
                         placeholder="Category"
                         onChange={this.handleChange}
                         value={this.state.category}
                         />
                        <input
                          id='date'
                          type='text'
                          placeholder="Date"
                          onChange={this.handleChange}
                          value={this.state.date}
                          />
                        <input
                            id='brand'
                            type='text'
                            placeholder="Brand"
                            onChange={this.handleChange}
                            value={this.state.brand}
                        />
                        <input
                            id='origin'
                            type='text'
                            placeholder="Origin"
                            onChange={this.handleChange}
                            value={this.state.origin}
                        />
                        <input
                          id='location'
                          type='text'
                          placeholder="Location"
                          onChange={this.handleChange}
                          value={this.state.location}
                        />
                        <input
                          id='rating'
                          type='text'
                          placeholder="Rating: 1-10"
                          onChange={this.handleChange}
                          value={this.state.rating}
                        />
                        <input
                          id='favorite'
                          type='text'
                          placeholder="Favorite"
                          onChange={this.handleChange}
                          value={this.state.favorite}
                        />
                        <input
                          id='flavors'
                          type='text'
                          placeholder="Flavors"
                          onChange={this.handleChange}
                          value={this.state.flavors}
                        />
                        <button type="submit" className="submit-button">Submit</button>
                   </form>
                </div>
              :
              ''
            }
       </div>
      )
    }
}

export default Form;

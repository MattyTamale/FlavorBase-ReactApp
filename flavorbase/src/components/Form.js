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
            currentBeers: [],
            currentCoffees: [],
            currentFoods: [],
            currentWines: []

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    }

    handleChange = (e) => {
       this.setState({task_item: e.target.value})
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
        <div className="form" onSubmit={this.handleSubmit}>
            <div className="chooseCat">
                <h3>Add Your Entry</h3>
                <button>Beer</button>
                <button>Food</button>
                <button>Coffee</button>
                <button>Wine</button>
            </div>
               <form>
                    <input
                     type='text'
                     placeholder="Category"
                     onChange={this.handleChange}
                     value={this.state.task_item}
                     />
                    <input
                      type='text'
                      placeholder="Date"
                      onChange={this.handleChange}
                      value={this.state.task_item}
                      />
                    <input
                        type='text'
                        placeholder="Brand"
                        onChange={this.handleChange}
                        value={this.state.task_item}
                    />
                    <input
                      type='text'
                      placeholder="Origin"
                      onChange={this.handleChange}
                      value={this.state.task_item}
                    />
                    <input
                      type='text'
                      placeholder="Loacation"
                      onChange={this.handleChange}
                      value={this.state.task_item}
                    />
                    <input
                      type='text'
                      placeholder="Rating: 1-10"
                      onChange={this.handleChange}
                      value={this.state.task_item}
                    />
                    <input
                      type='text'
                      placeholder="Favorite"
                      onChange={this.handleChange}
                      value={this.state.task_item}
                    />
                    <input
                      type='text'
                      placeholder="Flavors"
                      onChange={this.handleChange}
                      value={this.state.task_item}
                    />
                    <button type="submit" className="submit-button">Submit</button>
               </form>
         </div>
      )
    }
}

export default Form;

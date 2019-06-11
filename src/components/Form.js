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
            showForm: false,
            randArray: null,
            currentCategory: ""
        }
    }
    handleSubmit = (e) => {
         e.preventDefault()
         if(this.state.currentCategory === "beer"){
            this.props.handleCreateBeer(this.state)
        }else if(this.state.currentCategory === "coffee"){
            this.props.handleCreateCoffee(this.state)
        }else if(this.state.currentCategory === "wine"){
             this.props.handleCreateWine(this.state)
        }else if(this.state.currentCategory === "food"){
              this.props.handleCreateFood(this.state)
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
      <div className="catButtons">
              <h3>- Add Your Entry -</h3>
              <div className="btn-group btn-group-lg">
              <button
                  type="button" className="btn btn-outline-dark"
                  onClick={this.handleCategory}
                  id="beer">
                  Beer</button>
              <button
                  onClick={this.handleCategory}
                  id="food" className="btn btn-outline-info">Food</button>
              <button
                  onClick={this.handleCategory}
                  id="coffee" type="button" class="btn btn-outline-secondary">Coffee</button>
              <button
                  onClick={this.handleCategory}
                  id="wine" className="btn btn-outline-danger">Wine</button>
          </div>
          { this.state.showForm ?
            <div className="form" onSubmit={this.handleSubmit}>
                   <form >
                        <div className="form-group">
                        <input
                          className="form-control"
                          id='date'
                          type='text'
                          placeholder="Date"
                          onChange={this.handleChange}
                          value={this.state.date}
                          />
                          </div>
                        <div className="form-group">
                        <input
                            className="form-control"
                            id='brand'
                            type='text'
                            placeholder="Brand"
                            onChange={this.handleChange}
                            value={this.state.brand}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            className="form-control"
                            id='origin'
                            type='text'
                            placeholder="Origin"
                            onChange={this.handleChange}
                            value={this.state.origin}
                        />
                        </div>
                        <div className="form-group">
                        <input
                          className="form-control"
                          id='location'
                          type='text'
                          placeholder="Location"
                          onChange={this.handleChange}
                          value={this.state.location}
                        />
                        </div>
                        <div className="form-group">
                        <label>
                        Rating 1-10</label>
                        <input
                          className="form-control"
                          max="10"
                          min="1"
                          id='rating'
                          type='number'
                          placeholder="Rating: 1-10"
                          onChange={this.handleChange}
                          value={this.state.rating}
                        />
                        </div>
                        <div className="form-group form-check">
                        <label>Favorite:</label><br/>
                        <input
                          className="form-check-input"
                          onClick={this.handleCheck}
                          id='favorite'
                          type='checkbox'
                          value="favorite"
                        />
                        <br />
                        </div>
                        <div className="form-group">
                        <input
                          className="form-control"
                          id='flavors'
                          type='text'
                          placeholder="Flavors"
                          onChange={this.handleChange}
                          value={this.state.flavors}
                        />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
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

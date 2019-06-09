import React, { Component } from 'react'

class Favorites extends Component{
    constructor(props){
        super(props)
        this.state = {
            showFaves: false,
            favorites: [],
            faves: 0
        }
    }
    toggleFav = (e) => {
       this.setState({
         [e.target.id]: e.target.value
       })
    }
    render () {
      return (
        <div className="favorites" >
            <button onClick={this.state.toggleFav}>Favorites</button>
              {this.state.showFaves
                  ? this.state.favorites.map((fav, index) => {
                      return <div>
                              <ul key={index}>
                                  <li>{fav.date}</li>
                                  <li>{fav.brand}</li>
                                  <li>{fav.origin}</li>
                                  <li>{fav.location}</li>
                                  <li>{fav.rating}</li>
                                  <li>{fav.favorite}</li>
                                  <li>{fav.flavors}</li>
                              </ul>
                              <button onClick={this.state.handleRemove(index)}>Remove from Faves</button>
                          </div>
                  })
                  : ''}
         </div>
      )
    }
}

export default Favorites;

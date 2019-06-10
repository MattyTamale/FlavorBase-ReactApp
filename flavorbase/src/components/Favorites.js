import React, { Component } from 'react'

class Favorites extends Component{
    constructor(props){
        super(props)
        this.state = {
            showFaves: false
        }
    }
    toggleFav = (e) => {
        this.setState(prevState => ({
            showFaves: !prevState.showFaves
        }))
        console.log(this.props.favArray);
    }
    // handleRemove = (index) => {
    //     this.setState(prevArray => ({
    //         favArray: prevArray.favArray.splice(index)
    //     }))
    // }
    render () {
      return (
        <div className="favorites" >
            <button onClick={this.toggleFav}>Favorites {this.props.faves}</button>
              {this.state.showFaves
                  ? this.props.favArray.map((fav, index) => {
                      return <div>
                              <ul key={index}>
                                  <li>{fav.date}</li>
                                  <li>{fav.brand}</li>
                                  <li>{fav.origin}</li>
                                  <li>{fav.location}</li>
                                  <li>{fav.rating}</li>
                                  <li>{fav.flavors}</li>
                              </ul>

                          </div>
                  })
                  : ''}
         </div>
      )
    }
}
// <button onClick={this.handleRemove(index)}>Remove from Faves</button>
export default Favorites;

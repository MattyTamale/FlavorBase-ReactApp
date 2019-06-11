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
    }
    removeFav = (e) => {
        console.log('this is e.target.id', e.target.id);
        let newFavorites = this.props.favArray.splice(e.target.id, 1)
        this.setState(prevState => ({
            favArray: newFavorites
        }))
        this.props.handleFaves()
        console.log(this.props);
    }
    // handleFavos = () => {
    //   this.setState(prevState => {
    //       let len = this.props.favArray.length
    //       return {
    //           faves: len
    //           }
    //       })
    // }
    // handleRemove = (index) => {
    //     this.setState(prevArray => ({
    //         favArray: prevArray.favArray.splice(index)
    //     }))
    // }
    render () {
      return (
        <div className="fav-container" >
            <button className="btn btn-primary btn btn-block" onClick={this.toggleFav}>Favorites: {this.props.faves}</button>
              {this.state.showFaves
                  ? this.props.favArray.map((fav, index) => {
                      return <div key={index}>
                              <ul key={index}>
                                  <li>{fav.date}</li>
                                  <li>{fav.brand}</li>
                                  <li>{fav.origin}</li>
                                  <li>{fav.location}</li>
                                  <li>{fav.rating}</li>
                                  <li>{fav.flavors}</li>
                              </ul>
                              <button

                              id={index}
                               onClick={this.removeFav}>Remove</button>
                          </div>
                  })
                  : ''}
         </div>
      )
    }
}
// <button onClick={this.handleRemove(index)}>Remove from Faves</button>
export default Favorites;
                              // value={fav.favorite}

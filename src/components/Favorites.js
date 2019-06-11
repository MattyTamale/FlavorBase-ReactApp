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
            <div className="container">
                <div className="favorites">
              {this.state.showFaves
                  ? this.props.favArray.map((fav, index) => {
                      return <div className="card" key={index}>
                              <div className="card-body" key={index}>
                                  <h4 className="card-title">{fav.brand}</h4>
                                  <h5 className="card-subtitle mb-2 text-muted" className="subtitle">{fav.flavors}</h5>
                                  <p className="card-text">{fav.date}</p>
                                  <p className="card-text">Origin: {fav.origin}</p>
                                  <p className="card-text">Location: {fav.location}</p>
                                  <p className="card-text" className="rating">{fav.rating}/10</p>
                                  <button
                                  className="btn btn-outline-danger btn-sm"
                                  id={index}
                                   onClick={this.removeFav}>Remove</button>
                              </div>
                          </div>
                  })
                  : ''}
                </div>
            </div>
         </div>
      )
    }
}
// <button onClick={this.handleRemove(index)}>Remove from Faves</button>
export default Favorites;
                              // value={fav.favorite}

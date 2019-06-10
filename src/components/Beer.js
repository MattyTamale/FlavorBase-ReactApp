import React, { Component } from 'react';
import UpdateForm from './UpdateForm.js';

class Beer extends Component {
    constructor(props){
        super(props)
        this.state ={
            showInfo: false,
            updateInfo: false,
        }
    }

    toggleInfo = (event) => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    toggleUpdate = (event) => {
        this.setState({
            updateInfo: !this.state.updateInfo
        })
    }

    render() {
        return (
            <div>
                <h2 onClick={this.toggleInfo}>{this.props.beer.brand}</h2>
                {this.state.showInfo ?
                    <ul>
                        <li>{this.props.beer.date}</li>
                        <li>{this.props.beer.origin}</li>
                        <li>{this.props.beer.location}</li>
                        <li>{this.props.beer.rating}</li>
                        <li>{this.props.beer.favorite}</li>
                        <li>{this.props.beer.flavors}</li>
                        <button onClick={() => {this.props.handleBeerDelete(this.props.beer.entry_id, this.props.arrayIndex, this.props.currentBeers)}}>DELETE</button>
                        <button onClick={() => {this.props.handleFavorites(this.props.beer)}}>ADD to Faves</button>
                        <button onClick={this.toggleUpdate}>
                            UPDATE
                        </button>
                        {this.state.updateInfo ?
                            <div >
                                Form:<UpdateForm
                                    arrayIndex={this.props.arrayIndex}
                                    beer={this.props.beer}
                                    currentBeers={this.props.currentBeers}
                                    handleBeerUpdate={this.props.handleBeerUpdate}
                                />
                            </div>
                        : ''
                        }
                    </ul>
                : ''
                }
            </div>
        )
    }
}
// <button onClick={() => {this.props.handleBeerUpdate(this.props.beer.entry_id, this.props.arrayIndex, this.props.currentBeers)}}>
//     UPDATE
// </button>

// <h1>Beers: </h1>
export default Beer;

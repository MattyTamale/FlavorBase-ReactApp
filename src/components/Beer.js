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
            <div className="card">
                <div className="card-body">
                <h5 className="card-title" className="brand" onClick={this.toggleInfo}>{this.props.beer.brand}</h5>
                {this.state.showInfo ?
                    <div>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.beer.date}</h6>
                        <p className="card-text">{this.props.beer.origin}</p>
                        <p className="card-text">{this.props.beer.location}</p>
                        <p className="card-text">{this.props.beer.rating}</p>
                        <h5 className="card-title">{this.props.beer.flavors}</h5>
                        <div className="btn-group-sm">
                        <button className="btn btn-light" onClick={() => {this.props.handleBeerDelete(this.props.beer.entry_id, this.props.arrayIndex, this.props.currentBeers)}}>DELETE</button>
                        <button className="btn btn-light" onClick={() => {this.props.handleFavorites(this.props.beer)}}>ADD to Faves</button>
                        <button className="btn btn-light" onClick={this.toggleUpdate}>
                            UPDATE
                        </button>
                        </div>
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
                    </div>
                : ''
                }
                </div>
            </div>
        )
    }
}
// <button onClick={() => {this.props.handleBeerUpdate(this.props.beer.entry_id, this.props.arrayIndex, this.props.currentBeers)}}>
//     UPDATE
// </button>

// <h1>Beers: </h1>
export default Beer;

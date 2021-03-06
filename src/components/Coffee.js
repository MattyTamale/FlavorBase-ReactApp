import React, { Component } from 'react';
import UpdateForm from './UpdateForm.js';

class Coffee extends Component {
    constructor(){
        super()
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
                <h5 className="card-title" className="brand" onClick={this.toggleInfo}>{this.props.coffee.brand}</h5>
                {this.state.showInfo ?
                    <div>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.coffee.date}</h6>
                        <p className="card-text">Origin: {this.props.coffee.origin}</p>
                        <p className="card-text">Location: {this.props.coffee.location}</p>
                        <p className="card-text" className="rating">{this.props.coffee.rating}/10</p>
                        <h5 className="card-title" className="subtitle">{this.props.coffee.flavors}</h5>
                        <div className="btn-group-sm">
                        <button className="btn btn-light" onClick={() => {this.props.handleCoffeeDelete(this.props.coffee.entry_id, this.props.arrayIndex, this.props.currentCoffees)}}>DELETE</button>
                        <button className="btn btn-light" onClick={() => {this.props.handleFavorites(this.props.coffee)}}>ADD to Faves</button>
                        <button className="btn btn-light" onClick={this.toggleUpdate}>
                            UPDATE
                        </button>
                        </div>
                        {this.state.updateInfo ?
                            <div >
                                Form:<UpdateForm
                                    arrayIndex={this.props.arrayIndex}
                                    coffee={this.props.coffee}
                                    currentCoffees={this.props.currentCoffees}
                                    handleCoffeeUpdate={this.props.handleCoffeeUpdate}
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
};


export default Coffee;

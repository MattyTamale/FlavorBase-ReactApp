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
            <div>
                <h2 className="brandName" onClick={this.toggleInfo}>{this.props.coffee.brand}</h2>
                {this.state.showInfo ?
                    <ul>
                        <li>{this.props.coffee.date}</li>
                        <li>{this.props.coffee.origin}</li>
                        <li>{this.props.coffee.location}</li>
                        <li>{this.props.coffee.rating}</li>
                        <li>{this.props.coffee.flavors}</li>
                        <button onClick={() => {this.props.handleCoffeeDelete(this.props.coffee.entry_id, this.props.arrayIndex, this.props.currentCoffees)}}>DELETE</button>
                        <button onClick={() => {this.props.handleFavorites(this.props.coffee)}}>ADD to Faves</button>
                        <button onClick={this.toggleUpdate}>
                            UPDATE
                        </button>
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
                    </ul>
                : ''
                }
            </div>
        )
    }
};


export default Coffee;

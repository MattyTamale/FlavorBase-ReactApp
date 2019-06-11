import React, { Component } from 'react';
import UpdateForm from './UpdateForm.js';

class Food extends Component {
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
                <h5 className="card-title" onClick={this.toggleInfo}>{this.props.food.brand}</h5>
                {this.state.showInfo ?
                    <div>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.food.date}</h6>
                        <p className="card-text">{this.props.food.origin}</p>
                        <p className="card-text">{this.props.food.location}</p>
                        <p className="card-text">{this.props.food.rating}</p>
                        <h5 className="card-title">{this.props.food.flavors}</h5>
                        <button onClick={() => {this.props.handleFoodDelete(this.props.food.entry_id, this.props.arrayIndex, this.props.currentFoods)}}>DELETE</button>
                        <button onClick={() => {this.props.handleFavorites(this.props.food)}}>ADD to Faves</button>
                        <button onClick={this.toggleUpdate}>
                            UPDATE
                        </button>
                        {this.state.updateInfo ?
                            <div >
                                Form:<UpdateForm
                                    arrayIndex={this.props.arrayIndex}
                                    food={this.props.food}
                                    currentFoods={this.props.currentFoods}
                                    handleFoodUpdate={this.props.handleFoodUpdate}
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


export default Food;

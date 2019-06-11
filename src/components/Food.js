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
            <div>
                <h2 className="brandName" onClick={this.toggleInfo}>{this.props.food.brand}</h2>
                {this.state.showInfo ?
                    <ul>
                        <li>{this.props.food.date}</li>
                        <li>{this.props.food.origin}</li>
                        <li>{this.props.food.location}</li>
                        <li>{this.props.food.rating}</li>
                        <li>{this.props.food.flavors}</li>
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
                    </ul>
                : ''
                }
            </div>
        )
    }
}


export default Food;

import React, { Component } from 'react';

class Food extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.food.date}</li>
                    <li>{this.props.food.brand}</li>
                    <li>{this.props.food.origin}</li>
                    <li>{this.props.food.location}</li>
                    <li>{this.props.food.rating}</li>
                    <li>{this.props.food.favorite}</li>
                    <li>{this.props.food.flavors}</li>
                    <button onClick={() => {this.props.handleFoodDelete(this.props.food.entry_id, this.props.arrayIndex, this.props.currentFoods)}}>DELETE</button>
                </ul>
            </div>
        )
    }
}


export default Food;

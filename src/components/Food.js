import React, { Component } from 'react';

class Food extends Component {
    constructor(){
        super()
        this.state ={
            showInfo: false
        }
    }

    toggleInfo = (event) => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        return (
            <div>
                <h2 onClick={this.toggleInfo}>{this.props.food.brand}</h2>
                {this.state.showInfo ?
                    <ul>
                        <li>{this.props.food.date}</li>
                        <li>{this.props.food.origin}</li>
                        <li>{this.props.food.location}</li>
                        <li>{this.props.food.rating}</li>
                        <li>{this.props.food.favorite}</li>
                        <li>{this.props.food.flavors}</li>
                        <button onClick={() => {this.props.handleFoodDelete(this.props.food.entry_id, this.props.arrayIndex, this.props.currentFoods)}}>DELETE</button>
                        <button onClick={() => {this.props.handleFavorites(this.props.food)}}>ADD to Faves</button>
                    </ul>
                : ''
                }
            </div>
        )
    }
}


export default Food;

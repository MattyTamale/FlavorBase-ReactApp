import React, { Component } from 'react';

class Coffee extends Component {
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
                <h2 onClick={this.toggleInfo}>{this.props.coffee.brand}</h2>
                {this.state.showInfo ?
                    <ul>
                        <li>{this.props.coffee.date}</li>
                        <li>{this.props.coffee.origin}</li>
                        <li>{this.props.coffee.location}</li>
                        <li>{this.props.coffee.rating}</li>
                        <li>{this.props.coffee.favorite}</li>
                        <li>{this.props.coffee.flavors}</li>
                        <button onClick={() => {this.props.handleCoffeeDelete(this.props.coffee.entry_id, this.props.arrayIndex, this.props.currentCoffees)}}>DELETE</button>
                        <button onClick={() => {this.props.handleFavorites(this.props.coffee)}}>ADD to Faves</button>
                    </ul>
                : ''
                }
            </div>
        )
    }
};


export default Coffee;

import React, { Component } from 'react';

class Coffee extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.coffee.date}</li>
                    <li>{this.props.coffee.brand}</li>
                    <li>{this.props.coffee.origin}</li>
                    <li>{this.props.coffee.location}</li>
                    <li>{this.props.coffee.rating}</li>
                    <li>{this.props.coffee.favorite}</li>
                    <li>{this.props.coffee.flavors}</li>
                    <button onClick={() => {this.props.handleCoffeeDelete(this.props.coffee.entry_id, this.props.arrayIndex, this.props.currentCoffees)}}>DELETE</button>
                </ul>
            </div>
        )
    }
};


export default Coffee;

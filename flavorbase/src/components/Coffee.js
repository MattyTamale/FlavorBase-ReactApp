import React, { Component } from 'react';

class Coffee extends Component {
    render() {
        return (
            <div>
                <h1>Coffees: </h1>
                {this.props.currentCoffees
                    ? this.props.currentCoffees.map((coffee, index) => {
                        return <ul key={index}>
                            <li>{coffee.date}</li>
                            <li>{coffee.brand}</li>
                            <li>{coffee.origin}</li>
                            <li>{coffee.location}</li>
                            <li>{coffee.rating}</li>
                            <li>{coffee.favorite}</li>
                            <li>{coffee.flavors}</li>
                        </ul>
                    })
                    : 'test'}
            </div>
        )
    }
};


export default Coffee;

import React, { Component } from 'react';

class Beer extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.beer.date}</li>
                    <li>{this.props.beer.brand}</li>
                    <li>{this.props.beer.origin}</li>
                    <li>{this.props.beer.location}</li>
                    <li>{this.props.beer.rating}</li>
                    <li>{this.props.beer.favorite}</li>
                    <li>{this.props.beer.flavors}</li>
                    <button onClick={() => {this.props.handleDelete(this.props.beer.entry_id, this.props.arrayIndex, this.props.currentBeers)}}>DELETE</button>
                </ul>
            </div>
        )
    }
}

// <h1>Beers: </h1>
export default Beer;

import React, { Component } from 'react';

class Beer extends Component {
    render() {
        return (
            <div>
                <h1>Beers: </h1>
                {this.props.currentBeers
                    ? this.props.currentBeers.map((beer, index) => {
                        return <ul key={index}>
                            <li>{beer.date}</li>
                            <li>{beer.brand}</li>
                            <li>{beer.origin}</li>
                            <li>{beer.location}</li>
                            <li>{beer.rating}</li>
                            <li>{beer.favorite}</li>
                            <li>{beer.flavors}</li>
                        </ul>
                    })
                    : 'test'}
            </div>
        )
    }
}


export default Beer;

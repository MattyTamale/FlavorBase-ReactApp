import React, { Component } from 'react';

class Wine extends Component {
    render() {
        return (
            <div>
                <h1>Wines: </h1>
                {this.props.currentWines
                    ? this.props.currentWines.map((wine, index) => {
                        return <ul key={index}>
                            <li>{wine.date}</li>
                            <li>{wine.brand}</li>
                            <li>{wine.origin}</li>
                            <li>{wine.location}</li>
                            <li>{wine.rating}</li>
                            <li>{wine.favorite}</li>
                            <li>{wine.flavors}</li>
                        </ul>
                    })
                    : 'test'}
            </div>
        )
    }
}


export default Wine;

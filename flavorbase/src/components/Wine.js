import React, { Component } from 'react';

class Wine extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.wine.date}</li>
                    <li>{this.props.wine.brand}</li>
                    <li>{this.props.wine.origin}</li>
                    <li>{this.props.wine.location}</li>
                    <li>{this.props.wine.rating}</li>
                    <li>{this.props.wine.favorite}</li>
                    <li>{this.props.wine.flavors}</li>
                    <button onClick={() => {this.props.handleWineDelete(this.props.wine.entry_id, this.props.arrayIndex, this.props.currentWines)}}>DELETE</button>
                </ul>
            </div>
        )
    }
}


export default Wine;

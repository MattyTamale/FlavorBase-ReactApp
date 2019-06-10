import React, { Component } from 'react';

class Wine extends Component {
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
                <h2 onClick={this.toggleInfo}>{this.props.wine.brand}</h2>
                {this.state.showInfo ?
                    <ul>
                        <li>{this.props.wine.date}</li>
                        <li>{this.props.wine.origin}</li>
                        <li>{this.props.wine.location}</li>
                        <li>{this.props.wine.rating}</li>
                        <li>{this.props.wine.favorite}</li>
                        <li>{this.props.wine.flavors}</li>
                        <button onClick={() => {this.props.handleWineDelete(this.props.wine.entry_id, this.props.arrayIndex, this.props.currentWines)}}>DELETE</button>
                    </ul>
                : ''    
                }
            </div>
        )
    }
}


export default Wine;

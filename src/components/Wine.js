import React, { Component } from 'react';
import UpdateForm from './UpdateForm.js';

class Wine extends Component {
    constructor(){
        super()
        this.state ={
            showInfo: false,
            updateInfo: false,
        }
    }

    toggleInfo = (event) => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    toggleUpdate = (event) => {
        this.setState({
            updateInfo: !this.state.updateInfo
        })
    }

    render() {
        return (
            <div>
                <h2 className="brandName" onClick={this.toggleInfo}>{this.props.wine.brand}</h2>
                {this.state.showInfo ?
                    <ul>
                        <li>{this.props.wine.date}</li>
                        <li>{this.props.wine.origin}</li>
                        <li>{this.props.wine.location}</li>
                        <li>{this.props.wine.rating}</li>
                        <li>{this.props.wine.flavors}</li>
                        <button onClick={() => {this.props.handleWineDelete(this.props.wine.entry_id, this.props.arrayIndex, this.props.currentWines)}}>DELETE</button>
                        <button onClick={() => {this.props.handleFavorites(this.props.wine)}}>ADD to Faves</button>
                        <button onClick={this.toggleUpdate}>
                            UPDATE
                        </button>
                        {this.state.updateInfo ?
                            <div >
                                Form:<UpdateForm
                                    arrayIndex={this.props.arrayIndex}
                                    wine={this.props.wine}
                                    currentWines={this.props.currentWines}
                                    handleWineUpdate={this.props.handleWineUpdate}
                                />
                            </div>
                        : ''
                        }
                    </ul>
                : ''
                }
            </div>
        )
    }
}


export default Wine;

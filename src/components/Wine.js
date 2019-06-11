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
            <div className="card">
                <div className="card-body">
                <h5 className="card-title" className="brand" onClick={this.toggleInfo}>{this.props.wine.brand}</h5>
                {this.state.showInfo ?
                    <div>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.wine.date}</h6>
                        <p className="card-text">Origin: {this.props.wine.origin}</p>
                        <p className="card-text">Location: {this.props.wine.location}</p>
                        <p className="card-text" className="rating">{this.props.wine.rating}/10</p>
                        <h5 className="card-title" className="subtitle">{this.props.wine.flavors}</h5>
                        <div className="btn-group-sm">
                        <button className="btn btn-light" onClick={() => {this.props.handleWineDelete(this.props.wine.entry_id, this.props.arrayIndex, this.props.currentWines)}}>DELETE</button>
                        <button className="btn btn-light" onClick={() => {this.props.handleFavorites(this.props.wine)}}>ADD to Faves</button>
                        <button className="btn btn-light" onClick={this.toggleUpdate}>
                            UPDATE
                        </button>
                        </div>
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
                    </div>
                : ''
                }
                </div>
            </div>
        )
    }
}


export default Wine;

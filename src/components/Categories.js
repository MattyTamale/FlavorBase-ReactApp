import React, { Component } from 'react';
import Food from './Food.js';
import Beer from './Beer.js';
import Wine from './Wine.js';
import Coffee from './Coffee.js';

class Categories extends Component {
    render(){
        return (
            <div className="categories">
                <div className="list-group">
                <h1>Beers: </h1>
                {this.props.currentBeers.map((beer, index) => {
                            return (
                                <div className="list-group-item">
                                <Beer
                                    key={index}
                                    beer={beer}
                                    arrayIndex={index}
                                    currentBeers={this.props.currentBeers}
                                    handleBeerDelete={this.props.handleBeerDelete}
                                    handleFavorites={this.props.handleFavorites}
                                    handleBeerUpdate={this.props.handleBeerUpdate}
                                />
                                </div>
                            )
                        })}
                </div>
                <div className="list-group">
                <h1>Foods: </h1>
                {this.props.currentFoods.map((food, index) => {
                            return (
                                <div className="list-group-item">
                                <Food
                                    key={index}
                                    food={food}
                                    arrayIndex={index}
                                    currentFoods={this.props.currentFoods}
                                    handleFoodDelete={this.props.handleFoodDelete}
                                    handleFavorites={this.props.handleFavorites}
                                    handleFoodUpdate={this.props.handleFoodUpdate}
                                />
                                </div>
                            )
                        })}
                </div>
                <div className="list-group">
                <h1>Coffees: </h1>
                {this.props.currentCoffees.map((coffee, index) => {
                    return (
                        <div className="list-group-item">
                        <Coffee
                            key={index}
                            coffee={coffee}
                            arrayIndex={index}
                            currentCoffees={this.props.currentCoffees}
                            handleCoffeeDelete={this.props.handleCoffeeDelete}
                            handleFavorites={this.props.handleFavorites}
                            handleCoffeeUpdate={this.props.handleCoffeeUpdate}
                        />
                        </div>
                            )
                        })}
                </div>
                <div className="list-group">
                <h1>Wines: </h1>
                {this.props.currentWines.map((wine, index) => {
                            return (
                                <div className="list-group-item">
                                <Wine
                                    key={index}
                                    wine={wine}
                                    arrayIndex={index}
                                    currentWines={this.props.currentWines}
                                    handleWineDelete={this.props.handleWineDelete}
                                    handleFavorites={this.props.handleFavorites}
                                    handleWineUpdate={this.props.handleWineUpdate}
                                />
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}


// <Beer
//     currentBeers={this.props.currentBeers}
//     handleDelete={this.props.handleDelete}
// />
// <Coffee
//     currentCoffees={this.props.currentCoffees}
// />
// <Wine
//     currentWines={this.props.currentWines}
// />
// <Food
//     currentFoods={this.props.currentFoods}
// />

export default Categories;

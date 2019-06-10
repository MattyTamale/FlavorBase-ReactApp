import React, { Component } from 'react';
import Food from './Food.js';
import Beer from './Beer.js';
import Wine from './Wine.js';
import Coffee from './Coffee.js';

class Categories extends Component {
    render(){
        return (
            <div className="categories">
                <div className="category">
                <h1>Beers: </h1>
                {this.props.currentBeers.map((beer, index) => {
                            return (
                                <Beer
                                    key={index}
                                    beer={beer}
                                    arrayIndex={index}
                                    currentBeers={this.props.currentBeers}
                                    handleBeerDelete={this.props.handleBeerDelete}
                                />
                            )
                        })}
                </div>
                <div className="category">
                <h1>Foods: </h1>
                {this.props.currentFoods.map((food, index) => {
                            return (
                                <Food
                                    key={index}
                                    food={food}
                                    arrayIndex={index}
                                    currentFoods={this.props.currentFoods}
                                    handleFoodDelete={this.props.handleFoodDelete}
                                />
                            )
                        })}
                </div>
                <div className="category">
                <h1>Coffees: </h1>
                {this.props.currentCoffees.map((coffee, index) => {
                    return (
                        <Coffee
                            key={index}
                            coffee={coffee}
                            arrayIndex={index}
                            currentCoffees={this.props.currentCoffees}
                            handleCoffeeDelete={this.props.handleCoffeeDelete}
                        />
                            )
                        })}
                </div>
                <div className="category">
                <h1>Wines: </h1>
                {this.props.currentWines.map((wine, index) => {
                            return (
                                <Wine
                                    key={index}
                                    wine={wine}
                                    arrayIndex={index}
                                    currentWines={this.props.currentWines}
                                    handleWineDelete={this.props.handleWineDelete}
                                />
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
import React, { Component } from 'react';
import Food from './Food.js';
import Beer from './Beer.js';
import Wine from './Wine.js';
import Coffee from './Coffee.js';

class Categories extends Component {
    render(){
        return (
            <div>
            {this.props.currentBeers.map((beer, index) => {
                        return (
                            <Beer
                                key={index}
                                beer={beer}
                                arrayIndex={index}
                                currentBeers={this.props.currentBeers}
                                handleDelete={this.props.handleDelete}
                            />
                        )
                    })}
                <Coffee
                    currentCoffees={this.props.currentCoffees}
                />
                <Wine
                    currentWines={this.props.currentWines}
                />
                <Food
                    currentFoods={this.props.currentFoods}
                />
            </div>
        )
    }
}


// <Beer
//     currentBeers={this.props.currentBeers}
//     handleDelete={this.props.handleDelete}
// />
export default Categories;

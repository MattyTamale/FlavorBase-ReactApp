import React, { Component } from 'react';
import Food from './Food.js';
import Beer from './Beer.js';
import Wine from './Wine.js';
import Coffee from './Coffee.js';

class Categories extends Component {
    render(){
        return (
            <div>
                <Beer
                    currentBeers={this.props.currentBeers}
                />
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

export default Categories;

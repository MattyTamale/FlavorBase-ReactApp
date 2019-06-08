<div>
    <h1>Foods: </h1>
    {this.state.currentFoods
        ? this.state.currentFoods.map((food, index) => {
            return <ul key={index}>
                <li>{food.date}</li>
                <li>{food.brand}</li>
                <li>{food.origin}</li>
                <li>{food.location}</li>
                <li>{food.rating}</li>
                <li>{food.favorite}</li>
                <li>{food.flavors}</li>
            </ul>
        })
        : 'test'}
</div>

<div>
    <h1>Coffees: </h1>
    {this.state.currentCoffees
        ? this.state.currentCoffees.map((coffee, index) => {
            return <ul key={index}>
                <li>{coffee.date}</li>
                <li>{coffee.brand}</li>
                <li>{coffee.origin}</li>
                <li>{coffee.location}</li>
                <li>{coffee.rating}</li>
                <li>{coffee.favorite}</li>
                <li>{coffee.flavors}</li>
            </ul>
        })
        : 'test'}
</div>

<div>
    <h1>Beers: </h1>
    {this.state.currentBeers
        ? this.state.currentBeers.map((beer, index) => {
            return <ul key={index}>
                <li>{beer.date}</li>
                <li>{beer.brand}</li>
                <li>{beer.origin}</li>
                <li>{beer.location}</li>
                <li>{beer.rating}</li>
                <li>{beer.favorite}</li>
                <li>{beer.flavors}</li>
            </ul>
        })
        : 'test'}
</div>

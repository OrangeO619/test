const Lists = ({pokemonsLists})=>{
    const imgCSS = {
            border:"1px solid darkorange",
            borderRadius:"10px",
        }
    return (
            <ul className="ul-container">
                {
                pokemonsLists.map(
                    (pokemon)=>{
                        return (
                            <div key={pokemon.url}>
                                <li>{pokemon.name}</li>
                                <img 
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                    style={imgCSS}
                                />
                            </div>
                        )
                    })
                }
            </ul> 
        )
}
/* class Lists extends React.Component{
    render(){
        const {pokemonsLists} = this.props
        const imgCSS = {
            border:"1px solid darkorange",
            borderRadius:"10px",
        }
        //return的时候只能是一个父元素，因此要用ul将多个同级的li包裹
        return (
            <ul className="ul-container">
                {
                pokemonsLists.map(
                    (pokemon)=>{
                        return (
                            <div key={pokemon.url}>
                                <li>{pokemon.name}</li>
                                <img 
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                    style={imgCSS}
                                />
                            </div>
                        )
                    })
                }
            </ul> 
        )
    }   
}
 */
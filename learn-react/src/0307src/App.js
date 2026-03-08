//函数组件
const App = () => {
    const [pokemons,setPokemons] = React.useState([])
    const [filteredPokemons,setFilteredPokemons] = React.useState([])
    React.useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res=>res.json())
            .then(json=>{
                json.results.map((result,index)=>{
                    result.id = index+1
                });
            setPokemons(json.results)
            setFilteredPokemons(json.results)
    })
},[])
    const onChangeHandler = (event)=>{
            const comparedPokemons = pokemons.filter(pokemon=>{
                return pokemon.name.includes(event.target.value)
            })
            setFilteredPokemons(comparedPokemons)
        }
    return (
        <div>
            <h1>宝可梦</h1>
            <Input onChangeHandler={onChangeHandler} />
            <Lists pokemonsLists={filteredPokemons} />
        </div>
    )
}
//类组件
/* class App extends React.Component{
        constructor(){
            super()
            this.state={
                pokemons:[],
                filteredPokemons:[]
            }
        }
        onChangeHandler = (event)=>{
            const comparedPokemons = this.state.pokemons.filter(pokemon=>{
                return pokemon.name.includes(event.target.value)
            })
            this.setState(
                ()=>{
                    return {filteredPokemons:comparedPokemons}
                },
                ()=>{
                    
                }
            )
        }
        componentDidMount(){
            fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res=>res.json())
            .then(json=>{
                json.results.map((result,index)=>{
                    result.id = index+1
                });
                this.setState(
                ()=>{
                    return {
                        pokemons:json.results,
                        filteredPokemons:json.results
                    }
                },
                ()=>{
                    console.log(this.state)
                }
            )
        })}
        render(){
          return(
            <div>
              <h1>宝可梦</h1>
              <Input onChangeHandler={this.onChangeHandler}/>
              <Lists pokemonsLists={this.state.filteredPokemons}/>
            </div>
          )
        }
      } */
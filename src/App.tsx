import PokemonList from "./components/PokemonList"
import Navigation from "./components/Navigation"
import PokemonContextProvider from "./components/PokemonContextProvider"

const style: React.CSSProperties = {
  width: '100%',
  height: '100%'
}

const titleStyle: React.CSSProperties = {
  fontWeight: '200',
  fontStyle: 'normal',
  textAlign: 'center',
  backgroundColor: 'rgb(172, 51, 51)',
  color: 'rgb(242, 244, 247)',
  fontSize: 'xx-large',
  padding: '20px',
  margin: '0',
}

function App() {
  return (
    <PokemonContextProvider>
      <div style={style}>
        <h1 style={titleStyle}>Pokedex</h1>
        <PokemonList />
        <Navigation />
      </div>
    </PokemonContextProvider>
  )
}

export default App

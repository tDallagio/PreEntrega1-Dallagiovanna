import './App.css'
import NavBar from './components/navBar/navBar'
import CartWidget from './components/cartWidget/cartWidget'
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting= "Hola, bienvenidos a mi ecommerce"></ItemListContainer>
    </>
  )
}

export default App

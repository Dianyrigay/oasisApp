import Navbar from './Components/Navbar/NavBar';
import ItemCount from './Components/ItemCount/ItemCount';
import './App.css';

const App = () => {

    return (
      <div className='App'>
        <Navbar/>
        <ItemCount
         stock="5"
         initial="1"
         />
      </div>
    )
}


export default App;


import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import { Header } from './Header';
import { Food } from './Food';
import { Mountain } from './Mountain';
import { Beaches } from './Beaches';
import { Birds } from './Birds';
function App() {
  return (
    <div className="App">
    <h1>Snapshot</h1>
    <div>
      <input type='text' placeholder='search' />
      <button>+</button>
    </div>
    <Header/>
<Routes>
  <Route path='/Food' element={<Food/>}/>
  <Route path='/Mountain' element={<Mountain/>}/>
  <Route path='/Beaches' element={<Beaches/>}/>
  <Route path='/Birds' element={<Birds/>}/>

</Routes>
    </div>
  );
}

export default App;

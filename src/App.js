import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { ThemeContext } from './ThemeContext';

function App() {
  return (
   <>
{/* <Navbar/> */}
<ThemeContext>
  <Navbar/>
</ThemeContext>
   </>  
   
  
  
  
  );
}

export default App;

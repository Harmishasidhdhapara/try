import React, { useContext } from 'react'
import"./Navbar.css"
import { Context } from './ThemeContext';

function Navbar() {
  const context =useContext(Context)

  console.log(context.theme)

  const themeStyle = {
      background: context.theme ? '#f1f1f1' : 'black',
      color: context.theme ? '#000000' : 'white',
      padding: '20px',
      borderRadius: '5px',
      margin: '20px',
  }

  const listStyle = {
      display: 'inline-block',
      margin: '10px',
      cursor: 'pointer',
  }

  return (
    <>
    
<div className='navbar'>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Class</li>
        <li>Blog</li>
        <li>contact</li>
        <li style={listStyle} onClick={()=> context.setTheme(!context.theme)}>lorem</li>
    </ul>
    
</div><br/><></><br/><></>
<div style={themeStyle}>
   <center><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, magnam. Qui, a assumenda magnam velit<br/> quidem provident voluptates repellendus veritatis dicta cumque neque incidunt est alias quae, porro modi<br/> mollitia!</p></center>

   <center><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, magnam. Qui, a assumenda magnam velit<br/> quidem provident voluptates repellendus veritatis dicta cumque neque incidunt est alias quae, porro modi<br/> mollitia!</p></center>
   

   <center><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, magnam. Qui, a assumenda magnam velit<br/> quidem provident voluptates repellendus veritatis dicta cumque neque incidunt est alias quae, porro modi<br/> mollitia!</p></center>


   <center><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, magnam. Qui, a assumenda magnam velit<br/> quidem provident voluptates repellendus veritatis dicta cumque neque incidunt est alias quae, porro modi<br/> mollitia!</p></center>

   <center><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, magnam. Qui, a assumenda magnam velit<br/> quidem provident voluptates repellendus veritatis dicta cumque neque incidunt est alias quae, porro modi<br/> mollitia!</p></center>
</div>
    


    
    </>
  )
}

export default Navbar;

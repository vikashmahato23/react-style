import { useEffect,useState } from 'react';
import './App.css';
import { Button } from './Component/button.jsx';



function App() {
 
  const [name,setTheme]=useState("primary");


  return (
    <div className="App">
      
     <Button       name={name}
                  
           
     onClick={()=>{
 
       if(name=="primary"){
         setTheme("Defalut Button")
       }
       else if(name=="Defalut Button"){
         setTheme("Dashed Button")
       }
       else if(name=="Dashed Button"){
         setTheme("Text Button")
       }
       else if(name=="Text Button"){
         setTheme("Link Button")
       }
       else if(name=="Link Button"){
         setTheme("primary")
       }
      
     }}>{name=="Link Button"?<a href="ww.goole.com">{name}</a>:name}</Button>
   

      
    </div>
  );
  
}

export default App;

// import "./button.css"
import styled from "styled-components"

// export const Button =({children,onClick}) =>{
//     return  <button onClick={onClick} classprops.Name="button">{children}</button> 
//                 //  <button>Add one</button>
// }


 const Button= styled.button`
    color:${(props)=>(props.name==="primary"?"white":"black")};
    background-color:${(props)=>(props.name==="primary"?"blue":"white")};
    border:none;
    padding:10px;
    padding-top:8px;
    text-align:center;
    cursor:pointer;
    height:50px;
    width:200px;
    margin:5px;
  `;
 export{Button}
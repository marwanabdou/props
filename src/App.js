import React from "react"
import { PropTypes } from "prop-types";
import './App.css';
import { Profile } from "./profile/profile";

function App() {
  const handleName = () => alert(`${'Click OK'}`);
  return (
    <div className="App">
      <Profile 
      handleName={handleName}
      name='Marwan Abdou' 
      bio='A software engineer with 10 years of experience in developing scalable, high-performance web applications using Java and JavaScript, seeking a challenging role in a forward-thinking company where I can use my skills to drive innovation and solve complex problems.' 
      profession='Software Engineer'>
      <img src="https://cdn.britannica.com/47/194547-050-52813FB0/aerial-view-Cairo-Egypt.jpg" alt= 'Description'/>
     

      </Profile>
      
    </div>
  );
}

export default App;




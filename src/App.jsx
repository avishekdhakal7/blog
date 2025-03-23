import React, { useEffect, useState } from 'react';  


import NavBar from "./components/NavBar"
import RouteLinks from "./components/Route-links"


export default function App() {
  
    const [data, setData] = useState(null);  

  

  return (


    <div> 
      <NavBar/>
      <RouteLinks/>
    </div>
  )
};





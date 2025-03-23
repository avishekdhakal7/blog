import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";


export default function RouteLinks(){
    return(
        <div>
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/*" element={<Home/>}/>
            </Routes>
        </div>
    )
}
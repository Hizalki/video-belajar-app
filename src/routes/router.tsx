
import { BrowserRouter, Routes, Route  } from "react-router";
import Login from "../pages/login";
import Register from "../pages/registrasi";
import HomePage from "../pages/home-page";


const RouterComponent = () => {
    return(
        <BrowserRouter>
                       <Routes>
                               <Route path="/" element={<Login/>} />
                               <Route path="/register" element={<Register/>} />
                               <Route path="/homepages" element={<HomePage/>} />
                       </Routes>
        </BrowserRouter>
    );
};

export default RouterComponent;
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import IntroStepper from "./pages/intro-stepper.jsx";
import Login from "./pages/login.jsx";
import Dashboard from "./pages/dashboard.jsx";
import LetsGo from "./pages/letsGo.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IntroStepper/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/move' element={<LetsGo/>}/>

            </Routes>
            <App/>
        </BrowserRouter>

    </StrictMode>,
)

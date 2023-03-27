import logo from './logo.svg';
import './App.scss';
import {Routes, Route} from "react-router-dom"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./page/home/home";
import Popular from "./page/popular/popular";
import TopRated from "./page/topRated/topRated";
import UpComing from "./page/upComing/upComing";
import DetailtPage from "./page/detailPage/detailtPage";
import {useState} from "react";

function App() {

    const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode') || false ))

    const changeThem = (mode) => {
        setMode(!mode)
        localStorage.setItem('mode', JSON.stringify(!mode))
    }
    return (
        <div style={{
            background: mode ? "#000" : "",
            color: mode ? "white" : "",
            transition:".3s"
        }}>
            <Header changeThem={changeThem}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/popular" element={<Popular/>}/>
                <Route path="/popular/popular-info/:id" element={<DetailtPage/>}/>
                <Route path="/top-rated" element={<TopRated/>}/>
                <Route path="/up-coming" element={<UpComing/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

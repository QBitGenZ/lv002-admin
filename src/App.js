import './App.css';
import Login from "./common/Login";
import {BrowserRouter, Link, Router, Switch} from "react-router-dom";
import "@fontsource/source-sans-pro"; // Defaults to weight 400
import "@fontsource/source-sans-pro/400.css"; // Specify weight
import "@fontsource/source-sans-pro/400-italic.css";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import {useEffect, useLayoutEffect, useState} from "react";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";
import Home from "./home";
import Category from "./category";
import Event from "./event";
import Device from "./device";
import User from "./user";
import Feedback from "./feedback"; // Specify weight and style

function App() {
    const [accessToken, setAccessToken] = useState(() =>
        localStorage.getItem('access'))
    const [refreshToken, setRefreshToken] = useState(() =>
        localStorage.getItem('refresh'))

    const [currentPage, setCurrentPage] = useState('Trang chủ')

    useEffect(() => {
        if(accessToken)
            document.querySelector('body').style.backgroundColor = 'rgba(248, 249, 250, 1)'
    }, [])

    const renderPage = () => {
        if (currentPage === 'Trang chủ') {
            return <Home/>;
        } else if (currentPage === 'Danh mục') {
            return <Category/>;
        }
        else if(currentPage === 'Sự kiện') {
            return <Event/>
        }
        else if(currentPage === 'Thiết bị') {
            return <Device/>
        }
        else if(currentPage === 'Người dùng') {
            return <User/>
        }
        else if(currentPage === 'Phản hồi') {
            return <Feedback/>
        }
    }


    if(!accessToken) {
        return <Login setAccessToken={setAccessToken} setRefreshToken={setRefreshToken}/>
    }
    else {
        return (
            <div className="App">
                <Header title={currentPage}/>
                <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage}
                         setAccessToken={setAccessToken} setRefreshToken={setRefreshToken} />
                {renderPage()}
            </div>
        );
    }

}

export default App;

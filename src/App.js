import React from 'react';
import s from './App.module.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    )
};

export default App;

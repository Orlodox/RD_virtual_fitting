import React, {useState} from 'react';
import s from './App.module.css';
import WidgetContainer from "./Components/Widget/WidgetContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";
import RootWithSlideWidget from 'react-sidebar';
import Login from "./Components/Login/Login";
import {connect} from "react-redux";


const App = (props) => {

    const [isWidgetShown, setIsWidgetShown] = useState(false);
    // const pathHistory = useHistory();
    // const isAuth = Math.random() > 0.5;
    // if (isAuth) pathHistory.push('/login');
    debugger
    if (props.isAuth)
        return (
            <RootWithSlideWidget
                sidebar={<WidgetContainer/>}
                open={isWidgetShown}
                onSetOpen={setIsWidgetShown}
                pullRight={true}
                styles={{sidebar: {background: "white"}}}>
                <div className={s.app}>
                    <HeaderContainer setIsWidgetShown={setIsWidgetShown}/>
                    <Sidebar/>
                    <Content/>
                </div>
            </RootWithSlideWidget>
        );
    else return <Login/>
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps)(App);


// Цветовая схема: https://spyserp.com/ru/blog/website-colors-2018

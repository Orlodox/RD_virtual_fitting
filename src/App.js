import React, {useState} from 'react';
import s from './App.module.css';
import Content from "./Components/Content/Content";
import Sidebar from "./Components/Sidebar/Sidebar";
import HeaderContainer from "./Components/Header/HeaderContainer";
import RootWithSlideWidget from 'react-sidebar'
import WidgetContainer from "./Components/Widget/WidgetContainer";


const App = () => {

    const [isWidgetShown, setIsWidgetShown] = useState(true);

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
    )
};

export default App;


// Цветовая схема: https://spyserp.com/ru/blog/website-colors-2018

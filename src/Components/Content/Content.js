import React from 'react';
import './Content.module.css';
import {Route} from "react-router-dom";
import AddPageContainer from "./AddPage/AddPageContainer";

const Content = () => {
    return (
        <>
            <Route exact path=''
                   render={() => (<div>Выберите готовое изделие или создайте новое</div>)}/>
            <Route exact path='/add'
                   render={() => <AddPageContainer/>}/>
            <Route path='/item'
                   render={() => (<div>ITEM INFO</div>)}/>
        </>)
};

export default Content;

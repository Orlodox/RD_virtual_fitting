import React from 'react';
import s from './Content.module.css';
import {Route} from "react-router-dom";
import AddPageContainer from "./AddPage/AddPageContainer";
import EditPageContainer from "./EditPage/EditPageContainer";

const Content = () => {
    return (
        <div className={s.content}>
            <Route exact path='/'
                   render={() => (<div className={s.loading}>Выберите готовое изделие или создайте новое</div>)}/>
            <Route exact path='/add'
                   render={() => <AddPageContainer/>}/>
            <Route exact path='/item/:itemID'
                   render={() => <EditPageContainer/>}/>
        </div>)
};

export default Content;

import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Widget from "./Widget";
import {setMenuItem, setSubtitle, setTitle, uploadBodyProfile} from "../../redux/widget-reducer";

class WidgetContainer extends React.Component {

    render() {
        return <Widget {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        currentMenuItem: state.widget.currentMenuItem,
        title: state.widget.title,
        subtitle: state.widget.subtitle
    }
};

export default compose(
    connect(mapStateToProps, {
        setMenuItem, uploadBodyProfile, setTitle, setSubtitle
    }))(WidgetContainer);
import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {setChoseBodyParam, uploadBodyProfile} from "../../../../redux/widget-reducer";
import BodyProfile from "./BodyProfile";
import BodyParameter from "./BodyParameter";
import {reduxForm} from "redux-form";

const initValues = {};

class BodyProfileContainer extends React.Component {

    componentDidMount() {
        this.props.uploadBodyProfile().then(res => {
                Object.assign(initValues,{...this.props.bodyProfile});
                console.log(initValues);
            }
        )
    }

    componentWillUnmount() {
        this.props.setChoseBodyParam(null)
    }

    saveAndGoBack() {
        this.props.setChoseBodyParam(null)
    }

    render() {
        return <form onSubmit={this.props.handleSubmit}>
            {this.props.choseBodyParam ? <BodyParameter
                {...this.props.choseBodyParam}
                // setTitle={this.props.setTitle}
                // setSubtitle={this.props.setSubtitle}
                value={this.props.bodyProfile[this.props.choseBodyParam.name]}
                saveAndGoBack={() => this.saveAndGoBack()}/> : <BodyProfile {...this.props}/>}
        </form>
    }
}


const mapStateToProps = (state) => {
    return {
        bodyProfile: state.widget.bodyProfile,
        bodyProfileInfo: state.widget.bodyProfileInfo,
        choseBodyParam: state.widget.choseBodyParam
    }
};

export default compose(
    connect(mapStateToProps, {
        setChoseBodyParam,
        uploadBodyProfile
    }))(reduxForm({
    form: 'bodyProfile',
    initialValues: initValues
})(BodyProfileContainer));
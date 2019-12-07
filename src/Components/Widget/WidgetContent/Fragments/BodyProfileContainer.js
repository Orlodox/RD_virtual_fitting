import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {saveBodyProfile, setChoseBodyParam, uploadBodyProfile} from "../../../../redux/widget-reducer";
import BodyProfile from "./BodyProfile";
import BodyParameter from "./BodyParameter";
import {change as changeFormField, formValueSelector, reduxForm} from "redux-form";

const initValues = {};

class BodyProfileContainer extends React.Component {

    componentDidMount() {
        this.props.uploadBodyProfile().then(res => {
                Object.assign(initValues, this.props.bodyProfile);
            }
        )
    }

    // componentWillUnmount() {
    //     this.props.setChoseBodyParam(null)
    // }

    // saveAndGoBack() {
    //     this.props.setChoseBodyParam(null)
    // }
    //
    changeValueByStep(fieldName, step) {
        this.props.changeFormField('bodyProfile', fieldName, parseFloat(this.props.formValue) + step)
    }

    render() {
        return <form onSubmit={this.props.handleSubmit}>
            {this.props.choseBodyParam ?
                <BodyParameter
                    {...this.props.choseBodyParam}
                    account_id={this.props.bodyProfile.account_id}
                    saveResCode={this.props.saveResCode}
                    value={parseFloat(this.props.formValue)}
                    saveBodyProfile={this.props.saveBodyProfile}
                    changeValueByStep={this.changeValueByStep.bind(this)}/>
                : <BodyProfile {...this.props}/>}
        </form>
    }
}


const mapStateToProps = (state) => {
    return {
        bodyProfile: state.widget.bodyProfile,
        bodyProfileInfo: state.widget.bodyProfileInfo,
        choseBodyParam: state.widget.choseBodyParam,
        saveResCode: state.widget.saveResultCode,
        formValue: formValueSelector('bodyProfile')(state, (state.widget.choseBodyParam && state.widget.choseBodyParam.name))
    }
};

export default compose(
    connect(mapStateToProps, {
        setChoseBodyParam,
        uploadBodyProfile,
        changeFormField,
        saveBodyProfile
    }))(reduxForm({
    form: 'bodyProfile',
    initialValues: initValues
})(BodyProfileContainer));
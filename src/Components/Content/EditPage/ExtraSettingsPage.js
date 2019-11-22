import React from 'react';
import MarksFragment from "./fragments/MarksFragment";
import ParametersFragment from "./fragments/ParametersFragment";

const ExtraSettingsPage = (props) => {

    return props.isMarkSettingsSelected ?
        <MarksFragment {...props}/>
        :
        <ParametersFragment {...props}/>
};

export default ExtraSettingsPage;
import { PageConfig, UXPage, AppContext, Navigate, Dispatch, Action, Lift, Util } from '@d-lift/core';
//import testData from './test';
import React from 'react';
import { UX } from '@d-lift/uxcomponents';
import { Components } from '@d-lift/uxcomponents';
import _ from 'lodash';

const PAGE_ACTIONS = {

};

let providerMap={};
let optionSelected;

@PageConfig({
    ContextRoot: 'Public',
    PageName: 'ProviderPortal',
    Description: 'Provider Portal Page',
    Path: '/',
    //Template: Template,
    LayoutStyle: 'demo',
    ContentManager: true
})

class ProviderPortal extends UXPage {

    initializeModel(data) {

        Navigate.to('/public/clw', {
            model: {
                ...data.selected
            },
        });
    }

    async onPageLoad(){
        const queryParams = new URLSearchParams(this.props.location.search);
        let fName=" ";
        let lName=" ";
        fName = queryParams.get('fName');
        lName = queryParams.get('LName');
        const user=queryParams.get('user');
        AppContext.model.setValue('fName',fName);
        AppContext.model.setValue('lName',lName);
        AppContext.model.setValue('user',user);
        Lift.Application.Security.login({ requestParams: user });
    }

    pageWillUnmount() {}

    async handleReloadEvent() {}

    async processData() {}
}

export default ProviderPortal;

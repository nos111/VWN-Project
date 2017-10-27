import React from "react";
import { connect } from 'react-redux';
import { selectOrg } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import OrgDetails from './org-details';
import {PanelGroup, Panel} from 'react-bootstrap'


class OrgList extends React.Component {
    componentDidUpdate()
    {
        $('.collapse').bootstrapToggle();
    }
    
    renderList() {
        console.log('started rendering')
        const panelGroupInstance = (
            <PanelGroup defaultActiveKey="2" accordion>
                <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
                <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
            </PanelGroup>
            );
        let elementsToRender = [];
        elementsToRender = this.props.orgs.map( (org,i) => {
            return (
                <Panel header={org.title} eventKey={i}>{org.description}</Panel>
            );}); 
        return elementsToRender;
    }
    render() {
        return (
            <PanelGroup className="col-xs-4" defaultActiveKey={this.props.orgs.length} accordion> 
                {this.renderList()}
            </PanelGroup>
        );
    }

}

function mapStateToProps(state) {
    return {
        orgs: state.organizations.active,
        tags: state.activeTags
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectOrg: selectOrg}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrgList);
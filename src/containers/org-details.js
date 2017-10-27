import React from 'react';
import { connect } from 'react-redux';


class OrganizationDetails extends React.Component {
    
    render() {
        if(!this.props.org) {
            return <div> </div>;
        }
        return (
            <div> Details for {this.props.org.description} </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        org: state.activeOrg
    };
}

export default connect(mapStateToProps)(OrganizationDetails);
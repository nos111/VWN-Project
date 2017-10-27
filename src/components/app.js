import React, { Component } from 'react';
import OrgList from '../containers/orgs-list';
//import OrgDetails from '../containers/org-details';
import Map from '../containers/google-maps';
import Tags from '../containers/tags'

export default class App extends Component {
  render() {
    return (
      <div>
        <Tags />
        <OrgList />
        <Map />
        
      </div>
    );
  }
}

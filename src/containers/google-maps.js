import React from 'react';
import { connect } from 'react-redux';


class GoogleMaps extends React.Component {
    renderMap() {
      
      const map = new google.maps.Map(this.refs.map, {
        zoom: 7,
        center: new google.maps.LatLng(52.104685, 5.294996),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      console.log("got here")
      var infowindow = new google.maps.InfoWindow();
  
      var marker, i;
      const locations = this.props.orgs;
      console.log(locations)
      for (i = 0; i < locations.length; i++) {  
          //console.log(locations[i])
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].position.lat, locations[i].position.lng),
            map: map
          });
    
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i].title + " " + locations[i].description);
              infowindow.open(map, marker);
            }
          })(marker, i));
      }
  }
//show a map on the start 
  componentDidMount() {
    this.renderMap()
  }
//rerender the map everytime the tags are updated
  reRender() {
    if(this.refs.map != undefined) {
      this.renderMap()
    }
  }

  render() {
      return <div ref="map" className='google-map'> {this.reRender()} </div>
  }
}

function mapStateToProps(state) {
  return {
    orgs: state.organizations.active
  };
}



export default connect(mapStateToProps)(GoogleMaps);
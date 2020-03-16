import React from 'react';
import GoogleMapReact from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <div style={{ height: '400px', width: '300px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: AIzaSyD299I8UJkhkEGd - QPlejRoQ5BcacAvoJ4 }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

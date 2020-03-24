/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import GoogleMapReact from 'google-maps-react';

// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)',
  }}>
    {text}
  </div>
);

class SimpleMap extends React.Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11,
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="Kreyser Avrora"
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;

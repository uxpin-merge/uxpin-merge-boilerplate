import React from 'react';
import Webcam from 'react-webcam';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

class CameraPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      webcam: null,
    };
  }

  setRef = (webcam) => {
    this.setState({
      ...this.state,
      webcam,
    });
  };

  capturePhoto = () => {
    const { webcam } = this.state;

    const imageSrc = webcam.getScreenshot();
    sessionStorage.setItem('cameraPreview', imageSrc);

    this.props.onClick();
  };

  render() {
    return (
      <div>
        <Webcam
          audio={false}
          ref={this.setRef}
          screenshotFormat="image/png"
          videoConstraints={{
            facingMode: 'user',
            height: this.props.cameraHeight,
            width: this.props.cameraWidth,
          }}
        />
        <Button onClick={this.capturePhoto} type="primary">Smile and Capture Image at the same time</Button>
      </div>
    );
  }
}

CameraPreview.propTypes = {
  cameraHeight: PropTypes.number,
  cameraWidth: PropTypes.number,
  onClick: PropTypes.func,
};

export default CameraPreview;

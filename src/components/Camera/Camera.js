import React from 'react';
import Webcam from 'react-webcam';
import PropTypes from 'prop-types';
import { css } from 'emotion';

class CameraPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      webcam: null,
      cameraAvailable: false,
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

  onCameraAvailable = () => {
    this.props.onAvailable();
    this.setState({
      ...this.state,
      cameraAvailable: true,
    });
  };

  onCameraError = () => {
    this.props.onNotAvailable();
    this.setState({
      ...this.state,
      cameraAvailable: false,
    });
  };

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Webcam
          ref={this.setRef}
          className={css`
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);
          `}
          style={this.props.videoStyle}
          width={this.props.cameraWidth || 500}
          height={this.props.cameraHeight || 500}
          onUserMedia={this.onCameraAvailable}
          onUserMediaError={this.onCameraError}
          audio={false}
          videoConstraints={{
            width: this.props.cameraWidth || 500,
            height: this.props.cameraHeight || 500,
            facingMode: 'user',
          }}
          screenshotFormat={this.props.screenshotFormat || 'image/png'}
        />
        {this.state.cameraAvailable && !this.props.hideButton && (
          <button
            className={css`
              background-color: rgba(0, 0, 0, 0.2);
              color: white;
              padding: 8px 16px;
              margin: 8px;
              text-align: center;
              z-index: 10;
              position: absolute;
              bottom: 0;
              left: 0;
              border-radius: 2px;
            `}
            style={{
              ...this.props.buttonStyle,
            }}
            onClick={this.capturePhoto}>
            {this.props.buttonText
              || 'Smile and Capture Image at the same time'}
          </button>
        )}
      </div>
    );
  }
}

CameraPreview.propTypes = {
  onAvailable: PropTypes.func,
  onNotAvailable: PropTypes.func,
  onClick: PropTypes.func,
  fileName: PropTypes.string,
  screenshotFormat: PropTypes.string,
  cameraWidth: PropTypes.number,
  cameraHeight: PropTypes.number,
  buttonText: PropTypes.string,
  buttonStyle: PropTypes.object,
  videoStyle: PropTypes.object,
  hideButton: PropTypes.bool,
};

export default CameraPreview;

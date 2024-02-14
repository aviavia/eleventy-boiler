import React from 'react';
import PropTypes from 'prop-types';

// Audio Widget Control Component
class AudioWidgetControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      // Assuming you have a mechanism to upload and return the file URL
      const fileUrl = URL.createObjectURL(file);
      this.props.onChange(fileUrl);
    } else {
      console.error('Selected file is not an audio.');
    }
  };

  render() {
    return (
      <div>
        <input type="file" accept="audio/*" onChange={this.handleChange} />
        {this.props.value && <p>Audio selected: {this.props.value}</p>}
      </div>
    );
  }
}

// Video Widget Control Component
class VideoWidgetControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      // Assuming you have a mechanism to upload and return the file URL
      const fileUrl = URL.createObjectURL(file);
      this.props.onChange(fileUrl);
    } else {
      console.error('Selected file is not a video.');
    }
  };

  render() {
    return (
      <div>
        <input type="file" accept="video/*" onChange={this.handleChange} />
        {this.props.value && <p>Video selected: {this.props.value}</p>}
      </div>
    );
  }
}

// Audio Widget Preview Component
const AudioWidgetPreview = ({ value }) => (
  <div>
    <h3>Audio Preview</h3>
    {value ? (
      <audio controls src={value}>
        Your browser does not support the audio element.
      </audio>
    ) : (
      <p>No audio file selected.</p>
    )}
  </div>
);

// Video Widget Preview Component
const VideoWidgetPreview = ({ value }) => (
  <div>
    <h3>Video Preview</h3>
    {value ? (
      <video controls src={value} style={{ width: '100%', maxHeight: '500px' }}>
        Your browser does not support the video tag.
      </video>
    ) : (
      <p>No video file selected.</p>
    )}
  </div>
);

export { AudioWidgetControl, VideoWidgetControl, AudioWidgetPreview, VideoWidgetPreview };

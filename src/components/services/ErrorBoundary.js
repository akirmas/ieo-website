import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      info: null,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      error,
      info
    });
  }

  render() {
    const { error, info } = this.state;

    if (error) {
      return (
        <div className="error-boundary">
          <details 
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <summary>Something went wrong</summary>
            <p>{error.toString()}</p>
            <hr />
            <p>{info.componentStack}</p>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
};

export default ErrorBoundary;
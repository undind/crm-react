import './_errorBoundary.scss';
import { Component, ErrorInfo } from 'react';

import { IS_PROD } from '../../utils/config';

export default class ErrorBoundaryComponentType extends Component {
  state = { hasError: false };

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (IS_PROD) {
      this.setState({ hasError: true });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error-boundary'>
          <div className='error-boundary__text'>Oops! Something went wrong...</div>
          <button onClick={() => (window.location.href = '/')} className='error-boundary__button'>
            Go to orders
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

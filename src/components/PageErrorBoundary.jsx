import { Component } from 'react';

/* Catches a page that fails to load or render, so the visitor sees a short
   message with a reload link (navbar and footer stay) instead of a blank
   screen. Keyed by pathname in App.jsx, so going to another page resets it. */
export default class PageErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.error('Page failed to load:', error);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div role="alert" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <p>Sorry, this page didn't load.</p>
        <p>
          <a href={window.location.pathname} onClick={(e) => { e.preventDefault(); window.location.reload(); }}>
            Reload the page
          </a>
        </p>
      </div>
    );
  }
}

import './BlobBackground.css';

export default function BlobBackground() {
  return (
    <div className="blob-bg" aria-hidden="true">
      <div className="blob-bg__blob blob-bg__blob--1" />
      <div className="blob-bg__blob blob-bg__blob--2" />
      <div className="blob-bg__blob blob-bg__blob--3" />
    </div>
  );
}

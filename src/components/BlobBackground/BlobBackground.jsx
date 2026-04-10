import './BlobBackground.css';

/**
 * Decorative background blobs that give the site a soft, welcoming feel.
 * Fixed position so they stay behind all content.
 */
export default function BlobBackground() {
  return (
    <div className="blobBackground" aria-hidden="true">
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />
    </div>
  );
}

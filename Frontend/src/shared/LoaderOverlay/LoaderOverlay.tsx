import "./LoaderOverlay.scss";

interface LoaderOverlayProps {
  isOpen: boolean;
  message?: string;
}

function LoaderOverlay({ isOpen, message = "Loading..." }: LoaderOverlayProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="loader-overlay" role="status" aria-live="polite" aria-label={message}>
      <div className="loader-overlay__panel">
        <span className="loader-overlay__spinner" aria-hidden="true"></span>
        <p className="loader-overlay__message">{message}</p>
      </div>
    </div>
  );
}

export default LoaderOverlay;

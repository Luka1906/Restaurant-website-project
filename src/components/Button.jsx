export default function Button({ children, type = "button", className = "" }) {
  return (
    <button
      className={`bg-primary-dark text-text-primary-light font-accent text-sm p-1 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}

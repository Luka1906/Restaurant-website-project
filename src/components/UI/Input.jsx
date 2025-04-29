export default function Input({ placeholder, className = "", ...props }) {
  return (
    <input
      className={`bg-bg-primary-light w-52 text-center border border-border-accent ${className}`}
      {...props}
      placeholder={placeholder}
    />
  );
}

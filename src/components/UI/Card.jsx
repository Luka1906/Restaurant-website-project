export default function Card({ children, className="" }) {
  return (
    <div className={`bg-text-primary-light  rounded-md ${className}`}>{children}</div>
  );
}

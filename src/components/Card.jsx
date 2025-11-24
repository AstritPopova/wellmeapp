export const Card = ({ children, className = "" }) => (
  <div className={`glass rounded-2xl p-4 ${className}`}>{children}</div>
);
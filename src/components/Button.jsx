export const Button = ({ children, onClick, type = "button", className = "" }) => (
  <button
    type={type}
    onClick={onClick}
    className={`w-full rounded-xl px-4 py-3 font-medium transition active:scale-[0.99]
    bg-gradient-to-r from-well.mint to-well.sky text-white shadow-lg ${className}`}
  >
    {children}
  </button>
);
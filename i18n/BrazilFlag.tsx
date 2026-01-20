export const BrazilFlag = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={`w-6 h-6 ${className}`}
    fill="none"
  >
    {/* Borda */}
    <rect
      x="1"
      y="4"
      width="30"
      height="24"
      rx="4"
      ry="4"
      stroke="currentColor"
      strokeWidth="1.5"
    />

    {/* Losango */}
    <path
      d="M3.5 16L16 24.5L28.5 16L16 7.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />

    {/* Círculo */}
    <circle cx="16" cy="16" r="4.5" stroke="currentColor" strokeWidth="1.5" />

    {/* Faixa */}
    <path
      d="M11 15.5C13.5 14.5 18.5 14.5 21 16.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

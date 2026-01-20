export const EUAFlag = ({ className = "" }) => (
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

    {/* Cantão (quadrado esquerdo) */}
    <rect
      x="1"
      y="4"
      width="13"
      height="10"
      stroke="currentColor"
      strokeWidth="1.2"
    />

    {/* Listras */}
    {[8, 11, 14, 17, 20, 23].map((y) => (
      <line
        key={y}
        x1="1"
        y1={y}
        x2="31"
        y2={y}
        stroke="currentColor"
        strokeWidth="1"
      />
    ))}

    {/* Estrelas simplificadas */}
    {[4, 7, 10].map((y) =>
      [4, 7, 10].map((x) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="0.7"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))
    )}
  </svg>
);

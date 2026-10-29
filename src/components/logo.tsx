// Logo "<FT>" hecho con barras redondeadas: la barra superior es compartida por la F y la T.
const FT = (
  <>
    <rect x="34" y="6" width="58" height="10" rx="5" />
    <rect x="34" y="6" width="10" height="36" rx="5" />
    <rect x="34" y="22" width="26" height="9" rx="4.5" />
    <rect x="68" y="6" width="10" height="36" rx="5" />
  </>
);

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="28 0 70 48" className={className} aria-hidden="true" fill="var(--accent)">
      {FT}
    </svg>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 48" className={className} aria-hidden="true">
      <g fill="var(--accent)">{FT}</g>
      <g fill="none" stroke="var(--accent)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11 9 24l13 13" />
        <path d="m98 11 13 13-13 13" />
      </g>
    </svg>
  );
}

export default Logo;

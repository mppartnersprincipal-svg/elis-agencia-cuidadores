interface LogoElisProps {
  variant?: 'full' | 'compact'
  className?: string
}

export default function LogoElis({ variant = 'full', className = '' }: LogoElisProps) {
  if (variant === 'compact') {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Elis Agência de Cuidadores"
        role="img"
      >
        {/* Blob background */}
        <ellipse cx="18" cy="26" rx="16" ry="18" fill="#6b9e72" opacity="0.55" />
        <ellipse cx="32" cy="22" rx="15" ry="17" fill="#c8e3c8" opacity="0.7" />
        {/* E letter */}
        <text
          x="10"
          y="36"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="bold"
          fontSize="28"
          fill="#4a7355"
          letterSpacing="-1"
        >
          E
        </text>
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 260 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Elis Agência de Cuidadores"
      role="img"
    >
      {/* Background blobs */}
      <ellipse cx="62" cy="52" rx="52" ry="50" fill="#6b9e72" opacity="0.45" />
      <ellipse cx="105" cy="46" rx="58" ry="48" fill="#c8e3c8" opacity="0.65" />
      <circle cx="38" cy="24" r="18" fill="#c8e3c8" opacity="0.5" />

      {/* Care icon — simplified person/hands */}
      <g transform="translate(28, 20)" opacity="0.85">
        <circle cx="10" cy="5" r="4" stroke="#4a7355" strokeWidth="1.5" fill="none" />
        <path d="M6 13 Q10 10 14 13 L16 22 Q10 25 4 22 Z" stroke="#4a7355" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
        <path d="M2 18 Q-1 15 2 13" stroke="#4a7355" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M18 18 Q21 15 18 13" stroke="#4a7355" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M8 22 Q10 26 10 28" stroke="#4a7355" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M12 22 Q10 26 10 28" stroke="#4a7355" strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>

      {/* ELIS lettering */}
      <text
        x="28"
        y="82"
        fontFamily="Georgia, 'Playfair Display', 'Times New Roman', serif"
        fontWeight="700"
        fontSize="58"
        fill="#4a7355"
        letterSpacing="2"
      >
        ELIS
      </text>

      {/* Decorative underline swash */}
      <path
        d="M28 88 Q80 96 170 86"
        stroke="#4a7355"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Agência de Cuidadores */}
      <text
        x="28"
        y="104"
        fontFamily="Georgia, 'Playfair Display', 'Times New Roman', serif"
        fontWeight="400"
        fontSize="14"
        fill="#4a7355"
        letterSpacing="1"
      >
        Agência de Cuidadores
      </text>
    </svg>
  )
}

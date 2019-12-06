import React from 'react'

interface LogoProps {
  height: number
  width: number
}

export const Logo = ({ height, width }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 60 60">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        transform="translate(-466 -1076) translate(466 1076)">
        <path
          fill="#004DCA"
          d="M1 0h29c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30H1a1 1 0 01-1-1V1a1 1 0 011-1z"></path>
        <rect
          width="22.388"
          height="60"
          x="0"
          y="0"
          fill="#181196"
          rx="1"></rect>
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M2 6.94a18.26 18.26 0 0111.417-1.656c9.855 1.741 16.464 10.99 14.762 20.66-.764 4.336-3.085 8.037-6.316 10.632l.64.863 2.17.383L36 53.71 31.203 57l-11.36-15.865.375-2.128-.609-.885A18.236 18.236 0 017.253 40.3 18.438 18.438 0 012 38.532v-6.604a11.96 11.96 0 008.021 3.064c6.64 0 12-5.36 12-12s-5.36-12-12-12a11.96 11.96 0 00-8.02 3.065z"></path>
        <circle cx="10" cy="23" r="9" fill="#FFF" fillRule="nonzero"></circle>
      </g>
    </svg>
  )
}

import * as React from 'react'

export const TwitterIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.23em"
    height="1em"
    viewBox="0 0 256 209"
    className={`w-full h-auto ${className}`}
    {...props}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
)

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
)

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
)

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
)

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
)

export const CircularText = ({ className, ...rest }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="1080.000000pt"
    height="1080.000000pt"
    viewBox="0 0 1080.000000 1080.000000"
    preserveAspectRatio="xMidYMid meet"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <g
      transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
      className="dark:fill-light"
    >
      <path
        d="M5536 9389 c-120 -39 -212 -134 -247 -257 -24 -85 -24 -134 0 -210
 41 -128 119 -210 246 -258 70 -27 230 -27 300 0 100 39 101 41 108 163 4 59 9
 125 13 146 l7 37 -46 0 c-25 0 -49 -4 -52 -10 -3 -5 -8 -43 -11 -82 -10 -148
 -12 -155 -47 -169 -20 -9 -68 -14 -127 -13 -78 0 -103 4 -139 23 -69 36 -126
 102 -150 173 -25 75 -26 95 -3 175 58 207 317 281 494 141 l39 -31 25 23 c36
 35 30 54 -30 94 -111 74 -257 95 -380 55z"
      />
      <path
        d="M6210 9102 c-21 -7 -25 -14 -25 -46 l0 -38 105 -1 c92 -2 110 -5 147
 -27 46 -27 57 -53 54 -125 -1 -49 -13 -62 -43 -47 -44 22 -144 45 -214 49 -90
 6 -134 -17 -164 -84 -25 -57 -25 -79 -1 -129 24 -49 43 -66 105 -94 39 -17 62
 -21 125 -18 42 2 84 8 94 12 14 7 17 3 17 -17 0 -34 26 -59 58 -55 23 3 28 11
 44 73 24 91 44 160 59 210 7 22 12 76 13 120 1 64 -3 86 -18 109 -23 33 -78
 70 -138 91 -49 18 -181 28 -218 17z m130 -318 c114 -29 121 -34 114 -74 -10
 -53 -18 -64 -69 -89 -38 -19 -57 -22 -98 -18 -57 7 -115 41 -136 80 -18 35 0
 82 43 109 33 20 40 20 146 -8z"
      />
      <path
        d="M4233 9050 c-50 -27 -63 -40 -86 -89 -18 -39 -22 -42 -31 -27 -31 53
 -39 57 -74 45 -32 -11 -33 -14 -27 -47 4 -20 13 -49 21 -64 8 -15 14 -33 14
 -40 0 -7 6 -24 13 -38 7 -14 19 -46 26 -73 8 -26 18 -50 22 -53 5 -3 9 -14 9
 -24 0 -11 6 -34 14 -52 8 -18 21 -53 30 -78 9 -25 20 -51 25 -59 10 -16 45 -9
 75 14 18 13 18 16 2 39 -9 14 -16 33 -16 42 0 9 -6 30 -13 47 -83 196 -83 286
 -3 352 24 19 50 35 60 35 20 0 20 8 1 54 -17 40 -17 40 -62 16z"
      />
      <path
        d="M6871 8906 c-12 -18 -21 -37 -21 -40 0 -4 -11 -22 -24 -39 -13 -18
 -39 -60 -57 -93 -19 -34 -60 -105 -91 -158 -32 -54 -58 -104 -58 -112 0 -12
 54 -54 70 -54 3 0 21 28 39 63 43 80 120 206 146 238 25 30 86 59 124 59 41 0
 116 -36 140 -67 16 -19 21 -40 21 -84 0 -57 -8 -76 -80 -199 -5 -8 -27 -46
 -49 -84 -23 -38 -41 -74 -41 -82 0 -14 47 -54 64 -54 6 1 45 60 86 132 110
 193 136 218 224 218 59 0 87 -12 130 -55 32 -32 36 -41 36 -88 -1 -43 -9 -66
 -45 -132 -25 -44 -50 -91 -57 -105 -7 -14 -25 -43 -40 -64 -45 -62 -32 -111
 27 -104 23 3 40 25 118 161 76 134 91 166 95 212 7 84 -4 117 -51 165 -77 76
 -176 108 -274 86 -29 -7 -32 -5 -38 26 -16 75 -62 128 -143 165 -42 20 -65 24
 -117 21 -69 -3 -68 -5 -48 48 5 14 -35 54 -53 54 -7 0 -22 -15 -33 -34z"
      />
      <path
        d="M3640 8801 c-99 -30 -176 -106 -205 -199 -17 -60 -17 -76 5 -162 13
 -54 63 -121 122 -164 39 -29 50 -31 135 -34 81 -3 98 -1 146 21 70 32 127 84
 156 142 26 52 20 65 -31 65 -20 0 -31 -8 -42 -29 -56 -107 -219 -153 -313 -88
 -62 42 -58 49 72 117 44 24 87 49 96 56 8 8 22 14 30 14 8 0 19 4 25 9 5 5 37
 23 71 41 60 31 62 32 50 58 -38 90 -147 163 -241 161 -28 0 -62 -4 -76 -8z
 m115 -82 c41 -11 95 -53 95 -74 0 -6 -19 -21 -42 -33 -24 -12 -70 -38 -103
 -57 -33 -19 -71 -39 -85 -45 -14 -6 -32 -18 -42 -26 -9 -9 -27 -14 -40 -12
 -20 3 -23 9 -26 53 -5 87 56 168 146 195 38 12 51 11 97 -1z"
      />
      <path
        d="M4802 8728 c-19 -19 -15 -82 6 -101 26 -24 65 -21 90 6 43 46 16 107
 -47 107 -20 0 -42 -5 -49 -12z"
      />
      <path
        d="M7991 8434 c-12 -15 -21 -30 -21 -34 0 -4 9 -19 21 -34 14 -18 30
 -26 53 -26 40 0 56 15 56 55 0 63 -71 88 -109 39z"
      />
      <path
        d="M3050 8423 c-58 -29 -135 -114 -153 -171 -26 -78 -21 -132 20 -218
 44 -93 152 -164 249 -164 143 0 314 140 314 257 0 27 -4 31 -31 35 -29 5 -32
 1 -56 -49 -27 -56 -103 -132 -145 -145 -57 -16 -123 -8 -162 19 l-39 26 29 26
 c54 47 168 140 247 202 42 33 77 67 77 74 0 18 -85 94 -125 111 -49 20 -181
 18 -225 -3z m179 -72 c62 -32 66 -43 28 -78 -18 -16 -40 -34 -49 -39 -8 -5
 -38 -28 -65 -51 -27 -23 -69 -58 -94 -77 l-44 -36 -17 23 c-24 31 -24 117 1
 165 23 45 50 70 99 93 49 23 95 23 141 0z"
      />
      <path
        d="M7835 8239 c-22 -28 -74 -88 -116 -132 -125 -134 -199 -221 -199
 -235 0 -13 47 -62 60 -62 4 0 38 37 76 82 38 45 76 89 84 98 197 211 211 229
 201 248 -9 16 -54 53 -63 52 -2 -1 -21 -24 -43 -51z"
      />
      <path
        d="M8068 8015 c-26 -24 -71 -62 -100 -84 -29 -21 -67 -52 -85 -69 -17
 -16 -65 -57 -107 -91 l-76 -62 26 -35 c15 -19 31 -34 36 -34 12 0 49 28 103
 79 22 20 71 62 110 92 l69 54 72 0 c70 0 75 -2 109 -35 41 -39 75 -98 75 -130
 0 -45 -41 -100 -127 -171 -121 -99 -173 -150 -173 -169 0 -9 11 -27 24 -39
 l25 -23 48 40 c26 22 89 75 140 116 149 124 185 200 143 306 -36 93 -117 162
 -203 174 l-48 7 26 30 c29 36 30 38 9 67 -22 32 -43 27 -96 -23z"
      />
      <path
        d="M2597 7969 c-21 -5 -53 -21 -72 -35 -40 -30 -95 -112 -95 -140 0 -11
 -4 -24 -9 -29 -5 -6 -11 -27 -13 -48 l-3 -39 -29 23 -29 23 -23 -30 c-13 -16
 -24 -34 -24 -41 0 -7 33 -38 73 -70 39 -32 104 -85 142 -119 39 -33 77 -65 87
 -70 9 -5 37 -28 62 -51 24 -24 49 -43 54 -43 13 0 52 44 52 60 0 15 -57 69
 -140 133 -121 93 -148 138 -137 233 9 85 94 160 171 150 33 -4 123 -55 160
 -91 35 -34 180 -155 185 -155 8 0 49 53 53 68 2 5 -24 32 -58 58 -33 27 -89
 74 -125 104 -96 83 -124 100 -180 110 -29 6 -54 10 -58 9 -3 -1 -23 -5 -44
 -10z"
      />
      <path
        d="M1930 7541 c-16 -31 -12 -58 12 -81 29 -26 59 -25 86 3 44 46 18 97
 -48 97 -29 0 -42 -5 -50 -19z"
      />
      <path
        d="M2150 7428 c-31 -47 -30 -55 3 -81 18 -13 86 -56 152 -96 66 -40 152
 -92 190 -116 94 -60 135 -58 135 6 0 23 -13 34 -97 85 -54 33 -102 61 -108 64
 -5 3 -21 12 -35 21 -37 24 -222 139 -224 139 0 0 -8 -10 -16 -22z"
      />
      <path
        d="M8420 7398 c-14 -6 -42 -17 -63 -26 -76 -31 -147 -146 -147 -236 0
 -36 31 -131 49 -149 6 -6 11 -16 11 -23 0 -16 67 -74 112 -99 28 -14 35 -22
 26 -32 -6 -7 -16 -13 -22 -13 -6 0 -24 -7 -41 -16 -74 -39 -171 2 -224 95 -27
 49 -51 136 -51 188 l0 53 -35 0 c-22 0 -37 -6 -43 -17 -11 -21 12 -181 28
 -197 5 -5 10 -17 10 -25 0 -27 84 -139 124 -165 65 -42 112 -51 172 -32 28 9
 55 16 61 16 9 0 146 71 292 152 36 20 94 50 129 67 34 17 62 36 62 42 0 19
 -34 69 -47 69 -6 0 -16 -6 -20 -12 -4 -7 -15 -14 -24 -14 -14 -1 -15 9 -12 65
 7 93 -23 168 -92 238 -29 29 -66 55 -81 58 -16 4 -39 11 -52 16 -30 12 -90 10
 -122 -3z m128 -95 c65 -21 110 -71 136 -150 16 -49 16 -57 2 -107 -13 -44 -26
 -63 -63 -93 -44 -36 -49 -38 -119 -38 -66 0 -76 3 -111 31 -51 41 -92 117 -93
 172 0 80 51 149 136 182 60 23 47 23 112 3z"
      />
      <path
        d="M1976 7128 c-24 -33 -20 -47 19 -65 27 -13 32 -19 24 -30 -6 -7 -19
 -13 -29 -13 -22 0 -103 -86 -116 -125 -39 -107 -42 -144 -21 -222 15 -59 87
 -135 154 -164 66 -29 147 -29 208 0 50 23 145 113 145 136 0 7 7 26 15 41 17
 33 20 139 5 179 -9 24 -8 26 12 19 51 -15 98 -45 120 -76 18 -26 23 -46 23
 -98 0 -84 -29 -144 -107 -222 l-59 -58 18 -24 c28 -39 54 -32 112 29 108 114
 160 294 113 388 -12 23 -36 56 -54 74 -31 30 -213 123 -241 123 -7 0 -17 4
 -22 9 -6 5 -39 21 -75 36 -69 28 -119 50 -162 72 -38 19 -65 16 -82 -9z m231
 -160 c62 -35 83 -59 99 -114 27 -93 -9 -184 -95 -243 -34 -23 -58 -31 -89 -31
 -45 0 -109 27 -142 60 -27 27 -60 95 -60 124 0 33 35 122 61 155 54 68 154 90
 226 49z"
      />
      <path
        d="M9205 6459 c-16 -5 -66 -16 -110 -24 -44 -9 -111 -23 -150 -31 -38
 -8 -95 -19 -125 -24 -30 -6 -82 -17 -115 -24 -33 -8 -85 -20 -115 -26 -80 -16
 -85 -20 -66 -65 9 -20 16 -52 16 -69 0 -17 5 -47 10 -66 6 -19 17 -69 25 -110
 8 -41 19 -93 25 -115 5 -22 12 -57 15 -77 5 -31 10 -38 29 -38 12 0 30 6 40
 13 20 14 19 28 -2 117 -20 82 -47 226 -54 290 -3 23 2 26 53 36 31 6 71 16 89
 23 18 6 48 11 66 11 36 0 37 -1 49 -90 3 -24 10 -49 14 -55 5 -5 11 -36 14
 -67 3 -32 11 -74 18 -95 6 -21 13 -43 15 -50 2 -8 12 -9 31 -4 25 6 28 13 31
 51 2 24 -4 74 -12 110 -32 136 -46 214 -39 220 12 10 214 51 223 45 4 -3 10
 -17 13 -32 3 -16 13 -66 22 -112 8 -46 20 -91 25 -101 6 -10 10 -36 11 -57 2
 -81 24 -111 72 -99 33 8 34 22 8 131 -24 103 -40 176 -51 245 -11 67 -31 139
 -39 144 -3 1 -19 -1 -36 -5z"
      />
      <path
        d="M1775 6371 c-34 -14 -103 -97 -114 -137 -18 -65 -14 -165 9 -209 11
 -22 20 -41 20 -42 0 -2 -13 -3 -29 -3 -30 0 -61 -30 -61 -57 0 -24 29 -33 260
 -73 36 -6 79 -15 96 -21 17 -5 66 -15 110 -23 89 -15 94 -13 94 45 l0 37 -67
 11 c-38 7 -99 19 -138 27 -38 9 -79 17 -90 20 -66 13 -145 102 -145 164 0 47
 31 118 65 150 24 22 35 25 103 24 42 -1 115 -11 162 -22 47 -12 109 -23 139
 -24 55 -3 55 -3 62 30 9 43 -12 57 -105 72 -37 6 -96 17 -130 25 -66 16 -208
 19 -241 6z"
      />
      <path
        d="M2058 5473 l-3 -218 -121 -3 -121 -3 -6 68 c-4 37 -7 123 -7 191 l0
 122 -40 0 -40 0 0 -190 0 -190 -57 -2 c-93 -4 -157 -3 -170 1 -10 2 -13 53
 -13 212 l0 209 -45 0 -45 0 0 -265 0 -265 233 0 c331 0 518 10 524 27 3 8 2
 128 -2 268 l-7 255 -39 0 -39 0 -2 -217z"
      />
      <path
        d="M8639 5661 c-7 -17 -7 -33 0 -47 9 -21 16 -22 183 -26 193 -4 212 -9
 262 -71 27 -34 30 -45 31 -110 0 -61 -4 -77 -24 -104 -37 -49 -68 -56 -263
 -61 -117 -2 -180 -8 -186 -15 -5 -7 -7 -27 -5 -45 l6 -34 206 4 c118 3 217 9
 232 16 35 14 99 80 99 102 0 9 5 21 11 27 17 17 16 121 0 173 -8 25 -27 61
 -43 81 -30 40 -25 49 28 49 21 0 24 5 24 34 0 19 -5 38 -11 42 -7 4 -131 8
 -276 9 l-265 2 -9 -26z"
      />
      <path
        d="M9113 4992 c-6 -4 -15 -23 -20 -42 -9 -31 -13 -35 -39 -32 -59 5
 -170 21 -214 31 -77 17 -159 14 -196 -9 -46 -29 -74 -92 -74 -166 0 -73 9 -89
 44 -80 23 6 26 11 26 53 0 60 31 113 68 114 61 2 126 -3 148 -12 13 -4 54 -11
 91 -15 38 -3 81 -10 96 -16 24 -9 28 -15 23 -37 -3 -14 -9 -49 -12 -78 -6 -50
 -6 -52 20 -59 37 -9 53 9 61 69 11 85 8 82 77 82 l63 0 3 41 3 41 -53 9 -53 9
 2 47 c1 39 -2 47 -20 52 -28 7 -30 7 -44 -2z"
      />
      <path
        d="M2106 4698 c-22 -31 -20 -41 10 -69 15 -13 38 -42 52 -64 23 -34 27
 -51 27 -116 0 -68 -3 -79 -28 -112 -16 -21 -40 -45 -53 -54 -33 -21 -45 -9
 -60 60 -16 66 -39 153 -53 192 -6 17 -18 61 -28 99 -10 37 -23 70 -30 73 -13
 5 -110 -39 -146 -67 -14 -11 -37 -41 -53 -67 -24 -42 -27 -57 -27 -135 1 -97
 18 -145 76 -206 56 -59 101 -77 197 -77 101 0 147 20 220 95 81 83 98 182 53
 311 -19 54 -104 159 -128 159 -8 0 -21 -10 -29 -22z m-179 -149 c7 -24 17 -53
 22 -64 8 -20 17 -51 46 -168 9 -32 12 -63 9 -69 -11 -18 -95 0 -131 28 -81 62
 -107 163 -61 243 22 39 75 84 93 78 5 -2 15 -23 22 -48z"
      />
      <path
        d="M8528 4569 l-17 -40 27 -10 c28 -11 68 -26 211 -75 55 -19 98 -41
 125 -65 l41 -37 0 -85 0 -86 -45 -46 c-44 -46 -46 -46 -100 -42 -49 4 -188 46
 -276 84 -32 13 -56 17 -86 15 -18 -2 -43 -61 -30 -74 4 -4 91 -35 192 -69 152
 -50 193 -60 231 -55 84 9 152 67 184 157 17 50 20 165 5 174 -12 7 -14 45 -2
 45 9 0 127 -39 167 -56 17 -7 50 -14 75 -16 l45 -3 0 40 0 40 -110 38 c-60 20
 -171 58 -245 84 -74 25 -155 53 -180 61 -25 8 -59 20 -77 28 -17 8 -42 14 -56
 14 -14 0 -29 5 -32 10 -13 20 -30 9 -47 -31z"
      />
      <path
        d="M2375 3986 c-190 -93 -225 -106 -278 -106 -47 0 -59 5 -95 35 -22 20
 -44 44 -47 55 -11 34 -95 20 -95 -16 0 -18 78 -104 95 -104 7 0 25 -6 40 -14
 l27 -14 -31 -16 c-22 -12 -31 -24 -31 -40 0 -67 22 -70 129 -20 42 19 90 42
 106 49 17 8 80 37 140 66 61 28 120 55 133 60 12 5 22 17 22 28 0 11 -10 31
 -22 45 l-23 26 -70 -34z"
      />
      <path
        d="M8300 3895 c-7 -8 -18 -15 -24 -15 -14 0 -76 -61 -76 -75 0 -4 -6
 -16 -13 -24 -26 -32 -39 -92 -32 -147 7 -57 2 -63 -29 -39 -28 21 -41 19 -54
 -10 -21 -46 -15 -60 40 -91 28 -16 63 -36 77 -44 56 -33 177 -105 192 -115 9
 -5 39 -22 67 -37 28 -15 53 -32 57 -38 12 -19 32 -10 51 25 16 31 17 36 3 50
 -17 17 -179 118 -224 139 -16 8 -46 31 -65 50 -30 32 -35 43 -38 100 -4 54 -1
 70 20 105 36 60 73 85 127 85 48 0 99 -24 260 -122 96 -58 121 -62 144 -21 17
 30 17 32 0 45 -10 8 -31 21 -48 29 -32 17 -45 25 -115 69 -114 74 -170 96
 -240 96 -48 0 -71 -4 -80 -15z"
      />
      <path
        d="M2439 3721 c-177 -119 -229 -161 -250 -202 -52 -102 10 -251 145
 -350 49 -36 79 -37 94 -4 10 21 9 28 -8 45 -11 11 -24 20 -28 20 -15 0 -94 85
 -113 122 -26 51 -24 94 6 134 50 65 57 63 121 -29 100 -144 140 -177 217 -177
 51 0 121 44 137 86 16 41 11 116 -10 161 -28 62 -109 140 -154 149 l-37 6 20
 22 c27 29 26 47 -2 74 l-22 21 -116 -78z m134 -105 c42 -17 93 -76 108 -124 9
 -31 8 -45 -4 -74 -13 -30 -22 -38 -53 -44 -26 -5 -46 -2 -63 7 -28 16 -114
 120 -135 164 -14 29 -13 31 17 58 35 30 78 35 130 13z"
      />
      <path
        d="M7978 3414 c-61 -32 -169 -140 -197 -197 -56 -115 4 -241 115 -239
 47 0 63 9 182 99 89 67 126 78 155 45 45 -50 -2 -153 -97 -216 -64 -42 -73
 -55 -56 -85 23 -43 74 -19 169 78 30 31 62 74 72 96 53 116 -11 241 -122 239
 -46 0 -118 -39 -181 -98 -41 -39 -90 -66 -119 -66 -35 0 -61 49 -49 91 18 62
 96 141 176 178 24 12 44 23 44 26 0 15 -30 75 -37 74 -4 0 -29 -12 -55 -25z"
      />
      <path
        d="M2831 3169 c-74 -37 -141 -70 -150 -73 -9 -3 -24 -10 -33 -16 -41
 -24 -54 -30 -68 -36 -43 -17 -140 -66 -144 -73 -3 -4 7 -19 22 -34 l27 -25 75
 38 c41 22 82 42 90 46 8 3 69 33 136 65 67 33 124 59 128 59 11 0 6 -22 -20
 -84 -14 -33 -31 -74 -38 -91 -7 -16 -20 -46 -29 -65 -8 -19 -22 -51 -30 -70
 -9 -19 -25 -57 -36 -84 l-21 -49 22 -24 c27 -28 67 -30 101 -3 14 11 29 20 35
 20 5 0 55 23 110 50 56 28 104 50 108 50 4 0 15 6 23 13 18 14 90 41 96 35 2
 -2 -33 -90 -79 -195 -100 -231 -103 -243 -70 -274 15 -14 28 -19 33 -13 5 5
 34 70 66 144 31 74 61 144 66 155 57 129 89 212 89 230 0 12 -13 33 -28 48
 l-28 27 -69 -34 c-39 -18 -127 -61 -197 -95 -70 -33 -132 -61 -138 -61 -13 0
 -13 25 0 48 5 9 28 62 50 117 23 55 45 109 50 120 34 77 50 120 50 134 0 9
 -15 28 -33 42 l-32 26 -134 -68z"
      />
      <path
        d="M7567 3012 l-26 -27 30 -35 c17 -19 63 -69 103 -110 40 -41 110 -118
 156 -170 45 -52 86 -96 89 -98 4 -1 22 13 40 32 l32 33 -72 79 c-40 44 -106
 115 -148 160 -42 44 -93 99 -114 122 -21 23 -44 42 -51 42 -7 0 -24 -12 -39
 -28z"
      />
      <path
        d="M7300 2801 c-57 -36 -110 -95 -110 -124 0 -12 -4 -29 -10 -37 -7 -12
 -12 -11 -30 5 -16 15 -26 17 -47 9 -47 -16 -49 -35 -11 -90 19 -27 68 -96 109
 -154 40 -58 85 -114 98 -125 37 -30 92 -54 123 -55 33 0 124 35 145 55 8 8 18
 15 22 15 15 0 95 89 118 132 22 40 22 44 6 56 -29 21 -62 15 -75 -15 -46 -104
 -189 -174 -258 -126 -25 17 -59 53 -60 63 0 3 41 34 90 69 151 107 189 169
 156 255 -10 25 -31 57 -47 71 -27 22 -40 25 -102 25 -62 0 -79 -4 -117 -29z
 m161 -80 c36 -36 37 -64 3 -108 -27 -35 -159 -133 -179 -133 -22 0 -65 67 -65
 100 0 31 33 92 66 122 62 55 131 63 175 19z"
      />
      <path
        d="M3487 2723 c-4 -3 -7 -17 -7 -30 0 -18 5 -23 25 -23 30 0 105 -69
 105 -96 0 -23 -23 -70 -65 -134 -17 -25 -36 -54 -42 -65 -7 -11 -27 -44 -45
 -72 -18 -29 -38 -53 -44 -53 -6 0 -23 9 -37 20 -14 11 -29 20 -35 20 -5 0 -20
 9 -34 20 l-25 19 -21 -29 c-12 -16 -22 -31 -22 -34 0 -2 28 -21 63 -42 34 -21
 64 -38 65 -40 7 -5 -9 -43 -33 -78 l-24 -35 33 -21 c18 -11 38 -20 44 -20 6 0
 25 20 42 46 l32 45 34 -20 c38 -23 53 -20 73 11 12 20 11 24 -15 45 -16 13
 -32 23 -36 23 -11 0 -10 38 1 45 6 3 25 31 43 61 18 31 40 66 48 79 102 153
 116 217 63 283 -45 55 -89 82 -138 82 -23 0 -45 -3 -48 -7z"
      />
      <path
        d="M6823 2511 c-69 -25 -153 -82 -180 -124 -17 -24 -23 -48 -23 -88 0
 -51 3 -59 40 -99 l40 -43 74 6 c41 3 84 11 97 18 13 6 57 12 98 13 71 1 76 0
 90 -25 35 -62 -44 -134 -182 -164 l-78 -17 3 -32 3 -31 65 1 c50 1 80 9 132
 33 152 72 202 202 114 296 -32 33 -37 35 -98 35 -36 0 -85 -7 -109 -16 -24 -8
 -71 -18 -105 -21 -69 -6 -94 8 -94 58 0 63 102 124 226 136 58 5 67 9 75 31 6
 14 8 31 5 39 -8 20 -130 16 -193 -6z"
      />
      <path
        d="M8030 2498 c-25 -41 -25 -40 1 -72 38 -48 109 -20 109 43 0 38 -23
 61 -61 61 -22 0 -34 -8 -49 -32z"
      />
      <path
        d="M3966 2468 c-9 -12 -16 -30 -16 -39 0 -9 -7 -22 -15 -29 -8 -7 -15
 -17 -15 -22 0 -5 -34 -79 -75 -164 -64 -133 -78 -154 -98 -154 -13 0 -28 5
 -33 10 -6 6 -28 19 -50 30 -37 19 -40 19 -51 3 -27 -36 -16 -57 47 -87 34 -16
 63 -33 66 -37 10 -16 -32 -84 -63 -102 -32 -18 -33 -18 -75 2 -24 11 -51 26
 -61 33 -16 11 -21 10 -37 -10 -25 -31 -15 -52 44 -86 36 -21 58 -26 110 -26
 59 0 69 3 101 31 19 17 35 35 35 40 0 15 43 69 54 69 6 0 24 -7 41 -16 28 -14
 30 -14 47 8 26 34 22 45 -22 68 -22 11 -40 23 -40 25 0 3 22 52 49 108 76 159
 132 280 142 304 7 18 3 25 -25 42 -41 26 -41 26 -60 -1z"
      />
      <path
        d="M4245 2307 c-67 -33 -107 -71 -140 -135 -23 -45 -28 -65 -28 -130 1
 -91 18 -141 71 -195 63 -65 123 -89 227 -90 104 0 146 16 206 80 110 117 104
 320 -13 418 -53 44 -117 68 -198 72 -64 3 -82 0 -125 -20z m200 -78 c75 -24
 115 -87 115 -183 0 -102 -46 -173 -131 -201 -109 -37 -239 35 -254 139 -27
 180 103 297 270 245z"
      />
      <path
        d="M6275 2298 c-63 -24 -89 -49 -81 -76 10 -31 42 -37 75 -13 39 28 92
 27 118 -1 11 -13 30 -54 43 -93 12 -38 28 -86 35 -105 26 -73 48 -150 44 -153
 -10 -8 -96 -37 -109 -37 -34 -1 -44 -16 -30 -49 7 -17 15 -31 19 -31 4 0 37 9
 75 19 l68 19 14 -37 c34 -84 32 -81 56 -71 13 6 31 13 41 16 20 7 20 6 3 71
 l-14 52 42 14 c37 13 41 17 38 43 -5 41 -16 48 -53 35 -17 -6 -37 -11 -43 -11
 -13 0 -31 40 -41 90 -4 19 -11 41 -15 50 -4 8 -18 51 -31 95 -29 104 -59 152
 -112 176 -52 23 -78 23 -142 -3z"
      />
      <path
        d="M5758 2189 c-21 -12 -25 -91 -5 -107 47 -39 117 -8 117 53 0 53 -62
 83 -112 54z"
      />
      <path
        d="M4836 2158 c-51 -35 -66 -57 -87 -125 -14 -50 0 -108 39 -154 23 -28
 109 -73 197 -103 59 -21 122 -52 149 -75 47 -41 39 -112 -18 -156 -29 -22 -43
 -25 -113 -25 -81 0 -120 10 -195 51 l-36 19 -21 -26 c-25 -32 -26 -37 -3 -56
 68 -60 263 -95 355 -64 112 38 156 93 157 195 0 59 -3 68 -35 107 -34 42 -126
 94 -192 110 -15 4 -60 22 -99 41 -60 29 -73 39 -81 68 -14 44 -6 79 24 109 68
 69 252 48 372 -42 33 -25 34 -25 48 -6 32 42 33 51 10 71 -76 67 -162 93 -307
 93 -113 0 -116 -1 -164 -32z"
      />
    </g>
  </svg>
)

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
)
export const TwitchIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <g>
      <path
        d="M17.4579119,0 L0,46.5559188 L0,232.757287 L63.9826001,232.757287 L63.9826001,267.690956 L98.9144853,267.690956 L133.811571,232.757287 L186.171922,232.757287 L256,162.954193 L256,0 L17.4579119,0 Z M40.7166868,23.2632364 L232.73141,23.2632364 L232.73141,151.29179 L191.992415,192.033461 L128,192.033461 L93.11273,226.918947 L93.11273,192.033461 L40.7166868,192.033461 L40.7166868,23.2632364 Z M104.724985,139.668381 L127.999822,139.668381 L127.999822,69.843872 L104.724985,69.843872 L104.724985,139.668381 Z M168.721862,139.668381 L191.992237,139.668381 L191.992237,69.843872 L168.721862,69.843872 L168.721862,139.668381 Z"
        fill="#5A3E85"
      ></path>
    </g>
  </svg>
)
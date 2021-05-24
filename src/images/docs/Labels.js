import React from "react"

const Labels = ({ withColor}) => (
  <svg width="160" height="120" fill="none">
    <path fill={withColor ? 'var(--malibu-light)' : 'var(--athens)'} d="M138.38 26.75c-.84 1.32-5.24 5.61-11.38 7.16-4.23 1.06-7.47.56-11.7 0-6.24-.69-10.36-5.38-12.38-10.6a14.5 14.5 0 01-.58-8.2c1.1-.13 9.59-.96 14.7 5.05a14.15 14.15 0 012.73 5.03c.97-.96 2.45-2.25 4.46-3.4 4.21-2.41 8.04-2.7 8.94-2.75 3.35-.2 6.1.51 7.83 1.14a19.32 19.32 0 01-2.62 6.57z"/>
    <path fill={withColor ? 'var(--dodger-blue-light)' : 'var(--porcelain)'} fillRule="evenodd" d="M100.45 64.22c4.8-1.8 10.13-1.51 13.8.43a28.66 28.66 0 01-9.81 15.04c-.64.52-.68 1.4-.08 1.97.6.56 1.6.59 2.25.06a31.63 31.63 0 0010.33-15.01 7.28 7.28 0 011.69 6.6c-1.1 5.32-3.56 12.2-7.81 16.9-4.25 4.68-8 8.23-14.4 11.19-11.94 5.52-30.03 6.01-42.45 1.8-6.01-2.03-11.02-5.25-14.58-9.36-3.56-4.11-5.57-9-5.85-14.21-.51-9.52 11.73-13.88 22.23-11.32 9.43 2.3 18.89 5.64 28.46 2.03l16.22-6.12zm-59.22 20.2c.65-.83.4-1.96-.54-2.53a2.26 2.26 0 00-2.88.48l-.05.07c-.65.82-.4 1.95.54 2.52.95.56 2.24.35 2.88-.48l.05-.07zM65.04 95.7c.88-.02 1.57-.66 1.55-1.43-.03-.76-.76-1.37-1.64-1.35l-1.25.03c-7.22.18-14.2-2.26-19.3-6.74a1.76 1.76 0 00-2.25 0 1.27 1.27 0 000 1.96c5.7 5.03 13.54 7.77 21.64 7.57l1.25-.03z" />
    <path stroke={withColor ? 'var(--dodger-blue)' : 'var(--fiord)'} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" d="M45.84 99.03c-13.63-8.5-25.63-24.4-22.83-36.44 1.24-5.35 5.57-11.84 12.14-14.71 12.73-5.55 28.94 2.67 41.73 4.31 15.4 1.99 30.19.92 37.03-14.84-8.43-.89-13.99-6.92-16.72-13.63a17.8 17.8 0 01-.78-10.55c1.5-.16 12.95-1.24 19.85 6.5a17.96 17.96 0 013.68 6.47 29.26 29.26 0 0118.1-7.92c4.52-.25 8.21.67 10.56 1.47a24.22 24.22 0 01-3.54 8.45c-1.13 1.7-5.5 8.02-13.78 10.01a22.1 22.1 0 01-7 .52c.5 4.82.75 11.82-.6 20.04-2.24 13.64-7.83 28.02-18.52 37.65"/>
    <path stroke={withColor ? 'var(--jungle-green)' : 'var(--casper)'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 92.48a60.36 60.36 0 0114.5 5.13 29.51 29.51 0 0025.72 0A62.61 62.61 0 0177.57 91c10.6 0 20.49 2.51 28.84 6.86 8.04 4.19 18.96 4.19 27.01 0A60.54 60.54 0 01150 92.15"/>
    <path fill={withColor ? 'var(--dodger-blue)' : 'var(--fiord)'} fillRule="evenodd" d="M124.37 52.48c.34.24.42.7.19 1.04-.5.7-.97 1.4-1.43 2.07-2.92 4.24-5.49 8-10.04 11.17a30.41 30.41 0 01-6.46 3.19c-4.4 1.65-9.06 2.39-13.64 2.96l-4.87.62c.76.35 1.4.75 2.02 1.2.34.25.4.72.15 1.05a.76.76 0 01-1.05.16c-1.54-1.14-3.26-1.9-8.08-2.66a22.43 22.43 0 00-13.17 2 19.01 19.01 0 004.9 8.84c3.63 3.63 8.84 5.67 13.5 6.29 2.33.3 4.48.25 6.2-.12 1.73-.38 2.88-1.06 3.4-1.87.7-1.07 1.11-3.84-.63-6.57a.75.75 0 01.23-1.03.75.75 0 011.04.22c2.02 3.16 1.68 6.56.63 8.18-.84 1.3-2.47 2.11-4.37 2.53-1.92.42-4.25.47-6.7.14-4.91-.64-10.46-2.8-14.37-6.71a20.4 20.4 0 01-5.2-9.2 13.72 13.72 0 01-4.63-1.03l-8.44-3.5-6.69-2.73-9.76-3.6-13.38-4.1.44-1.43 13.4 4.1.02.02h.02l9.8 3.61.02.01 6.7 2.74 8.44 3.5c1.2.49 2.46.79 3.75.89l.47-.25a23.99 23.99 0 0114.63-2.4c1.3.2 2.4.41 3.35.63l8.05-1.01c4.56-.58 9.06-1.3 13.29-2.89 2.2-.82 4.47-1.85 6.13-3 4.31-3.02 6.73-6.53 9.64-10.78l1.46-2.1a.75.75 0 011.04-.18z" />
    <path fill={withColor ? 'var(--jungle-green)' : 'var(--casper)'} fillRule="evenodd" d="M59.77 13.96a3.45 3.45 0 015.96.56l.3.66c.36.8.48 1.7.36 2.56l-.86 5.98v.03L63.3 39.29v.01l-.56 3.84a.75.75 0 101.49.21L67 23.94c.1-.66.43-1.27.92-1.74l.14-.12a2.66 2.66 0 014.37 1.28l.08.33a.75.75 0 001.46-.36l-.09-.33a4.13 4.13 0 00-6.4-2.38l.38-2.66c.17-1.16 0-2.33-.47-3.4l-.3-.66a4.93 4.93 0 00-8.56-.8l-.4.58a.75.75 0 001.23.86l.4-.58z" />
    <path stroke={withColor ? 'var(--texas-rose-hover)' : 'var(--casper)'} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" d="M63.9 68a1.6 1.6 0 001.81-1.36 1.6 1.6 0 00-1.36-1.8 1.6 1.6 0 00-1.8 1.35A1.6 1.6 0 0063.9 68z"/>
  </svg>
)

export default Labels
import React from "react"

const Changelog = ({ withColor }) => (
  <svg width="160" height="120" fill="none">
    <path
      fill={withColor ? "var(--malibu-light)" : "var(--porcelain)"}
      d="M103.19 117.81a1.83 1.83 0 002.4 1.05 60.52 60.52 0 0018.29-11.7 60.1 60.1 0 0012.94-17.38 1.8 1.8 0 00-.9-2.44L86.63 65.17c-1.51-.68-3.1.8-2.52 2.34l19.07 50.3z"
    />
    <path
      fill={withColor ? "var(--dodger-blue-light)" : "var(--athens)"}
      d="M119.35 71.7c1 .31 2.07-.24 2.34-1.24a45.33 45.33 0 00-1.2-27.67 45.63 45.63 0 00-18.69-22.9 46.03 46.03 0 00-55.83 5.52 45.36 45.36 0 00-8.6 55.14 45.74 45.74 0 0021.96 19.8 46.06 46.06 0 0027.71 2.72 1.83 1.83 0 001.38-2.26L78.32 61.8a1.9 1.9 0 012.4-2.27l38.63 12.17z"
    />
    <path
      fill="var(--white)"
      fillRule="evenodd"
      d="M54.82 43.48a2.83 2.83 0 101.56-5.44 2.83 2.83 0 10-1.56 5.44zm.84 6.12a2.5 2.5 0 00-1.72-3.09 2.5 2.5 0 00-3.1 1.73 31.69 31.69 0 0021.91 39.2 2.5 2.5 0 003.1-1.72 2.5 2.5 0 00-1.72-3.09A26.7 26.7 0 0155.66 49.6z"
    />
    <path
      fill={withColor ? "var(--jungle-green)" : "var(--casper)"}
      fillRule="evenodd"
      d="M127.28 64.9l2.82-4.88h-5.65l2.83 4.88zm-.84 1.55a.97.97 0 001.67 0l3.76-6.49a.96.96 0 00-.84-1.44h-2.65C127.98 31.1 105.38 9 77.56 9a.75.75 0 100 1.5c27 0 48.92 21.44 49.32 48.02h-3.36c-.74 0-1.2.8-.84 1.44l3.76 6.49zM27.72 53.1l-2.82 4.88h5.65l-2.83-4.88zm.84-1.55a.97.97 0 00-1.67 0l-3.76 6.49a.96.96 0 00.84 1.44h2.65c.4 27.42 23 49.52 50.82 49.52a.75.75 0 100-1.5c-27 0-48.93-21.44-49.32-48.02h3.36c.74 0 1.2-.8.84-1.44l-3.76-6.49z"
    />
    <path
      stroke={withColor ? "var(--texas-rose-hover)" : "var(--casper)"}
      strokeWidth="1.5"
      d="M79.12 59c0 1.15-.93 2.08-2.1 2.08-1.15 0-2.09-.93-2.09-2.07 0-1.15.94-2.08 2.1-2.08 1.16 0 2.09.93 2.09 2.08z"
    />
    <path
      fill={withColor ? "var(--dodger-blue)" : "var(--fiord)"}
      fillRule="evenodd"
      d="M114.37 57.78l-4.65.01a.75.75 0 000 1.5h4.67c-.15 20.16-16.47 36.52-36.72 36.86.07-.11.1-.24.1-.38v-4.72a.75.75 0 00-1.5 0v4.72c0 .14.04.27.1.38-20.24-.34-36.55-16.7-36.7-36.86h4.66a.75.75 0 100-1.5h-4.65c.64-19.7 16.7-35.53 36.6-35.92v4.15a.75.75 0 001.5 0v-4.15a37.26 37.26 0 0136.59 35.91zM77.03 97.65c21.46 0 38.86-17.3 38.86-38.64 0-21.35-17.4-38.65-38.86-38.65-21.47 0-38.87 17.3-38.87 38.65 0 21.34 17.4 38.64 38.87 38.64z"
    />
  </svg>
)

export default Changelog

import React from "react"

const Youtube = ({ withColor }) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect
      width="35.2932"
      height="17.0728"
      rx="4"
      transform="matrix(0.982514 -0.18619 0.189319 0.981916 3 38.5642)"
      fill={withColor ? "var(--dodger-blue-light)" : "var(--athens)"}
    />
    <path
      fillRule="evenodd"
      fill={withColor ? "var(--jungle-green)" : "var(--fiord)"}
      d="M44.043 17C44.043 21.1797 40.753 24.5 36.7774 24.5C32.8017 24.5 29.5117 21.1797 29.5117 17C29.5117 12.8203 32.8017 9.5 36.7774 9.5C40.753 9.5 44.043 12.8203 44.043 17ZM45.543 17C45.543 21.9706 41.6185 26 36.7774 26C31.9362 26 28.0117 21.9706 28.0117 17C28.0117 12.0294 31.9362 8 36.7774 8C41.6185 8 45.543 12.0294 45.543 17ZM24.4492 19C24.4492 22.0995 22.0591 24.5 19.2461 24.5C16.4331 24.5 14.043 22.0995 14.043 19C14.043 15.9005 16.4331 13.5 19.2461 13.5C22.0591 13.5 24.4492 15.9005 24.4492 19ZM25.9492 19C25.9492 22.866 22.9481 26 19.2461 26C15.5441 26 12.543 22.866 12.543 19C12.543 15.134 15.5441 12 19.2461 12C22.9481 12 25.9492 15.134 25.9492 19Z"
    />
    <path
      fillRule="evenodd"
      fill={withColor ? "var(--dodger-blue)" : "var(--casper)"}
      d="M57.9772 51.9924L58 32.1981C57.9924 30.3195 55.425 29.2108 54.1949 30.6728L48.2308 37.7609C48.0811 37.9388 47.9996 38.1605 48 38.3891L48.0113 45.569C48.0116 45.7992 48.095 46.0222 48.2472 46.2002L54.2865 53.2654C55.5285 54.7182 57.9848 53.871 57.9772 51.9924ZM56.5 32.2017C56.498 31.9959 56.348 31.7199 55.9829 31.569C55.8155 31.4998 55.667 31.4901 55.5654 31.5078C55.4803 31.5227 55.411 31.5573 55.3426 31.6385L49.5003 38.5819L49.511 45.3702L55.4267 52.2907C55.5952 52.4878 55.846 52.5517 56.1113 52.4602C56.2416 52.4153 56.3364 52.3421 56.3926 52.2695C56.4413 52.2067 56.4777 52.1254 56.4772 51.9985L56.4772 51.9907L56.5 32.2017Z"
    />
    <path
      stroke={withColor ? "var(--texas-rose)" : "var(--fiord)"}
      d="M23.7501 35.9784H23.7501L23.75 35.9694C23.7491 35.8964 23.784 35.831 23.861 35.7865C23.939 35.7414 24.0328 35.7357 24.1203 35.7831L34.1326 41.2063C34.288 41.2905 34.2885 41.4861 34.1379 41.5722L24.2576 47.2159C24.1852 47.2573 24.0501 47.2709 23.9076 47.1994C23.7697 47.1303 23.7512 47.051 23.7501 47.027V35.9784Z"
      strokeWidth="1.5"
    />
    <path
      fillRule="evenodd"
      fill={withColor ? "var(--dodger-blue)" : "var(--casper)"}
      d="M41.6743 29.6349C40.6874 29.5016 39.3855 29.5 37.5486 29.5H18.3799C17.9657 29.5 17.6299 29.1642 17.6299 28.75C17.6299 28.3358 17.9657 28 18.3799 28H37.5486L37.6051 28C39.3727 28 40.7761 28 41.875 28.1484C43.0076 28.3013 43.9284 28.6242 44.6549 29.3538C45.3809 30.083 45.7017 31.0065 45.8538 32.1424C46.0015 33.2455 46.0015 34.6544 46.0014 36.4304V36.4864V47.5151V47.5712C46.0015 49.3471 46.0015 50.756 45.8538 51.8591C45.7017 52.995 45.3809 53.9185 44.6549 54.6477C43.9284 55.3774 43.0076 55.7002 41.875 55.8531C40.776 56.0015 39.3727 56.0015 37.605 56.0015H37.5486H18.4528H18.3964C16.6287 56.0015 15.2254 56.0015 14.1264 55.8531C12.9939 55.7002 12.073 55.3774 11.3466 54.6477C10.6205 53.9185 10.2997 52.995 10.1476 51.8591C9.99997 50.756 9.99998 49.3471 10 47.5712L10 47.5151V30.2704C10 29.8562 10.3358 29.5204 10.75 29.5204C11.1642 29.5204 11.5 29.8562 11.5 30.2704V47.5151C11.5 49.3597 11.5016 50.668 11.6344 51.6601C11.7643 52.6309 12.0075 53.1856 12.4095 53.5894L11.8781 54.1185L12.4095 53.5894C12.8111 53.9927 13.3621 54.2363 14.3271 54.3666C15.3141 54.4999 16.616 54.5015 18.4528 54.5015H37.5486C39.3855 54.5015 40.6874 54.4999 41.6743 54.3666C42.6393 54.2363 43.1903 53.9927 43.5919 53.5894C43.9939 53.1856 44.2371 52.6309 44.3671 51.6601C44.4999 50.668 44.5014 49.3597 44.5014 47.5151V36.4864C44.5014 34.6418 44.4999 33.3335 44.3671 32.3414C44.2371 31.3707 43.9939 30.8159 43.5919 30.4121C43.1903 30.0088 42.6393 29.7652 41.6743 29.6349Z"
    />
  </svg>
)

export default Youtube

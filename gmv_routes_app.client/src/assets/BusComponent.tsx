import SVGComponentPropsType from "./SVGComponentProps";

export default ({ fill, size = "120px" }: SVGComponentPropsType) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 50 50"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Icon/Bus</title>
    <g
      id="Icon/Bus"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <path
        d="M25.4468616,5.00099278 C38.1368749,5.05780296 40.5992804,7.54334397 40.5992804,10.0312452 L40.5992285,13.8052829 C41.9199984,13.8052829 43,14.9374942 43,16.3197582 L43,18.8365884 C43,20.2212074 41.9199984,21.3534187 40.5992285,21.3534187 L40.5969764,35.1923621 C40.5969764,36.5769811 39.8769753,37.8341885 38.7969738,38.4639999 L38.7969738,40.8534187 C38.7969738,42.613026 37.4785079,43.997645 35.7977375,43.997645 C34.1192711,43.997645 32.7985011,42.6154414 32.7985011,40.8534187 L32.7985011,38.9663998 L17.1992467,38.9663998 L17.1992467,40.8557737 C17.1992467,42.615381 15.8807808,44 14.2000104,44 C12.521544,44 11.200774,42.6177964 11.200774,40.8557737 L11.200774,38.4663549 C10.1207725,37.8365435 9.40077146,36.5793361 9.40077146,35.1947171 L9.40077146,21.3557737 C8.08000156,21.3557737 7,20.2235624 7,18.8389434 L7,16.3221132 C7,14.9374942 8.08000156,13.8052829 9.40077146,13.8052829 L9.40077146,10.0312452 C9.40077146,7.51683027 11.9207751,5 25.0000259,5 Z M14.5,32 C13.1246401,32 12,33.1246401 12,34.5 C12,35.8753599 13.1246401,37 14.5,37 C15.8753599,37 17,35.8753599 17,34.5 C17,33.1246401 15.8753599,32 14.5,32 Z M35.5,32 C34.1246401,32 33,33.1246401 33,34.5 C33,35.8753599 34.1246401,37 35.5,37 C36.8753599,37 38,35.8753599 38,34.5 C38,33.1246401 36.8753599,32 35.5,32 Z M34.4524828,14 L15.5452483,14 C13.5355179,14 12,15.6536347 12,17.8179597 L12,24.1820403 C12,26.217471 13.5355179,28 15.5452483,28 L34.4547517,28 C36.4644821,28 38,26.217471 38,24.1820403 L37.997731,17.8179597 C37.997731,15.6536347 36.4622131,14 34.4524828,14 Z M33.813213,8 L17.1867948,8 C16.4742837,8 15.997779,8.5988685 16,9.50140718 C16,10.4011171 16.4742666,11 17.1867948,11 L33.813213,10.9971856 C34.5257241,10.9971856 35,10.3983027 35,9.49859282 C35,8.59888289 34.5257412,8 33.813213,8 Z"
        id="Bus-Shape"
        fill={fill}
      ></path>
    </g>
  </svg>
);
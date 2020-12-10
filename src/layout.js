import { ThemeProvider, createGlobalStyle } from "styled-components"
import styled from "styled-components"

// Style values:

const buffer = 10
const timing = ".15s"
const easing = "ease-in-out"
const stroke = "#E8E8ED"
const strokeDarkened = "#adadc5"
const strokeWidth = 1

export const theme =
  {
    util: {
      buffer: buffer,
      radius: 4,
      radiusLarge: 14,
      timing: timing,
      transition: `all ${timing} ${easing}`,
      shadow: "rgb(0,0,0,0.07) 0px 1px 7px 0px",
      shadowLarge: "rgb(0,0,0,0.07) 0px 1px 14px 0px",
      borderWidth: strokeWidth,
      border: `${strokeWidth}px solid ${stroke}`,
      borderLight: `${strokeWidth}px solid #fff`,
      borderDarkened: `${strokeWidth}px solid ${strokeDarkened}`,
      navWidth: 200,
      inlinePadding: `${buffer/2}px ${buffer}px`,
      inlinePaddingLarge: `${buffer}px ${buffer*2}px`,
      maxPageWidth: 1200,
      globalNavHeight: 70,
      sideNavWidth: 0
    },
    breakpoint: {
      sm: 600,
      md: 960,
      lg: 1260
    },
    color: {
      primary: "#182390",
      primaryLightened: "#4E57AA",
      primaryLight: "#DCE4FF",
      primaryLightest: "#F3F6FF",
      primaryDarkened: "#435FBD",
      primaryDark: "#303F72",
      secondary: "#46D8D5",
      secondaryLight: "#d4f5f4",
      secondaryDarkened: "#0b908c",
      bg: "#F1F4FA",
      bgDarker: "#ECECF2",
      bgDarkened: "#CBD1DF",
      bgLight: "#fff",
      bgLighter: "#e5eaf5",
      bgLightened: "#f9fafd",
      light: "#fff",
      stroke: stroke,
      error: '#ff6176',
      errorLight: '#ffe0e4',
      errorLightest: '#fff7f8',
      warning: '#ffdd61',
      warningDark: '#7b6000',
    },
    text: {
      size: 14,
      sizeSmall: 12,
      sizeExtraSmall: 11,
      sizeLarge: 18,
      sizeHeader: 32,
      sizeHeaderSmall: 22,
      lineHeight: 20,
      spacingSmall: 1.7,
      color: "#131336",
      colorLight: "#fff",
      colorLightened: "#9696BB",
      colorLightest: "#D8D8E6",
      weight: "400",
      weightHeavy: "700",
      family: `'DM Sans', sans-serif`,
      familyMonospace: 'monospace'
    }
  }
;

// Global styles:

export const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    overflow: hidden;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    overflow: auto;
    overflow-y: scroll;
    font-size: ${props => props.theme.text.size}px;
    font-family: ${props => props.theme.text.family};
    color: ${props => props.theme.text.color};
    background-color: ${props => props.theme.color.bg};
  }
  * {
    box-sizing: border-box;
  }
  input, textarea {
    font-size: ${props => props.theme.text.size}px;
    font-family: ${props => props.theme.text.family};
    color: ${props => props.theme.text.color};
  }
  textarea {
    line-height: 18px;
  }
  button: {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.color.primaryLightened};
  }
  ::placeholder {
    color: ${props => props.theme.text.colorExtraLightened};
  }

  h1,h2,h3,h4,h5,h6,a,p,div,span {
    margin: 0;
  }
`;
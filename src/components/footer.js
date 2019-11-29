/** @jsx jsx */
import { jsx, Styled, Footer as ThemeFooter } from "theme-ui"

import Container from "./container"
import { GitHub, Gatsby } from "./icons"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <ThemeFooter
      sx={{
        bg: "grey",
        mt: 4,
        pt: [2, 2, 3],
        pb: 2,
        color: "white",
      }}
    >
      <Container>
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          
          <div sx={{ display: "flex" }}>
            <GitHub />
            <div sx={{ mx: 2 }} />
            <Gatsby />
          </div>
        </div>
        
        <p sx={{ mt: 4 }}> Ivana Cvitković © {currentYear} FESB</p>
      </Container>
    </ThemeFooter>
  )
}

export default Footer
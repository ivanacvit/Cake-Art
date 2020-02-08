/** @jsx jsx */
import { jsx } from "theme-ui"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

import Container from "../components/container"
import Layout from "../components/layout"
import Slider from "../components/slider"

const cakes = [
  "https://funcakes.com/content/uploads/2019/12/FunCakes-recept-ruby-pure-chocolade-cake-website-2-1000x750.jpg",
  "https://akispetretzikis.com/system/uploads/medium/data/13700/recipe_main_tourta-genethlion-site.jpg",
  "https://i.pinimg.com/originals/fd/63/ed/fd63edda0984f925c5717e4a80e1d00c.jpg",
  "https://tulsaspecialtysales.com/image/276931-full_highway-unicorn-cake.jpg",
]

const cupcakes = [
  "https://www.itl.cat/pngfile/big/42-421253_cup-cakes-wallpaper-hd-cupcake-wallpapers-for-desktop.jpg",
  "https://a-static.besthdwallpaper.com/torta-cup-sfondo-5120x2160-2403_16.jpg",
  "https://www.ecopetit.cat/wpic/mpic/15-155272_cupcake-wallpaper-hd.jpg",
  "https://www.itl.cat/pngfile/big/52-528877_cupcakes-wallpaper-cupcake.jpg",
]

const desserts = [
  "https://img4.goodfon.com/wallpaper/nbig/7/27/pirozhnye-konfety-klubnika-desert-sladosti-assorti.jpg",
  "https://c1.wallpaperflare.com/preview/575/369/190/tart-chocolate-tarts-cream-cake-cake.jpg",
  "https://images5.alphacoders.com/341/thumb-1920-341445.jpg",
  "https://images6.alphacoders.com/342/thumb-1920-342723.jpg",
]

const ServicesCustom = ({ data }) => {
  const { servicesCustom, servicesCustom1 } = data
  return (
    <Layout>
      <BackgroundImage
        fluid={servicesCustom.sharp.fluid}
        sx={{
          height: [150, 250, 400],
        }}
      >
        <Container>
          <h1
            sx={{
              m: 0,
              pt: [4, 4, 5],
              fontSize: [4, 6, 7],
              fontWeight: "semibold",
              color: "white",
            }}
          >
            CUSTOM ORDERS
          </h1>
          <p
            sx={{
              color: "white",
              letterSpacing: "tight",

              "@media (max-width: 800px)": {
                display: "none",
              },
            }}
          >
            Cake Art's skilled and talented cake artists will create what you
            <br />
            can imagine! Find your local bakery to submit a custom order inquiry
            <br />
            for custom cakes, cupcakes or cookies.
          </p>
          <Link to="/location" sx={{ textDecoration: "none" }}>
            <button
              button
              sx={{
                outline: "0",
                color: "#F78DA7",
                border: "1px solid #F78DA7",
                background: "white",
                padding: "12px 28px",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "inherit",
                display: "block",
                marginTop: "20px",
                marginBottom: "0px",
                "&:hover": {
                  boxShadow: "0 0 5px rgba(0,0,0,0.24)",
                },

                "@media (max-width: 700px)": {
                  padding: "8px 20px",
                  marginTop: "5px",
                },
              }}
            >
              Contact Us
            </button>
          </Link>
        </Container>
      </BackgroundImage>

      <div
        sx={{
          margin: [2, 5],
        }}
      >
        <Container>
        <h1
            sx={{
              m: 0,
              pt: [5],
              fontSize: [4, 5, 5],
              fontWeight: "semibold",
              color: "grey",
            }}
          >
            CUSTOM CAKES
          </h1>
          <p
            sx={{
              color: "grey",
              letterSpacing: "tight",
            }}
          >
            We work with you to customize your cake to your specifications. Your
            life’s special events are important, and as such, your cake should
            be extraordinary. We can decorate any size of our specialty layer
            cakes or build a custom cake as you wish! You’ll have your own
            dedicated <a
            href="/location"
            sx={{ color: "#F78DA7", border: "none"}}>Celebration Specialist</a> to walk you through the whole
            process.
          </p>
          <div sx={{ pt: [4], pb:[3, 4] }}>
            <Slider slideImages={cakes} />
          </div>

         
        </Container>
      </div>

      <div
        sx={{
          margin: [2, 5],
        }}
      >
        <Container>
          
        <h1
            sx={{
              m: 0,
              pt: [1],
              fontSize: [4, 5, 5],
              fontWeight: "semibold",
              color: "grey",
            }}
          >
            CUSTOM CUPCAKES
          </h1>
          <p
            sx={{
              color: "grey",
              letterSpacing: "tight",
            }}
          >
            We work with you to customize your cupcakes to your specifications. Your
            life’s special events are important, and as such, your cupcakes should
            be extraordinary. We can decorate any size of our specialty layer
            cupcakes or build a custom cupcake as you wish! You’ll have your own
            dedicated <a
            href="/location"
            sx={{ color: "#F78DA7", border: "none"}}>Celebration Specialist</a> to walk you through the whole
            process.
          </p>
          <div sx={{ pt: [4], pb:[3, 4] }}>
            <Slider slideImages={cupcakes} />
          </div>

         
        </Container>
      </div>

      <div
        sx={{
          margin: [2, 5],
        }}
      >
        <Container>
        <h1
            sx={{
              m: 0,
              pt: [1],
              fontSize: [4, 5, 5],
              fontWeight: "semibold",
              color: "grey",
            }}
          >
            CUSTOM DESSERTS
          </h1>
          <p
            sx={{
              color: "grey",
              letterSpacing: "tight",
            }}
          >
            We work with you to customize your dessert to your specifications. Your
            life’s special events are important, and as such, your dessert should
            be extraordinary. We can decorate any size of our specialty layer
            desserts or build a custom cake as you wish! You’ll have your own
            dedicated <a
            href="/location"
            sx={{ color: "#F78DA7", border: "none"}}>Celebration Specialist</a> to walk you through the whole
            process.
          </p>
          <div sx={{ pt: [4], pb:[3, 4] }}>
            <Slider slideImages={desserts} />
          </div>

          
        </Container>
      </div>
    </Layout>
  )
}

export default ServicesCustom

export const query = graphql`
  query {
    servicesCustom: file(
      relativePath: { eq: "services-custom/services-custom.jpg" }
    ) {
      sharp: childImageSharp {
        fluid(maxWidth: 1920, traceSVG: { color: "#c3dafe" }) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

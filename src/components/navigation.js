/** @jsx jsx */
import { jsx, useThemeUI, Header } from "theme-ui"
import { useRef, useState,useEffect  } from "react"
import { Link } from "gatsby"

import logo from "../assets/logo.png"
import more from "../assets/more.svg"
import Container from "./container"
import { useResponsiveMenu, useOnOutsideEvent } from "../hooks"

const LogoLink = () => (
  <Link to="/" sx={{ display: "flex", alignItems: "center" }}>
    <img
      src={logo}
      sx={{
        height: ["logo",70,90],
        width: "auto",
      }}
    />
  </Link>
)

const NavLink = ({ ...prop }) => (
  <Link
    {...prop}
    sx={{
      display: "inline-block",
      color: "grey",
      textDecoration: "none",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      letterSpacing: "tight",
      transition: "all 0.25s linear",
    }}
  />
)

const VisibleNavLink = ({ partiallyActive = false,...prop }) => {
  const { theme } = useThemeUI()

  return (
    <NavLink
      {...prop}
      sx={{
        mx: 2,
        px: 2,
        lineHeight: theme =>
          `calc(${theme.sizes.navBar} - 2 * ${theme.sizes.navLinkBorder})`,
        borderTop: theme => `${theme.sizes.navLinkBorder} solid transparent`,
        borderBottom: theme => `${theme.sizes.navLinkBorder} solid transparent`,
        "&:hover": {
          color: "#F78DA7",
        },
      }}
      activeStyle={{
        color: "#F78DA7",
      }}
      partiallyActive={partiallyActive}
    />
  )
}

const HiddenNavLink = ({ partiallyActive = false, ...prop }) => {
  const { theme } = useThemeUI()

  return (
    <NavLink
      {...prop}
      sx={{
        m: 2,
        px: 3,
        py: 2,
        borderLeft: theme => `${theme.sizes.navLinkBorder} solid transparent`,
        "&:hover": {
          color: "#F78DA7",
        },
      }}
      activeStyle={{
        color: "#F78DA7",
      }}
      partiallyActive={partiallyActive}
    />
  )
}

const MoreButton = ({ onClick, width = 50 }) => (
  <div
    sx={{
      display: "flex",
      flexShrink: 0,
      alignItems: "center",
      width,
      px: 3,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "white",
      },
    }}
    onClick={onClick}
  >
    <img
      src={more}
      sx={{
        stroke: "black",
        height: theme =>
          `calc(calc(${theme.sizes.navBar} - 2 * ${theme.sizes.navLinkBorder})/4)`,
        width: "auto",
      }}
    />
  </div>
)

const Triangle = () => (
  <div
    sx={{
      position: "absolute",
      top: "-12px",
      right: "15px",
      width: "22px",
      height: "22px",
      lineHeight: 0,
      fontSize: 0,
      border: theme => theme.borders.header,
      borderWidth: "0 0 1px 1px",
      transform: "rotate(135deg)",
      backgroundColor: "white",
    }}
  />
)

const VisibleItems = ({ visibleItems }) =>
  visibleItems.map(menuItem => (
    <VisibleNavLink
      key={menuItem.path}
      to={menuItem.path}
      partiallyActive={menuItem.partiallyActive}
    >
       {menuItem.text}
    </VisibleNavLink>
  ))

  const HiddenItems = ({
    menu,
    handleOutsideClick,
    minWidth = 120,
    spaceForTriangle = 16,
    zIndex = 999,
  }) => {
    const { innerBorderRef } = useOnOutsideEvent(handleOutsideClick)
    return (
      <div
        ref={innerBorderRef}
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: menu.offset + spaceForTriangle,
          p: 2,
          zIndex,
          minWidth,
          backgroundColor: "white",
          border: theme => theme.borders.header,
          boxShadow: theme => theme.shadows.header,
        }}
      >
        <Triangle />
        {menu.hiddenItems.map(menuItem => (
        <HiddenNavLink
          key={menuItem.path}
          to={menuItem.path}
          partiallyActive={menuItem.partiallyActive}
        >
          {menuItem.text}
        </HiddenNavLink>
      ))}
    </div>
    )
  }

  const Nav = ({ menuItems }) => {
    const containerRef = useRef(null)
    const [open, setOpen] = useState(false)
    const [visibility, setVisibility] = useState(0)
  
    const { menu } = useResponsiveMenu({ containerRef, menuItems })
  
    // to prevent a flash of the responsive nav bar
    // we hide it initially (using the "opacity" property)
    // until a resized version is ready to be shown
    useEffect(() => {
      setVisibility("visible")
    }, [visibility])
  
    const isHiddenEmpty = menu.hiddenItems.length === 0
  
    const handleMoreClick = () => setOpen(true)
    const handleOutsideClick = () => setOpen(false)
  
    return (
      <nav
        ref={containerRef}
        sx={{
          display: "flex",
          boxSizing: "border-box",
          justifyContent: "flex-end",
          flex: "auto",
          ml: [3, 4],
          overflowX: "auto",
          visibility,
          
        }}
      >
        <VisibleItems visibleItems={menu.visibleItems} />
        {!isHiddenEmpty && <MoreButton onClick={handleMoreClick} />}
        {!isHiddenEmpty &&
          (open && (
            <HiddenItems menu={menu} handleOutsideClick={handleOutsideClick} />
          ))}
      </nav>
    )
  }

const Navigation = ({ menuItems }) => {
  return (
    <Header
      sx={{
        orderBottom: theme => theme.borders.header,
        position: "relative",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <LogoLink />
        <Nav menuItems={menuItems} />
      </Container>
    </Header>
  )
}

export default Navigation
/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

const Button = ({children}, ...prop) => {

return(
    <button sx={{
      ...prop,
        color:"#F78DA7",
        border:"1px solid #F78DA7",
        background:"transparent",
        padding: "12px 28px",
        borderRadius: "3px",
        cursor: "pointer",
        fontSize: "14px",
        marginLeft:"auto",
        marginRight:"auto",
        display:"block",
        marginTop:"20px",
        marginBottom:"0px",
        "&:hover": {
          boxShadow: "0 0 5px rgba(0,0,0,0.24)"
        },
        }}>
            {children}
        </button>
 )
}

export default Button
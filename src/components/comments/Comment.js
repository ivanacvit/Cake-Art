/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import React from 'react';
const Comment = ({ comment }) => (
  <div sx={{paddingBottom:"20px"}}>
    <div className="comment__meta">
      <h4 sx={{
                textDecoration: "none",
                color: "grey",
                textTransform: "uppercase",
                fontWeight: "semibold",
                lineHeight: "navLink",
                whiteSpace: "nowrap",
                letterSpacing: "tight",
                transition: "all 0.25s linear",
                paddingBottom: "0.25rem"}}>{comment.name}</h4>
      <span sx={{ fontWeight: "body", fontSize: 1, color: "gray.5" }}>{new Date(comment.timestamp).toDateString()}</span>
     
    </div>
    <div>
    <p className="text" sx={{letterSpacing:"tight"}}>{comment.comment}</p>
    </div>
   
  </div>
);
export default Comment;
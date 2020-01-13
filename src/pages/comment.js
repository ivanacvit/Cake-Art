/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Layout from "../components/layout"
import Container from "../components/container"
import "../../styles/myTheme.css"


class JustComments extends React.Component {
  constructor(...args) {
    super(...args)
    this.ref = React.createRef()
  }
  
  render() {
    return (
      <>
      
      <div 
        ref={this.ref}
        class="just-comments myTheme"
        data-pagesize="5"
        data-disablesociallogin="true"
        data-disablesharebutton="true"   
        data-hideattribution="true"
        data-hidecommentheader="true"
        data-hidenocommentstext="true"
        data-disablepushnotifications="true"
        data-enableemailnotifications="true"
        data-disableprofilepictures="true"
        data-apikey="450ec6d7-d5c3-4a01-9bd2-06de802a3ef6"
        
      />
      <script async src="https://just-comments.com/w2.js"></script>
      </>
    )
  }
  componentDidMount() {
    const s = document.createElement('script')
    s.src = '//just-comments.com/w.js'
    s.setAttribute('data-timestamp', +new Date())
    this.ref.current.appendChild(s)
  }
  }

const Comment = () =>{
  return(
  <Layout>

    <Container>
    <JustComments />

    </Container>
 
  </Layout>
)}

export default Comment


import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import '../components/layout.css'

const Missing = styled.div`
background:#161616;
font-family: 'Satoshi',Arial, sans-serif;
`

const NotFoundPage = () => {
  return (
    <Missing>
     <h1>404</h1>
     <p>The page you are looking for doesn’t exist.</p>

      <Link to="/">Go home.</Link>.
    
    </Missing>
  )
}

export default NotFoundPage

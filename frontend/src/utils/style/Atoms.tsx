import { Link } from 'react-router-dom'
import styled from 'styled-components'



export const StyledLink = styled(Link)`
  margin: 10px 25px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  font-weight : 800;
`


export const FooterStyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight : 800;
  align-self: start;
  padding-bottom: 5%; 

  @media (max-width: 1090px) {
    font-size : 16px;
  }
`

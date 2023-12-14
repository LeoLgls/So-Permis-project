import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'

import styled from 'styled-components'


const HomeLogo = styled.img`
  height: 40px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0F1411;
`

function Header() {

  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo}/>
      </Link>

      <div>

      </div>
    </NavContainer>
  )
}

export default Header

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors';
// logo imports
import logo from '../assets/logo/sportsSee_logo.svg'

/**
 * CSS for the component using styled.components
 */

const Image = styled.img`
  width: clamp(5rem, 12vw, 10rem);
  margin-top: 10px;

`;

const UList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 91px;
  max-width: 1440px;
  margin: auto;
  background: #000;
  padding: 0px 25px;
`;

const LINK = styled(Link)`
  text-decoration: none;
  
  font-weight: 500;
  color:  ${colors.tertiary};
  padding: 5px;
  font-size: clamp(1.125rem, 1.667vw, 1.5rem);

  &:hover {
      color: ${colors.primary};
    }
`;

/**
 * Component to render the Header
 * @function Header
 * @returns (JSX)
 */

export default function Header() {
    
  return (
    <header>
        <nav>
            <UList>
                <li><LINK to="/"><Image className="logo" src={logo} alt="logo"></Image></LINK></li>
                <li><LINK to="/">Accueil</LINK></li>
                <li><LINK to="/">Profil</LINK></li>
                <li><LINK to="/">Réglage</LINK></li>
                <li><LINK to="/">Communauté</LINK></li>
            </UList>
        </nav>
    </header>
    )
}


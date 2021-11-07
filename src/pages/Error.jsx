import { Link } from 'react-router-dom'
import styled from 'styled-components';

const ErrorWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  color: #000;
  margin-left: 117px;

h1 {
  font-size: clamp(6rem, 20vw, 21.875rem);
  font-weight: 700;
  margin-top: 4.75rem;
  margin-bottom: 1rem;
}

p {
  font-size: clamp(1.125rem, 2.5vw, 3rem);
  text-align: center;
  font-weight: 500;
  margin-bottom: 8.313rem;
}
`;

const ReturnLink = styled(Link) `
  color: #000;
  font-size: clamp(0.875rem, 1.5vw, 1.375rem);
  font-weight: 500;
  text-decoration: underline;
`;

// Error message component
export default function Error() {
  
  return (
    <ErrorWrapper>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <ReturnLink to="/">Retourner sur la page d’accueil</ReturnLink>
    </ErrorWrapper>
  )
}


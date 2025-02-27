import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(142, 182, 220);
  color: #1470AF;
  position: relative;

  @media (max-width: 768px) {
    background-color: #1470AF;
  }
`;

export const Logo = styled.div`
  img {
    height: 50px;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
    color: #fff;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #1470AF;
    flex-direction: column;
    padding: 1rem 0;
    display: none;
  }

  &.open {
    display: flex;
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: ${({ active }) => (active ? "#1470AF" : "#fff")};
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background: #fff;
    color: #1470AF;
  }

  ${({ active }) =>
  active &&
  `
    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #1470AF;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
      pointer-events: none;
    }
  `}

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 1rem;
    color: #fff;
    
  }
`;

export const IconWrapper = styled.span`
  font-size: 1.5rem;
`;

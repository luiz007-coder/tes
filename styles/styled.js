import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: rgb(142, 182, 220);
  color: #1470AF;
  padding: 60px;
  text-align: center;
  min-height: 100vh;
  scroll-behavior: smooth;

  .section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }
  
  .section.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FooterContent = styled.div`
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const CargoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px;
  padding-bottom: 100px;
  background: rgb(142, 182, 220);
  border-radius: 10px;
  margin-bottom: 80px;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 40px;
  }
`;

export const SectionInfo = styled.div`
  flex: 1;
  text-align: left;
  padding: 20px;

  h2 {
    font-size: 24px;
    color: #1470AF;
  }

  p {
    font-size: 16px;
    color: #fff;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 10px;
  }
`;

export const CargoList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  flex: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 345px;
  }
`;

export const CargoItem = styled.div`
  background: #FFF;
  border: 3px solid #1470AF;
  padding: 15px;
  margin-top: 20px;
  border-radius: 5px;
  text-align: center;
  transition: transform 0.2s ease-in-out, background-color 0.3s ease;
  border: 2px solid rgb(142, 182, 220);
  box-shadow: 0px 4px 8px #1470AF;
  
  &:hover {
    transform: scale(1.05);
    background-color: #1470AF;
    
    h3, p {
      color: white;
    }
  }

  h3 {
    margin: 10px 0;
    font-size: 18px;
    color: #1470AF;
  }

  p {
    color: #000;
    font-size: 14px;
  }
`;

export const PriceTag = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFD700;

  svg {
    margin-right: 5px;
  }
`;

export const Arrow = styled.a`
  display: block;
  text-align: center;
  font-size: 30px;
  color: #1470AF;
  margin: 40px auto;
  cursor: pointer;
  animation: bounce 2s infinite;
  transition: transform 0.9s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    margin: 30px auto 0;
  }
`;

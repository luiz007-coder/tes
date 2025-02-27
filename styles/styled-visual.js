import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const TitleContainer = styled.div`
    margin-top: 100px;
`;

export const TitleText = styled.h2`
    background-color: #FFF;
    font-size: 1.5rem;
    font-weight: bold;
    border: 1px solid #1470AF;
    text-align: center;
    color: #000;
    cursor: pointer;
    padding: 30px;
    border-radius: 20px;
    width: 900px;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        width: 100%;
        padding: 20px;
    }
`;

export const OptionContainer = styled.div`
    width: 100%;
    max-width: 900px;
    background-color: #fff;
    border-radius: 20px;
    margin-top: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    span {
        font-size: 20px;
    }
    overflow: hidden;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const OptionItem = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: ${({ isFirst, isLast }) =>
        isFirst ? "20px 20px 0 0" : isLast ? "0 0 20px 20px" : "0"};

    &:hover {
        background-color: rgba(0, 140, 255, 0.7);
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const OptionHeader = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
    flex-grow: 1;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const IconWrapper = styled.div`
    margin-left: 9px;
    margin-right: 30px;
`;

export const Arrow = styled.div`
    display: flex;
    padding: 5px;
    margin-left: auto;
    align-items: center;
`;

export const ContentContainer = styled.div`
    width: 900px;
    padding: 20px;
    border-radius: 19px;
    border: 1px solid #1470AF;
    background: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 500px;

    span {
        font-size: 1900px;
    }

    h2 {
        font-size: 22px;
        color: #1470AF;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        color: #333;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 15px;
        min-height: 400px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        gap: 15px;
    }
`;

export const DualImageContainer = styled.div`
    display: flex;
    flex-direction: ${({ isHairOrEyes }) => (isHairOrEyes ? "row" : "column")};
    gap: 20px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
    }
`;

export const InfoContainer = styled.div`
    margin-top: 20px;
    text-align: center;
    @media (max-width: 768px) {
        margin-top: 15px;
    }
`;

export const InfoIcon = styled.p`
    font-weight: bold;
    color: #1470AF;
    @media (max-width: 768px) {
        padding-left: 16px;

    }
`;

export const InfoText = styled.p`
    font-size: 30px;
    color: #1470AF;
    padding-bottom: 0px;
    padding-left: 10px;
`;

export const GenderSelector = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        gap: 15px;
    }
`;

export const GenderIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${({ active }) =>
    active ? "rgba(0, 140, 255, 0.7)" : "transparent"};
    border: 2px solid ${({ active }) => (active ? "#008CFF" : "gray")};
    transition: all 0.3s ease;

    &:hover {
    background: rgba(0, 140, 255, 0.5);
    }

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`;

export const TopDivider = styled.div`
    width: 100%;
    height: 2px;
    background: #1470AF;
    margin-top: 40px;
`;

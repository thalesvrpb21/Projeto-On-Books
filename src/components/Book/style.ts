import styled from "styled-components";

export const StyleUl = styled.ul`
  width: 100%;
  max-width: 1120px;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: max-content;
    height: max-content;
    padding-bottom: 10px;
    border-radius: 10px;
    animation: slideInUp;
    animation-duration: 0.8s;
  }

  div {
    display: flex;
    gap: 16px;
    .ButFavorite {
      background: transparent;
    }
  }

  .imgBook {
    width: 100%;
    height: 350px;
    max-width: 229px;
    border-radius: 10px 10px 0px 0px;
  }

  @media (min-width: 600px) {
    .imgBook {
      width: 100%;
      height: 350px;
      max-width: 229px;
    }
  }
`;
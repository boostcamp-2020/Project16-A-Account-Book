import styled from 'styled-components';

const imageUrl =
  'https://camo.githubusercontent.com/9acad1537ebb0c3e10abbf4b74ef2d1929c2d504a91e8cd49bfcd1ddbeff4f9d/68747470733a2f2f692e696d6775722e636f6d2f633238335a764a2e706e67';
export const NoData = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .image {
    width: 300px;
    height: 300px;
    background-image: url(${imageUrl});
    background-size: 300px 300px;
    -webkit-filter: grayscale(100%);
    filter: gray;
  }
`;

export default {};

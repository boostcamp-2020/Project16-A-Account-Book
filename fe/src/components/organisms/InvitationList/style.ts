import styled from 'styled-components';

const Container = styled.section`
  background: white;
  max-height: 50vh;
  overflow-y: auto;
  padding: 0.3rem 0.5rem;
  border: 1px solid #ddd;
  border-radius: 7px;
  > h2 {
    text-align: center;
    font-size: 1.5rem;
    min-width: 30vw;
  }
`;

export default Container;

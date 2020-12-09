import styled from 'styled-components';

export const ContantsWrapper = styled.div`
  .input-container {
    label {
      padding: 0.5em 0;
    }
    input {
      padding: 0;
      margin: 0;
      border: 0;
    }
    input[type='text'] {
      border-bottom: 1px solid ${({ theme }) => theme.subText};
      text-indent: 0.3em;
    }
    input[type='color'] {
      border: 0;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2% 0%;
  input + input {
    margin-left: 0.3em;
  }
`;

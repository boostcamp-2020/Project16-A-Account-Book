import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.4em;

  .react-datepicker {
    &-wrapper {
      width: 100%;
    }
    &__week {
      height: 1.7rem;
    }
    &__navigation--previous {
      border-right-color: #fff;
    }
    &__navigation--next {
      border-left-color: #fff;
    }

    &__header {
      background: ${({ theme }) => theme.color.brandColor};
    }
    &__month-container {
      font-family: 'Bmeuljiro';
    }
  }

  .my-react-picker {
    background-color: ${({ theme }) => theme.color.white};
    border: none;
    outline: none;
  }
  input {
    width: 100%;
    min-width: 4rem;
  }
`;

export const DecsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const Small = styled.small`
  font-size: 0.8rem;
`;

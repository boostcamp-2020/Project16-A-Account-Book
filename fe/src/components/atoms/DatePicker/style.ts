import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.4em;
  width: fit-content;
  .react-datepicker__navigation--previous {
    border-right-color: #fff;
  }
  .react-datepicker__navigation--next {
    border-left-color: #fff;
  }
  .react-datepicker__header {
    background: ${({ theme }) => theme.color.brandColor};
  }
  .react-datepicker__month-container {
    font-family: 'Bmeuljiro';
  }

  @media only screen and (max-width: 768px) {
    .react-datepicker__month-container {
      height: 12.5rem;
    }
    .react-datepicker__week:not(:first-child) {
      margin-top: 1em;
    }
    .react-datepicker__week {
      height: 0.8em;
    }
    .react-datepicker__month {
      margin-top: 0em;
    }
    .react-datepicker__day {
      margin-top: 0.2em;
    }
    .react-datepicker__day-names {
      margin-top: 0.2em;
    }
    .react-datepicker__day-name {
      margin-top: 0.2em;
    }
  }

  .my-react-picker {
    background-color: ${({ theme }) => theme.color.white};
    border: none;
    outline: none;
    font-size: 0.8rem;
  }
  input {
    width: 4em;
  }
`;

export const DecsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const Small = styled.small`
  font-size: 0.8rem;
`;

import styled from 'styled-components';
import DateAtom from 'components/atoms/DateAtom';

export interface ReducedDateProps {
  theme: {
    [propName: string]: any;
  };
}

export const ReducedDate = styled(DateAtom)`
  color: ${({ theme }) => {
    return theme.color.subText;
  }};
`;

export const DateMoneyHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  .price-container {
    display: flex;
    align-items: center;
    &__price {
      display: flex;
      align-items: center;
      &--income {
        color: ${({ theme }) => theme.color.selectedBlue};
      }
      &--expense {
        color: ${({ theme }) => theme.color.red};
      }
    }
  }
  .price-container__price + .price-container__price {
    margin-left: 0.5em;
  }
`;

import styled from 'styled-components';

const PropSize = {
  Small: 'small',
  Big: 'big',
  Normal: 'normal',
};
interface Prop {
  bold: boolean;
  size: string;
  color: string;
}
const PriceContainer = styled.div`
  font-weight: ${(prop: Prop): string => (prop.bold ? '900' : 'normal')};
  font-size: ${(prop: Prop): string => {
    switch (prop.size) {
      case PropSize.Big: {
        return '1.5rem';
      }
      case PropSize.Small: {
        return '0.7rem';
      }
      default:
        return '1rem';
    }
  }};
  color: ${(prop: Prop): string => prop.color};
`;
export default PriceContainer;

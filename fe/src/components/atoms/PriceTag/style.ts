import styled from 'styled-components';

export interface Prop {
  bold: boolean;
  size?: string;
  color: string;
}

const PropSize = {
  Small: 'small',
  Big: 'big',
  Normal: 'normal',
};
const PriceContainer = styled.div<Prop>`
  font-weight: ${(prop): string => (prop.bold ? '900' : 'normal')};
  font-size: ${(prop): string => {
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
  color: ${(prop): string => prop.color};
`;
export default PriceContainer;

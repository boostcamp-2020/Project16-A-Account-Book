import styled, { keyframes } from 'styled-components';

export const cir = (sd: any) => keyframes`
    from {
        stroke-dasharray: 0 251; 
      }
      to {
        stroke-dasharray: ${sd} 251; 
      }
`;
export interface ICircle {
  sd: any;
}
export const Circle = styled.circle<ICircle>`
  animation: ${({ sd }) => cir(sd)} 1s ease-in-out forwards;
`;

export default {};

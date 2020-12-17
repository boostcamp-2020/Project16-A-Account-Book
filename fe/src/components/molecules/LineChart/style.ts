import styled, { keyframes } from 'styled-components';

export interface IPolyline {
  sd: any;
}
const polylineAnimation = (sd: any) => keyframes`
      from {
        stroke-dasharray: 0 251; 
      }
      to {
        stroke-dasharray: ${sd} 251; 
      }
`;
export const Polyline = styled.polyline<IPolyline>`
  animation: ${({ sd }) => polylineAnimation(sd)} 1s ease-in-out forwards;
`;

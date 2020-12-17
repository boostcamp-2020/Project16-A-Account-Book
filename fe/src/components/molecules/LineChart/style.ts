import styled, { keyframes } from 'styled-components';
import mathUtils from 'utils/math';

export interface IPolyline {
  points: string;
}
const polylineAnimation = (length: number) => keyframes`
      from {
        stroke-dasharray: 0 ${length}; 
      }
      to {
        stroke-dasharray: ${length} 0; 
      }
`;
export const Polyline = styled.polyline<IPolyline>`
  animation: ${({ points }) =>
      polylineAnimation(mathUtils.getPolyLineLength(points))}
    1s linear forwards;
`;

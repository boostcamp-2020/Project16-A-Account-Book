import styled from 'styled-components';
import Input from 'components/atoms/Input';

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 1.5em);
  height: 1.5em;
  position: relative;
  margin: 0.7em;
  .search {
    margin-left: auto;
  }
  .reset-btn {
  }
`;
export const ResetButton = styled(Input)`
  cursor: pointer;
  width: fit-content;
  border: 0;
  color: ${({ theme }) => theme.color.subText};
`;
export const FilterLabel = styled.div`
  width: 4.6em;
  height: 1.2em;
`;

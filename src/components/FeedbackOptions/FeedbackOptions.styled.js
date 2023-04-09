import styled from 'styled-components';

export const FeedbackOptionWraper = styled.div`
  display: flex;
  gap: 10px;
`;

export const FeedbackButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid tomato;
  text-transform: capitalize;

  cursor: pointer;

  transition: background-color 250ms linear;

  &:hover {
    background-color: navajowhite;
  }
`;

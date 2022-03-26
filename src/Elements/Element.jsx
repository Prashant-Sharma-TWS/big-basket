import styled from "styled-components";

export const Error = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const ArrowDown = styled.div`
  width: 8px;
  height: 8px;
  position: relative;
  top: ${(props) => props.top};
  margin-left: 8px;
  border: solid ${(props) => props.color};
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
  transition: all 0.2s ease-out;
`;

import styled, { css } from 'styled-components'

interface TaskProps {
  isDragging: boolean
}

export const Container = styled.div<TaskProps>`
  background: #FFFFFF;
  border-radius: 4px;
  padding: 10px 15px;
  height: fit-content;
  margin-bottom: 10px;
  box-sizing: border-box;
  transition: border 200ms ease-in-out;
  position: relative;

  ${({isDragging}) => isDragging
    ? css`
    border: 1px solid #D5D5DD;
    box-shadow: 0 10px 30px rgba(0, 162, 235, 0.15);
  `
    : css`
    border: 1px solid transparent;
    box-shadow: none;
  `
};

  :hover {
    border: 1px solid #D5D5DD
  }
`

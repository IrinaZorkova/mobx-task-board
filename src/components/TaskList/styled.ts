import styled, { css } from 'styled-components'

interface TaskListProps {
  isEmpty: boolean,
  isHighlighted: boolean
}

export const TaskList = styled.div<TaskListProps>`
  width: 250px;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 0;
  margin-right: 20px;
  border: 1px dashed transparent;
  min-height: 100px;
  transition: all 300ms ease-in-out;
  
  ${({isEmpty}) => isEmpty &&
   css`
    margin-bottom: 10px;
    border: 1px dashed #D5D5DD
  `};

  ${({isHighlighted}) => isHighlighted &&
  css`
    border: 1px dashed #00A9FD
  `};
`

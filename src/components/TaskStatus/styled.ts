import styled from 'styled-components'
import { TaskStatus } from '../../models'

interface StatusProps {
  status: TaskStatus
}

export const Status = styled.div<StatusProps>`
  min-width: 250px;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border-radius: 4px;
  border-left: 5px solid ${({status}) => {
    switch (status) {
      case TaskStatus.Done:
        return '#44CC00'
      case TaskStatus.InProgress:
        return '#FFDD33'
      case TaskStatus.Todo:
        return '#E3E3E8'
    }
  }};
  padding: 10px 13px;
  margin-right: 20px;
  font-size: 15px;
  line-height: 20px;
  color: #454A54;
`

export const Counter = styled.span`
  margin-left: auto;
  font-size: 15px;
  line-height: 20px;
  color: #8F96A3;
`

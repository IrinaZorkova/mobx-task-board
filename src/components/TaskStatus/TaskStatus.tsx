import * as React from 'react'
import { statusLabels } from '../../constants'
import { TaskStatus as ETaskStatus } from '../../models'
import { Counter, Status } from './styled'

interface Props {
  status: ETaskStatus,
  count: number
}

const TaskStatus: React.FC<Props> = (props) => {
  const {
    status,
    count
  } = props

  return (
    <Status status={status}>
      {statusLabels[status]}
      <Counter>
        {count}
      </Counter>
    </Status>
  )
}

export default TaskStatus

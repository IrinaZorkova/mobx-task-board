import * as React from 'react'
import { getFormattedDeadline } from '../../utils'
import { TaskDeadline } from '../../types'
import * as Styled from './styled'

interface Props {
  deadline: TaskDeadline
}

const Deadline: React.FC<Props> = (props) => {
  const {
    deadline
  } = props

  const formattedDate = React.useMemo(() => getFormattedDeadline(deadline), [deadline])

  return (
    <Styled.Date>
      {formattedDate}
    </Styled.Date>
  )
}

export default Deadline

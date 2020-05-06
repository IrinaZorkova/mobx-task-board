import * as React from 'react'
import { TaskAssignees } from '../../types'
import { Container, Title, Values } from './styled'
import { formatAssignees } from '../../utils'

interface Props {
  assignees: TaskAssignees
}

const Assignees: React.FC<Props> = (props) => {
  const {
    assignees
  } = props

  const formattedAssignees = React.useMemo(() => formatAssignees(assignees), [assignees])

  return (
    <Container>
      <Title>
        Исполнители
      </Title>
      <Values>
        {formattedAssignees}
      </Values>
    </Container>
  )
}

export default Assignees

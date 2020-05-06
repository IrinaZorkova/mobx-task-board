import * as React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Assignees from '../Assignees'
import Title from '../Title'
import Deadline from '../Deadline'
import Description from '../Description'
import { Task as ITask } from '../../types'
import * as Styled from './styled'

interface Props {
  task: ITask,
  index: number
}

const Task: React.FC<Props> = (props) => {
  const {
    task: {
      title,
      id,
      deadline,
      assignees,
      description
    },
    index
  } = props

  const isShowingAssignees = Boolean(assignees?.length)

  return (
    <>
      <Draggable
        draggableId={String(id)}
        index={index}
      >
        {(provided, snapshot) =>
          <Styled.Container
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Title title={title}/>
              {description && <Description description={description}/>}
              {isShowingAssignees && <Assignees assignees={assignees!}/>}
              {deadline && <Deadline deadline={deadline}/>}
          </Styled.Container>
        }
      </Draggable>
    </>
  )
}

export default Task

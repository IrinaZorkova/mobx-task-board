import * as React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Task from '../Task'
import { TaskStatus } from '../../models'
import { RawTaskList } from '../../types'
import * as Styled from './styled'

interface Props {
  status: TaskStatus,
  tasks: RawTaskList,
  isActiveDraggingTask: boolean
}

const TaskList: React.FC<Props> = (props) => {
  const {
    status,
    tasks,
    isActiveDraggingTask
  } = props

  return (
    <Droppable
      droppableId={status}
      key={status}
    >
      {(provided) =>
        <Styled.TaskList
          isEmpty={!tasks.length}
          isHighlighted={isActiveDraggingTask && !tasks.length}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {tasks.map((task, index) =>
            <Task
              task={task}
              index={index}
              key={task.id}
            />
          )}
          {provided.placeholder}
        </Styled.TaskList>
      }
    </Droppable>
  )
}

export default TaskList

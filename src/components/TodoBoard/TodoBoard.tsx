import * as React from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { inject, observer } from 'mobx-react'
import TaskStatus from '../TaskStatus'
import TaskList from '../TaskList'
import { TaskStatus as ETaskStatus } from '../../models'
import { Task, AppState } from '../../types'
import { Row } from './styled'

const mapStoreToProps = ({store}: {store: AppState}) => ({
  tasks: store.tasksByStatuses,
  reorderTasks: store.reorderTasks
})

type HOCProps = ReturnType<typeof mapStoreToProps>

const TodoBoard: React.FC<HOCProps> = (props) => {
  const {
    tasks,
    reorderTasks
  } = props

  const [isActiveDraggingTask, setIsActiveDraggingTask] = React.useState<boolean>(false)

  const handleDragStart = () => {
    setIsActiveDraggingTask(true)
  }

  const handleDragEnd = (result: DropResult) => {
    const {
      destination,
      source,
      draggableId
    } = result

    if (!destination) {
      setIsActiveDraggingTask(false)
      return
    }

    const toColumn = destination.droppableId as ETaskStatus
    const toIndex = destination.index
    const fromColumn = source.droppableId as ETaskStatus
    const fromIndex = source.index
    const taskId = Number(draggableId)

    if (toColumn === fromColumn && toIndex === fromIndex) {
      setIsActiveDraggingTask(false)
      return
    }

    let previousTask: Task
    if (toColumn === fromColumn && toIndex > fromIndex) {
      previousTask = tasks[toColumn][toIndex]
    } else {
      previousTask = tasks[toColumn][toIndex - 1]
    }
    const rank = previousTask ? previousTask.rank + 1 : 0

    reorderTasks(taskId, fromColumn, toColumn, rank)

    setIsActiveDraggingTask(false)
  }

  return (
    <main>
      <Row>
        {Object.values(ETaskStatus).map(status =>
          <TaskStatus
            status={status}
            count={tasks[status].length}
            key={status}
          />
        )}
      </Row>
      <DragDropContext
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      >
      <Row>
        {Object.values(ETaskStatus).map(status =>
          <TaskList
            status={status}
            tasks={tasks[status]}
            key={status}
            isActiveDraggingTask={isActiveDraggingTask}
          />
        )}
      </Row>
      </DragDropContext>
    </main>
  )
}

export default inject(mapStoreToProps)(observer(TodoBoard))

import { MILLISECONDS_IN_SECOND } from '../constants'
import { TaskStatus } from '../models'
import { RawTaskList, Task, TaskAssignees, TaskDeadline, TaskId, TaskList, TaskRank } from '../types'

export const sortByRank = (firstTask: Task, secondTask: Task) => firstTask.rank - secondTask.rank

export const sortTaskByStatus = (tasks: RawTaskList): TaskList => {
  const sortedTasksByRank = tasks.sort(sortByRank)
  const result = {
    [TaskStatus.Todo]: [],
    [TaskStatus.InProgress]: [],
    [TaskStatus.Done]: []
  }

  sortedTasksByRank.map(task => result[task.status].push(task))

  return result
}

export const _reorderTasks = (taskId: TaskId, rank: TaskRank, tasks: RawTaskList, status: TaskStatus): RawTaskList =>
  tasks.map(task => {
    if (task.id === taskId) {
      return {...task, rank, status}
    } else if ((task.status === status) && task.rank >= rank) {
      return {...task, rank: task.rank + 1}
    } else return task
  })

export const formatAssignees = (assignees: TaskAssignees) => assignees.join(', ')

export const getFormattedDeadline = (deadline: TaskDeadline) => {
  const deadlineDate = new Date(deadline * MILLISECONDS_IN_SECOND)
  return deadlineDate.toLocaleDateString('ru-RU')
}

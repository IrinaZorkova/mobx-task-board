import { TaskStatus } from '../models'

export const MILLISECONDS_IN_SECOND = 1000

export const statusLabels = {
  [TaskStatus.Todo]: 'Todo',
  [TaskStatus.InProgress]: 'In progress',
  [TaskStatus.Done]: 'Done'
}

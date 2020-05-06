import { TaskStatus } from '../models'
import TodoList from '../store'

export type AppState = TodoList

export type TaskAssignees = Array<string>
export type TaskTitle = string
export type TaskRank = number
export type TaskDescription = string
export type TaskDeadline = number
export type TaskId = number

export interface Task {
  id: TaskId,
  title: TaskTitle,
  deadline?: TaskDeadline,
  status: TaskStatus,
  assignees?: TaskAssignees
  rank: TaskRank,
  description?: TaskDescription
}

export type RawTaskList = Array<Task>

export interface TaskList {
  [TaskStatus.Todo]: RawTaskList,
  [TaskStatus.InProgress]: RawTaskList,
  [TaskStatus.Done]: RawTaskList
}


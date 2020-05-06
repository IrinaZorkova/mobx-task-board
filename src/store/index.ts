import { observable, action, computed } from 'mobx'
import { _reorderTasks, sortTaskByStatus } from '../utils'
import { TaskStatus } from '../models'
import { RawTaskList, TaskId, TaskRank } from '../types'

export default class TodoList {
  @observable todoList: RawTaskList = []
  @observable isLoading: boolean = true
  @observable error: Error | null = null

  @computed get tasksByStatuses() {
    return sortTaskByStatus(this.todoList)
  }

  @action requestTasks = () => {
    this.setLoading(true)

    fetch('tasks.json')
      .then((data) => data.json())
      .then(tasks => {
        this.setTasks(tasks)
        this.setError(null)
      })
      .catch(error => this.setError(error))
      .finally(() => this.setLoading(false))
  }

  @action setLoading = (loading: boolean) => {
    this.isLoading = loading
  }

  @action setError = (error: Error | null) => {
    this.error = error
  }

  @action setTasks = (tasks: RawTaskList) => {
    this.todoList = tasks
  }

  @action reorderTasks = (id: TaskId, fromStatus: TaskStatus, toStatus: TaskStatus, rank: TaskRank) => {
    this.todoList = _reorderTasks(id, rank, this.todoList, toStatus)
  }
}


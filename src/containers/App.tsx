import React from 'react'
import { inject, observer } from 'mobx-react'
import { AppState } from '../types'
import DataHandler from '../components/DataHandler'
import TodoBoard from '../components/TodoBoard'

interface HOCProps {
  store: AppState
}

const App: React.FC<HOCProps> = ({store}) => {
  const {
    requestTasks,
    isLoading,
    error
  } = store

  React.useEffect(() => {
    requestTasks()
  }, [requestTasks])

  return (
    <DataHandler error={error} isLoading={isLoading}>
      <TodoBoard/>
    </DataHandler>
  )
}

export default inject(store => store)(observer(App))

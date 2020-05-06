import * as React from 'react'
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'

interface Props {
  isLoading: boolean,
  error: Error | null,
  children: React.ReactElement
}

const DataHandler: React.FC<Props> = (props) => {
  const {
    isLoading,
    error,
    children
  } = props

  if (isLoading) return <Loader/>
  if (error) return <ErrorMessage error={error}/>
  return children
}

export default React.memo(DataHandler)

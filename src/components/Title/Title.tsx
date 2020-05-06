import * as React from 'react'
import * as Styled from './styled'

interface Props {
  title: string
}

const Title: React.FC<Props> = (props) => {
  const {
    title
  } = props

  return (
    <Styled.Title>
      {title}
    </Styled.Title>
  )
}

export default Title

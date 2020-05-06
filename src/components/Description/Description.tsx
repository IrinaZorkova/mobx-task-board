import * as React from 'react'
import { DescWrapper, DescText, DescTitle } from './styled'

interface Props {
  description: string
}

const Description: React.FC<Props> = (props) => {
  const {
    description
  } = props

  return (
    <DescWrapper>
      <DescTitle>
        Описание
      </DescTitle>
      <DescText>
        {description}
      </DescText>
    </DescWrapper>
  )
}

export default Description

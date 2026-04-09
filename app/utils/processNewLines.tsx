import { Fragment } from 'react'

export const processNewLines = (text: string, enabled = true) => {
  if (!enabled) {
    return text
  }

  return text.split('\n').map((line, index) => {
    return index === 0 ? (
      line
    ) : (
      <Fragment key={index}>
        <br />
        {line}
      </Fragment>
    )
  })
}

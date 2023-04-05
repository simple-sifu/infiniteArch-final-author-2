import * as React from 'react'
import { observer } from 'mobx-react'

export const LastAddedBookComponent = observer((props) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  let testNum = getRandomInt(100)
  console.log('LastAddedBookComponent: loading num=', testNum)
  return (
    <>
      <p>Last Added Book : {props.lastAddedBook}</p>
    </>
  )
})

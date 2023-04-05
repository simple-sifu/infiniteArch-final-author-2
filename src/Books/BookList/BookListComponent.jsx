import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../../Core/Providers/Injection'
import { BookListPresenter } from './BookListPresenter'

export const BookListComp = observer(({ presenter }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  let testNum = getRandomInt(100)

  // const viewModel = props.presenter.viewModel
  console.log('BookListComponent: loading num=', testNum, ', viewModel[0]=', presenter.viewModel)
  return (
    <>
      {presenter.viewModel.map((book, i) => {
        return <div key={i}>{book.visibleName}</div>
      })}
      <br />
    </>
  )
})

export const BookListComponent = withInjection({ presenter: BookListPresenter })(BookListComp)

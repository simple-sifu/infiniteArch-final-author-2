import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../Core/Providers/Injection'
import { AuthorsPresenter } from './AuthorsPresenter'

export const AuthorListComp = observer(({ presenter }) => {
  const viewModel = presenter.viewModel
  console.log('AuthorListComponent: loaded, viewModel=', viewModel)
  return (
    <>
      {viewModel.map((author, i) => {
        console.log('AuthorListComponent show list')
        return <div key={i}>{author.visibleName}</div>
      })}
      <br />
    </>
  )
})

export const AuthorListComponent = withInjection({ presenter: AuthorsPresenter })(AuthorListComp)

import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../Core/Providers/Injection'
import { AuthorsPresenter } from './AuthorsPresenter'
import { AuthorListComponent } from './AuthorListComponent'

export const AuthorsComp = observer((props) => {
  console.log('AuthorsComponent: loaded')
  return (
    <>
      <h1>AUTHORS</h1>
      <br />
      <AuthorListComponent />
    </>
  )
})

export const AuthorsComponent = withInjection({ presenter: AuthorsPresenter })(AuthorsComp)

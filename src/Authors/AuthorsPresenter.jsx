import { injectable, inject } from 'inversify'
import { makeObservable, observable, computed, action } from 'mobx'
import { AuthorsRepository } from './AuthorsRepository'
import { MessagesPresenter } from '../Core/Messages/MessagesPresenter'

@injectable()
export class AuthorsPresenter extends MessagesPresenter {
  @inject(AuthorsRepository)
  authorsRepository

  newBookName = null

  lastAddedBook = null

  load = async () => {
    await this.authorsRepository.load()
  }

  get viewModel() {
    const messagePm = this.authorsRepository.messagePm
    console.log('AuthorsPresenter.viewModel() messagePm =', messagePm)
    if (messagePm.success) {
      return messagePm.books.map((author) => {
        return { visibleName: author.name }
      })
    } else {
      return []
    }
  }

  constructor() {
    super()
    makeObservable(this, {
      viewModel: computed
    })
  }

  // addAuthor = async () => {
  //   const authorPm = await this.authorsRepository.addAuthor(this.newBookName)
  //   if (authorPm.success) {
  //     this.lastAddedBook = this.newBookName
  //   }
  //   this.unpackRepositoryPmToVm(authorPm, 'Author added')
  // }

  reset = () => {
    this.newBookName = ''
  }
}

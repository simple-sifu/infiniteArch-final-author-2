import { injectable, inject } from 'inversify'
import { makeObservable, observable, computed, action } from 'mobx'
import { BooksRepository } from './BooksRepository'
import { MessagesPresenter } from '../Core/Messages/MessagesPresenter'

@injectable()
export class BooksPresenter extends MessagesPresenter {
  @inject(BooksRepository)
  booksRepository

  newBookName = null

  lastAddedBook = null

  load = async () => {
    console.log('BooksPresenter.load()')
    await this.booksRepository.load()
  }

  get viewModel() {
    console.log('BooksPresenter.getViewModel()')
    return this.booksRepository.messagePm
  }

  constructor() {
    super()
    makeObservable(this, {
      viewModel: computed,
      lastAddedBook: observable
    })
  }

  addBook = async () => {
    const bookPm = await this.booksRepository.addBook(this.newBookName)
    if (bookPm.success) {
      this.lastAddedBook = this.newBookName
      this.unpackRepositoryPmToVm(bookPm, 'Book added')
    }
  }

  reset = () => {
    console.log('BooksPresenter.reset()')
    this.newBookName = ''
  }
}

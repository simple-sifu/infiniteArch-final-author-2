import { injectable, inject } from 'inversify'
import { makeObservable, observable, computed, action } from 'mobx'
import { BooksRepository } from '../BooksRepository'

@injectable()
export class BookListPresenter {
  @inject(BooksRepository)
  booksRepository

  get viewModel() {
    const messagePm = this.booksRepository.messagePm
    console.log('BookListPresenter.getViewModel() messagePm=', messagePm)
    if (messagePm.success) {
      return messagePm.books.map((book) => {
        return { visibleName: book.name }
      })
    } else {
      return []
    }
  }

  constructor() {
    makeObservable(this, {
      viewModel: computed
    })
  }
}

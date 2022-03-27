
describe('Searchbar', () => {
  beforeEach(() => {
    cy.intercept('GET', /articles\?limit/, { fixture: 'articles.json' }).as('getArticles')
    cy.intercept('GET', /tags/, { fixture: 'tags.json' }).as('getTags')
  })

  it('find search bar', () => {
    cy.login()
    cy.visit('/')

    cy.get('div.article-preview').should('have.length', 10)

    cy.get('[placeholder="Search"]').type('This is a title')

    cy.get('div.article-preview').should('have.length', 4)
  })
})

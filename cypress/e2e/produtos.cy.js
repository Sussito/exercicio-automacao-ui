/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"]')
    //.first()
    //.last()
    //.eq(5)
    .contains('Ariel Roll Sleeve Sweatshirt')
    .click()
  });

  it.only('Deve adicionar um produto ao carrinho', () => {
    var quantidade = 100

    cy.get('[class="product-block grid"]')
    .contains('Atlas Fitness Tank')
    .click()

    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
    cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')
    
  });
  
});
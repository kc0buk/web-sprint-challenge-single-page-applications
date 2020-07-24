describe('Inputs and submit button', () => {
    it('Can navigate to the site', () => {
        // This is setup for the actual test
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
    })
    it('Can type text for new order', () => {
        cy.get('input[name="name"]')
            .type('Order name')
            .should('have.value', 'Order name')
    })
    it('Select size', () => {
        cy.get('select')
        .select('small')
        .should('have.value','small')
    })
    it('Can select checkbox for toppings', () => {
        cy.get('input[name="pepperoni"]')
            .click()
            .should('have.value', 'on')
            .click()
        cy.get('input[name="pineapple"]')
            .click()
            .should('have.value', 'on')
            .click()
        cy.get('input[name="sausage"]')
            .click()
            .should('have.value', 'on')
            .click()
    })
    it('Enter text into special instructions', () => {
        cy.get('textarea[name="instructions"]')
        .type('Special instructions go here')
        .should('have.value','Special instructions go here')
    })
    it('Submit order', () => {
        cy.get('button').click()

    })
    
})
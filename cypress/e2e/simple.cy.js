
describe('test my site', () => {
    it('Visit site and check header h2', () => {
        cy.visit('http://localhost:5502/index.html');
        cy.get('h2').should('include.text', 'Popular challenges right now');
    });
});

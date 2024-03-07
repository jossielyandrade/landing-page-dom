describe('Encontrar Vagas', () => {

it('Botão encontrar vagas', () => {
   
    cy.visit('/')
    .wait(20000) 
        .get('.css-1yq7sop')
            .should('be.visible')
            .first()
             .click(); })
    

it('Encontrar Profissional', () => {

    cy.visit('/')
    .wait(20000) 
    cy.get ('.css-q09k7i')
    .should('be.visible')
    .first()
    .click() })

it('Digitar em Campo', () => {
    cy.visit('/')
    .wait(20000)
        .get ('.chakra-input')
            .type('Cozinheiro')
        .get('.chakra-input__right-element')
        .click()})


        it('Empregada Domestica', () => {
            cy.visit('/')
            .wait(20000)
            cy.get('.order-1 > div > .flex')
            .click()})

            it('Babá', () => {
                cy.visit('/')
                .wait(20000)
                cy.get('.order-4 > div > .flex')
                .click()})


                it('Cuidador', () => {
                    cy.visit('/')
                    .wait(20000)
                    cy.get('.order-5 > div > .flex')
                    .click()})

                    it('Cozinheiro', () => {
                        cy.visit('/')
                        .wait(20000)
                        cy.get('.order-8 > div > .flex')
                        .click()})

it('Outros Servicos', () => {
cy.visit('/')
.wait(20000)
cy.get('button:contains("Outros serviços")')
.should('be.visible')
.first()
.click()})

it('Botão Voltar', () => {
    cy.visit('/')
    .wait(20000)
    cy.get('svg[class="h-[55px] w-[55px] cursor-pointer"]')
    .should('be.visible')
    .first()
    .click()})

it('Botão Ir', () => {
cy.visit('/')
.wait(20000)
cy.get('svg[class="ml-6 h-[55px] w-[55px] cursor-pointer"]')
.should('be.visible')
.first()
.click()})


it('Sobre Nós', () => {
cy.visit('/')
.wait(20000)
cy.get('p:contains("Sobre nós")')
.should('be.visible')
.eq(1)
.first()
.click()})

it('Políticas de Privacidade', () => {
cy.visit('/')
.wait(20000)
cy.get('a[href="https://docs.google.com/document/d/1zWKuHTT-3RTrWcIrmQXEIpFYH5FEGmrlbJxuIRpuaoU/edit?usp=sharing"]')
.should('be.visible')
.first()
.click()})

it('Principais Vagas Babá' , () => {
    cy.visit('/')
    .wait(20000)
    cy.get('p:contains("Babás")')
    .should('be.visible')
    .first()
    .click()})

    it('Principais Vagas Empregadas Domésticas' , () => {
        cy.visit('/')
        .wait(20000)
        cy.get('p:contains("Empregadas Domésticas")')
        .should('be.visible')
        .first()
        .click()})

        it('Principais Vagas Cuidador' , () => {
            cy.visit('/')
            .wait(20000)
            cy.get('p:contains("Cuidador")')
            .should('be.visible')
            .eq(1)
            .first()
            .click()})

            it('Principais Vagas Cozinheiros' , () => {
                cy.visit('/')
                .wait(20000)
                cy.get('p:contains("Cozinheiros")')
                .should('be.visible')
                .first()
                .click()})

it('Redes Sociais Facebook' , () => {
cy.visit('/')
    .wait(20000)
cy.get('a[href="https://www.facebook.com/profile.php?id=61556020732768"]')
.should('be.visible')
.first()
    .click()})

    it('Redes Sociais Instagram' , () => {
        cy.visit('/')
            .wait(20000)
        cy.get('a[href="https://www.instagram.com/nossadom/"]')
        .should('be.visible')
        .first()
        .click()})

it('Redes Sociais Linkedin' , () => {
            cy.visit('/')
                .wait(20000)
            cy.get('a[href="https://www.linkedin.com/company/nossadom/"]')
            .should('be.visible')
            .first()
            .click()})

})

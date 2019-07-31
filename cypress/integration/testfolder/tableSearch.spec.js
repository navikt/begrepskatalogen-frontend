describe("Henter søkefeltet og begynner å skrive, og viser så resultatet", () => { 
    
    beforeEach(()=>{
        cy.visit('http://localhost:8080/begrepskatalogen')
    })
    

    it("skriver 'dia' i søkefeltet, og ser etter Dialogmøte 1", ()=> {
        cy.get('Input[id=inputfelt1]').type("dia{enter}")
        cy.get('div[class=table]').contains("Dialogmøte 1");
    })

    it("skriver 'dia' i søkefeltet, og skal IKKE få opp 'dagssats'", ()=> {
        cy.get('Input[id=inputfelt1]').type("dia{enter}")
        cy.get('div[class=table]').should('not.contain', 'dagsats')
    })


    
});

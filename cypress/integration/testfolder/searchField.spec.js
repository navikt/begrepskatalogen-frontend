
describe("Henter søkefeltet og begynner å skrive, og sjekker så lengden", () => { 
    
    beforeEach(()=>{
        cy.visit('http://localhost:8080/begrepskatalogen')
    })
    
      
    it("skriver i søkefeltet og viser så resultatet", ()=>{
        cy.get('Input[id=inputfelt1]').type("d").should("have.length", 1)
    })

    it("skriver i søkefeltet og presser enter", ()=>{
        cy.get('Input[id=inputfelt1]').type("dag{enter}")
    })

});

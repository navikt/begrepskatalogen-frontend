describe("Sjekker om checkbox er klikkbar og uklikkbar", () => { 
    
    beforeEach(()=>{
        cy.visit('http://localhost:8080/begrepskatalogen')
    })
    
    
    it("skriver i søkefeltet og viser så resultatet", ()=>{
        cy.get('Input[id=inputfelt1]').type("d")
        cy.get('Checkbox[className=filterwrapper]').click({force:true})
        
    })


});
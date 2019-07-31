describe("Henter søkefeltet og begynner å skrive, og viser så resultatet", () => { 
    
    beforeEach(()=>{
        cy.visit('http://localhost:8080/begrepskatalogen')
    })
    
    
    it("trykker på 'se alle begreper'", () => {
        cy.get('button[id=seAlleBegreper]').click({force:true})
    })
    


    
});



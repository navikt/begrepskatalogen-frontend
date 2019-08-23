describe("Henter søkefeltet og begynner å skrive, og viser så resultatet", () => {

    beforeEach(()=>{
        cy.visit('http://localhost:5113/begrepskatalogen')
    })


    it("trykker på 'se alle begreper' og registerer endring.", () => {
        cy.get('button[id=seAlleBegreper]').click({force:true})
    })




});



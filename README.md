# Begrepskatalogen-frontend

### Setup:
1. Last ned node.js fra https://nodejs.org/en/

2. Kjør kommandoen `git clone https://github.com/navikt/begrepskatalogen-frontend.git` i terminalen, git Bash eller Windows powershell. Du skal nå ha en kopi av prosjektet lokalt på  din enhet.

3. Kjør `npm install` for å sette opp prosjektet og installere de nødvendige dependenciene.

For å kjøre prosjektet lokalt, bruk kommandoen `npm run serve` for å kjøre prosjektet på [localhost](http://localhost:8080/begrepskatalogen)




## Innhold og funksjonalitet

### Overordnet funksjonalitet

Når du først starter opp nettsiden, blir du referert til denne siden: 

<a href="https://ibb.co/8Py1TCw"><img src="https://i.ibb.co/SVkFWjg/Forside.png" alt="Forside" border="0"></a>

Hovedfunksjonaliteten her er at du kan søke etter en term, eller å se alle begrepene. Dersom du vil melde inn et nytt begrep, trykker du på "`Meld inn nytt begrep`" i høyre hjørne eller i footeren. Lenkene "`Om begrepskatalogen`" og "`Kontakt oss`" vil referere deg til sider med informasjon om henholdvis begrepskatalogen og kontaktinformasjon.

### Alle begrepene

Når du trykker på hyperlenken "`se alle begrepene`", får du opp følgende skjermbilde:

<a href="https://ibb.co/gVbbP6q"><img src="https://i.ibb.co/ZmRRYN4/Se-alle-begrep.png" alt="Se-alle-begrep" border="0"></a>

Samme søkefelt og søkefunksjonalitet ligger over alle begrepene, samt muligheter for å filtrere og sortere begrepene, henholdsvis til høyre for alle begrepene og over. Per nå er det dog kun mulig å filtrere på Implisitt status.

### Et bestemt begrep:

Dersom du trykker deg inn på et bestemt begrep, får du opp denne siden:

<a href="https://ibb.co/GR0TW4n"><img src="https://i.ibb.co/rHmsxRF/Termpage.png" alt="Termpage" border="0"></a>

Her finner du informasjon om hva slags begrep det er, BegrepsID, Begrepsforklaring, kilder, dato for siste endring, og relaterte begreper. I kolonnen til høyre finner du informasjon om hvem som har skrevet begrepet, hvilket fagområde det er en del av, og begrepseier.


## Testing

### Cypress

For å bruke test-rammeverket `cypress`, kjør følgende en av følgende kommando: 
* `./node_modules/.bin/cypress open`

eller:
* `npm run cy:open` 
  
Dette vil åpne cypress test rammeverket. 

Klikk på `Run all specs` i høyre hjørne for å kjøre alle tester.




# Begrepskatalogen-frontend

### Setup
1. Last ned node.js. Dette kan gjøres via terminalen for Mac med kommandoen `brew install node`. Eller fra https://nodejs.org/en/ for de som har Windows.

2. Kjør kommandoen `git clone https://github.com/navikt/begrepskatalogen-frontend.git` i terminalen, git Bash eller Windows powershell. Du skal nå ha en kopi av prosjektet lokalt på  din enhet.

3. Kjør `npm install` for å sette opp prosjektet og installere de nødvendige dependenciene.

For å kjøre prosjektet lokalt, bruk kommandoen `npm run serve` for å kjøre prosjektet på [localhost](http://localhost:8080/begrepskatalogen) (http://localhost:8080/begrepskatalogen)




## Innhold og funksjonalitet

### Overordnet funksjonalitet

Når du først starter opp nettsiden, blir du referert til denne siden: 

<a href="https://ibb.co/8Py1TCw"><img src="https://i.ibb.co/SVkFWjg/Forside.png" alt="Forside" border="0"></a>

Hovedfunksjonaliteten her er at du kan søke etter en term, eller se alle begrepene. Dersom du vil melde inn et nytt begrep, trykker du på "`Meld inn nytt begrep`" i høyre hjørne eller i footeren. Lenkene "`Om begrepskatalogen`" og "`Kontakt oss`" vil referere deg til sider med informasjon om henholdvis begrepskatalogen og kontaktinformasjonen.

### Alle begrepene

Når du trykker på hyperlenken "`se alle begrepene`", får du opp følgende skjermbilde:

<a href="https://ibb.co/gVbbP6q"><img src="https://i.ibb.co/ZmRRYN4/Se-alle-begrep.png" alt="Se-alle-begrep" border="0"></a>

Samme søkefelt og søkefunksjonalitet ligger over alle begrepene, samt muligheter for å filtrere og sortere begrepene, henholdsvis til høyre for alle begrepene og over. Per nå er det ikke mulig og filtrere på begrepene. Alt av Redux er satt opp til å få til filtreringen, men mangler kode for det i Table-komponentet.

### Et bestemt begrep

Dersom du trykker deg inn på et bestemt begrep, får du opp denne siden:

<a href="https://ibb.co/GR0TW4n"><img src="https://i.ibb.co/rHmsxRF/Termpage.png" alt="Termpage" border="0"></a>

Her finner du informasjon om hva slags begrep det er, BegrepsID, Begrepsforklaring, kilder, dato for siste endring, og relaterte begreper. I kolonnen til høyre finner du informasjon om hvem som har skrevet begrepet, hvilket fagområde det er en del av, og begrepseier. Det er mulig å klikke seg videre på de relaterte begrepene.


## Kodestruktur

### Komponenter

Under mappen `src`, finner du mappen components som essensielt alle elementene en finner på siden består av. For eksempel ligger koden for filtreringsdelen under `FilterSection` osv. I hver komponentmappe vil du finne .js kode, samt en .less fil med tilhørende styling. Selve koden som utfører en handling ligger også ofte i .js filene som utgjør den visuelle delen, med noen unntak.

### Redux

Mappen `redux` inneholder alt som blir brukt i tilstandshåndtering med redux, altså `actions` og `reducers`. Disse blir bundet med `connect` som blir hentet med statementet (`import { connect } from 'react-redux'`) der koden brukes. 

Bakgrunnen for å bruke redux, er å la applikasjonen oppføre seg konsistent samt tillate å håndtere tilstand effektivt, selv når applikasjonen blir stor og kompleks. Ved å bruke redux, fremtidssikrer vi applikasjonen i det tilfellet dersom den blir større.

Redux fungerer slik at alt av tilstand blir lagret i en global tilstandsvariabel, altså store. Istedet for at state og props blir sendt opp og ned, hentes og sendes alt av tilstand via den globale storen.


<a href="https://ibb.co/yBdn4Px"><img src="https://i.ibb.co/7NjJkC0/store.png" alt="store" border="0"></a>

For mer informasjon, sjekk ut dokumentasjonen på https://redux.js.org/.

## Teknologier
### Fuse.js
Vi har brukt Fuse.js til å søke etter begrepene i søkefeltet. Fuse.js er et fussy-search bibliotek for JavaScript. Det lar deg velge hvilke "keys" man vil søke etter. I katalogen kan du søke etter match i `terms`, `definisjon`, `begrepseier`og `kilde`. Det gir deg også andre valg som threhold, findAllMatches og vekting av søket. Mer dokumentasjon finnes på https://fusejs.io/.

### Parcel
Parcel er en web application bundler som hjelper oss med å transformere JavaScript-koden vha Babel og bygger prosjektet vårt. Dokumentasjonen til Parcel finnes på: https://parceljs.org/getting_started.html. 

### Babel
Vi har brukt Babel til å kompilere JavaScript koden. Mer informasjon om Babel finnes på https://babeljs.io/.

## Testing

### Unit og Snapshot

Under mappen `src/__test__` finner man tester for komponentene. For å kjøre testene, kjør kommandoen `npm test` eller `yarn test`. For testene som inneholder snapshottesting av koden, blir det lagret i mappen  `__snapshots__` under `src/__test__`. For mer informasjon om snapshottesting: https://jestjs.io/docs/en/snapshot-testing


### End-to-end Cypress

For å bruke test-rammeverket `cypress`, kjør følgende en av følgende kommando: 
* `./node_modules/.bin/cypress open`

eller:
* `npm run cy:open` 
  
Dette vil åpne cypress test rammeverket. Du må ha [localhost](http://localhost:8080/begrepskatalogen) kjørende i bakgrunnen for at du kan kjøre end-to-end testene.

Klikk på `Run all specs` i høyre hjørne for å kjøre alle tester.

Testene ligger i mappen `cypress` i prosjektet. Under `cypress/integration/testfolder` finner du alt av end-to-end tester som er skrevet, og det er her man kan skrive sine egne tester. Konvensjon for å skrive cypress-tester er: `navnPåTest.spec.js`. Cypress er konfigurert slik at den utfører testene på alle som inneholder "`.spec`". 

For mer informasjon og tutorials på hvordan cypress fungerer, sjekk ut dokumentasjonen på https://www.cypress.io/



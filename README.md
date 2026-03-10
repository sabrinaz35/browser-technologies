# browser-technologies
Mijn leerdoelen voor deze minor zijn: 
- Leren begrijpen hoe je een redelijke complexe function schrijft en goed begrijpen wat ik nu doe. Zodat ik zelfstandiger met javascript om kan gaan en ook makkelijker zelf dingen kan toevoegen.
- Visueel aantrekkelijke css code schrijven, dingen uitproberen met svg's en meer de diepte opzoeken met animaties en de mogelijkheden daarvan. Zodat ik meer de ins en out en de mogelijkheden te leren kennen. Maar voornamelijk kijken naar wat er allemaal nog meer mogelijk is.
- Tijdens het samenwerken mijn belangen beter benoemen en de andere daarin ook de ruimte in te geven. Zodat de communicatie in groepsverband beter en soepel kan laten lopen.

Bij dit vak in deze minor zal ik mij meer focussen op het visueel aantrekkelijk maken algemeen en het schrijven van javascript functies dat ik zelf ook begrijp.

## Week 1
### Weekly Geek aantekeningen
https://tonsky.me/blog/tahoe-icons/

- "The behaviors should be limited & don't overload the user with complex icons" Interessant en logisch

Ik vind het bijzonder dat zoveel meer iconen ervoor zorgen voor onduidelijkheid.

- Icons are there to make something stand out. Same for color. So you can easilier find the right button.

Consistency:
- the icons with the same function should look the same. And has to have the same meaning.
- Je zou een expert moeten worden in het zien van de verschillen bij sommige icons, dan zijn ze ander, maar zijn ze dan ook echt anders?

Detalization:
- Icons moeten opvallen en makkelijk te spotten zijn, tahoe gebruikt een 12x12 vierkant, sommige zijn niet vierkant dus de dimension is vaker miner dan 12.
- De details binnen het icon zijn ook minder goed te lezen dan.
- Zelfs Steve jobs vond dat ze niet te zien waren

Pixel grid:
- care about the pixel grid.
- Fonts are hard to positon vertically, their size doesn't map directly to pixels

Confusing metaphors:
- Gebruikers moeten de iconen herkennen in een duidelijk object.
- Je moet daarbij duidelijk bedenken in hoe je de metaforen gebruikt, zoals papier sla je niet op in een blik, maar wel in een folder

apple heeft ook wel goeie dingen

Symmetrical actions:
- Het is goed om symmetrische tegenovergestelde acties ook zo te designen als icons. Althans het zou goed moeten zijn om het tegenovergestelde te doen.
- Maar sommige tahoe deon beide niet goed false of lack of symmetry

Text in cons:
- Ovoid using text in icons
- The icons illustrates the action

- Don't assign new behaviors to existing objects.
- Icons break scanning
- "Our eyesight doesn’t become sharper. Attention works the same way it always has. Visual recognition, motor skills—all of this is exactly as it was in 1992."

Je zou niet voor alles een icon moeten gebruiken dat haalt het idee en de reden voor een icon alleen maar weg.

## Daily checkout 1: 16 februari
Samen besproken met Justin we hebben het even hierover gehad:
- title="" toevoegen voor een soort fallback er moeten zoveel nummer zijn ofzo. Als je een pattern gebruikt

En verder de volgende vragen besproken. 

### Wat heb je vandaag gedaan?
Vandaag hebben we een introductie gehad van dit vak en wat wij gaan doen. Daarna ben ik aan de slag gegaan met het analyseren van de form die wij na gaan maken, maar dan beter. Ik heb alles op papier opgedeeld en daarna in html toegevoegd.

### Hoelang heeft dat geduurt?
- 09:30 - 11:00 kick-off + intro formulieren
- 11:00 - 13:00 form analyseren + start gemaakt aan de html.
- 13:00 - 13:40 break time
- 13:40 - 14:00 weer een korte samenkomst waarin Vasilis vragen heeft beantwoord.
- 14:00 - 15:00 Verder werken aan de site en de eerste twee "pagina's" toegevoegd aan mijn html
- 15:00 - 16:00 Artikel lezen + samenvatten 
- 16:00 checkout

### Wat heb je vandaag geleerd?
Ik heb geleerd hoe ik een fatsoenlijke form opzet met een fieldset en een legend enzo. Dat je Fieldsets kan nesten. 

Ik heb geleerd van de artikel dat je niet al te veel icons moet gebruiken, want dat haalt het nut weg van de icon. Dat je ze wel kan hergebruiken, maar wel voor dezelfde acties en niet voor andere.

### Wat ga je morgen doen?
Morgen wil ik de input fields meer specificeren en alvast nadenken hoe ik dat dan ga laten zien en daar al een start met de css mee maken. 



#### Daily checkout 2: 17 februari
Samen met romy besproken hoe zij haar javascript heeft gewerkt vandaag, en een max datum op vandaag bij sterfdatum heeft gedaan.

##### Wat heb je vandaag gedaan?
Vandaag hebben we de weekly geek behandeld aan de hand van een wooclap, daaruit heb ik geleerd dat het toch handig is om je bronnen te checken ook en dat heb ik een beetje gemist.
Ik denk dat ik een extra leerdoel moet toevoegen en dan eigenlijk de css selectors meer leren.

Ik wilde in eerste instantie namelijk een javascript functie schrijven voor een details, maar dan blijft de details klikbaar en dat wil ik niet. Zie hieronder de code ervoor.
<img src="/readme-images/zelfgeschreven-java-probeersel.png" alt="Probeersel javascript 17feb" width="300px">
Dus nu heb ik het heel makkelijk met hulp van Vasilis opgelost met css. Die selector wist ik nog niet maar de plus betekent dus de directe volgende div.
<img src="/readme-images/css-selector-div.png" alt="css selector + div" width="300px">

Uiteindelijk heb ik samen met Sanne gekeken naar de javascript en heb ik het volgende in mijn javascript staan:
<img src="/readme-images/js-17-februari.png" alt="Probeersel javascript 17feb" width="300px">

##### Hoelang heeft dat geduurt?

- 09:30 - 10:45 kick-off met wooclap
- 10:45 - 12:00 Workshop html
- 12:00 - 13:00 Bezif geweest met uitzoeken van de uitklapbaarheid met css
- 13:00 - 13:30 Pauze
- 13:30 - 16:00 Javascript geschreven, dat de radio buttons geleegd worden als het ingeklapt is met hulp van Sanne + Design system in de :root toegevoegd, denk aan kleuren en lettergrootte.
- 16:00 -  checkout


##### Wat heb je vandaag geleerd?
- Dat het belangrijk is om ook verder te kijken naar de bron van een artikel. 
- Ik ben weer een stapje verder gekomen met het zelf schrijven van een function, ik heb het dit keer wel weer met hulp gedaan, maar ik snap nu wel weer beter wat ik moet doen.
- Ik heb geleerd wat een + betekent in css dit is de volgende ... in de rij.

##### Wat ga je morgen doen?/Na de vakantie
- Na de vakantie of vrijdag wil ik gaan werken aan de vormgeving en daar stappen in zetten.
- Ook wil ik de generieke code op andere plekken implementeren.
- En kijken voor het toevoegen van de lettertype en kijken welke fallback er het beste bij past.

### Wekelijkse reflectie 20 februari
Deze week hebben we de kick-off gehad van bt en hebben wij de eerste stappen gezet naar een web formulier op basis van de erfbelasting aangifte.

Op de maandag ben ik daarom bezig geweest met het doorgronden van het formulier en de dinsdag heb ik stappen gezet in wat functionaliteiten voor het in en uit laten klappen van de vragen en deze te resetten als ze ingeklapt zijn. Ik heb ook voor een deel de :root gevuld met kleuren vanuit de styleguide van de ns.

De js voor de functionaliteit van het resetten verliep niet helemaal goed, ik was eerst begonnen met het zelf schrijven, maar ik raakte al gauw kwijt welk element ik moest hebben en waar ik dan naar moest kijken en welke syntaxen ik nodig heb om te kunnen krijgen wat ik wilde. Uiteindelijk was het gelukt via chatgpt, maar ik begreep daar niks van en heb de code weggegooid en ben naar Sanne gegaan (die was toen beschikbaar) om te vragen hoe ik dit moest aanpakken en zo heb ik uiteindelijk de functie geschreven die ik nu heb.

Wat wel goed was tijdens de eerste stappen was dat Lisa printjes had gemaakt van de eerste pagina's, dit maakte het voor mij al veel makkelijker om de elementen te verdelen en voor mijzelf een overzicht erin te krijgen. In het vervolg moet ik dit gewoon gaan uittekenen voor andere projecten, ik doe het nu ook voor CSS en het werkt ontzettend fijn.
<img src="/readme-images/aantekeningen-1.jpeg" alt="De gemaakte aantekeningen" width="300px">
<img src="/readme-images/aantekeningen-2.jpeg" alt="De gemaakte aantekeningen" width="300px">


Uiteindelijk hadden we op vrijdag het feedback gesprek, voorafgaand daaraan had ik typografie toegevoegd en alvast wat kleuren aan de headers gegeven. Tijdens dit gesprek kreeg ik de feedback dat ik wel wat Fieldsets weg kon laten, omdat die eigenlijk overbodig zijn en sommige hadden ook geen legend en dat kan niet.

<img src="/readme-images/tussenstand-20-feb.png" alt="Tussenstand hoe de website er vandaag de dag uitziet" width="300px">

Ik ben blij met wat ik tot nu bereikt heb in dit project en de vervolg stappen die ik wil gaan zetten zijn de vormgeving fixen, de gekregen feedback verwerken en extra functionaliteiten toevoegen, zoals een max datum enzo. Zodat ik daarmee weer javascript kan gebruiken voor mijn leerdoel.

Gesproken over mijn leerdoel, ik merk dat ik door dat stuk code met Sanne te hebben geschreven al wel beter snap hoe javascript in elkaar zit en dat het ook steeds makkelijker gaan met het noteren, maar het vergt nog ontwikkeling en oefening.


## Week 2
### Maandag
#### Weekly Geek voorbereiding
Het lijkt erop dat links en anchor attribute wel redelijk makkelijk om na te maken zijn, maar ik ben bang dat het stukje toegankelijkheid nog best wel lastig gaat worden. 

Html: 
- Voor de html zou je een div nodig hebben en een mogelijkheid om de link erin te zetten, maar misschien is dat ook mogelijk via javascript. 

Css: 
- Css heb je echt nodig voor de styling bij de link een underscore en bij de a als je er een button van wilt maken de styling van een button

Javascript: 
- Met javascript moet je er een eventlistener aan toevoegen, en ik weet niet of je die link er daaraan kan toevoegen. 

Hoe het werkt op andere elementen:
- Dat weet ik niet ik denk dat het dan op laptop wat toegankelijker werkt omdat je daar ook een hover kan gebruiken.

Werkt het hetzelfde met een screenreader:
- Nee, je hebt bij een link attributen die ervoor zorgen dat het voorgelezen wordt dat het uberhaupt een link is en dat het dan ook als je op enter drukt op een andere pagina opent. Misschien kan het via een omweg wel, maar dat weet ik niet zeker, misschien moet je elke element een attribute geven via js.

#### Daily checkout 2 maart 2026
Samen met thomas, we hebben het even gehad over de progressive disclosure die wij beid hebben gemaakt en op welke manieren wij dit dan hebben gedaan.


##### Wat heb je vandaag gedaan?
Ik heb vandaag een pattern toegevoegd bij de postcode en de styling van de form een beetje aangepakt.

Ook heb ik vorige week aan de eerste pattern gewerkt, waar ik uiteindelijk gekozen heb voor ga verder met vraag:
Ik had in eerste instantie alles onder elkaar in het bestand gezet. Uiteindelijk heb ik de progressive disclosure gekozen. Ik heb erover nagedacht en geprobeerd te een schets te maken voor een andere manier, om per stap de vragen te voorschijn te laten komen. Maar daar liep ik ertegenaan dat je dan maar een vraag ziet, en dan niet goed weet wat er nog gaat komen. 

Dus daarom ben ik toch door gegaan met deze manier, zodat de gebruiker eventueel verder kan kijken en al kan zien wat er te wachten staat.

<img src="/readme-images/schets-progressive-disclosure.jpeg" alt="Tussenstand hoe de website er vandaag de dag uitziet" width="300px">

Maar ik kom er nu achter dat als de vragen uitgeklapt zijn dat ze pas op dat moment required moeten worden, want anders blijven ze required en kan je de hele form niet inleveren.

<img src="/readme-images/add-required-js.png" alt="Nieuwe functie geschreven toevoegen required attribute" width="300px">

Voor de tweede pattern wil ik proberen de date pikkers onder handen te nemen en mij daarin te verdiepen. Als eerste heb ik de mogelijkheid bekeken van de value die er standaard in komt te staan en de min en max date, want de datum kan niet na vandaag ingevuld worden.
<img src="/readme-images/date-picker-deseased.png" alt="date picker in html met value en min max toegevoegd" width="300px">

<img src="/readme-images/date-picker-visual.png" alt="Afbeelding hoe de code er in de browser eruit ziet." width="300px">

<img src="/readme-images/update-2-3-2026.png" alt="Tussenstand hoe de website er vandaag de dag uitziet" width="300px">


##### Hoelang heeft dat geduurt?
- 09:30 - 11:00 In de ochten heb ik een workshop gevolgd
- 11:00 - 12:00 Verder werken aan de vormgeving van mijn site 
- 12:00 - 13:00 beetje van alles wat, plus pauze
- 13:00 - 13:45 uitleg weekly geek
- 13:45 - 15:00 verder gewerkt aan required functie en de date van vandaag in de date picker gezet.
- 15:00 -16:00 weekly geek voorbereid en ingelezen.

##### Wat heb je vandaag geleerd? 
Ik heb geleerd hoe je op verschillende manieren valid en invalid kan gebruiken via css en met een beetje javascript. Ook ben ik erachter gekomen hoe je de date van vandaag kan toevoegen aan javscript, maar ook via de html.

##### Wat ga je morgen doen?
- Ik wil de date wat uitbreiden door ook een max aantal maanden op basis van de datum van vandaag doen.
- En kijken naar de hover state en inval en valid states en eventuele inputs patterns.

### Dinsdag
#### Weekly Geek 
Je kan een element in de html een role attribute meegeven en daarin een link om aan te kunnen geven voor de screenreader zodat het duidelijk is dat het een link is. 

Conclusie er komt veel meer bij kijken dan ik dacht.

#### Daily checkout 2 maart 2026
Samen met Aya A. Misschien dat ikw at kan doen met die landcodes of de binnen nederland of buiten nederland daar op kan gaan focussen

##### Wat heb je vandaag gedaan?
Vandaag ben ik ook weer bezig geweest met de styling, de dat picker verfijnen en de inval en valid basics toe te voegen. Ook heb ik een start gemaakt aan de validatie bij de initialen.

<img src="/readme-images/test-metinitialen.png" alt="initialen in javascript" width="300px">


Bij de validatie van inputs wilde ik een icon toevoegen zodra iets goed ingevuld is dat er dan een vinkje komt te staan, alleen dat probeerde ik met ::after, alleen op de een of andere manier werkte dat niet.
<img src="/readme-images/valid-icon-metafter.png" alt="valid met after geprobeerd" width="300px">


label:has(input:valid)::after {
    content:"✅";
    position: absolute;
    right: -25px;
    top: 50%;
    transform: translateY(-50%);
}

Uiteindelijk heb ik het opgelost met een image als background toe te voegen: 
<img src="/readme-images/valid-checked-test.png" alt="Hoe het visueel eruitziet met het vinkje" width="300px">

Ook ben ik uiteindelijk verder gegaan met de capslock bij de initialen via javascript toe te voegen. Javascript leren bergijpen is ook een van mijn leerdoelen, vandaar dat ik dit ook als het kan probeer te gebruiken.

<img src="/readme-images/capslock-via-java.png" alt="Hoe het visueel eruitziet met hoofdletters" width="300px">

Uiteindelijk wil ik er nog een punt aan toevoegen als het mogelijk is. Ik heb nu het volgende gedaan:

 var initialsInput = document.querySelector('#firstnameDeseased');

initialsInput.addEventListener('input', Event => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    initialsInput.value = initialsInput.value.toUpperCase();
});

Waarin de lage letters omgezet worden naar hoofdletters, alleen weet ik nog niet of dit dan ook zo werkt naar de database toe.

Uiteindelijk heb ik dit geprobeerd om de . ertussen te krijgen, alleen het probleem daarbij is, is dat ik dan niet meer kan verwijderen en aanpassen en dat is niet zo gebruiks vriendelijk.

initialsInput.value = initialsInput.value.toUpperCase() + '.';

Uiteindelijk ben ik ook vast begonnen aan de volgende vraag waarbij een van de drie opties aangeklikt kan worden en dat dan de volgende tevoorschijn komen.

<img src="/readme-images/start-gegevens-gemachtigde.png" alt="toevoegen van vul een van de drie in" width="300px">

##### Hoelang heeft dat geduurt?
- 09:30 - 10:00 kickoff + weekly geek met groepje bespreken
- 10:00 - 10:30 gezamelijk de uitkomsten van de weekly geek bespreken.
- 10:30 - 11:45 workshop valid en invalid via javascript
- 11:45 - 12:30 werken aan de styling en light,dark mode toegevoegd plus de functie van de date picker afgemaakt
- 12:30 - 13:30 pauze
- 13:30 - 16:00 gewerkt aan de functie voor de hoofdletters, invalid en valid states toegevoegd aan css, button hover + die van file gemaakt. De input fields aangepast.
- 16:00 - checkout

##### Wat heb je vandaag geleerd? 
Ik heb vandaag verschillende dingen geleerd, ik heb geleerd hoe ik in javascript de min en max kan aangeven op basis van de huidige datum en ik weet nu ook hoe je een uppercase moet toevoegen aan de code via js. En ook heb ik geleerd dat een :: after niet helemaal werkt met het toevoegen van een icon en daarvoor in de plaats heb ik een background-image gebruikt en dat werkte wel.

##### Wat ga je morgen doen?
- Ik wil de uppercase met punt gaan verbetern, zodat het daarna nog wel aanpasbaar is
- Verder met de tweede vraag met die opties
- Responsive maken van de pagina
- Kijken of de animatie lukt
- en de andere datepicker aan gaan pakken over wanneer getrouwd en daarover brainstormen wat het handigst is om daarmee te doen.


### Wekelijkse reflectie 5 maart
In verband met onvoorziene omstandigheden kon ik niet aanwezig zijn tijdens de voortgangsgesprekken. Ik heb met Vasilis maandag afgesproken voor een voortgangsgesprek en ik ga feedbavk vragen aan mijn medestudenten over mijn browser tech tot nu toe.

Feedback Nienke:
- Focus state in de ns kleuren
- Is het vinkje wel accesible voor de screenreader? Dan op een andere manier aangeven wat de status is.
- Animatie voor de progressive disclosure

Feedback Jeppe:
- Ns stijl ziet er nice uit - misschien iets meer geel, het werkt ook alleen voorletters nog niet helemaal as you know
- Goed bezig 

Feedback Julius:
- Een sterretje toevoegen bij de required inputs
- Is er een reden waarom de layout links gealligned is? 

Als ik zelfstandig op terug kijk op afgelopen week met mijn leerdoelen in mijn achterhoofd ben ik wel blij met wat ik allemaal heb gedaan, ik heb zelfstandig functies geschreven voor de datepicker. Ook nu de styling op mijn werk zit ziet het er al meteen een stuk beter uit en overzichtelijker, vorige week had ik namelijk nog de lijnen van de fieldsets staan en zorgde bij mij ook wel voor verwarring.

Vragen voor tijdens mijn voortgang op maandag:
- Als ik via javascript de letters in hoofdletters zet, wordt dat dan ook op die manier door gegeven aan de database? of is dit dan alleen visueel?
- Het tonen van de een van de drie bij persoonsgegevens gemachtigde, als ik deze ook laat verdwijnen en laat zien, valt dit dan onder dezelfde pattern als die ik daarvoor heb gemaakt? 

Uiteindelijk hebben we besproken tijdens de voortgang:
- Dat je lang genoeg kan uitvogelen en door kan gaan om iets te perfectioneren, zo kwam bij mij uit dat de hoofdletters alsnog niet goed genoeg zijn. want als je de punt verwijdert en dan weer typt, past hij dit niet aan.
- Patterns staan op dlo.
- Om de display te animeren kan ik misschien de height aanpassen en daarmee animeren
- Hoe en wanneer gebruik je de valid en invalid.

Ik ga denk ik voor de tweede pattern de toelichting doen, maar ik wil toch eerst kijken of die andere pattern makkelijk te fixen is met welke van de drie.


## Week 3
### Maandag 9 maart
#### Proces vandaag
Ik ben vandaag bezig geweest met invalid en valid verder te doen, en heb mij daarbij een focus gelegd op de radio buttons. Hieronder had ik een selector gebruikt alleen dit werkte gewoon totaal niet.
<img src="/readme-images/selector-radiobutton.png" alt="foto van code van de foute selector" width="300px">

Daarna had ik dit geprobeerd alleen dit werkte ook niet. Het is toch lastig als je al zo een lange selector heb staan om dan vervolgens daar een juiste van te maken.

<img src="/readme-images/selector-radiobutton2.png" alt="foto van code van de foute selector" width="300px">

Uiteindelijk heb ik dit geprobeerd en dat werkte wel.
<img src="/readme-images/final-radiobutton-selector.png.png" alt="uiteindelijke werkende selector" width="300px">

Dit is het uiteindelijke resultaat ervan: 
<img src="/readme-images/result-radiobutten.png" alt="uiteindelijke werkende selector" width="300px">

Daarna ben ik toch weer verder gegaan aan een probleem waar ik de hele tijd al tegenaan liep en dat is dat de initialen niet wilde verwijderen nadat het een hoofdletter is geworden. Ik heb Romy Groen gevraagd of zij mij wilde helpen daarbij, want ik wist dat zij dat wel gefixt had en zo ben ik daar toch uit gekomen en heb ik het volgende gedaan: 
<img src="/readme-images/3-backwardContent.png" alt="javascript code met daarin de functie van de backspace" width="300px">

#### Weekly geek aantekeningen
onput hebben veel issues, als je daar iets boven zet dan staat het te ver weg om bij elkaar te laten horen.

Er zijn verschillende manieren 3x om een input te stylen, maar vaak is het niet goed genoeg voor de gebruiker om te snappen waar het dan nog over gaat en of er dan nog mee gedaan moet worden. Ik begrijp wat hij bedoelt met dat het lijkt op een value als je er een lijn onder zet, maar eerlijk ik zou het wel ingevuld hebben.

Hele aparte video.

#### Daily checkout 9 maart
Dit heb ik vandaag samen gedaan met Lisa, haar focus lag vandaag op de selectoren en is bezig geweest met haar progressive disclosure.

##### Wat heb je vandaag gedaan?
Vandaag ben ik bezig geweest met de invalid en valid states bij bepaalde punten. En ik ben gaan kijken naar de tweede pattern, ook heb ik mijn hoofdletter voor de initialen gefixt. Voor de tweede pattern dacht ik easy oke makkelijk de welke van de drie, maar dat blijkt toch iets lastiger te zijn. 

##### Hoelang heeft dat geduurt?
- 09:30 - 10:00 kickoff en rijk van zanten gastcollege
- 10:00 - 12:30 werken aan de invalid en valid states 
- 12:30 - 13:30 Pauze
- 13:30 - 14:00 voortgansgesprek met vasilis
- 14:00 - 15:00 werken aan de tweede pattern
- 15:00 - 16:00 weekly geek voorbereiden

##### Wat heb je geleerd?
Ik heb geleerd hoe ik in javascript een backspace button aanspreek en daarmee een functie kan maken en ik heb geleerd hoe ik een bepaald element goed moet aanspreken, zie hiervoor mijn proces van vandaag.

##### Wat ga je morgen doen?
Morgen wil ik verder aan de tweede pattern welke van de drie en alvast ook een start maken als het lukt aan de derder pattern over de toelichtingen.


### Maandag 10 maart
#### Proces vandaag
Maar zodra je doet wat ik hieronder doe, dan valt het over het volgende block met vragen heen en die kan je dan niet invullen, dus dit zou wel werken als je de vragen los van elkaar toont.
<img src="/readme-images/transition-progressive-disclosure.png" alt="javascript code met daarin de functie van de backspace" width="300px">

Uiteindelijk ben ik toch even gaan focussen op een ander punt en ben ik aan de slag gegaan met de pattern. De keuze maken tussen drie radio buttons en dan een veld laten zien

<img src="/readme-images/radio-keuze-fix.png" alt="fixen met css dat een van de drie een keuze gemaakt kan worden" width="300px">

Uiteindelijk ben ik daarmee door te gaan en heb ik aan de hand van de workshop een validatie geschreven voor die input fiels, alleen een algemene die best lang is maar het werkt wel.

<img src="/readme-images/custom-validation-java.png" alt="visueel de error message" width="300px">
<img src="/readme-images/custom-validation-javascript-code.png" alt="code voor de error message" width="300px">

<img src="/readme-images/error-message-specifiek-anders.png" alt="specifieke code aangepast per input type" width="300px">
Alleen als je nu een andere button aanklikt dan blijft de error message van de vorige staan, wat niet moet, dus eigenlijk zou hij moeten resetten op het moment dat je een andere button kiest. 

Is dat het dan waard om het zo aan te passen naar een multi scherm form?
Is het interessant om dit generiek te maken? 

##### Wat heb je vandaag gedaan?
- Uitgeprobeerd met de uitklap animatie via de methode height en opacity.
- Javascript custom validation code geschreven (moet alleen nog kijken naar de memo om die korter te doen)
- Een van de drie keuze gemaakt met css. Wanr progressive enhancement.
- verder gegaan met transistions maken voor de progressive disclosure

##### Hoelang heeft dat geduurt?
- 09:30 - 10:00 intro + weekly geek
- 10:30 - 12:00 workshop victor
- 12:00 - 13:00 Pauze
- 13:00 - 16:00 werken aan de punten die ik hiervoor heb genoemd

##### Wat heb je geleerd?
- ik heb geleerd hoe je een transition zet op een progressive disclosure 
- hoe je via javascript een validation doet 

##### Wat ga je morgen doen?
Morgen ga ik verder werken aan de transitions en kijken waar voor mij nog de uitdagingen liggen. Of ik dan toch wel ga kiezen voor een generieke code voor mijn invalid states.

#### Proces na school

Ik kon het toch niet loslaten dat mijn transition niet werkte en dat heb ik opgelost door het deel helemaal weg te zetten met een margin, waardoor de opacity van dat block geen effect heeft op de volgende vragen binnen het formulier.
<img src="/readme-images/animation-bij-progressive-disclosure-fix.png" alt="transition toegevoegd aan de progressive disclosure" width="300px">

De reden dat ik wel ben gegaan voor de transitions is om de UX van het formulier beter te maken, de gebruiker die ziet voorzichtig de volgende vraag verschijnen en heeft niet een verward idee van waarom er plots uit het niets iets gebeurd maar wat.

### Maandag 16 maart
#### Proces vandaag


## Bronvermelding
Uiteraard zijn Sanne en Vasilis ook wederom weer mijn bronnen geweest.

### Html bronnen
Voor html inputs:
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input 

- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/date 

Html postcode pattern:
- https://stackoverflow.com/questions/17898523/regular-expression-for-dutch-zip-postal-code 

### Css bronnen
Design system NS en fonts: 
- https://tractie.ns.nl/2e23992f3/p/226ce1-tractie--ns-design-system 

- https://www.ns.nl/
- https://www.geeksforgeeks.org/html/how-to-style-the-input-file-type-in-forms-using-css/ 
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position 
- https://www.figma.com/community/plugin/1498729606631593833/iconify-icons-library --> Via figma gebruikt voor het icoontje
- https://css-tricks.com/form-validation-ux-html-css/ 

### Geraadpleegde site voor Javascript:
- https://stackoverflow.com/questions/9887360/how-can-i-check-if-a-checkbox-is-checked 
- https://developer.mozilla.org/en-US/docs/Web/API/Element/toggleAttribute
- https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling  
- https://www.tutorialspoint.com/how-to-uncheck-a-radio-button-using-javascript-jquery 
- https://stackoverflow.com/questions/25159330/how-to-convert-an-iso-date-to-the-date-format-yyyy-mm-dd
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase 
- https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

Chatgpt:
Function date picker: 
https://chatgpt.com/share/69a6d433-8ccc-8001-b362-9685ea865490  
# browser-technologies

## Weekly Geek aantekeningen
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



## Daily checkout 2: 17 februari
Samen met romy besproken hoe zij haar javascript heeft gewerkt vandaag, en een max datum op vandaag bij sterfdatum heeft gedaan.

### Wat heb je vandaag gedaan?
Vandaag hebben we de weekly geek behandeld aan de hand van een wooclap, daaruit heb ik geleerd dat het toch handig is om je bronnen te checken ook en dat heb ik een beetje gemist.
Ik denk dat ik een extra leerdoel moet toevoegen en dan eigenlijk de css selectors meer leren.

Ik wilde in eerste instantie namelijk een javascript functie schrijven voor een details, maar dan blijft de details klikbaar en dat wil ik niet. Zie hieronder de code ervoor.
<img src="/readme-images/zelfgeschreven-java-probeersel.png" alt="Probeersel javascript 17feb" width="300px">
Dus nu heb ik het heel makkelijk met hulp van Vasilis opgelost met css. Die selector wist ik nog niet maar de plus betekent dus de directe volgende div.
<img src="/readme-images/css-selector-div.png" alt="css selector + div" width="300px">

Uiteindelijk heb ik samen met Sanne gekeken naar de javascript en heb ik het volgende in mijn javascript staan:
<img src="/readme-images/js-17-februari.png" alt="Probeersel javascript 17feb" width="300px">

### Hoelang heeft dat geduurt?

- 09:30 - 10:45 kick-off met wooclap
- 10:45 - 12:00 Workshop html
- 12:00 - 13:00 Bezif geweest met uitzoeken van de uitklapbaarheid met css
- 13:00 - 13:30 Pauze
- 13:30 - 16:00 Javascript geschreven, dat de radio buttons geleegd worden als het ingeklapt is met hulp van Sanne + Design system in de :root toegevoegd, denk aan kleuren en lettergrootte.
- 16:00 -  checkout


### Wat heb je vandaag geleerd?
- Dat het belangrijk is om ook verder te kijken naar de bron van een artikel. 
- Ik ben weer een stapje verder gekomen met het zelf schrijven van een function, ik heb het dit keer wel weer met hulp gedaan, maar ik snap nu wel weer beter wat ik moet doen.
- Ik heb geleerd wat een + betekent in css dit is de volgende ... in de rij.

### Wat ga je morgen doen?/Na de vakantie
- Na de vakantie of vrijdag wil ik gaan werken aan de vormgeving en daar stappen in zetten.
- Ook wil ik de generieke code op andere plekken implementeren.
- En kijken voor het toevoegen van de lettertype en kijken welke fallback er het beste bij past.

## Bronvermelding
Uiteraard zijn Sanne en Vasilis ook wederom weer mijn bronnen geweest.

Design system NS: 
https://tractie.ns.nl/2e23992f3/p/226ce1-tractie--ns-design-system 

Voor html inputs:
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input 

Geraadpleegde site voor Javascript:
- https://stackoverflow.com/questions/9887360/how-can-i-check-if-a-checkbox-is-checked 
- https://developer.mozilla.org/en-US/docs/Web/API/Element/toggleAttribute
- https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling  
- https://www.tutorialspoint.com/how-to-uncheck-a-radio-button-using-javascript-jquery 

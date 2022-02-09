# Rock-Paper-Scissors-Lizard-Spock game

This game is based on the classic rock, paper, scissors game with an extension of choices for more possibilities and less likeliness of draws. This version appeared first in the TV series The Big Bang Theory. This can be played as a hand game, usually played between two people. This website is an endless single-player version where you can play against the computer.

Live link: https://emese92.github.io/rock-paper-scissors-lizard-spock/

(To open links in a new tab, hold 'Ctrl' (or '⌘' on Apple devices) as you click!)

![Responsiveness](/assets/images/responsive.png)

## User Experience (UX)

## Visitor Goals
* Visitors have a clear and understandable layout.
* The website features a clear message of how the game begins.
* It has a rules page that makes it easy for the visitor to learn the game.
* The outcome of the game is visible right after the visitor has clicked on an icon.
* A scoreboard is also featured for the easy following of the game's current status.


## Features

### Main page:
It has a big and clear title of the game on top with a message, that makes the user understand in order to play press one of the buttons. There are two round pictures that show the player and the computer choices.
It has a scoreboard that shows the wins of the player and the rounds they have played.

![Main](/assets/images/main-page.png)

### Rules:
It has the rules of the game detailed with logos for clear understanding. It opens up in a new tab.

![Rules](/assets/images/rules-page.png)
### Design

#### Balsamique

I planned my project with [Balsamiq](https://balsamiq.com/wireframes/desktop/#)
 
![Wireframe](/assets/images/wireframe.png)

#### Colour Scheme

The color palette was made with [Colormind](http://colormind.io/). I choose colors that are subtle and interesting for the visitor.
It has a dark color background with high contrast buttons and a scoreboard to catch the eyes.
Contrast checks have been carried out with [Webaim](https://webaim.org/resources/contrastchecker/?fcolor=BEA6A0&bcolor=960803).

![Color Palette](/assets/images/color-palette.png)

#### Typography

[Google Fonts](https://fonts.google.com/): Open Sans Condensed was used throughout the website.
 
#### Imagery

The icons I used for the choices are from [Font Awesome](https://fontawesome.com/v5.15/icons/check-circle?style=solid).
On the rules page, I used the same icons as the option buttons on the main page for a clearer explanation.

## Technologies
 * [Webaim](https://webaim.org/resources/contrastchecker/?fcolor=BEA6A0&bcolor=960803)
 * [Font Awesome](https://fontawesome.com/v5.15/icons/check-circle?style=solid)
 * [Google Fonts](https://fonts.google.com/)
 * [Balsamiq](https://balsamiq.com/wireframes/desktop/#)
 * [CSS Formatter](https://webformatter.com/css) was used to clean up the code.
 * [Gitpod](https://gitpod.io/projects)
 * Paint
 * [Colormind](http://colormind.io/)
 * [Jsfiddle](https://jsfiddle.net/)
 * [Am I Responsive](http://ami.responsivedesign.is/#)
 * [CSS Scan](https://getcssscan.com/css-box-shadow-examples)

 ### Languages
   - CSS3
   - HTML5
   - JavaScript

## Testing
I have tested the website on multiple devices (phone, laptop, desktop) and web browsers(Microsoft Edge, Google Chrome, Internet Explorer).

### JSHint
There was no problem detected on [JSHint](https://jshint.com/)

![Index](/assets/images/jshint.png)

### Wave Test
No errors are reported on any of the pages [Wave](https://wave.webaim.org/)

![Index](/assets/images/wave.png) ![Rules](/assets/images/wave2.png) 

### Lighthouse Test
I ran lighthouse tests for desktop on both pages:

![Index](/assets/images/lighthouse.png)

![Rules](/assets/images/lighthouse2.png)

### Validator testing
CSS: No errors were found when passing through the official Jigsaw  validator (warnings exist from font awsome):
- [Index](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Femese92.github.io%2Frock-paper-scissors-lizard-spock%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)
- [Rules](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Femese92.github.io%2Frock-paper-scissors-lizard-spock%2Frules.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)

![Index](/assets/images/jigsaw.png) 
![Warning](/assets/images/jigsaw2.png)

HTML: No errors were returned when passing through the official W3C validator:
- [Index](https://validator.w3.org/nu/?doc=https%3A%2F%2Femese92.github.io%2Frock-paper-scissors-lizard-spock%2F)
- [Rules](https://validator.w3.org/nu/?doc=https%3A%2F%2Femese92.github.io%2Frock-paper-scissors-lizard-spock%2Frules.html)

![W3c](/assets/images/w3c.png)

### Bugs

* The original idea for the game was to return realistic pictures after the player and computer has chosen. This made the loading slow and uneven, so I replaced them with the same icons as the buttons. This made the lading much faster.

* The icons from font awsome are not a perfect square, this makes the big circles move a little bit every time a new icon is displayed. I left this bug unfixed as it does not bother the gameplay.

* I tested the game on Internet Explorer but the javaScript methods I used are not supported, so the game does not run. This would require the majority of the javascript to be redone.


## Deployment
* The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the Settings tab
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.


 ### Forking
 * If you wish to fork the repository:
    - GitHub Search my username and repository
    - Select the repository
    - Click the fork icon in the top right
    - This creates a fork within your GitHub repositories
    - Edit the files as necessary to your remote repository


## Credits
- The icons were taken from [Font Awesome](https://fontawesome.com/v5.15/icons/check-circle?style=solid).
- Codes on multiple occasions were inspired by or copied from [W3School](https://www.w3schools.com/css/default.asp) and [Stack Owerflow](https://stackoverflow.com/)
- Videos from Youtube [freeCodeCamp.org](https://www.youtube.com/watch?v=jaVNP3nIAv0) and [Dev Ed](https://www.youtube.com/watch?v=qWPtKtYEsN4) were used.
- The photos used are from [Pexels](https://www.pexels.com/sv-se/), [Pixabay](https://pixabay.com/) and [Stockvault](https://www.stockvault.net/).
- The website for responsiveness photo is from [Am I Responsive](http://ami.responsivedesign.is/#).
- Box shadows were taken from [CSS Scan](https://getcssscan.com/css-box-shadow-examples).
- Thank you for my mentor in reviewing and helping with design and code.


---
layout: flexfolio
title: Rock Paper Scissors
code: rockpaperscissors
category: webdev
subcategory: Lab
date: 2016-08-07
casestudy: true
banner-img: ../../../../assets/images/feat-media/ropasci.jpg
projlink:
    - name: Github Repository
      icon: fa-github-square
      url: https://github.com/emilyeserven/testwebsites/tree/master/js/codeacademy
    - name: Rock Paper Scissors
      icon: fa-link
      url: https://rawgit.com/emilyeserven/testwebsites/master/js/codeacademy/rock-paper-scissors.html
---

_Originally Written: August 7, 2016_

## Origin & Goals

This project was started after I had documented 8 chapters of a JavaScript book without doing real exercises. To get more experience typing JavaScript, I began some exercises on Codecademy and stumbled upon one that made students create a rock paper scissors game. The game was limited to text only interaction, so I got the idea to make a graphical version. I'm very familiar with HTML, CSS, and basic website development, so I was really able to focus on the JavaScript after getting the visuals tightened up. I tried to incorporate as many elements that I learned from the book as possible.

## Development

The development for this project included the use of DOM manipulation techniques, event listeners, and loops/iteration. These topics had come up in the book I was reading, and I wanted a chance to use them for real.

The [actual JavaScript file](https://github.com/emilyeserven/testwebsites/blob/master/js/codeacademy/js/rock-paper-scissors.js) has comments describing what is happening, but essentially this is what happens in the background:

1. One of the 3 (Rock, Paper, Scissor) buttons is clicked.
2. The computer then generates a random number that is assigned to Rock, Paper, or Scissors.
3. The user's choice and computer's choice are checked.
4. The user's score or the computer's score is increased by one... or no one's score (a tie) is raised.
5. Update all the page's results so the user is aware of what happened.

## Design

The main game area has a border around it so the user can feel confident that is the only area they need to look at. The three main clickable buttons all have their areas shaded with grey, and hovering over them adds a solid blue border to further indicate they can be clicked. The below area contains results and score information for the player to glance at.

## Improvements to be Made

Further development of this project is limited, as it was intended to just be a quicker experiment project. However,in any future versions, I do plan to make some changes. First, I want to have a graphical version of what the user and computer each chose, as well as a visual cue as to who won. There should be more of an indication that there was a change to the results area the first time someone clicks on a button as well. If I wanted to go completely overboard, I could try to practice some PHP by adding a database to store game results.

## In Conclusion...

I should have done a small experiment after each chapter in the book, but as far as first real JavaScript projects go, I'm very satisfied with this one! Having the chance to put everything I read about together was very helpful, especially after I was able to work from [documentation I previously wrote up](../../07/29/refdocs.html).

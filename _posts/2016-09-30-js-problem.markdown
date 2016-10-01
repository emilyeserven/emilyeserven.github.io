---
layout: post
title:  "A JavaScript Study, #1 - Removing Untagged Colons"
date:   2016-09-30 00:00:50 -0500
tags: [development, projects]
excerpt: <b>A case study of a basic JavaScript problem.</b> - <i>"I wanted to write something showing the trial and error that goes into solving a development problem, especially when inexperienced with the language and jargon."</i>
media-bgcolor: darkgrey
media-layout: half
media-layweight: even
textcolor: white
col1-content: <i class="jolly hdg-js-javascript-file-extension"></i>
col2-content: <span class="media-text">1</span>
---

## Warnings and Upfront Disclaimers

This is an exploration of a problem that would be considered extremely basic by someone experienced with JavaScript. However, I wanted to write something showing the trial and error that goes into solving a development problem, especially when inexperienced with the language and jargon. There aren't many of those articles around the internet (that I'm aware of), so hopefully this can help other learning developers that not always having a quick and easy fix is normal!

(To that end, there's a bunch of footnotes to help people understand my research process and other general )

## The Problem

The website used a [plugin](https://wordpress.org/plugins/wp-user-frontend/) that would allow you to create forms, and then generate posts based on those forms. Unfortunately, it's extremely inflexible plugin. The generated posts wouldn't let you control how the fields displayed. This meant the form field titles were added in, and also didn't have the colons inside the `<label>` tag (so that even if the label was hidden with CSS, the colon would still show).

<p data-height="265" data-theme-id="0" data-slug-hash="YGAzEG" data-default-tab="html,result" data-user="emilyeserven" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/emilyeserven/pen/YGAzEG/">Colon JS Problem</a> by Emily Serven (<a href="http://codepen.io/emilyeserven">@emilyeserven</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<br />

## Possible Solutions without JavaScript?

Some very hacky CSS was attempted to fix this problem, but in the end, nothing worked out.

```css
.wpuf-customs {
margin-left: -2px;
overflow: hidden;
}
```

Another option was to edit the PHP file in the actual plugin. However, I couldn't find where to make the edit, and this method would require re-editing the hack in every time the plugin was updated.

Finally, the last option was to try using a plugin. The [WP Toolset](https://wp-types.com/) content template system is used insert information into a post, and usually it will override the rest of the content, regardless of any other settings. However, the problem plugin overrode the content template to the point that it stripped all the HTML out.

With all those options exhausted, it was time to resort to JavaScript.

## The Plan

I needed to write a function[^function] that would iterate[^nodelistrepeat] through a list[^JSselector] and replace the colons with empty spaces, either through a `replace()`[^JSreplace] method or a regular expression[^MOZregex]. I checked out regular expressions first (and did find a tool[^regex] to make sure I wrote a valid expression), but decided that just using `replace()` would be easier.

## Trial and Error 1: I Used a String Method on an Object

The original code I figured out for the problem was as follows:

```js
function memberList() {
    var memberListItems = document.querySelectorAll('ul.wpuf_customs li');
    for (var i = 0; i < memberListItems.length; i++) {
        console.log(memberListItems[i]); //for debugging, ensuring loop is iterating correctly.
        memberListItems[i].replace(":", "");
    }
}
memberList();
```

A function called `memberList()` that had a local variable `memberListItems`. This variable kept the DOM query[^domquery] and allowed me to use it in a `for` loop[^forloop]. However, I kept getting an error that I wasn't working with a string.

After further investigation, I found out that I was trying to use a string method on an object. Which leads us into the next part...

## Trial and Error 2: I Removed the Colon, but Added Everything Else Back in

```js
function memberList() {
    var memberListItems = document.querySelectorAll('ul.wpuf_customs li');
    for (var i = 0; i < memberListItems.length; i++) {
        console.log(memberListItems[i]);
        memberListItems[i].textContent.replace(":", "");
    }
}
memberList();
```

By using the `textContent` property, I was able to convert the objects to a string[^fiddleColonRemoval], but I also stripped out all the HTML. Because of this, links, images, and labels came back and I ended off worse than when I started.

## Trial and Error 3: I Tried Removing Labels While Keeping the Image

```js
function memberList() {
    var memberListItems = document.querySelectorAll('ul.wpuf_customs li');
    var memberListLabel = document.querySelectorAll('ul.wpuf_customs li label');
    for (var i = 0; i < memberListItems.length; i++) {
        memberListItems[i].removeChild(memberListLabel[i]);
        console.log(memberListItems[i]);
        if (memberListItems[i].textContent.includes(":")) {
            console.log(memberListItems[i].innerHTML);
            memberListItems[i].textContent = memberListItems[i].textContent.replace(":", "");
            console.log(": Replaced");
        }
        else {
            console.log("Image.");
        }
    }
}
memberList();
```

Before removing the colon (and stripping the HTML), I used the `includes()` method[^includes] to remove the `<label>` tag and all of its content[^removetagviaJS]. To protect the area with the image (which had a colon inside its `<label>` tag, for some reason...) I added an `if` statement checking to see if a selected object included a `:` character.

(I had experimented with testing[^fiddleIfContainingElement] if an element contains a class[^ifcontainclass] and removing nodes[^removenodes], but neither of those solutions worked.)

At the end of this, however, there was still a problem because the `<a>` tag was being stripped out. So instead of using `textContent`, I decided to switch over to a different solution.

## Trial and Error 4: I Decided to Use innerHTML Instead of textContent

```js
function memberList() {
    var memberListItems = document.querySelectorAll('ul.wpuf_customs li');
    var memberListLabel = document.querySelectorAll('ul.wpuf_customs li label');
    for (var i = 0; i < memberListItems.length; i++) {
        memberListItems[i].removeChild(memberListLabel[i]);
        console.log(memberListItems[i]);
        if (memberListItems[i].textContent.includes(":")) {
            console.log(memberListItems[i].innerHTML);
            memberListItems[i].innerHTML = memberListItems[i].innerHTML.replace(":", "");
            console.log(": Replaced");
        }
        else {
            console.log("Image.");
        }
    }
}
memberList();
```

There's a definite[^innerTextinnerHTML2] difference[^innerTextinnerHTML1] between the `textContent` and `innerHTML` methods. Most importantly, `innerHTML` will make changes to the DOM while also keeping the HTML intact. Because of this, I was able to keep all the links and images.

## At the End... I Made Further Simplifications

```js
function memberList() {
    var memberListItems = document.querySelectorAll('ul.wpuf_customs li');
    for (var i = 0; i < memberListItems.length; i++) {
        memberListItems[i].innerHTML = memberListItems[i].innerHTML.replace(":", "");
    }
}
memberList();
```

`innerHTML` solved a lot of problems, thereby creating unneeded code. I removed the `label` query selector, the item in the `for` loop that removed the actual `<label>`, and all the `console.log`s that were used for debugging.

Finally, I inserted the JavaScript into a Toolset content template, which only loaded on the pages it was needed. This allowed to loading times to be less negatively affected.

## Final Product

<p data-height="265" data-theme-id="0" data-slug-hash="ZpXEjN" data-default-tab="js,result" data-user="emilyeserven" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/emilyeserven/pen/ZpXEjN/">Colon JS Problem, After</a> by Emily Serven (<a href="http://codepen.io/emilyeserven">@emilyeserven</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<br />

## Footnotes / References

[^innerTextinnerHTML1]: StackOverflow: [The Difference Between innerText and innerHTML in JS](http://stackoverflow.com/questions/19030742/difference-between-innertext-and-innerhtml-in-javascript).
[^innerTextinnerHTML2]: StackOverflow: [nodeValue vs innerHTML and textContent](http://stackoverflow.com/questions/21311299/nodevalue-vs-innerhtml-and-textcontent-how-to-choose).
[^includes]: w3Schools: [JS Reference, `includes()`](http://www.w3schools.com/jsref/jsref_includes.asp).
[^fiddleColonRemoval]: JSFiddle: [Untitled Fiddle with Colon Removal Demo](https://jsfiddle.net/qbwqtc32/).
[^fiddleIfContainingElement]: JSFiddle: [Untitled Fiddle with Element Containing Demo](http://jsfiddle.net/qLPJC/).
[^removetagviaJS]: StackOverflow: [Removing a Div Tag using JS or jQuery](http://stackoverflow.com/questions/4755546/remove-div-tag-using-javascript-or-jquery).
[^ifcontainclass]: StackOverflow: [Test if an Element Contains a Class](http://stackoverflow.com/questions/5898656/test-if-an-element-contains-a-class).
[^JSreplace]: w3Schools: [JS Reference, `replace()`](http://www.w3schools.com/jsref/jsref_replace.asp).
[^JSselector]: StackOverflow: [How to Select all in a UL with a Classname](http://stackoverflow.com/questions/14061554/how-to-select-all-li-in-an-ul-with-a-classname-nav).
[^regex]: Tool: [Regular Expression Checker](https://regex101.com/).
[^MOZregex]: Mozilla Developer: [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).
[^removenodes]: StackOverflow: [Can we Directly Remove Nodes from a NodeList](http://stackoverflow.com/questions/6545379/can-we-directly-remove-nodes-from-a-nodelist).
[^nodelistrepeat]: Refs&Docs: [Repeating Actions for an Entire NodeList](http://emilyserven.net/ref-docs/js-ref-dom.html#repeating-actions-for-an-entire-nodelist).
[^function]: Refs&Docs: [Declaring a Function](http://emilyserven.net/ref-docs/js-ref-functions.html#declaring-a-function).
[^domquery]: Refs&Docs: [Caching DOM Queries](http://emilyserven.net/ref-docs/js-ref-dom.html#caching-dom-queries)
[^forloop]: Refs&Docs: [For Loops](http://emilyserven.net/ref-docs/js-ref-loops.html#for-loops)

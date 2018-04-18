---
layout: flexfolio
title: Digital Asset Manager (Concept)
description: From Here to There is a trip planning tool and category-winning web app built during the 2016 New Haven Hackathon. It that allows users to easily plan and coordinate group activities (as long as the travel origin and destinations are train stations).
code: dam
time: October 2016
stack: [HTML, CSS, AngularJS, bower]
responsibilities: Original Concept, Front-End Development, Design, Project Management
category: Project
casestudy: false
projlink:
    - name: GitHub Repository
      icon: fa-github-square
      url : https://github.com/emilyeserven/digital-asset-manager
    - name: Web App
      icon: fa-link
      url: https://rawgit.com/emilyeserven/digital-asset-manager/master/build/index.html
flexwidth: col-3
flexheight: 1
flexorder: 3
showcaseview: false
workall-view: true
workall-order: 2
workall-size: col-6
project-img: ../assets/flexfolio/fhtt/banner.jpg
workall-img: ../placeholder.png
features:
    - descrip: <strong>Organizer Screen</strong><br />The organizer answers three questions about the event they're planning. These answers generate a URL that can be passed to any participant.
      image: feat1.jpg
      format: half-left
      spacing: none
    - descrip: <strong>Participant Screen</strong><br />Event participants get the link to a customized screen from the organizer. All they need to do is specify what train station they're coming from, and they'll get a short list of the best trains they can use to get to the event on time.
      image: feat2.jpg
      format: half-left
      spacing: default

---

## Original Concept

*

## Responsibilities

This project had three people involved, including me. The other students ([Jon](https://www.instagram.com/jonathantaylr/) and [Stephen](http://stephenrozo.com/)) worked on user experience research and design, and I only was involved in the development of the application.

## Process

My part of the project once I received a wireframe from Stephen. The original plan was to just adapt that to a static HTML & CSS prototype, but I ended up doing a basic ReactJS app. This prototype used React concepts such as state[^state], components and props[^props], and even integrating another package (`react-popup`).

The next phase was adding the real design. This included aesthetic updates like icons (using `react-icons`) and colors, but also more structural updates. I took the time to introduce routing through React Router and added slots where content from a temporary `json` file could be inserted according to those React Router routes. (More details lower in this case study.)

While I have not yet had time to add database integration (using a MERN stack), the application is in a good place where it would not take too much time to integrate.

## Technical Choices

### React

* wanted to learn it
* the "directory"nature lends itself to components

### Routing

React is commonly used to create "single page web apps"[^spa], meaning that it loads common assets needed for what would be individual pages (and separate loads) all at once. Imitating a traditional website with React is relatively simple (all you need to do is swap components out), but a bigger way to blur the lines is by introducing routing.

Routing involves assigning specific components to URL patterns. This can be statically (in the case of the Hub and Tree screens) or dynamically (in the case of the individual asset pages). Combining these methods creates an experience that is both performant and familiar to users, but routing as a technical feature is not always necessary. There were a few reasons I chose to add routing to this project.

1. Someone might want to link to a specific resource they want to keep track of
2. Someone might want to navigate the app using their browser's native forward and back buttons

Adding them in a way that was scalable was not difficult, although there are certainly ways that the current solution could be optimized.

## Higher Complexity (Wishlist)

### MERN Stack

### Self-Install Version

## Footer

[^state]: [ReactJS Official Documentation: State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
[^props]: [ReactJS Official Documentation: Components and Props](https://reactjs.org/docs/components-and-props.html)
[^spa]: [Kirupa: React Introduction](https://www.kirupa.com/react/introducing_react.htm)
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
    - descrip: <strong>Hub Screen</strong><br />Gotta write this stuff still.
      image: feat1.jpg
      format: half-left
      spacing: none
    - descrip: <strong>All Assets, At A Glance</strong><br />Gotta write this stuff still.
      image: feat2.jpg
      format: half-left
      spacing: default
    - descrip: <strong>Key Info for All Individual Assets</strong><br />Gotta write this stuff still.
      image: feat3.jpg
      format: half-left
      spacing: default

---

## Original Concept

I originally thought of creating a digital asset manager (DAM) when running into my own organizational problems. The asset licenses I have were starting to grow in quantity, and it was easy to forget what I had and where it was stored. When looking for a more professional solution to organize my assets, I kept running into services that were at a scale I simply didn't need...

1. Most DAM's are designed for corporate or team use.
2. Most DAM's are designed so that your files are hosted on their servers.
3. Most DAM's cost a lot of money for all those features I didn't need.

I have something of a prototype[^proto] created by extending a WordPress installation with the Toolset suite of plugins, but I wanted to make a version that could be more general use than "dev ware". After keeping the idea in my back pocket for a long time, the opportunity to execute it finally came up in the form of 2 other students with compatible skill sets and the need for additional credits to secure graduation.

## Responsibilities

This project had three people involved, including me. The other students ([Jon](https://www.instagram.com/jonathantaylr/) and [Stephen](http://stephenrozo.com/)) worked on user experience research and design, and I was involved in the development of the application.

## Process

My part of the project began once I received the wireframe from Stephen. The original plan was to adapt that to a static HTML & CSS prototype, but I ended up doing a basic ReactJS app. This prototype used React concepts such as state[^state], components and props[^props], and even integrating another package called `react-popup`.

The next phase was adding the full design. This included aesthetic updates like icons (using `react-icons`) and colors, but also more structural updates. I took the time to introduce routing through React Router and added slots where content from a temporary `json` file could be inserted according to those React Router routes. (More details lower in this case study.)

While I have not yet had time to add database integration (using a MERN stack), the application is in a good place where it would not take too much time to integrate.

## Technical Choices

### React

Choosing a programming language to use for a project isn't always straightforward, and the decision relating to a specific framework can be difficult to downright frustrating. My recommendation and implementation of React was caused by three main factors.

1. I had some experience working with it for another project and wanted to keep working with it in another use case.
2. The structure of the app lent itself to React's usage of components.
3. Due to the popularity of React, there's been a surge of resources dedicated to learning it.

For those who aren't aware of how React works, I'd also like to talk more specifically about the concept of components. At a high level, you can just think of components as sections of code. They are supposed to be self contained, and may also be reusable, saving the developer time and possible frustrations relating to not adhering to Don't Repeat Yourself[^dry] best practices. Components are so important to how React works, that the "Component-Based" nature of it is prominently advertised on the framework's homepage[^react].

### Routing

React is commonly used to create "single page web apps"[^spa], meaning that it loads common assets needed for what would be individual pages (and separate loads) all at once. Imitating a traditional website with React is relatively simple (all you need to do is swap components out), but a bigger way to blur the lines is by introducing routing.

Routing involves assigning specific components to URL patterns. This can be statically (in the case of the Hub and Tree screens) or dynamically (in the case of the individual asset pages). Combining these methods creates an experience that is both performant and familiar to users, but routing as a technical feature is not always necessary. There were a few reasons I chose to add routing to this project.

1. Someone might want to link to a specific resource they want to keep track of
2. Someone might want to navigate the app using their browser's native forward and back buttons

Adding them in a way that was scalable was not difficult, although there are certainly ways that the current solution could be optimized. For instance, the URL for individual assets will use a unique identifier to pull information relating to that specific asset. Right now, that unique identifier is the asset's array index in the JSON file that all the app data is held. Since array indices are only numbers, it doesn't allow for easily human-readable URLs to be used. I see this as a serious UX weak point, and would like URLs to be generated from a string that uses information in the asset name instead.

## Higher Complexity (Wishlist)

### MERN Stack

A "stack" is a set of technologies that work well together. The MERN stack itself is comprised of...

* *MongoDB*, a non-relational document-based database.
* *Express.js*, a web application framework for Node.js that allows for calling various APIs (such as MongoDB).
* *ReactJS*, a component-based JavaScript framework that reacts to various user interactions.
* *Node.js*, a runtime environment that executes server-side Javascript code and allows for the creation of more dynamic web applications.

Currently, the project only consists of ReactJS and a JSON file that takes the place of MongoDB. With the full stack implemented, the web application would be more robust and allow for extensions of functionality like allowing the user to update and change information without having to edit the JSON file and having new assets loaded in without the need for refreshing the browser.

### Self-Install Version

The ultimate ideal is having this application hosted on the open internet, free for anyone to access. However, that requires collecting people's information on a cloud server and introduces a large risk on the user's part and the server owner's part. The next step down would be creating a version that anyone could set up if they had the files, a self-install version.

Creating this would require writing documentation, providing some support, and possibly some changes to how the application is written. Additional basic security measures (such as making sure all fields sanitize inputs) would be implemented in case a user wishes to install the app on their own cloud server, but ultimately it will be intended for personal server usage.

### API Integration and Web Scraping

Automating experiences is something I like to do if possible, as it reduces user error and saves time. In the future, I'd like to possibly implement connections to large platforms where resources are commonly found (such as Envato, DesignCuts, and Creative Market). These connections would use official APIs to auto-populate asset information fields, or just scan the website for specific HTML tags (scrape the website) and find the information to auto-populate that way.

## Conclusion

Working in a team was a great experience, and I ended up learning a lot from going through this development cycle. Being able to focus on the development allowed me to experiment more and take better care crafting the code. I also had time to work on development for another project that was to debut at the same time, which was completely different but relied on React as well. Doing both projects at once helped reinforce concepts needed for each, and provided breaths of fresh air from one project if I had spent too much time on it.

I definitely want to keep on developing this project and using it as a base. Hopefully, it will eventually be solid enough to be a worthy contribution to the communities that would value it most.

## Additional Links

[^proto]: [ES Resources: Prototype DevWare Site](http://projects.emilyserven.net/resources)
[^state]: [ReactJS Official Documentation: State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
[^props]: [ReactJS Official Documentation: Components and Props](https://reactjs.org/docs/components-and-props.html)
[^spa]: [Kirupa: React Introduction](https://www.kirupa.com/react/introducing_react.htm)
[^dry]: [O'Reilly: Don't Repeat Yourself](http://programmer.97things.oreilly.com/wiki/index.php/Don't_Repeat_Yourself)
[^react]: [ReactJS Homepage](https://reactjs.org/)
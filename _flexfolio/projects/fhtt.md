---
layout: flexfolio
title: From Here to There
description: From Here to There is a trip planning tool and category-winning web app built during the 2016 New Haven Hackathon. It that allows users to easily plan and coordinate group activities (as long as the travel origin and destinations are train stations).
code: fhtt
category: webdev
time: October 2016
stack: [HTML, CSS, AngularJS, bower]
responsibilities: Original Concept, Front-End Development, Design, Project Management
team:
    - name: Gabriel Ortiz
      role: Design and Research
    - name: Victor
      role: Front-End Development
    - name: Mike
      role: API Research
subcategory: Project
casestudy: true
projlink:
    - name: GitHub Repository
      icon: fa-github-square
      url : https://github.com/emilyeserven/nhvhackathon-itinerary/tree/frontend
    - name: Web App
      icon: fa-link
      url: https://rawgit.com/emilyeserven/nhvhackathon-itinerary/frontend/index.html
flexwidth: col-3
flexheight: 1
flexorder: 3
showcaseview: false
workall-view: true
workall-order: 3
workall-size: col-sm-3 col-6
project-img: ../assets/flexfolio/fhtt/banner.jpg
workall-img: ../placeholder.png
---

{% include portfolio/dev-descrip.html %}

<h3>Highlighted Features</h3>

{% include portfolio/feature-left.html
    image="feat1.jpg"
    spacing="none"
    descrip="<strong>Organizer Screen</strong><br />The organizer answers three questions about the event they're planning. These answers generate a URL that can be passed to any participant." %}

{% include portfolio/feature-left.html
    image="feat2.jpg"
    spacing="default"
    descrip="<strong>Participant Screen</strong><br />Event participants get the link to a customized screen from the organizer. All they need to do is specify what train station they're coming from, and they'll get a short list of the best trains they can use to get to the event on time." %}
---
layout: flexfolio
title: Feyer Music
description: Feyer is a musician based in New York City. He needed a new website to coincide with the release of his first full album.
code: fm
category: webdev
time: January 2012 - Present
stack: [WordPress.org, WP Toolset]
responsibilities:  Front-End Development, Design, Tutorials, Server Management
subcategory: Commercial
casestudy: true
technical-class: fmTechDetail
projlink:
    - name: Feyer Music
      icon: fa-link
      url: http://www.feyermusic.com
---

{% include portfolio/dev-descrip.html
    technicalIDs="fmTech1"%}

<div class="row">
<div class="col-12">

{% include portfolio/feature-left.html
    image="feat1"
    spacing="none"
    border=true
    descrip="<div><h5>Music</h5>Feyer's new album, <em>Signals Internalized</em>, was a primary focus of his career as well as the website's branding. I added an easy way for fans to listen and then stream or buy the album officially.</div>" %}

{% include portfolio/feature-left.html
    image="feat2"
    border=false
    technicalID="fmTech1"
    technicalTopic="Custom Press Loop"
    descrip="<div><h5>Press Page</h5>With modularity and flexibility in mind, the Press page has a front-end design that works with any content thrown into it. It also has a simplified and specialized backend workflow, making it easy for Feyer to edit.</div>" %}

{% include flexfolio/fm/customPressLoop.html %}

<div class="row"><hr class="thin feature-padding"/></div>

{% include portfolio/feature-left.html
    image="feat3"
    border=false
    descrip="<div><h5>Personality</h5>I decided to take advantage of Feyer's frequent use of Instagram by adding his Instagram feed on the website. It's the perfect way to allow fans to get to know him while keeping the website updated with new content regularly.</div>" %}

<div class="row"><hr class="thick feature-padding"/></div>

{% include portfolio/feature-full.html
    image="fullfeat.jpg"
    spacing="large" %}
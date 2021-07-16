---
layout: flexfolio
title: New Canaan Parent Support Group
description: New Canaan Parent Support Group is an organization dedicated to providing an inclusive and safe environment for parents of loved ones affected by addiction and substance use.
code: ncpsg
color: "#EF7F2B"
category: webdev
time: January 2018 - Present
stack: [WordPress.org, WP Toolset]
responsibilities:  Front-End Development, Project Management, Client Tutorials, Server Management
team:
    - name: Jon Harrington
      role: Graphic Design
      url: https://justaskjonathan.com/
    - name: Daniel Kamzik
      role: Front-End Development, Client Tutorials
      url: https://dankamzik.com/
subcategory: Commercial
casestudy: true
technical-class: fmTechDetail
projlink:
    - name: NCPSG
      icon: fa-link
      url: http://ncparentsupportgroup.org/
---

{% include portfolio/dev-descrip.html
    technicalIDs="fmTech1"%}

<div class="row">
<div class="col-12">

{% include portfolio/feature-left.html
    image="feat-hp-repeater"
    image-full=true
    spacing="none"
    border=false
    descrip="<div>
        <h5>Dynamic Sections</h5>
        <p>We wanted to keep some areas of the homepage dynamic and constantly updating with each new change to the site (or at least the Events and Blog sections), but we didn't like the standard layouts provided by the theme. So instead, I used WP Toolset (and lots of CSS) to create custom templates for new blog posts and events. These were stress-tested to make sure they would remain responsive and functional, and to ensure any content thrown at them would work.</p>
    </div>" %}

{% include portfolio/feature-left.html
    image="feat-resources"
    image-full=true
    border=false
    descrip="<div>
        <h5>Resources Page</h5>
        <p>The Resources Page was also created with WP Toolset, although the setup was much more elaborate than its use on the Homepage's dynamic sections.</p>
        <p>We created a new post type, 'Resources', so that this content would remain separate from other items on the site. Additionally, these Resource posts were all assigned same custom form fields. Due to the commonality of these fields, we were able to solve a few problems and implement other features...</p>
        <ul>
            <li>The client is easily able to add and edit relevant information for a Resource, and doesn't need to worry about design at all.</li>
            <li>The Resource Page displays all resources using a similar template; with no extra editing necessary on the client's part. The template has lots of code built in to prevent problems caused by unfilled fields as well.</li>
            <li>I was able to implement a simple search and filter at the top of the page so users could find what they wanted quickly.</li>
        </ul>
    </div>" %}

<div class="row"><hr class="thick feature-padding"/></div>

{% include portfolio/feature-full.html
    image="full-feat.jpg"
    spacing="large" %}
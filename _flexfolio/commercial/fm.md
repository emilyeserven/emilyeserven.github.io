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
    image="feat1.jpg"
    spacing="none"
    border=true
    descrip="<div><h5>Music</h5>Feyer's new album, <em>Signals Internalized</em>, was a primary focus of his career as well as the website's branding. I added an easy way for fans to listen and then stream or buy the album officially.</div>" %}

{% include portfolio/feature-left.html
    image="feat2.jpg"
    border=false
    technicalID="fmTech1"
    technicalTopic="Custom Press Loop"
    descrip="<div><h5>Press Page</h5>With modularity and flexibility in mind, the Press page has a front-end design that works with any content thrown into it. It also has a simplified and specialized backend workflow, making it easy for Feyer to edit.</div>" %}

{% comment %} START -- fmTech1 TECHNICAL DETAIL {% endcomment %}

{% include technical/detail-card-start.html
    techID = "fmTech1" %}

{% include technical/detail-header.html
    title="User Scenario" %}

{% include technical/detail-row.html
    row-split = "4-8" %}

<p>
   Feyer just had a press article written about his new song. He wants to quickly add it to his website without needing to worry about messing up the formatting and/or presentation of the other Press items.
</p>
<h5>Custom Press Loop Steps</h5>
<ol>
    <li>Feyer adds a new Press post and fills in a few designated fields are filled in with relevant information.</li>
    <li>The new post is active on the website and Feyer can go back to entertaining his fans.</li>
</ol>

{% include technical/detail-header.html
    endDivCount = 2
    title="How I Built the Custom Press Loop" %}

{% include technical/detail-row.html
    row-split = "4-8"
    image = "/assets/flexfolio/fm/techdetail1-1.png"
    caption = "A press post's custom field group."
    row-classes = "mt-2" %}

<h5>①</h5>
<p>
    During initial website creation, a new post type ("Press") was created.
</p>
<ul>
    <li>
        Keeping the press posts away from the default posts meant that core WordPress functionality was not touched.
    </li>
    <li>
        Creating a new post type enabled the creation of new custom fields (pictured to the side). These custom fields allowed for standardization and validation of information.
    </li>
</ul>

{% include technical/detail-row.html
    hrType = "thin"
    row-split = "4-8"
    image = "/assets/flexfolio/fm/techdetail1-2.png"
    imageStyles = "max-width: 200px;padding-top:8px;"
    imageClasses = "text-center"
    caption = "The result of step ①'s custom fields being filled out."
    row-classes = "mt-2" %}

<h5>②</h5>
<p>
    A view template for individual Press posts was created. This utilized the custom fields.
</p>

{% include technical/detail-row.html
    hrType = "thin"
    row-split = "4-8"
    image = "/assets/flexfolio/fm/techdetail1-3.png"
    caption = "The main Press page with each Press post using the same view template."
    row-classes = "mt-2" %}

<h5>③</h5>
<p>
    A page template with a custom loop containing the Press posts got assigned to the Press Archive page. This ensured that as soon as a new Press post got added, it showed up on the website with designated formatting.
</p>


{% include technical/detail-header.html
    endDivCount = 2
    title="Typical Setups and Their Drawbacks" %}

{% include technical/detail-row.html
    row-split = "4-8" %}

<h5>WordPress Set-ups</h5>
<p>
    Oftentimes when WordPress sites have a Press page, they have two options (with their own drawbacks).
</p>
<p>
    1: Build out a page with a visual editor plugin: This seems simple at first, but making sure that every item has the same visual settings can become a challenge the larger the Press list grows.
</p>
<pre>
    2: Use the core WordPress post functionality: This has the same scale problem as the first option, but also an create a challenge down the road if the client wants to actually use the default blog post functionality. Not only that, but out-of-the-box URL slugs will still read as <pre>post</pre>, instead of <pre>press</pre>.
</p>
<h5>Other Site Builders</h5>
<p>
    Many website builders nowadays advertise building tools that don't require coding, however actually using these tools to get exact results you want can be difficult. This problem is increased further when mobile is factored in, and clients aren't sure why a change in desktop view also made a change in mobile view.
</p>
<p>
    Additionally, there are many websites that don't allow for the editing of CSS, which makes it very difficult for clients to achieve their exact design visions.
</p>
<h5>Closing Notes</h5>
<p>
    Overall, the upfront cost of this method was steeper than just starting off with a visual/WYSIWYG builder, however it absolutely saved time and stress in the long run.
</p>

{% include technical/detail-card-end.html
    endDivCount = 6 %}

{% comment %} END -- fmTech1 TECHNICAL DETAIL {% endcomment %}

<div class="row"><hr class="thin feature-padding"/></div>

{% include portfolio/feature-left.html
    image="feat3.jpg"
    border=false
    descrip="<div><h5>Personality</h5>I decided to take advantage of Feyer's frequent use of Instagram by adding his Instagram feed on the website. It's the perfect way to allow fans to get to know him while keeping the website updated with new content regularly.</div>" %}

<div class="row"><hr class="thick feature-padding"/></div>

{% include portfolio/feature-full.html
    image="fullfeat.jpg"
    spacing="large" %}
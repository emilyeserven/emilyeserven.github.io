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

{% include technical/detail-row.html
    row-special = "first"
    row-split = "4-8" %}

<h5>Challenge</h5>
<p>
    Feyer needed to easily be able to add Press items as well as keep them in a professional and standardized format. WYSIWYG editors may be easy for clients to use on a surface level, but maintaining order and consistent spacing can end up being tedious and difficult.
</p>

{% include technical/detail-row.html
    hr-type = "thick"
    hr-classes = "mt-1 mb-4"
    row-split = "4-8" %}

<h5>Solution</h5>

{% include technical/detail-row.html
    row-split = "4-8"
    image = "/assets/flexfolio/fm/techdetail1-1.png"
    image-styles = ""
    caption = "A press post's custom field group."
    row-classes = "mt-2" %}

<p>
    ① A new post type ("Press") was created.
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
    hr-type = "thin"
    row-split = "4-8"
    image = "/assets/flexfolio/fm/techdetail1-2.png"
    image-styles = "max-width: 200px;padding-top:8px;"
    image-classes = "text-center"
    caption = "The result of step ①'s custom fields being filled out."
    row-classes = "mt-2" %}

<p>
    ② A view template for individual Press posts was created. This utilized the custom fields.
</p>

{% include technical/detail-row.html
    hr-type = "thin"
    row-split = "4-8"
    image = "/assets/flexfolio/fm/techdetail1-3.png"
    caption = "The main Press page with each Press post using the same view template."
    row-classes = "mt-2" %}

<p>
    ③ A page template with a custom loop containing the Press posts got assigned to the Press Archive page. This ensured that as soon as a new Press post got added, it showed up on the website with designated formatting.
</p>


{% include technical/detail-row.html
    hr-type = "thick"
    hr-classes = "mb-3"
    row-split = "4-8" %}

<h5>Result</h5>
<p>
    When Feyer wants to add a new press article link, all he needs to do is create a new Press post, fill in some fields, and then publish. The display of it gets taken care of automatically, and he can quickly get back to entertaining fans!
</p>
<p>
    The upfront cost of this method was steeper than just starting off with a visual/WYSIWYG builder, however it absolutely saved time and stress in the long run.
</p>

{% include technical/detail-card-end.html %}

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

</div>
</div>
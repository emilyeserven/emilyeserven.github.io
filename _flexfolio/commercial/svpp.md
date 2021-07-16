---
layout: flexfolio
title: Stamford Veteran's Park Partnership
description: Veterans Memorial Park is in the heart of the downtown commercial district in Stamford, Connecticut. In November 2019, the first of three phases of the park’s renovation was completed and celebrated on Veterans Day. To coincide with this occasion, the Partnership wanted a fresh website that could do more than just help spread the word about the site.
code: svpp
color: "#3278CD"
category: webdev
time: August 2019 - Present
stack: [WordPress.org, WP Toolset, WooCommerce]
responsibilities:  Front-End Development, Project Management, Tutorials, Server Management
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
    - name: SVPP
      icon: fa-link
      url: https://vprstamford.org/
---

{% include portfolio/dev-descrip.html
    technicalIDs="fmTech1"%}

<div class="row">
<div class="col-12">

{% include portfolio/feature-left.html
    image="feat-naming"
    spacing="none"
    image-full=true
    descrip="<div>
        <h5>Naming Opportunities</h5>
        <p>There were various elements of the park that were available as Naming Opportunities. To allow anyone to easily get in contact with the Partnership, and to allow the Partnership to easily add new Opportunities, I created a few templates.</p>
        <p>The backbone of these templates was a group of common form fields for specific information that would be re-used. This information was specific to the Naming Opportunities.</p>
    </div>" %}

{% include portfolio/feature-left.html
    image="feat-naming-main"
    image-full=true
    border=true
    spacing="none"
    descrip="<div>
        <p>For the single Opportunity page template, the form field information was used for display (such as the donation level), but also for use within the contact form as email's subject line. This way, a form submission between different Opportunities remained distinguishable, but also that a new form didn't need to be made for every page.</p>
        <p>The main page for the Naming Opportunities was also automatically generated from the pool of published Opportunities. Information was grabbed from the form fields, and the design was templatized. This way, someone only needed to edit the info once (on the Opportunities page) and the design remains consistent.</p>
    </div>" %}

{% include portfolio/feature-left.html
    image="feat-pavers"
    image-full=true
    descrip="<div>
        <h5>Pavers</h5>
        <p>One of the features that the Partnership wanted that they couldn't have on their old site was the ability to allow people to purchase paving stones for the park. This required the ability to have different combinations of text lines, length of text per line, and choice of emblem (or no emblem at all) for each paver. We achieved this using WooCommerce, as well as the WooCommerce Plugin Add-ons extension plugin.</p>
        <p>We also made some light edits to the PHP files to add some descriptive text where the theme didn't originally allow for.</p>
    </div>" %}

<div class="row"><hr class="thick feature-padding"/></div>

{% include portfolio/feature-full.html
    image="full-feat.jpg"
    spacing="large" %}
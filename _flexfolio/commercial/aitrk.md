---
layout: flexfolio
title: AiTrk4 for Ai Media Group
description: <p>Ai Media Group is an ad buying agency based in NYC. I was hired as a front-end developer to assist in developing the latest iteration of their proprietary web application, AiTrk4.</p><p><i>More technical sections are being added to this Case Study over the next few days!</i></p>
code: aitrk
color: "#3088B0"
category: webdev
time: July 2018 - June 2021
stack: [JavaScript, D3, Dojo Toolkit]
responsibilities:  Front-End Development
subcategory: Commercial
casestudy: true
technical-class: trkTechDetail
---

{% include portfolio/dev-descrip.html %}

<div class="row">
<div class="col-12">

<h2>App Architecture</h2>

{% include portfolio/feature-left.html
    image="structure-step4"
    border=false
    descrip="<div>
        <h5>Overview</h5>
        <p>AiTrk4 is composed of a predictable pattern: <strong>Section > Tab > (several) Cards</strong>. This pattern/hierarchy is possible because of the architecture of the app. As a side effect, everything is also very modular and components can be swapped out.</p>
        <p>While I did not do any of the original architecting, understanding it was crucial when making changes as a few elements of the tech stack are no longer in common use.</p>
    </div>" %}

<div class="row"><hr class="thin feature-padding mb-3"/></div>

{% include portfolio/feature-left.html
    image="dataflow-thumb"
    border=false
    technicalID="aitrkTech-dataFlow"
    technicalTopic="XHR, Pub/Sub, Data Transformations"
    descrip="<div>
        <h5>Basic Data Flow</h5>
        <p>Most of the data flow is kicked off by a click of the <strong>Submit</strong> button. Including that action, the data flow process involves...</p>
        <ol>
            <li>The user selects a client, program/group, and date range</li><li>A card requests data</li>
            <li>The Ai server hands it over</li>
            <li>The Card transforms the raw data for its needs</li>
            <li>The data is displayed using a visualization or table</li>
        </ol>
        <p>There were often situations in which the transformed data needed to be examined and debugged. <i>The specific technical hazards I needed to solve for are outlined in the Technical section.</i></p>
    </div>" %}

{% include flexfolio/aitrk/dataFlow.html %}

<div class="row"><hr class="thin feature-padding mb-3"/></div>

{% include portfolio/feature-left.html
    image="cards-thumb"
    border=false
    technicalID="aitrkTech-cards"
    technicalTopic="How Cards Work"
    descrip="<div>
        <h5>Cards</h5>
        <p>The main content components of AiTrk4. Cards were used to contain various visualizations, tables of data, and any other information in the app.</p>
        <p>Much of the data flow debugging itself took place at the card level, and I was responsible for a lot of card development from the initial version (pre-card-specific data) to the final versions that didn't require senior developer intervention. <i>Specific hazards and details about the cards are outlined in the Technical section.</i></p>
    </div>" %}

{% include flexfolio/aitrk/cards.html %}

</div></div>

{% comment %} VISUALIZATIONS SECTION {% endcomment %}

<div class="row"><hr class="thick feature-padding mt-5 mb-4"/></div>

<div class="row">
<div class="col-12">

{% comment %} <h2>Visualizations</h2> {% endcomment %}

<h2>Specific Features I Worked On</h2>

{% include portfolio/feature-left.html
    image="heatmap-viz"
    border=false
    descrip="<div><h5>Heatmap</h5>
        <p>This visualization was originally requested so that people could see, at a glance, the most popular days and times for when a client got phone calls. The a few of the visual requirements were as follows:</p>
        <ul>
            <li>Display equally sized squares at even intervals in a given space (including responsively).</li>
            <li>Make square color based upon a dynamic color scale that updates depending on the data set given (so more calls = darker square).</li>
            <li>Display a tooltip with the total number of calls per square upon square hover.</li>
        </ul>
        <p>I adjusted an existing heatmap visualization to meet the above design requirements and also work as a reusable AMD module.</p>
    </div>" %}

<div class="row"><hr class="thin feature-padding"/></div>

{% include portfolio/feature-left.html
    image="expander-thumb"
    border=false
    descrip="<div>
        <h5>Detail Table Expander</h5>
        <p>All of the parent/child card sets had table cards on the left side. Some of these have a large amount of data, so it was requested that they be able to be expandable so the user may be able to look at more information when making detail selections.</p>
        <p>To achieve this, I needed to make my own AMD module and ensure any changes as a result of the card expansion didn't interrupt the user experience.</p>
    </div>" %}

<div class="row"><hr class="thin feature-padding"/></div>

{% include portfolio/feature-left.html
    image="sidebarexpander-thumb"
    border=false
    descrip="<div>
        <h5>Sidebar Expander</h5>
        <p>At some point during development, it was requested that the sidebar be able to be collapsed and allow the user to view more information at once. Completing this request required going into Material Design Lite's code and overwriting default behavior. </p>
    </div>" %}

<div class="row"><hr class="thin feature-padding"/></div>

{% include portfolio/feature-left.html
    image="documentation-thumb"
    border=false
    technicalID="aitrkTech-documentation"
    technicalTopic="Examples"
    descrip="<div>
        <h5>Documentation and Training</h5>
        <p>If you haven’t guessed from this case study, I actually do enjoy writing detailed (and clear, I hope) documentation. Most of it was written with the assumption that a brand new developer to the project could look at it and understand it. So, I tried to use minimal jargon and overly technical terms where possible.</p>
        <p>Additionally, I was involved with developing training sessions when AiTrk4 was being taken out of beta. These were conducted remotely and designed to be understood by all units of the company.</p>
        </div>" %}

{% include flexfolio/aitrk/documentation.html %}
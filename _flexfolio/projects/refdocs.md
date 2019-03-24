---
layout: flexfolio
title: Refs & Docs
description: A project that grew out of the need to seriously absorb and learn new programming concepts. Refs & Docs is my personal collection of reference articles and slimmed-down documentation, primarily for development work.
code: refdocs
time: January 2012 - Present
stack: [Jekyll]
responsibilities:  Front-End Development, Content, Design
category: Project
casestudy: true
projlink:
    - name: GitHub Repository
      icon: fa-github-square
      url: https://github.com/emilyeserven/ref-docs
    - name: Refs & Docs
      icon: fa-link
      url: http://emilyserven.net/ref-docs/
flexwidth: col-6
flexheight: 1
flexorder: 1
showcaseview: true
workall-view: true
workall-order: 2
workall-size: col-sm-6 col-12
project-img: ../assets/flexfolio/refdocs/banner.jpg
workall-img: ../assets/flexfolio/refdocs/banner.jpg
features:
    - descrip: <strong>Detailed Documentation</strong><br />I try to write explanations of concepts with as little jargon as possible and integrate information from multiple sources. Non-disruptive footnotes are included for people who are curious and want to read more.
      image: feat1.jpg
      format: half-left
      spacing: none
    - descrip: <strong>Organized Sections</strong><br />As new information is learned, I reorganize the documentation and try to interlink related information whenever I can.
      image: feat2.jpg
      format: half-left
      spacing: default
---

## Case Study

### Origin & Goals

This project was started because I wanted a space I could store my reference materials and documentation. Microsoft Word/Google Documents were useful up to a point, but keeping things organized all on one page, hilighting code, and keeping the formatting consistent was a challenge. So then, what to do? I decided to build a website (the answer to many of my problems) using Jekyll.

**The primary needs of the site were...**

* Ability to easily edit
* Ability to partially automate segments of the site
* Ability to keep readable and easy to navigate

### Development

The need for the 'ability to easily edit' was solved by the platform itself, as Jekyll can read Markdown. Markdown is extremely beneficial, as it keeps the formatting options you have very limited and streamlined. This means less tweaking with fonts per individual section of text, no tweaking the formatting of code, and giving special focus to the real hierarchy and structure of the page, thereby also helping with readability.

The other needs were found in a [theme specializing in documentation](https://github.com/tomjohnson1492/documentation-theme-jekyll). This theme, through clever coding, extends functionality beyond what a regular theme would provide. It took some time to get used to, but I've mostly figured out what I need to change when change needs to be made. These changes can be from adding items to a sidebar, to creating a new section, to understanding how the tag archive pages work. (Sometimes the procedures to achieve these tasks are [documented within the documentation](http://emilyserven.net/ref-docs/ref-procedures.html) as well). The automatically generated table of contents on a page in particular were a draw to me.

### Design

In terms of design, I stuck with the structure and typography of the original while changing colors and one section of background to better match my branding. The theme did a great job of maintaining hierarchy throughout the project with font sizing and colors. The way code is shown also was well done, with slightly tan backgrounds and monospaced font. (Occasionally differently colored text as well, depending on if syntax hilighting was enabled or not for that code block.)

### Improvements to be Made

I still need to make improvements to this site, but I feel it mostly will be on the content side. I'm not very interested in changing how the theme works at the moment, nor am I interested in overhauling the design. As things are right now, I'm perfectly happy just working on improving the quality and quantity of knowledge stored on the site as well as improving the structure of the site.

### In Conclusion...

This experience definitely helped me see more of what Jekyll can do, even while limited by the inability to install plugins while on Github's servers. Specifics of what I learned includes modification of the `_includes` files, taking more advantage of YAML, and practicing the use of Liquid template tags. I won't write too much about why writing documentation while learning a topic is beneficial though, that's for a different post!

---
layout: flexfolio
title: Ornette
code: ornette
category: webdev
subcategory: Lab
casestudy: true
projlink:
    - name: Github Repository
      icon: fa-github-square
      url: https://github.com/emilyeserven/testwebsites/tree/master/ornette
    - name: Ornette Page
      icon: fa-link
      url: https://rawgit.com/emilyeserven/testwebsites/master/ornette/index.html
showcaseview: false
workall-view: true
workall-order: 3
workall-size: col-sm-3 col-6
project-img: ../assets/flexfolio/quote-lc/banner.jpg
---

## Origin & Goals

This project was originally for an in-class assignment. We were provided with bare HTML and were to add CSS styling to it. Most students had this as their first exposure to a larger project involving CSS, and were able to see how flexible CSS is. I personally wanted to explore colors and CSS I don't typically use, since this project was not client-related.

## Development

This was developed without legacy browsers and mobile styling, since I wanted to just explore the CSS without much limitations.

## Design

Since most of my designs tend to use blue or another "cool" color, I decided to work with yellow and black as the primary colors for this assignment. I also used tilted headers with a typewriter-like font to evoke a more vintage style, despite the sectioning of the website following along with modern trends.

In retrospect, I would have done some more tests with the placement of content relative to the "Track Listing" and "Personnel" headings. The flow of content is inconsistent with the "Free Jazz" heading, which has no content wrapping on the side. Additionally, the right side of the table within "Track Listing" is not aligned with the right of the "Right Channel" part of the "Personnel" section. It could be argued that the amount of content doesn't warrant giving the table and channel sections their own full rows, which was my original thinking when setting the current placements.

## Other Nitpicky Improvements

* The units of measurement should have been relative (`em`) instead of just `px`.
* The black background of the "Ornette Coleman" main header is a different black than the rest of the top section.
* The copyright line at the last section doesn't have a font specified, and looks out of place from the rest.
* Increase line height for easier readability
* The link in the "Free Jazz" section should stand out more obviously as a link, perhaps adding a bold font weight would have improved scanability.

## In Conclusion...

Beginners don't realize how much of an impact CSS makes on the visual appeal and layout of their websites! By adding 153 lines of CSS, I was able to change a rather mundane page into a more stylistically interesting and easier to read experience.
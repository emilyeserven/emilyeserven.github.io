---
layout: post
title:  "Portfolio Dev Blog #3: 'It's Almost 2018' Edition"
date:   2017-12-19 09:53:50 -0500
tags: [development, reflections]
excerpt: <b>A documentation of my thoughts of making my portfolio.</b> - <i>"There were two major things have changed since I last redesigned my portfolio. My main focus has changed from attempting to acquire commercial work. Second, photography has grown from something I was dabbling in to a real hobby."</i>
media-bgcolor: darkgrey
media-layout: thirds
media-layweight: even
textcolor: white
col1-content: <i class="brainy hdg-briefcase"></i>
col2-content: <i class="jolly hdg-opening-tag"></i>
col3-content: <span class="media-text">#3</span>

---

## Introduction

Originally, this whole redesign was done to satisfy requirements for a professional development class I was taking. I didn't intend to change as much as I did, but rather make some minor adjustments. However, I didn't account for the fact that there were two major things have changed since I last redesigned my portfolio. First, my main focus has changed from attempting to acquire commercial work to getting a full-time job. Second, photography has grown from something I was dabbling in to a real hobby. I needed an aesthetic that would better show off my modern and professional design sense and a system to naturally integrate my photography.

## Design

In my last redesign, I had expressed the desire to keep a portfolio design that would give visitors an accurate representation of my design style. This design attitude is something I kept going into this redesign while adding another element: increased professionalism and a more modern design. This caused the aesthetic to slide closer to minimalism than previous portfolio iterations, which worked well in framing the content.

Initially when starting this rebranding, I wanted to keep the handdrawn aesthetic that had existed since I first got a portfolio. Once I applied a minimalist aesthetic to the rest of the website, it didn't make sense to keep the handdrawn styled typography, so I decided to switch fonts. I avoided google fonts because I think many are starting to look overused, and I wanted something distinct to my brand. Having bought some font packs from DesignCuts, I decided to use fonts from those packs and built a grid of options.

Since the new design abandoned the handdrawn theme of my previous iterations of branding, I was also able to match my resume and business cards with my website more closely. I also used the image of the Fulton Center ceiling throughout all materials to have a common design thread (that was not a headshot or specific project photo).

## Refocusing Content

Most content-related design decisions were made with my decision to focus on 'showing the full picture' instead of just displaying commercial work. Changing the style of my homepage and portfolio allowed me to show important side projects and experiments more prominently as well as display my photography, which would have been more out of place in previous layouts.

The homepage was redesigned by taking project features out and replacing them with a link to my work page and some statements about my design and development style. There was enough information about me with this new homepage (and I don't want to add too much more in fear of appearing self-absorbed), so I also was able to eliminate the About page. The portfolio page has now adopted a masonry grid-like layout and has visuals emphasized more, so all project types can share the space naturally.

I couldn't use the same project page format for everything, since photography is much more visually oriented than development work. Because of this, I split my layouts into two similar 'folio' pages. The development portfolio pages will load a format that's much more text-heavy, with "feature spaces" to show images and descriptions side by side. The photography portfolio pages will load a lightbox script and only include one area for text commentary. I originally did not plan on adding a lightbox (and just show full images down the page instead), but I found that changing the lightbox background from a slightly-transparent black to white made the photos stand out elegantly.

## Development Notes

I took advantage of CSS Flexbox and some light CSS transitions for this design. Flexbox seriously helped in making the masonry-grid layouts by taking care of the spacing in between elements. It also assisted in changing how the header displays.  

My Macbook is actually a little broken right now (the built-in keyboard and trackpad don't work), so it was more convenient to edit on other computers. However, while working on campus, I couldn't install the tools needed to do everything I needed to. To get around this problem, I was able to find solutions that allowed me to serve the website from my laptop and have it viewable from any computer on the network. This helped speed up development and not have to make too many 'live edit commits' to Github.

## Improvements to be Made

There are a few changes I'd like to make. The major ones being...

* The flow between items that have both a blog post and a post on the portfolio is strange, since there's some information for each project displaying between post types.
* I actually did not build out this website with Bootstrap, so there's lots of redundancy in the CSS. I'd like to update page layouts with Bootstrap to reduce this redundancy and make it easier to maintain in the future.
* There is still legacy code that slipped through the cracks, so I'd like to delete the unnecessary parts.
* The SCSS is too broken up at some points, so making it more readable is a priority as well.

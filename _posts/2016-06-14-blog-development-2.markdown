---
layout: post
title:  "Portfolio Dev Blog #2: A Work in Progress"
date:   2016-06-14 12:53:50 -0500
categories: dev-blog
excerpt: <b>A documentation of my thoughts of making my portfolio.</b> - <i>"It's been said that a website is never truly "finished", since there's always more work to be done. I've found that in both client work I've done and in this website, the idea certainly holds true."</i>
media: ../../../../assets/images/blog/dev-blog-1-preview.jpg
media-bgcolor: darkgrey
media-layout: thirds
media-layweight: even
textcolor: white
col1-content: <i class="brainy hdg-briefcase"></i>
col2-content: <i class="jolly hdg-opening-tag"></i>
col3-content: <span class="media-text">#2</span>
---
[1: Planning and Pre-Launch](../../../../dev-blog/2016/02/16/blog-development-1.html) - **2: What happened and what's to come?**

**Please read the previous portfolio blog post first**, or this post might not make sense!

My portfolio has technically been "finished" since the end of May, but it's taken me some time to actually write up a post. It's been said that a website is never truly "finished", since there's always more work to be done. I've found that in both client work I've done and in this website, the idea certainly holds true. So, in addition to reflecting on intended outcomes from my preview development blog post, I will be going over what I intend to improve in the future.

## Professional Design Choices
The first objective was to professionalize my portfolio from the design it previously used. This is difficult to talk about at length without sounding very braggy, so I decided to hilight 3 of the major design choices instead:

1. The previous blog design had too many colors and caused a conflict with website screenshots, especially. To counter this, I switched to using a more neutral combination of dark and light gray as the main colors, plus a blue accent to draw attention to more important aspects.

2. Since I can't draw but would like to keep the personality of a handdrawn asthetic, I invested in a large icon set (several icon sets from one store, to be exact). These have been integrated into the social icons and blog graphics.

3. Originally I used a slider at the top of the page, but upon further reflection, I realized I was only doing this because it was a big trend at the time. Sliders haven't left us, but it's easier to look at them objectively since it's been awhile since they initially surged in popularity. A slider doesn't fit my website in an above-the-fold full-width capacity, so I swapped it out with a tile layout and soon-to-be slider to the left of them.

## The Secondary Objective and Changes in Direction
My second objective is a little trickier to declare as 'accomplished' or not since I decided not keep my blog on tumblr. This decision was made because I wanted more control over my formatting, I didn't want to reflow a theme into another platform, and because Jekyll handles posts well to begin with. The social media integration part of this goal is more relevant now than before, since it relies on long-term follow up. (More on that lower in this post.)

## Modularity is Key
Stemming from my habit of adding a ton of extensions to original scope of personal projects, I've adopted a philosophy that it's best to code in a way that will allow flexibility and extensibility in the long term. I also believe in making the platform you're working on work for you (automation). For WordPress, this means using WP Toolset and utilizing standardized custom fields. For Jekyll, this means adding pieces in the YAML front matter that will be later referenced in the code.

To illustrate the combined ideas of flexibility, extensibility, and automation, let's look at a [single portfolio post](https://github.com/emilyeserven/emilyeserven.github.io/blob/master/_portfolio/epm.md) and its [page template](https://github.com/emilyeserven/emilyeserven.github.io/blob/master/_layouts/portfolio.html).

- **Extensibility** - Adding additional images to the main page only requires an image URL and image description in the YAML front matter. The code on each single page includes a for loop that will iterate through each image and display it with proper formatting on the page.
- **Flexibility** - Each image is composed of a graphic with a transparent background. The graphic is then overlaid on to a colored background (with the color defined in CSS using the 'code' property defined in the YAML). This makes mobile compatibility and future image control easier, since the rest can be modified via CSS.
- **Automation** - The portfolio YAML will control various sections of the portfolio post's appearance throughout the site. The homepage, portfolio page, and single portfolio post all pull from the YAML properties, making it easy to make changes. Furthermore, the portfolio posts on the homepage and portfolio are added through for loops, making future edits not require actual changing of the code.

## Still to Come
There's many features I have yet to implement in this portfolio site. In no particular order:

- **The "Lab"** - A space for me to post non-full development projects of mine, including experimental work and general side projects.
- **Photography Integration** - Photography is a hobby I have picked up recently that I enjoy and feel I do well with. I'd love to find a way to integrate this somehow, since it's a usable and relevant skill in "full service web development".
- **More Blog Posts** - Finding time to write tends to be difficult for me, considering the length of posts I tend to generate. That being said, I do genuinely enjoy writing my thoughts down, even if it's just so I can look back at them in the future. (This item includes editing existing posts as well, especially the ones that had word limits imposed on them initially.)
- **Improving Accessibility & Optimization** - I'd like to spend extra time optimizing and allowing for good accessibility on this website as much as possible. It's a great experience to go deeper in these subjects where I usually don't have the chance to.

## Post-Launch and Follow-Up
Even though I technically met one out of the two objectives I laid out for myself in the beginning, I feel the redesign and redevelopment of my portfolio was a huge step forward anyway. For these projects, it's more important to not get stuck in goals that may result in a less satisfying final product. The real challenge is upkeep and developing more content on the side to be able to add to social media. Designing concepts, programming side projects, and writing more posts are all options, but they all take up time. With time, I hope this will become more than just a portfolio, but also a reflection of all my digital skills and exploration.

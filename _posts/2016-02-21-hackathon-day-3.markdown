---
layout: post
title:  "Stamford Hackathon Reflection Day 3"
date:   2016-02-21 23:44:43 -0500
tags: [events, development, projects]
excerpt: <b>A reflection of the third day of the Stamford Hackathon</b> - <i>This post is mostly about our project as a whole. Ideas about the hackathon itself in the post-reflection.</i>
media-bgcolor: darkgrey
media-layout: half
media-layweight: even
textcolor: white
col1-content: <i class="jolly hdg-console"></i>
col2-content: <span class="media-text">3</span>
---
[Index](../../../../2016/02/23/hackathon-index.html) - [Pre-Hackathon](../../../../2016/02/18/hackathon-day-0.html) - [Day 1](../../../../2016/02/19/hackathon-day-1.html) - [Day 2](../../../../2016/02/20/hackathon-day-2.html) - **Day 3** - [Post-Hackathon](../../../../2016/02/23/hackathon-post.html)

(This post is on the selfish side because I’m mostly going to be talking about the project I was involved in. Overall thoughts about the hackathon as a whole will be in a post tomorrow!)

## Settling on an Idea
I forgot to add this to the last post, but it’s too late to edit it so I’ll explain what our project idea was here.

The space the hackathon was hosted in, the Stamford Innovation Center, mainly functions as a co-working space. For the weekend, the building was hooked up to a bunch of different sensors, including some that detected motion, temperature, humidity, room luminescence, and other data. The co-working space mainly serves startups, freelancers, and people who work in distributed companies. Like anyone, the people who go there have times where they don’t want to waste time and just need to sit down and work. I also have personal experience with this hassle of running around to find emptier rooms in my daily school life. This semester especially, my schedule keeps me at school for a long time, so it’s a requirement that I get work done while on campus. There’s 3 main lounges if you don’t count the main floor concourse that are all spread out over 3 floors, and of course, it takes a long time to run up and down the stair cases.

Our project would make the process of finding a room much more efficient by allowing someone to easily check if a room is occupied (based on 1 of the sensor metrics) from any device with an internet connection. (More on the technical details later.)

## Last Minute Scrambles (Yum, Technical Details)
I had gotten the main structure (HTML), layout, and colors (CSS) done for the website during Day 2, but we were still missing mobile responsiveness and the maps. Kara was able to take some existing floorpans and manipulate them so that simpler outlines existed (target audience is people who have worked in the building before) and the room numbers were prominent. I took care of the media queries and extra edits to the main page. A larger problem, however, was that the entire JavaScript to hook into the flowthings data was only done in a limited test basis. Fortunately, that problem was fixed after Nick took a trip to talk to the guys in the flowthings room. I even had a chance to make 2 lines worth of tweaks to the jQuery that made the page update icons upon a change in data.

If we had more time, we would have added extra sensors so that we could give more accurate readings on the likelihood of other people in the room, as well as a general temperature reading so the project could help you find a more comfortable room. We also wanted to implement a map that changed color depending on if it sensed motion or not, but ultimately weren’t able to do so.

## Presenting the Projects
I won’t describe the other projects here, since an actual news outlet is probably going to end up doing that. But I will say that it was really fun to see what people had created and achieved in such a short amount of time (and sleep). The projects ranged from entertaining to serious, and the amount of work everyone put into their final products was clear.

Our main points were the simple and easy to digest design as well as the use of sensors to work with the Internet of Things category. I was told a video is coming out soon, so I’ll let that do the talking.

## Post-Win Reflections
The overall end result for us was a 1st place win in the Internet of Things category. Our idea was simple, and much less technically involved than other projects (mostly because our collective knowledge was limited). But it was very practical. It’s because of this I think the idea carried us more than the complexity of the raw code itself. I don’t have much to say other than that I’m still somewhat surprised we won, but it’s mostly because we weren’t thinking of judging criteria when we were developing. My take on the judging criteria follows; since we didn’t hear any judge comments directly, please keep in mind that it’s all speculation!

*Originality* - The idea we had was very straightforward (and I thought it was too simple and too close to the fundamentals), but the use case was very specific. I think it’s because of that we were able to stand out.

*Use of Technology* - We essentially relied on one type of the sensors scattered around the building, so the technology was an essential part of our project.

*Benefit to the City* - I think this was our strongest aspect. Technically, our idea can scale as much as you want it to. For our purposes, we only had 4 sensors applied, but even if you had 100 sensors, you could implement an expandable/collapsable section of the page to keep the amount of items you needed to scan for lower. Not only that, but the JS Nick wrote is relatively simple to modify (and will be easier once we add comments in), so anyone could fork the GitHub project and adapt it to their own needs as long as they had a flowthings account and some sensors.

Overall, we were limited by the amount of time we had and our existing knowledge. We had started our project officially at 4pm on Saturday, and we had all left the building by 8:30. By 10am on Sunday, we started working again and then finished around 2pm. That gave us about 8.5 working hours total to complete our entire project! In terms of existing knowledge, the only usable coding skill I came in with was HTML, CSS, and the ability to make simple changes to other programs if I had the documentation. We had one dedicated JavaScript developer (Nick), and then another person on HTML/CSS plus design work (Kara).

See our project here: https://rawgit.com/emilyeserven/stamfordhackathon2016/master/index.html

**IMPORTANT!** The sensors were taken down, so what you’ll see now is just a placeholder/sample etc. for a public dashboard that could be functional again if sensors were put up and a few functions remained.

See the github repository here: https://github.com/emilyeserven/stamfordhackathon2016

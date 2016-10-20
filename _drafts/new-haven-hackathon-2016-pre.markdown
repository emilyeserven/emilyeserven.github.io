---
layout: post
title:  "New Haven Hackathon 2016 - Pre-Hackathon"
date:   2016-10-13 23:17:09 -0500
tags: [events, development]
excerpt: <b>A reflection of the second day of the Stamford Hackathon.</b> - <i>"First of all, I learned that people don’t settle on ideas very easily or quickly. Heck, my group settled on our idea around 3:30pm officially."</i>
media-bgcolor: darkgrey
media-layout: half
media-layweight: even
textcolor: white
col1-content: <i class="jolly hdg-console"></i>
col2-content: <span class="media-text">2</span>
---

The hackathon weekend begins again, with a more knowledgeable and prepared me!

## Using What I Learned the Year Before

If there's anything I learned from last year, it's that you cannot plan for the events that take place during a hackathon. People can show up or leave unannounced, technology you're planning to work with may not work at all, and the idea you're working on might completely change in the middle of the event. (Case in point, the idea that ended up earning my team the first prize for a category was only figured out in the late afternoon of the main working day.)

## New Things This Year

The hackathon kickoff was more structured this time in comparison to the first hackathon I went to, so people had a better idea of what the talent pool was and what possible projects there are. This leads me into the first major difference between this hackathon and the last one; I had an idea coming into the event. Knowing that allowed me to have an inkling of what skills were needed to make it happen, thereby allowing me to listen for those skills in particular during introductions. One of the main differences this year is the fact that someone I have experience working with is attending as well. This is better than just 'knowing someone', due to the fact that skills, interests, and work style can already be accounted for.

## My Idea

I am a person that tends to like organizing trips and events in my friend group. The main problem with coordination ends up figuring out how and when people should get there, since we can have people coming from upwards of 5 different train stations. Currently when planning, I only include leave times for New Haven, Stamford, and Grand Central as major benchmark and rely on other people to find the information for their station on their own. This is a somewhat minor yet consistent problem for every event that is planned with a group, and it could definitely be improved with a web application.

### The Minimum Viable Project

The following is a roadmap of steps the application must complete for me to consider it to be 'functional'.

1. Allow an organizer to set a 'latest arrival' time and destination.
2. Make the application generate a link that the organizer can send to participants.
3. List various train stations and the latest train that would leave from there to be able to arrive by the 'latest arrival' time.

### Priority Additions

After the MVP is finished, I feel like the following add-ons should be prioritized. Each would be worked on in a different project branch before being merged into the master.

* Adding a location to be leaving from (this will allow the application to highlight the best transportation option)
* Pitney Bowes API that would grab the user's current destination (not necessary for operation)
* Adding bus and subway data into the considerations of transportation options

There are many other ways for this project to be extended, but I would like to focus on these ones first.

## Next Steps

I envision the hardest part will be finding the right logic to make the concept work. A general list of milestones needed and what tasks can be completed alongside each other has been made in my head,

* Need to have major milestones for the project
* May not post at end of day 2 so there is less wasted time/space
* Networking


I will be blogging the event this year once again, although with less posts than before. I realized that some material wasn't strictly necessary, so it's likely tomorrow will not have a post unless something significant happens.

---

If you know me or have seen other posts on this blog, you'll know this is not the first hackathon I've been to. (You can find those posts here.) That being said, there's some new things that I will be experiencing in this hackathon as well.

Since I have an idea of the dynamics and rush of a hackathon, I also have a better picture of what the scope of a project should be. Due to some luck, I was also able to think of a project idea before the hackathon started. (To be outlined in the official 'Day 1' post.) If I end up pursuing that idea,

I know for sure that the atmosphere and dynamics of a hackathon make it impossible to plan for. The type of people, needed skills, and nature of each project will certainly change in between events. At least one unknown is taken out of the equation this year from the beginning, since I know a friend will be participating as well. I'm not in for winning prizes, but I do like the idea of working towards something.

Finally, I know more JavaScript (and by that, I mean that I read up on the fundamentals in a book) for this hackathon. This should definitely improve my ability to contribute as well as my ability to help direct the project. It's not completely out of scope for me to do the JavaScript on my own, but I would prefer that doesn't happen (for mental health reasons, of course). That being said, I would love to have something of a mentor or partner to help with the JavaScript portion of this project. I didn't know enough fundamentals for the last hackathon, so I couldn't be of much help. My practical experience is lacking as well, at least I have *something* this time.

Overall, I'm just looking to have a great experience, and I think



* Design Principles
    * What makes this application stand out is...
        * simplicity. Only 4 inputs in total. (quick analysis from gabe here.)
        * URLs that don't expire. (ie permanent interface for information)
    * This project is a framework and an interface to facilitate information.
    * Nothing is hidden (ie avoidance of over-personalization)
        * "I spend most of my day time in Stamford, but that doesn't mean Stamford will be where I depart from."
        * Personalized information is at the top, but it isn't going to be the only thing you have access to
    * Fast - uses Arial as main font


* Presentation - Identify the need (screenshots of local trip planners plus limitations)

## Original Concept

## Process

## Development

The HTML/CSS and JS were developed concurrently. As the JS was being initially researched and written, the HTML layout with all the necessary elements was built out. Development moved from the 'Organizer' screen and then to the 'Participant' screen.

The biggest initial block in development was the CORS permissions. Since the localhost testing environment wasn't allowed, initial testing showed nothing being returned from scriptr.

## Design

One of the key features of the app is the fact that it lacks visual clutter and has a good user experience. While we don't have time to do testing of this user interface, we do plan to make improvements as we continue to develop this project.

The three organizer fields were featured the most prominently, as they will be the only thing a returning user needs to use. This is the same rationale for the single participant field.

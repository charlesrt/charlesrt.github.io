---
layout: post
title:  "Setting the open standard for job postings"
date:   2016-02-23 20:23:40 +0000
categories: interaction design
---

## Job-seekers and employers need a better experience

I’m currently working as a designer with a team looking at ways to improve how we help job-seekers find work and employers fill vacancies in their local job markets.

![Understanding employer needs — Charles Reynolds-Talbot](/assets/2016-02-23-setting-the-open-standard-for-job-postings/user-journey-photo.jpg)

> Understanding employer needs — Charles Reynolds-Talbot

Matching the right candidate to the right job is the intended goal of recruitment, but this is often hindered early on by poor quality job adverts. 

Looking for the right job can be an emotional and labour-intensive task. Job-seekers are often faced with adverts containing too little information about the role, responsibilities, work patterns, rates of pay and even location. This causes them to apply for unsuitable jobs, and potentially avoid suitable ones altogether.

Employers, in turn, suffer from the increased cost of spending too much time sifting unsuitable applications, and often run the risk of recruiting the wrong candidate. Unhappy employees are less productive and are likely to leave soon after starting, which increases the need to re-recruit. 

Citizens Advice agree — job adverts in today’s market are simply [failing job-seekers and employers](https://www.citizensadvice.org.uk/Global/CitizensAdvice/Work%20Publications/Job%20ads%20barometer.pdf). 

![Citizens Advice high-level research findings — Citizens Advice](/assets/2016-02-23-setting-the-open-standard-for-job-postings/citizens-advice-1.jpg)

> Citizens Advice high-level research findings — [Citizens Advice](https://www.citizensadvice.org.uk/Global/CitizensAdvice/Work%20Publications/Job%20ads%20barometer.pdf)

The majority of digital job adverts today are skeuomorphs of their real-word counterparts — newspaper adverts and “cards in the window” — typically static blocks of text in a variety of formats with no agreed standard for information or layout.

When posting a job, most recruitment websites ask for the job title, a rough location and offer a free-format textarea. 

Employers don’t know what information to include, in what format. 

Job-seekers struggle to easily see the information in the “wall of text” that’s important to them.

![Lots of information about the company but no details about the role — Citizens Advice](/assets/2016-02-23-setting-the-open-standard-for-job-postings/citizens-advice-2.jpg)

> Lots of information about the company but no details about the role - [Citizens Advice](https://www.citizensadvice.org.uk/Global/CitizensAdvice/Work%20Publications/JobadvertsrecommendationsFINAL.pdf)

This pattern has been imitated by other job websites looking for their share of the market — most of whom are measured on generating revenue from mass advertising, not on getting people into suitable work.

Government has a responsibility to support people into sustainable employment, so that they are financially dependent, and less reliant on benefits.

**I propose government adopts and encourages the use of an open source minimum standard for all job postings in the UK.**

This open standard won’t just cover the [rules](https://www.asa.org.uk/News-resources/Hot-Topics/~/media/Files/ASA/Hot%20Topics/Employment%20opportunities%20-%20Hot%20topic.ashx) and [recommendations](https://www.citizensadvice.org.uk/Global/CitizensAdvice/Work%20Publications/JobadvertsrecommendationsFINAL.pdf) (which most job sites fall short of), but will be based on the **needs of its users**. It will ensure job-seekers have the key information they need to make an informed decision whether they’re suitable for a role, or a role is suitable for them. 

![The recommended journey of a job advert in an employer/agency interaction — Citizens Advice](/assets/2016-02-23-setting-the-open-standard-for-job-postings/citizens-advice-3.jpg)

> The recommended journey of a job advert in an employer/agency interaction - [Citizens Advice](https://www.citizensadvice.org.uk/Global/CitizensAdvice/Work%20Publications/JobadvertsrecommendationsFINAL.pdf)

It’s my **assumption** that this will benefit employers — through  better quality applications and staff retention. This will also benefit recruitment websites — through repeat business.

##User needs

This is not solely based on the value of the Citizens Advice reports. I have spoken to a number of job-seekers across the country, about the wider challenges they face when looking for work. Users need to know:

* who the end employer is so they can research them before applying
* what their responsibilities will be so they can access whether they are capable/suitable
* the specific location of the job so they know they can get to and from the job in a time and manner that fits with their lifestyle
* the work pattern so they know it doesn’t clash with any existing commitments, e.g. childcare, current part-time work
* the minimum rate of pay so they can determine whether they can afford to pay their mortgage/rent, bills etc

Whilst extensive 1:1 qualitative research has been conducted with job-seekers, I have only spoken to a handful of employers. Until further validated, employer needs are just best assumptions at this time, which is OK.

## Solving the problem

I am kickstarting an open source schema that will standardise what a job post looks like — structure, not style — based on **user needs**. This skeleton is intended to be used as a boilerplate to encourage an iterative approach to the design and content of job postings — available for everyone to use.

![Example of a structured job posting — Charles Reynolds-Talbot](/assets/2016-02-23-setting-the-open-standard-for-job-postings/example.jpg)

> Example of a structured job posting — Charles Reynolds-Talbot

The US have done something similar to aid the searching of jobs from veteran-commited employers. This is supported as a voluntary standard on [schema.org](http://schema.org/JobPosting).

Initially, I recommend government adopts the schema on its public sector job sites: [https://www.civilservicejobs.service.gov.uk](https://www.civilservicejobs.service.gov.uk); [https://www.jobs.nhs.uk](https://www.jobs.nhs.uk); [https://jobsearch.direct.gov.uk](https://jobsearch.direct.gov.uk).

They should then work closely with employers who have their own careers website (banks, supermarkets, hotels, etc) to encourage its use, before breaking down the walls on the large recruitment websites.

Setting a standard for job adverts won’t be an instant cure all for the vagaries of the job market, but it will help us find the gaps where user needs aren’t being met. And once we’ve identified the problems, building on that same structure will mean we can solve them in new and exciting ways: time to travel, transferable skill matching, better search algorithms — the possibilities become endless.

**I invite everyone** to start using, challenging and contributing to this schema on [GitHub](https://gist.github.com/charlesrt/75ab9768298cbd2466b7).

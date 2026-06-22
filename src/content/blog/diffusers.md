---
title: "Understanding Diffusers | Pt. 1"
slug: "diffusers"
excerpt: "A CFD study exploring the intricacies of motorsport diffusers. In Part 1, we investigate their sensitivity to various design parameters."
date: "2021-01-14T11:23:39.446Z"
updated: "2021-05-14T14:24:17.571Z"
originalUrl: "https://www.waveydynamics.com/post/diffusers"
coverImage: "/images/blog/diffusers.jpg"
seoTitle: "Motorsport Diffuser Aerodynamics Pt.1: CFD Study"
seoDescription: "A CFD investigation into motorsport diffuser aerodynamics — how angle of attack, geometry and expansion ratios affect downforce and drag."
categories: ['Aerodynamics']
---

# Understanding Diffusers | Pt. 1

I got involved in a project recently focusing on underfloor diffusers. Aside from fundamental principles i hadn't especially studied diffuser flow in detail before, so to start the process i began with an initial sensitivity study/DoE (Design of Experiment) to understand flow specifics a little better. 

Following tradition, i thought a summary of that study would make for a great article, so here it is.

## **The Venturi**

## 

So, the diffuser… Motorsport diffusers are nothing more than a Venturi tunnel. We don’t need to cover the principles of conservation of mass and energy, nor the Bernoulli Principle here, but if you would like to research further, those are your key words.

![A large rear diffuser on a LM-GTE spec Ford GT race car](https://static.wixstatic.com/media/67d9bf_dc3c20aa48a8411daf1dfb5ffdbfa310~mv2.jpg)

*A large diffuser on this LM-GTE spec Ford GT*

In our context, the flat underfloor of the racecar is the ‘throat’ or constriction within the Venturi and the diffuser section is what we call the divergent portion of the tunnel.

Diffusers are an interesting one and are quite a unique case - you have air moving against an adverse pressure gradient, which means the flow is moving from a low pressure to a relatively higher pressure. The word ‘adverse’ needs special emphasis.

Because of this, i knew that i was going to be seeing some level of flow separation, the only question was when. I also knew that the low pressure in the diffuser section would be drawing air in from the side of the ‘Venturi’ and mixing with the main diffuser flow to create vortices.

## **The Science**

The aim of the diffuser is to gradually expand the underbody flow as it transitions to the rear of the race car. What's key to this mechanism is that the diffuser section effectively functions to assist the ‘extraction’ of air through the throat and therefore it’s design ultimately defines the effectiveness of this larger process of generating negative lift (downforce) acting on the chassis.

To better understand the intricacies of this process, for this high-level sensitivity study my objectives were to investigate the importance of the expected separation and vortex flows on performance, which we will measure in terms of drag and downforce. 

Let’s get into it.

## **The Study**

The first job was to create a simplified diffuser model featuring the following: a flat section, parallel with the ground plane leading up to the diffuser section, side skirts at the lateral boundary and some vertical bodywork at the trailing edge to represent the rear of the vehicle.

In order to cover the objectives, i planned to vary a selection of key geometry and external conditions of the diffuser, paying close attention to their effect to understand influence into separation and vortex formation. As mentioned, performance will be assessed using downforce and drag.

As usual with these loose studies, i’ll just be following my nose as i progress.

The modelled diffuser section was created with a length of 0.5m and a width of 1.1m to give an area of 0.55m2. In base condition it featured a small radius at the junction between the leading edge of the diffuser section and the upstream flat section. Airspeed was 44.7m/s for all tests (100mph / 160 kph).

![Figure 1: 3D model of the simplified CFD diffuser geometry used in the study](https://static.wixstatic.com/media/67d9bf_c414b1926317481fa26732cc287f90b3~mv2.jpg)

*Figure 1: A 3D model of the diffuser geometry.*

## **The Basics**

The first round of simulations would start at a diffuser inclination of 8°, running up in increments of 2° until the diffuser had gotten 'over the hill' in terms of downforce and the value started to decline from a peak. This would give some understanding into separation and identify the point at which it occurs, as well as to understand how the diffuser was interacting with the airflow at different expansion rates/area ratios.

Base ‘ride height’ was 75mm, a h/L value of 15%.

![Figure 2: Key diffuser dimensions showing h, x and L](https://static.wixstatic.com/media/67d9bf_4fc994e330174c729ba8f9b24e22b260~mv2.png)

*Figure 2: Key dimensions; h, x and L.*

Here's what i found.

![Figure 3: CFD showing a bubble of separated flow forming on the diffuser centreline as angle increases](https://static.wixstatic.com/media/67d9bf_bae24713b3a542cea7e4adfa9305c15a~mv2.png)

*Figure 3: A 'bubble' of separated flow appears on the centreline as diffuser angle increases.*

At the centreline of the diffuser, separation started to become noticeable at a diffuser angle of 12°. 

Logically, further increases in diffuser angle induced the separation at lower x/L values. What’s most interesting though is that it doesn’t separate uniformly across its width, it creates a sort of separation ‘bubble’ local to the centreline. 

Quite unusual behaviour in isolation.

The lowest pressure is generated in the throat section, with the peak of low pressure located at the leading edge of the diffuser. 

To help build a understanding of this, here’s a graph of simulated pressure in X along the diffuser. 

![Chart 1: Pressure distribution along dimension X of the diffuser](https://static.wixstatic.com/media/67d9bf_c7252c4f4f7642479d6021d591ac826b~mv2.png)

*Chart 1: Pressure along dimension X of the diffuser.*

Looking at the rest of the flow in the diffuser showed that two relatively strong vortices had formed as expected. Due to suction effects, free stream air from the sides of the ‘vehicle’ rolled in towards the low pressure in the diffuser section. The interesting point to note is that within a certain radius of them the flow in the diffuser remained attached.

Looking at flow vectors along the lateral plane revealed exactly what was happening here.

![Figure 4: CFD velocity contours and flow vectors showing the diffuser vortex structure](https://static.wixstatic.com/media/67d9bf_82c38c877f0248be991269a1a57021ea~mv2.jpg)

*Figure 4: Velocity contours and flow vectors of the vortex.*

The rotation of the high energy vortices was not only drawing air in from the side of the diffuser and sending it upwards, but it was also entraining the ‘still’ air beneath and around them and moving that upwards too. Newtons 3rd law in full effect! This was giving the boundary layer enough energy to keep it attached. Fascinating.

Once flow is detached though, it obviously creates a ‘void’ which must be filled, so i wanted to understand a little more about the separated region in terms of how it was recirculating air and the pressure coefficients it generates within.

![Figure 5: CFD showing the point of flow separation and reverse recirculation in the diffuser section](https://static.wixstatic.com/media/67d9bf_dc448576bec84b4f8a9618ba4cebce02~mv2.png)

*Figure 5: X marks the point of separation in this section of flow.*

Looking at flow at the trailing edge of the diffuser, you can clearly see it travelling in reverse relative to the body. Where it meets the initial point of separation it mixes with the rest of the flow and travels rearwards again. Some of the flow goes through this loop more than once (recirculates) before it’s ejected. 

For interest, here’s a graph of the pressure distribution across the width of the diffuser. The influence of the separated flow on the pressure profile can be observed just either side of the centreline.

Key observation here is that the pressure within it is relatively low.

![Chart 2: Pressure profile across the diffuser width at 300mm along its length, showing the influence of separated flow](https://static.wixstatic.com/media/67d9bf_33890bccf74b489ba49e42fcefa8c281~mv2.png)

*Chart 2: Pressure profile across the width of the diffuser at a position 300mm along its length.*

The peak of diffuser performance in terms of downforce was met at around 16° inclination, after which, efficiency began to fall off as increases in downforce diminished.

CL (lift coefficient) at this point was 0.876 and CD (drag coefficient) was 0.131, giving a -L/D of 6.67. These will be our reference profile as the study proceeds.

![Chart 3: Lift coefficient plotted against diffuser angle, showing peak performance at approximately 16 degrees](https://static.wixstatic.com/media/67d9bf_e14b73c5f8c24ed8b93beff0a4e4511d~mv2.png)

*Chart 3: Lift Coefficient plotted against diffuser angle.*

So the main learnings thus far are:

1. The effect of vortices in keeping flow attached is significant in terms of overall diffuser performance due to the fact that they ‘energise’ the adjacent boundary layer through entrainment.

2. A separated region of flow can be present and still produce an effective diffuser. While the separated region is at a higher pressure than adjacent diffuser flow, its pressure coefficient is still favourable for downforce generation. 

Performance did increase as separation became more significant, albeit in a non-linear trend. This is a key understanding.

Logically, geometric features which have the largest influence on these two variables is likely to generate the biggest impact into diffuser performance. Identifying which features are most significant will be the next job.

## **Iterating**

For the initial simulations i had modelled the leading edge of the diffuser section with a small radius. I imagined a sharp change in gradient would promote flow separation, so it was a logical thought to try and mitigate this.

Before proceeding further it seemed a useful step to remove this radius and have the diffuser inlet as an untreated, sharp edge to understand its actual effect.

This resulted in a slightly different flow character. 

![Chart 4: Overlay of diffuser performance with leading edge fillet (red) and without (blue), showing sharper separation without the fillet](https://static.wixstatic.com/media/67d9bf_0b1244079f7940129abb86e8f7437f76~mv2.png)

*Chart 4: An overlay of the configuration with leading edge fillet (red) and without (blue).*

The earlier separation point produced a larger, more turbulent separation bubble which resulted in a 0.7% fall in downforce and a 2% increase in drag. A fairly significant influence.

Following my intuition, i next imagined that creating a more parabolic profile to ‘ease’ the flow into the diffuser section would help with attachment and create more favourable conditions for flow. This was the next task in model iteration. 

After some experimentation i arrived at the following profile.

![Figure 6: 3D model of the parabolic diffuser geometry offering a gentler expansion gradient](https://static.wixstatic.com/media/67d9bf_6ede1be62c114be7953e0673a71cf4fd~mv2.png)

*Figure 6: A 3D model of the parabolic geometry.*

With this concept, the diffuser profile was modified, but the inlet-outlet area ratio remained the same as the 'base' flat profile.

I tried a couple of configurations before arriving here, but found this profile to be quite favourable along the whole ‘chord’ in terms of a creating gentle gradient for flow expansion.

Our new CL was 0.941 (up 65 counts) and CD was 0.136 (up 5 counts). More than a 7% increase in downforce, with just under 4% increase in drag relative to our base configuration.

*1 count amounts to a change in CL or CD  of 0.001

Here’s how the parabolic geometry affects pressure distribution.

![Chart 5: Pressure distribution overlay comparing parabolic (blue) and base (red) diffuser profiles, showing delayed separation with the parabolic geometry](https://static.wixstatic.com/media/67d9bf_3d90f0556b114c41ae9bf41a4fb669a0~mv2.png)

*Chart 5: An overlay of the pressure distribution across the Parabolic (blue) and Base (red) profiles.*

You can see the lower average pressure in the underfloor (<0mm) due to the increased mass flow through the throat section. It’s also clear to see the delayed separation point (seen as the ‘knee’ in the trace) and its reduced severity. 

Flow along the centreline of the parabolic profile begins to separate just before x = 200mm. Up until the point at which it separates, it’s consistently at a lower pressure than the flow on the base profile, which had already separated.

This is exactly what we’re looking for to push performance, nicely outlining how the parabolic profile is able to extract more air through the underbody and increase downforce.

Encouraged by these changes, my attention then moved towards the trailing edge. Figure 5 shows the path of air flowing in reverse along the diffuser to fill the separated region. 

Here is a closer look at that.

![Figure 7: CFD flow vectors at the diffuser trailing edge, showing air flowing downward and reversing into the separated region](https://static.wixstatic.com/media/67d9bf_1d68e379ec0c497c8b359dae97457afa~mv2.png)

*Figure 7: A closer look at the trailing edge flow vectors.*

It’s quite a large flow of air. It can clearly be shown to flow downwards towards the trailing edge and then move ‘backwards’ into the separated region where it recirculates. It also appears to develop a choke point here where localised flow speed increases.

Streamlines of flow tracked from a discrete line located at the trailing edge show this effect a little clearer.

![Figure 8: CFD streamlines showing reverse flow recirculating from the diffuser trailing edge back towards the leading edge](https://static.wixstatic.com/media/67d9bf_ef00e578b57e4ed69f0883f291911d9f~mv2.png)

*Figure 8: Reverse flow at the trailing edge of the diffuser.*

In a central section of the diffuser, air flows in reverse from the trailing edge towards the leading edge and recirculates before it is ejected.

This was obviously quite an important flow mechanism and I felt adjustments to the geometry here could significantly influence overall performance. 

I added a radius to the trailing edge of the reference profile and simulated the results.

18 counts added to the CL and 4 counts to CD - just a 0.6% hit to efficiency. A positive addition for sure.

**NB** - It’s worth commenting that the rear face of this particular diffuser model is vertical from the trailing edge. In real race cars this is often not the case so the results based on changes to the trailing edge should be taken with caution as the effect will be situation specific. You may not be able to rely on this trend for your application.

Beginning to wrap the study up, the last geometry related factor i wanted to assess was the presence of a large radius (approximately the same size as the vortex) to the shoulder of the diffuser. 

My hypothesis was that it would improve vortex formation and conserve energy once they were established - increasing their contribution to downforce.

![Figure 9: 3D model of the diffuser with shoulder radii geometry modification added to improve vortex formation](https://static.wixstatic.com/media/67d9bf_0148adacfbab4cd7bea73e96135173a8~mv2.png)

*Figure 9: 3D model of the new shoulder radii.*

The hypothesis proved correct and gave another small improvement in performance, a 7 count increase in CL and an actual 3 count reduction in CD, gaining some efficiency back.

To bring it all together, results are tabulated below.

![Summary results table of the diffuser geometry sensitivity study showing CL, CD and L/D for each configuration tested](https://static.wixstatic.com/media/67d9bf_d53ed8e735b4419f8618f6c85999167e~mv2.png)

From the results it’s clear to see that the heavy hitters in performance are firstly the treatment of the leading edge of the diffuser, followed by the treatment of the trailing edge. 

Spending a little time tuning these bought a significant 7% and 2% increase in downforce respectively through influencing the formation of the separated region or ‘bubble’.

As mentioned earlier - the importance of this influence is that it dictates the efficiency of the airflow through the diffuser and directly impacts the magnitude of the low pressure generated in the throat section.

That concludes the initial sensitivity study and closes Part 1 of this series dedicated to understanding diffuser flow. 

This study was well worth doing as it allows me to now approach subsequent work in this area with a clear understanding of what does what and what to look out for, cutting out a lot of potentially unstructured design work trying to learn these lessons on the fly.

I did decide to take this a little further and investigate the influence of ride height and the presence of strakes or fences on diffuser performance. There were some very interesting findings from that which i'm looking forward to sharing.

That will be uploaded here as Part 2 in early February so stay close!

Be inspired!

---

Need some aerodynamics work for your project? Get in touch! 

[Contact Us](/contact) 

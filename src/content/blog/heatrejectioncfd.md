---
title: "Cooling Vanes and the Heat Rejection of an Automotive Brake Rotor; a CFD Study"
slug: "heatrejectioncfd"
excerpt: "With many different types arrangements of brake rotor cooling vanes on the market. Which is actually the most efficient? Here we found out."
date: "2020-04-23T20:56:31.079Z"
updated: "2020-05-11T13:18:30.387Z"
originalUrl: "https://www.waveydynamics.com/post/heatrejectioncfd"
coverImage: "/images/blog/heatrejectioncfd.png"
seoTitle: "Brake Rotor Cooling Vanes: CFD Heat Rejection Study"
seoDescription: "A CFD study comparing radial, curved and pillar vane brake rotor configurations — finding which design provides the best heat rejection for motorsport."
categories: ['Aerodynamics']
---

# Cooling Vanes and the Heat Rejection of an Automotive Brake Rotor; a CFD Study

## Introduction

Whilst undertaking some consulting work for a client recently, I was tasked with identifying a brake system suitable for their particular high performance application - Motorsport. In considering this, it was necessary to understand the construction of brake rotors currently in the market. My last article explored the benefits and drawbacks of the different brake rotor and bell mounting configurations; here, I will explore the internal construction of the brake rotor - the presence of cooling vanes, and their influence on the heat rejection capacity of the rotor.

To provide some background, high performance brake rotors in the market today are described as “vented”. indicating the presence of internal cooling vanes and airflow cavity between the two frictional surfaces.

![Figure 1: A vented brake rotor showing the interior cooling passages between the two friction faces](https://static.wixstatic.com/media/67d9bf_50966fd3670d444fa792ea7daa26b1df~mv2.png)

**Figure 1: A vented brake rotor; the interior cooling passages can be seen in between the two friction faces.**

The objective of ‘venting’ a brake rotor is to aid in cooling of the rotor following brake applications and therefore the rejection of subsequent heat generated in the braking process.

We generally find vented rotors with internal vanes in two forms; ‘radial’ or ‘curved’ vane (which can either be curved into the direction of rotation or against). Both variants serve to enable the rotor to act as a centrifugal pump as it rotates with wheel. 

To supply the brake rotors of Motorsport and certain high performance road cars with a fresh supply of cool air, engineers employ a device known as a brake cooling duct - this is simply a tube or conduit with the inlet positioned at the front of the car which collects air as the car moves forward and routes it to discharge into the centre of the brake rotor within the wheel assembly.

![Figure 2: Brake cooling duct routed from the disassembled front of a Le Mans prototype race car to the front brake rotor assembly](https://static.wixstatic.com/media/67d9bf_d12e34a7ae96475181252b04a7964c3a~mv2.jpg)

**Figure 2****: Picture showing routing of a brake cooling duct from the disassembled front end of a Le Mans prototype race car, to the front rotor assembly.**

![Figure 3: Brake cooling inlets visible either side of the radiator grille on the front bumper of a 1974 Porsche 911 RSR Turbo](https://static.wixstatic.com/media/67d9bf_613bd86ba56b4c4687dae6fb1bc1e6c0~mv2.jpg)

**Figure 3: The brake cooling inlets can clearly be seen either side of the radiator grille on the front bumper of this 1974 Porsche 911 RSR Turbo.**

Considering the rotor as a centrifugal pump, it draws air in through the inlet area at it’s centre and ejects it at the outlet at the outer edge of the rotor’s radius. As the air travels through the rotor, it collects heat from the hot surfaces and therefore reduces it’s temperature by rejecting it to the external environment.

I chose to investigate the question raised above with the aim of making an informed decision on the optimal solution by putting some numbers on each configurations capacity to reject heat.

This task required a different analytical approach to my last article, I had to utilise Computational Fluid Dynamics (CFD) to simulate the airflow and conjugate heat transfers (heat transfer between a solid and a fluid) involved. The following sections of this article will outline the analysis and hopefully provide a clear conclusion as to which was optimal for the Motorsport application at hand.

## Method

Using a CFD suite to simulate the scenario of a rotating brake rejecting heat into it’s environment, the first step was to generate the models. Beginning with the radial vane brake rotor, i used a modified version of the model used in the previous article - this was then modified further to allow assessment of subsequent variations of vane configuration; ‘Forwards curved’, ‘backwards curved’ and lastly a pillar configuration in which the vanes were replaced by pillars; this was to simulate a geometry in which no centrifugal pumping action is generated. The pillars were modelled to represent the weight of the removed vanes and therefore provide the rotor with the same thermal mass as the others for comparison.

Any openings on the mounting bell were closed off to simulate the rotor in it’s installed position. The geometry was not completely accurate to a real scenario with wheel hubs and uprights not present, but for the purposes of the simulation and to allow a comparison between the configurations it is adequate. The rotor on test was of 365mm diameter, 34mm total thickness, with a frictional radius of 80mm and an internal venting channel width of 18mm.

![Figure 4: CFD screen capture of the radial vane brake rotor geometry](https://static.wixstatic.com/media/67d9bf_1582175ac05243cca85e2cedf3b1bbe9~mv2.jpg)

**Figure 4****: Screen capture of the radial vane rotor.**

![Figure 5: Section views of four brake rotor configurations tested — radial, forwards curved, backwards curved and pillar vane (clockwise from top left)](https://static.wixstatic.com/media/67d9bf_3d90bf8a96e7472a8b97dd98a4e9beae~mv2.jpg)

**Figure 5: Clockwise from top left - Section views of radial, forwards curved, backwards curved and pillar vane rotors used in the simulations.**

Lastly, to deliver the cooling air, i modelled a brake duct of 100mm diameter, sharing the same axis as the brake rotor and ejecting air perpendicular to it’s surface at a distance of 100mm. This enabled the rotor to pump air in a uniform manner through the interior surfaces.

![Figure 6: CFD screen capture showing the extent of the flow domain around the brake rotor and cooling duct](https://static.wixstatic.com/media/67d9bf_b65d64218bd04f85824a8e8ae2539379~mv2.jpg)

**Figure 6: Screen capture showing extent of the flow domain **

With the modelling done, i applied a mesh to the geometry. For interest purposes I have summarised the applied mesh below, in table 1.

| Parameter | Value |
|:---:|:---:|
| Max Face Size (m) | 0.01 |
| Max Element Size (m) | 0.03 |
| Min Element Size (m) | 0.00039 |
| Body Sizing (m) | 0.0075 (Rotational Domain) |
| Inflation Layers | 4 |
| Total Elements | 3,378,851 |

**Table 1**

![Figure 7: Close-up CFD mesh showing the brake cooling duct and rotor with discrete solver domains and mesh quality](https://static.wixstatic.com/media/67d9bf_4a26599b42644952867386847e99dd8d~mv2.jpg)

**Figure 7: Close up of the brake cooling duct and brake rotor showing the discrete domains and mesh quality. **

Now, on to the second step of the simulation; the setup. The most important stage of this is identifying the correct turbulence model to use - identifying the model applicable for the flow regime expected is important in order to achieve both an accurate and convergent solution. Given that we have relatively low speed combined with turbulent, rotating airflow and the likelihood of vortices and eddys, It seemed sensible to begin with using the well known and understood Realisable k-ε model, with scalable wall functions to assist the model in simulating the conditions expected at the boundary layer.

With that decision made, the other two main input parameters were the rotational speed of the rotor and the rate of cooling airflow supplied to the rotor - I chose a value of 1616 RPM, corresponding to a vehicle speed of 105mph (total wheel and tyre assumed as of 0.552m - a 19 inch wheel) and a cooling flow of 67mph (0.28 kg/s). The remainder of the solution parameters were input as per the below.

The simulation was run once for each configuration, in the following order. 

The flow was run for a total of 8 seconds on each rotor configuration and captured data samples at a frequency of 1Hz. To get a steady state perspective of the flow, data was studied at an elapsed time of 5 seconds - this allowed the flow to fully establish itself and gave time for trends in the data to develop sufficiently to allow a reliable comparison point.

On to the findings.

## Results & Discussion

With the simulations complete, I’ll walk you through what was observed with some screen captures from the process. Before this, to help visualise how the flow moved through the rotor in the simulation, here are some images taken from the simulation software.

![Figure 8: CFD streamlines showing airflow from the brake cooling inlet duct through the rotor vanes and exiting into the surrounding environment](https://static.wixstatic.com/media/67d9bf_2d102932c5c147818f2be2b764c9b3fe~mv2.jpg)

**Figure 8: Screen capture showing streamlines of air supplied from the inlet duct, through the rotor and out into the external environment..**

The results and trends observed were quite surprising and initially counter intuitive. As a first step plotting temperature against time, the curves showed a relatively linear loss of heat as expected. What was surprising however was the trends observed in each rotor configuration.

![Chart 1: Temperature plot showing heat dissipation over elapsed time for each brake rotor vane configuration](https://static.wixstatic.com/media/67d9bf_87e26b8a595b497db0ac5f356b21e147~mv2.jpg)

**Chart 1: Plot of temperature (°C) against elapsed flow time.**

Analysing the final temperatures of each rotor gave some clearer insight.

![Chart 2: Bar chart comparing total heat loss at 8 seconds elapsed for each brake rotor vane configuration](https://static.wixstatic.com/media/67d9bf_f166975b8dcd4b098f6e1528afc8660b~mv2.jpg)

**Chart 2: Total heat loss (°C) at 8s flow time elapsed.**

Of the 4 configurations, the rotor that lost the most heat was the pillar vane, losing a total of 72°C over 8 seconds.  

![Figure 9: Temperature distribution on the backwards curved vane rotor section showing cooler regions in contact with airflow (left), with pressure legend (right)](https://static.wixstatic.com/media/67d9bf_4c22ee2d6ae646e5a898c9f456d7417e~mv2.jpg)

**Figure 9: Left - Temperature distribution of the backwards curved vane rotor taken from a section through the centre of the rear friction face. The cooler regions (yellow) in contact with the airflow can be seen.**

**Right - legend demonstrating scale associated with variables - this will apply to all subsequent screen captures and graduates from low (blue) to high (red), in relative terms.**

My initial working assumption that the most important factor in influencing heat rejection would be the mass flow of air through the rotor seemed to be invalid. To explore further, i plotted the mass flow on a graph.

![Chart 3: Mass flow comparison at 8 seconds elapsed for each brake rotor vane configuration](https://static.wixstatic.com/media/67d9bf_e936c0868d1244aeb0830f10cd6813ce~mv2.jpg)

**Chart 3: Mass flow (kg/s) companions @ 8s flow time elapsed.**

As the pillar vane rotor; with highest heat loss of the series does not correspond to the rotor with the highest mass flow of air, it is shown that it’s not simply the quantity of air flowed but something about the behaviour of that air that was more significant. Some further exploration was needed.

Before I progressed further, I felt it necessary to verify that the simulation data was not in error or being influenced by some local phenomenon at the measurement point. Heat flux (the measure of heat output/input over a specified area) was investigated. To gain some confidence in the temperature data, the heat flux out of the entire rotor surface area into the air should directly reflect the total heat loss observed with each rotor configuration.

![Chart 4: Heat flux comparison at 5 seconds elapsed for each brake rotor vane configuration, confirming temperature data trends](https://static.wixstatic.com/media/67d9bf_d9e4f9c6a4d0494691335d5b51b23a22~mv2.jpg)

**Chart 4: Heat flux (W m^-2) measured @ 5s flow time elapsed.**

As the graph shows, the heat flux did indeed match the recorded temperatures. So what is the critical factor here?

Focusing now on the pressure data, all the configurations generated a low pressure (relative to atmospheric) at the inlet which acted to draw air towards the internal passages, and all but one of the rotors increased the total air pressure (summation of static and dynamic pressures) as it travelled through, indicating that kinetic energy was transferred from the rotor to the air.

![Chart 5: Change in total air pressure from rotor inlet to outlet for each brake rotor vane configuration](https://static.wixstatic.com/media/67d9bf_956a71dbcdc548338119978a8b86eab4~mv2.jpg)

**Chart 5: Change in total pressure (Pa) from inlet to outlet of the rotor.**

The case of the pillar vane rotor losing air velocity (dynamic pressure) at its outlet can perhaps be explained with an understanding of the vicious properties of air - in this case there are no guiding vanes and the airflow will be highly chaotic (turbulent) as the pillars rotate. Almost immediately after the airflow passes over the pillars it is essentially exposed to free atmosphere and at this point the ‘Bernoulli effect’ becomes significant, together with viscous effects the large increase in flow area allows the air to decelerate significantly by the time it reaches the measurement probe located at the outer radius of the rotor. The screen capture below seems to confirm this hypothesis.

![Figure 10: CFD velocity contours in front and side section views of the pillar vane brake rotor showing airflow deceleration at the outlet](https://static.wixstatic.com/media/67d9bf_8df21499993841069072169a0b3f3ff2~mv2.jpg)

**Figure 10: Front and side section views showing air velocity around the geometry of the pillar vane rotor.**

The trend in total pressure above does not however follow the trend observed in the heat loss data, so there are clearly multiple factors affecting the rate of heat rejection. The fact that the dynamic pressure element of measured total pressure indicates the velocity and therefore kinetic energy given to the air as it passes through the rotor, it prompted me to explore the effect of the turbulent kinetic energy imparted into the worked air. 

Back to theory for a little background - the heat transfer coefficient of a fluid is directly impacted by the flow regime i.e. whether it is laminar or turbulent flow - a turbulent air flow is able to absorb more heat energy from the body it is in contact with than a laminar flow, and therefore some link should be observed between turbulent kinetic energy heat flux. Let’s take a closer look.

![Chart 6: Change in turbulent kinetic energy from rotor inlet to outlet for each brake rotor vane configuration](https://static.wixstatic.com/media/67d9bf_cc042ca8759e4713ae13a28c0fb07c8d~mv2.jpg)

**Chart 6: Change in turbulent kinetic energy (J kg^-1) from inlet to outlet of the rotor.**

For clarity, let’s also compare this with the change in dynamic pressure to develop the picture further. 

![Chart 7: Change in dynamic pressure from rotor inlet to outlet for each brake rotor vane configuration](https://static.wixstatic.com/media/67d9bf_d9e82e0ebfc84b9984f68a5eb17bae55~mv2.jpg)

**Chart 7: Change in dynamic pressure (Pa) from inlet to outlet of the rotor.**

This data seems to confirm the new hypothesis and in relative terms, the change in both kinetic energy and dynamic pressure together vary with each other so as to account for the trends in heat flux and temperature losses seen by the rotor.

## Conclusion & Limitations

From the data measured it appears the variables having the largest influence on ability of the rotor to reject heat are the velocity and turbulent kinetic energy possessed by the discharged airflow. This indicates that the internal geometry of the rotor must impart the maximum amount of energy into the fluid in order to perform most effectively; this can be achieved by either creating a large difference in inlet and outlet flow velocities, or minimising the change in flow velocity (increasing exposure time) whilst creating a large amount of turbulence in the flow. This understanding would give a brake rotor designer sufficient direction when designing the optimal rotor.

Based on this data alone, the pillar vane configuration seems to be optimal. However in reality the simulation was performed under a fairly specific set of conditions and it wouldn’t be good judgement to take this conclusion and run with it without further investigation under a wider range of operating conditions - to obtain a more complete picture of the behaviour (e.g. a wider range of speeds and cooling airflow conditions). 

It can’t go without mention that the manufacturability of a pillar vane rotor would add significant complexity to the current market of cast iron rotor. Pillars such as those modelled for the purpose of this simulation can’t be cast using conventional techniques and the complex machining operations required would prove to be costly. Taking this into account, the sensible choice would appear to be the straight vane rotor.

In addition, the curved vane design chosen was not optimised and a design of experiment simulating a range of different curve geometries may actually swing the results in the opposite direction. That process was not in the scope of this article due to limitations on both time and computing resources; with each of the simulations taking approximately 12 hours to complete, this took quite a while to finish!

There were also experimental limitations - the mesh, especially on the rotor could be improved and on some of the contours plotted a finer mesh would appear to be beneficial..

Most importantly, not having access to facilities to correlate the simulated data with physical experimental data also leaves questions open, as there is no way of verifying the validity of our findings. CFD is a widely used tool in engineering today and has developed a huge amount over the years, but it is still not at the point that we, as engineers, can blindly trust that the data it provides is completely accurate.

In summary, the completion of this initial set of simulations answered many questions but also raised many in turn, all of which I’d like to follow up on if given the opportunity in the future, but it has been an interesting and educational process none the less. I hope you enjoyed reading.

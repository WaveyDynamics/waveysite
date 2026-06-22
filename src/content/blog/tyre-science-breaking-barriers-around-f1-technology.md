---
title: "Tyre Science; “Breaking barriers around F1 technology”"
slug: "tyre-science-breaking-barriers-around-f1-technology"
excerpt: "We've recently partnered with MegaRide - here's how we'll work together to make F1 technology accessible to the wider motorsport field."
date: "2021-11-24T11:30:27.598Z"
updated: "2021-11-24T12:58:00.604Z"
originalUrl: "https://www.waveydynamics.com/post/tyre-science-breaking-barriers-around-f1-technology"
coverImage: "/images/blog/tyre-science-breaking-barriers-around-f1-technology.jpg"
seoTitle: "Tyre Science: Breaking Barriers Around F1 Technology"
seoDescription: "How Wavey Dynamics partners with MegaRide to bring F1-level tyre modelling — thermal prediction, wear and pressure simulation — to wider motorsport."
categories: ['Tech Bites', 'News']
---

# Tyre Science; “Breaking barriers around F1 technology”

## Intro

Across the spectrum from the road to the race track, tyres are a very interesting and important component in automotive applications. Their importance takes on a whole new meaning when we study them in the context of motorsport focused performance.

As the only components of the car which are in contact with the track surface, tyres have sole responsibility for generating the forces demanded by the driver. Over a race weekend the rest of the vehicle (i.e. chassis and aero) is configured only to create conditions in which the tyres are able to perform optimally.

In the era of heavily analytical engineering and simulation, we are now at a stage where as vehicle dynamicists we can create mathematical models of pretty much every vehicle sub system to a good level of accuracy - creating digital representations of the vehicle to quantify parameters from weight distribution and inertia, to the frequency response of the spring and damper system and further still, the kinematics and compliance of structural components. 

These representations are used in simulations to generate great approximations of dynamics in applications covering simple steady-state analysis all the way to complex lap-time simulation and DiL (Driver-In-Loop) techniques without the time, expense and difficulty of doing so in the real world. 

For the importance tyres have in dictating the underlying physics defining a vehicle’s dynamic behaviour though, their physical complexity has meant creating accurate mathematical representations (models) of the tyres for these simulations has been a long standing challenge.

![Toyota Gazoo Racing car on track, representing the importance of accurate tyre performance modelling over a race stint](https://static.wixstatic.com/media/67d9bf_f89f1803d11a4ad1b3f62dc847d2aa88~mv2.jpeg)

*Accurate understandings of tyre performance over a stint are essential in calculating race strategy and setu, something not always possible with traditional tyre models. [Toyota Gazoo Racing]*

## Model Behaviour

Ultimately, the purpose of any tyre model is to take a number of input parameters and generate an output in the form of a force or moment at the contact patch. These forces feed into the wider vehicle model to create a global snapshot of vehicle states at a particular instant.

Models most widely used within the automotive & motorsport space are based on the empirical Pacejka ‘Magic Formula’ (MF) concept, which employs non-physical coefficients to create a curve representing the real tyre’s performance from experimental observations. 

The MF approach takes the tyre slip angle / slip ratio and the vertical load as input, and provides a lateral / longitudinal force or a moment about a particular axis as output. Some versions of the MF approach incorporate coefficients to represent the effect of quantities such as camber angle and inflation pressure to widen the scope of the model, but it does have limitations.

![Pacejka Magic Formula tyre curve showing the non-linear relationship between lateral force and slip angle](https://static.wixstatic.com/media/67d9bf_594099e3efba496f994e248928dda675~mv2.png)

*Figure 1: A typical tyre curve generated through use of Pacejka’s Magic Formula.*

As this approach does not take into account many of the complex physical phenomena defining a real tyres response, it’s an approximation valid for only a certain window of relevance. 

In the arena of motorsport where any and all competitive advantage is embraced with both arms, these limitations become strikingly obvious.

## The Forgotten Factors

The force which a tyre generates at any moment is a very dynamic quantity, depending heavily on two key intrinsic parameters - tread layer **temperature** and **degradation** in terms of mechanical wear and thermal degradation. Both of which are constantly evolving throughout a race and neither of which are accommodated in the traditional MF model.

If the tyre can’t be accurately represented in entirety, then the validity of the overall vehicle simulation is limited to the accuracy of the tyre model. In certain conditions, error approaching as much as 20% can be observed when comparing the MF model to experimental data. [1]

If the effects of temperature and wear are two glaring parameters not accounted for with the traditional approach, what exactly is their influence and why does this reduce the accuracy of models?

As a viscoelastic material, tyre rubber exhibits a character of both viscosity and elasticity. While a tyre will return to its original form after deformation (elasticity), there is a large amount of internal energy dissipated as it deforms and reassumes its shape (viscosity).

In these materials, the applied stress and the resulting deformation are always out of phase; a phenomenon described as **hysteresis**. The presence of hysteresis indicates that strain energy is dissipated through intermolecular friction as heat within the material.

![Graph of energy dissipation versus temperature in tyre rubber, showing the hysteresis peak at maximum grip](https://static.wixstatic.com/media/67d9bf_9ab14ba2e93f4601a5fc07fe4db3b87a~mv2.png)

*Figure 2: The relationship of energy dissipation and temperature in tyre compounds. Hysteresis is at a peak when energy dissipation is at a maximum [Credit: Michelin]*

The highest levels of grip (coefficient of friction - CoF) are achieved at the point where energy dissipation is at a maximum. If we can’t accurately determine the level of energy dissipation (hysteresis) within a tyre, we can’t accurately predict its behaviour.

The influencing factors into hysteresis? Temperature is the big one, as well as to a lesser extent (and largely out of our control within motorsport applications) the frequency of stress application.

As the gas laws observe; temperature also has a proportional relationship with the pressure of a closed gas volume - accurate prediction of tyre temperature is inextricably linked to the accurate prediction of it’s inflation pressure. 

Inflation pressure defines the pressure distribution across the contact patch (through convexity or concavity) and the tyre’s stiffness in various axes, so it’s a crucial parameter to get right in vehicle setup.

To add to this, as a tyre wears and the thickness of the tread layer reduces, the reduced tread volume means there is less intermolecular movement - less strain energy is dissipated and the tyre generates less heat. Inflation pressure is a dynamic quantity and in fact evolves with the tyre.

![Chart showing typical tyre thermal evolution over a track session — inner liner temperature, tread core temperature and inflation pressure](https://static.wixstatic.com/media/67d9bf_2843131bf60044c08a83c9e4bc1ef129~mv2.png)

*Figure 3: The typical thermal evolution of a tyre over a track session. The uppermost dashed line represents to the inner liner of the tyre, the black line is inflation pressure and the solid lower line is the temperature of the tread core. [MegaRide]*

Through the various layers of its construction, temperature varies in both amplitude and phase with relation to the energy introduced at the contact patch.

So with traditional models, how do these missing parameters of temperature and wear tangibly influence the execution of a race weekend? What’s to be gained from accommodating them with higher fidelity models?

## The Performance Factor:

In high level motorsport, vehicle dynamics simulations, lap time simulations and DiL (Driver in Loop) simulators are essential tools in the preparation and execution of testing and race weekends to assist the race engineer in delivering the optimal setup for driver and racecar performance.

For these tools to be worth their investment, the simulated world _must _correlate with the real world to a good level of accuracy.

With traditional tyre models, the understanding gained through analysis of simulated data has its limits. Without an analytical understanding of the thermal evolution and degradation of the tyres over a tyre stint, the data produced can only be valid for a particular instant, leaving some experimentation or subjectivity to track sessions. 

But, if everyone on the grid suffers from the same simulation limitations then in theory everyone is on a level playing field. If everybody's models are inaccurate, then nobody has any particular advantage, right?

With tight technical regulations and BoP (Balance of Performance) controlling almost all high level circuit based racing, many traditional avenues of performance development are now firmly closed and finding performance advantages is becoming ever difficult.

In such an environment, effective tyre management is often the deciding factor in races,  driving teams to think harder on improving the correlation between digital world to the real world to increase the effectiveness of their simulations. 

Tyre models are finding themselves right in focus of attention.

![MegaRide surface plot of the relationship between tread core temperature, inflation pressure and grip coefficient](https://static.wixstatic.com/media/67d9bf_386594b494d340acaee6868b8e024eb3~mv2.png)

*Figure 4: The relationship between tread core temperature, inflation pressure and grip level (mu). [MegaRide]*

Truly effective tyre management means implementing a setup and driving style to get all four tyres up to their optimal temperature window, at the optimal pressure and furthermore ensuring they remain in that window for the duration of the stint to manage these key parameters.



Traditionally, this is achieved with a combination of experience alongside some empirical observations, but what if there was a way to advance our simulations to quantify the temperature and wear related effects in real time?

An engineer with the benefit of this information is provided with a whole new dimension of insight into a setup approach and race strategy. The resulting race execution would certainly be different to one generated from standard assumptions - a competitive advantage indeed.

## Industry Leaders:

In recent times, MegaRide, the commercial arm of the University of Naples (UniNa) vehicle dynamics research group has risen into the spotlight in the motorsports world for some very interesting advancements in tyre modelling technology.

With the introduction of their proprietary thermoRIDE & weaRIDE models, the standard MF tyre model is enriched with the additions of real-time prediction of thermal properties within each layer of the tyres construction, inflation pressure, mechanical wear of the tread layer and chemical degradation.

Standard MF approach provides the tyre longitudinal / lateral force as a function of two parameters: vertical load, and slip angle / slip ratio.

$$F = f(x,\, F_N)$$

Where $x$ = kinematic effects; slip angle/slip ratio, camber.

The evolution of this standard MF model, which MegaRide coins the ‘MF-evo’, has a much broader and physically relevant range of inputs. With this, the force generated at the contact patch becomes a function of the following:

$$F_{\text{EVO}} = f(x_{\text{EVO}},\; x_{\text{STD}},\; T_{\text{COMPOUND}},\; T_{\text{CARCASS}},\; P_{\text{INTERNAL}},\; w)$$

Where $w$ = wear (mechanical & chemical degradation)

The resulting model, which interfaces with commercial simulation environments via an API is significantly more capable than the conventional approach in modelling the tyre state.

Nothing speaks louder to an engineer than data, so here’s a perspective on the power of this technology when compared to the standard MF approach.

![Comparison of lateral acceleration from MF-evo model against real racecar acquired data and the standard MF model](https://static.wixstatic.com/media/67d9bf_ff3dda76a5dd44668d731912169d654a~mv2.jpg)

*Figure 5: Comparison of lateral acceleration level for 3 data sets, the simulated MF-evo model closely tracks the acquired data, taken from a real racecar [MegaRide]*

The comparison of the standard MF and MF-evo approach is even more striking when the dependencies of temperature and pressure are plotted.

![Surface plots comparing friction coefficient and cornering stiffness as functions of tread temperature for standard MF versus MF-evo models](https://static.wixstatic.com/media/67d9bf_3f1c340368f54836abf065d32c3ef477~mv2.png)

*Figure 6: Surface plots of the relationship between tread temperature, pressure and the coefficient of friction (left) and the cornering stiffness (right) of a sample tyre [MegaRide]*

The error in prediction of both the coefficient of friction and the cornering stiffness of the tyre at hot and cold temperatures between the standard MF and MF-evo model further highlights the benefits of the technology.

| | $\mu_{\text{cold}}$ | $C_{\text{cold}}$ | $\mu_{\text{hot}}$ | $C_{\text{hot}}$ |
|:---:|:---:|:---:|:---:|:---:|
| MF-std | 6.62% | 18.91% | 4.47% | 11.49% |
| MF-evo | 2.45% | 5.48% | 2.12% | 4.27% |

*Table 1: Comparison of the error observed between the standard MF and MF-evo models with respect to coefficient of friction and cornering stiffness at different temperature ranges. [1]*

Combining this thermal modelling capability with a method of predicting both mechanical and thermal degradation, weaRIDE generates some powerful data in the context of understanding wear rates and their relationship with tread temperature, but also the effect of chemical degradation for its effect on the loss factor of the compound.

![Chart comparing weaRIDE model estimated tyre wear rate against measured wear data](https://static.wixstatic.com/media/67d9bf_75780c93cc7245d6a53a39b13131636b~mv2.png)

*Figure 7: Estimated wear rate using the weaRIDE model vs measured wear [MegaRide]*

## Bells & Whistles

In the context of vertical dynamics, evolving the commonly used Swift model to provide a more accurate technique of simulating the contact between the tyre footprint and the road mesh, threedeeRIDE collates these temperature, pressure and wear predictions to create an enriched ‘Swift-evo’ style approach to provide more accurate data of suspension loads and contact patch load variations.

Particularly for DiL simulations, the modelling of the forces and moments generated in the steering system due to road inputs is key information in getting a correlated simulation.

These modules are all consolidated and activated by the adheRIDE package, which takes outputs from the real-time thermal (thermoRIDE) and wear (weaRIDE) prediction models to generate the MF-evo tyre curves. Forces from the MF-evo model are then looped back as input into the real-time models in a closed loop to iterate the tyre behaviour.

| Module | Function | Benefit |
|:---:|:---:|:---:|
| thermoRIDE | Real-time prediction of tyre temperature distributions across all layers of its construction | Simulation of the relationship between thermal state and frictional performance over a tyre stint |
| weaRIDE | Real-time prediction of tread wear and degradation phenomena | Simulation of the influence of mechanical and chemical degradation on tyre performance |
| threedeeRIDE | Real-time multicontact tyre ride model incorporating thermal, pressure and wear effects into estimations of ride response from tyre-road interactions | Increased accuracy in vertical dynamics resulting in closer prediction of wheel hub displacements, transients and steering system force & moment inputs |
| adheRIDE | Generation of a multi-physical MF-evo tyre model with input from thermal, wear and 3D tyre-road interactions | Creation of a dynamic lateral/longitudinal & vertical tyre model applicable to the entire range of thermal and wear related operating conditions experienced by the tyre |

*Table 2: An outline of the 4 modules of MegaRide’s RIDEsuite: function and benefits.*

The Formula 1 world has had this technology for a good while. Together with MegaRide, we are making it accessible to the wider motorsport field.

## A Case Study:

MegaRide has been working with a series of motorsport teams in recent times to demonstrate the application of this technology; most recognisably with the Italian based team Trident Racing who compete in FIA F2 and F3 championships. 

With MegaRide on board, Trident recently won the F3 championship. Congratulations to all involved and a great testimony to the power of the technology.

To demonstrate a particular application, let’s consider the scenario of a race weekend in which the track temperature falls by 25°C between practice and qualifying - perhaps something similar to the recent conditions at Losail Circuit for the 2021 Qatar GP.

In this scenario, the setup between both events would change with the conditions. The cooler tyres will work differently on the track surface and crucially the relative operating temperatures at each axle are likely to deviate the between the two sessions, meaning the balance of the vehicle is likely to change.

With the predictions into the evolution of these parameters afforded by the RIDEsuite, a Design of Experiment can be undertaken within a lap time simulator to understand the possible setup changes required to keep the tyres in the right window and minimise the increase in lap time seen due to the colder rubber.

The results from such a DoE are shown below, with the temperature of tyre warmers, roll balance and aero balance as controlled variables.

| | Practice | Qualifying (baseline) | Qualifying (RIDEsuite) |
|:---:|:---:|:---:|:---:|
| $T_{\text{AIR}}$ / $T_{\text{TRACK}}$ [°C] | 30/40 | 10/15 | 10/15 |
| Tyre Pressure [Bar] | 1.55 | 1.55 | 1.55 |
| Blanket Temperature [°C] | 40 | 40 | **50** |
| Roll Balance [%] | 40.9 | 40.9 | 40.9 |
| Aero Balance [%] | 46.4 | 46.4 | **43.7** |
| Δ Lap Time [s] | 49.6 | +0.91 | **+0.07** |

*Table 3:  Outline of a DoE using MegaRide technology to investigate the effect of adjusting a number of parameters in response to a 25C drop in track temperature between practice and qualifying events. [Data: MegaRide]*

After some work, the changes suggested by the results are an increase in tyre blanket temperature of 10°C and a rearward adjustment of the aero balance. The loss in lap time was reduced from +0.91s to +0.07s. That’s a very significant amount of time.

![Visual representation of lower track temperature impact on performance and the RIDEsuite-suggested setup changes](https://static.wixstatic.com/media/67d9bf_0b737e69e72e4e03a9bb7afada6c4329~mv2.png)

*Figure 8: Visual representation of the impact of lower track temperatures and suggested setup changes using insight from the RIDEsuite. [MegaRide]*

## 

## Benefits in Partnership:

At Wavey Dynamics, our approach to vehicle dynamics has always been tyre centric, so understanding the behaviour and interactions between different the overall vehicle and how it uses the tyres has always been at the forefront of our approach, but using empirical methods, it’s notoriously difficult to quantify.

After following MegaRide’s progress over the last years and having some recent conversations with the team, it quickly became clear that their technology would be a crucial complement to our mission to work at the cutting edge of automotive & motorsport engineering; adding to our ability to bridge the gap between the understanding of technology and clear performance outcomes.

![Wavey Dynamics and MegaRide partnership](https://static.wixstatic.com/media/67d9bf_fe9dc6a6c1584f8c900d76a5c2b15442~mv2.jpg)

As an organisation which has a lot of passion about partnering with smaller, specialist companies to achieve big things, we’re happy to say that we have formed a partnership with MegaRide and will be supporting them as they expand into UK and wider markets to do exactly this.

We are also incorporating their technology into our consulting work, which increases our technological capability and adds to what we can offer our motorsport and OEM clients, enabling a competitive advantage to be leveraged in what are increasingly tight markets both on and off the track.

Exciting times ahead.

If you use tyre models in your simulation work and are invested in capturing the latest developments to move your project forward, reach out to understand how we can help you gain the competitive edge.

—

[contact@waveydynamics.com](mailto:contact@waveydynamics.com)

References:

[1] - A. Sakhnevych (MegaRide), “Multiphysical MF-based tyre modelling and parametrisation for vehicle setup and control strategies optimisation.”  

https://doi.org/10.1080/00423114.2021.1977833 

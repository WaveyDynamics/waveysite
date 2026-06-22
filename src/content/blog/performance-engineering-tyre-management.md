---
title: "Performance Engineering Through Tyre Management | Pt. 1"
slug: "performance-engineering-tyre-management"
excerpt: "Managing your tyres can be the decider between first place and finishing out of the points. Here's a guide to getting the most from them."
date: "2024-03-27T14:16:54.524Z"
updated: "2024-04-02T16:31:04.651Z"
originalUrl: "https://www.waveydynamics.com/post/performance-engineering-tyre-management"
coverImage: "/images/blog/performance-engineering-tyre-management.jpg"
seoTitle: "Performance Engineering Through Tyre Management"
seoDescription: "A guide to performance engineering through understanding and management of tyre energy for race cars"
categories: ['Vehicle Dynamics']
---

# Performance Engineering Through Tyre Management | Pt. 1

I often talk about using a ‘tyre centric’ approach in my vehicle dynamics work, but when it comes to racing, what does that really mean?



The tyre is king in vehicle dynamics - being the only component of the race car in contact with the race track, focusing our efforts towards making sure our four tyres are as ‘comfortable’ as they can be to do what we are asking of them makes a lot of sense.



In circuit racing, what we are generally asking for is the lowest lap times, so our objective for the tyres is to create an environment which is conducive to them doing that.



![BMW M Hybrid V8 cornering](https://static.wixstatic.com/media/67d9bf_8e2ac5f373394db6a1956c6cba4ca2ef~mv2.jpg)

*Creating a comfortable environment for the tyres is a key performance advantage in modern racing [BMW Motorsport]*



Tyres are as close to a living component as we get on a race car, their performance i.e. grip level at any given moment is the output of a relatively large number of factors, so defining the best operating environment is actually quite nuanced.



What does ‘comfortable’ mean? How exactly do we define the best environment? Is it a qualifying or race event? Is it an endurance race, or a sprint?



I cover tyre physics in some detail in my tyre dynamics article online on the [Racecar Engineering Magazine website](https://www.racecar-engineering.com/tech-explained/tyre-dynamics/), but ultimately, there is one factor which draws the most focus.



## Tyre Energy

A tyre's maximum performance in terms of grip generation coincides with the point at which it dissipates the most viscoelastic energy. This condition also marks the point of maximum hysteresis.



In this context, hysteresis is characterised by the phase lag between applied stress and the resulting deformation of the rubber compound. When the delay in deformation from applied stress reaches a maximal value, the tyre is showing maximum hysteresis. Here, the tyre is also dissipating maximal energy and can generate the largest forces. This is what we want.



The chemistry behind this is quite interesting, and is associated with intermolecular friction within the rubber and the capacity for the polymer chains to move past each other smoothly, but that’s a story for another day.



The degree of energy which a particular tyre is able to dissipate is dependent on the rubber compound, temperature, state of degradation and stress input frequency (which relates to track topology). Consequently, the point of maximum hysteresis becomes a moving target.



In performance engineering, the main variable which we are able to influence trackside to manage hysteresis is of course tyre temperature which is generated as the tyre dissipates input energy in the form of heat.



As performance-focused engineers, the task of facilitating conditions for maximum hysteresis involves selecting the right tyre compound, optimising setup, and coaching drivers on appropriate driving styles. This is the recipe for a ‘comfortable tyre’.



Softer compounds generally show maximum hysteresis at a lower temperature, while harder compounds require a higher temperature. The first important decision to be made is in selecting the right compound for the vehicle, track and environmental conditions to match the level of energy input (and therefore temperature) we expect.



![911 LMGTE cornering under sunset in Bahrain](https://static.wixstatic.com/media/67d9bf_7eff34a69f7f41448b36c28f9234d8a0~mv2.jpg)

*Environmental conditions dictate optimal tyre compound [Porsche Motorsport]*

We’ve been talking a lot about tyre chemistry and energy dissipation. But what's the source of energy input?

**Force:** The greater the force which the tyre is generating in a longitudinal or lateral sense as it accelerates the car around the track, the larger its viscoelastic deformation and intermolecular friction it experiences.



This is heavily related to the vertical load of the tyre and is itself a factor of weight transfer.



**Sliding velocity:** The velocity at which the tyre is sliding across the track surface as it generates lateral and longitudinal acceleration



In the lateral sense this is related to the tyre slip angle (direction of travel vs. direction of vehicle x-axis). In the longitudinal sense this is the slip ratio at each tyre (speed of rotation vs speed of translation)



The tyre cannot generate a force without slip present.



The product of these factors determines the Sliding Power, and integrating this over a certain time period yields the total Sliding Energy imparted to a particular tyre.



Note – for further reading on the above, there’s a great paper from the faculty at the university of Brescia located [here](https://www.mdpi.com/1996-1073/14/16/5118)



An energy balance is at play here of course, with heat flow into and out of the tyre related to track and environmental conditions as well as that which is generated while driving. For example, on high track temperature days, the tyre receives significantly more energy from the track surface via conduction than on colder days.

![Describing mechanisms of heat transfer in and out of racing tyres](https://static.wixstatic.com/media/67d9bf_1bcb4bd7be5644ccbacace5cdfb051d0~mv2.png)

Through control inputs, the driver directly controls the level of sliding which the tyre experiences as they accelerate, brake and steer the car around a lap. We want drivers to be attuned to this and drive accordingly – it separates a good driver from an excellent one.



On the other hand, the engineer’s main influence into tyre energy is through setup; controlling the vertical loads each axle sees in cornering through lateral load transfer distribution, and through setting aero balance by manipulating the CoP (Centre of Pressure) fore and aft. To a lesser extent, kinematics also influences this.



Combined, the driver and engineer manipulate the energy flow into tyres during the race and therefore shape the resulting degradation profile.



The fundamental importance of good tyre management is in controlling degradation – it’s essential to control tyre energies to make best use of them in terms of average pace over a stint, and ultimately their useful life.



Positive degradation control is crucial for maintaining absolute grip and drivability. As each axle will usually degrade differently, the balance of the car shifts forwards or rearwards, depending on tyre wear.



In this two part article I’ll spend some time exploring the physics through which we can control tyre energy as race and performance engineers. Let’s start with some vehicle dynamics basics.



## On the Scales

The most logical place to start this journey is from the foundations of the vehicle and the static weight distribution, which is defined by the longitudinal position of the Centre of Mass (CoM)



The biggest input to CoM location is, logically, the position of the engine and other heavy powertrain components like the gearbox. CoM location is determined by the basic layout of the racecar and can’t be significantly changed once the car is designed.



The importance of static weight distribution becomes apparent when you consider the governing equations of cornering:



I’ll try to inflict a minimum of maths on you, but the following should be clear.



In order for steady state cornering to be achieved, two main conditions need to be met.



1.    Equilibrium must be achieved between the lateral force generated by the tyres and the centripetal force acting on the CoM.



2.    Yaw moment equilibrium must be achieved between the axles.





**Lateral force equilibrium** stipulates that in order for the race car to maintain a steady state cornering condition, the tyres must produce a lateral force matching the lateral acceleration demands of the particular corner radius being steered.



$$
\begin{aligned}
F_Y &= F_{YF} + F_{YR} = C_F \alpha_F + C_R \alpha_R \\[4pt]
&= C_F\!\left(\beta + \dfrac{ar}{V} - \delta\right) + C_R\!\left(\beta - \dfrac{br}{V}\right)
\end{aligned}
$$







**Yaw moment equilibrium** is a concept revolving around the mechanical advantage each axle has over the CoM (Centre of Mass).



Steady state cornering defines a constant yaw velocity, which requires a net zero yaw moment and therefore a balance of torque at the CoM.



$$N_{CoM} = F_{YF}\, a - F_{YR}\, b$$





- $C_{F/R}$ = Cornering stiffness (N/° of slip)
- $\alpha$ = Tyre slip angle (°)
- $\beta$ = Chassis slip angle (°)
- $a$ = Front axle to CoM (m)
- $b$ = Rear axle to CoM (m)
- $r$ = Yaw velocity (rad/s)
- $V$ = Forward velocity (m/s)
- $\delta$ = Steer angle (°)

The tyres on each axle must generate the required force to achieve this balance, and in a practical sense, this means the lateral force required to be generated from each axle is not equal.



If the yawing moment falls out of balance because one axle has reached its grip capacity, the vehicle will understeer or oversteer.



Words can be confusing, so let’s reinforce this with some maths.



A theoretical 1000kg race car has wheelbase of 4m and a rear-mid engine layout resulting in a 40:60 weight distribution. It’s cornering with a lateral acceleration of 2g



![911 RSR cornering](https://static.wixstatic.com/media/67d9bf_ae9628eeef014cddada04fd9cdbfc814~mv2.jpg)

*CoM location defines static weight distribution - a key piece of the cornering puzzle [Porsche Motorsport]*

In this fictitious example, the lateral acceleration acting on the CoM is generating a force of 19,620N, this tells us that to achieve lateral force equilibrium, the four tyres need to generate 19,620N in total.



To achieve yaw moment equilibrium though, net torque around the CoM comes into play. The 40:60 weight distribution indicates that the CoM is located 2.4m behind the front wheels and 1.6m ahead of the rear wheels.



To maintain zero yaw moment, the following lateral forces are required from each axle.



Front = 7848N



Rear = 11772N



As a first insight, this understanding allows us to predict the balance of the car; with equal tyre on each axle and constant g cornering conditions, the greater force requirement from the rear is also going to mean that the rear tyres assume a larger slip angle than the fronts therefore will be subject to the highest energy input.



Now, let’s look at this graph of lateral force generation vs slip angle.



![Chart for slip angle vs. force](https://static.wixstatic.com/media/67d9bf_8fd0eef701da40b3a729089a839c9da4~mv2.png)

From this, it’s clear to see that as the corner force (and therefore slip angles) increase, the rear axle is going to reach peak grip capacity before the front. At further slip angles the lateral force falls off, yaw moment balance is lost and in this specific case the car will begin to oversteer.



This relationship is doubly important when we consider energy input, as the greater lateral force generation combined with the greater sliding velocity, means the rear tyres are going to be operating at a higher temperature, and seeing more degradation than the front tyres.



With these two observations on lateral force requirements and resulting tyre energies, what can we do to improve the environment for the tyres and restore some balance?



## Lateral Load Transfer Distribution & Roll Stiffness

Lateral load transfer - An unavoidable by product of generating acceleration, but also an opportunity for us to influence the physics around our cars.



While we can’t do anything about the overall lateral load transfer, we can use a number of tools to fine tune the distribution of lateral load transfer between each axle via the setup of axle roll stiffness. During lateral accelerations, it has the effect of altering the vertical loads on each wheel.



Roll stiffness is defined quite simply as the resistance to body roll generated by the race car in response to roll moments; expressed in (Nm/˚)



Chassis roll stiffness is generated through two methods:



1.    The combined stiffness of the suspension components i.e. road springs, anti-roll bars, dampers.

2.    To a lesser extent, the compressive stiffness of the tyre sidewall i.e. tyre pressure



The example we used previously assumed a proportional roll stiffness front to rear and therefore an identical roll angle at each axle. In that scenario we can say the front axle would be underworked and the rear axle is overworked.



If we added roll stiffness to the front axle, we increase the proportion of lateral load transfer it experiences and therefore we increase the vertical load, specifically on the outside wheel. This allows it to carry more of the work and produce a larger force.

An overworked axle will also be an overheated axle, so shifting some load from the rear towards the front will work towards evening out the balance of energy input, acting to control energies and place both tyres back into a more comfortable operating region.

When we adjust aerodynamic balance, we are influencing tyre loads in a similar way as roll stiffness changes do to control tyre energy.



You might be forming a mental picture around how all this fits together by now, but how do we define what the tyre wants in practice?



## Balancing Energies

Tyre comfort is directly linked to longevity. In fact for many modern championships where avenues for technical exploration limit engine power and aerodynamics, tyres and tyre management have become a key performance differentiator.



It all comes down to minimising the time taken to complete a race. Whether in sprint racing or endurance racing, the car and driver which are kinder to the tyres put in faster laps on average and performs less pit stops.



In some championships, teams must even reuse tyres from previous races, so it really pays to have a concrete understanding on best techniques and strategies required to get the most out of a set.



![Graph showing tyre degradation trendline](https://static.wixstatic.com/media/67d9bf_2dcd3ce22057452b8164bbc64eb1032c~mv2.jpg)

*The degradation profile is heavily influenced by driving style [Wavey Dynamics]*

As you will have gathered - It all comes down to managing energies. Energy in vs. energy out.



This is quite important not just in steady-state cornering, but especially so in the transient phases of cornering where sliding is more likely to happen i.e. turn in where over or understeer can be induced, or corner exit where power oversteer can be initiated on a sharp throttle application.



When traction is lost, sliding velocity increases sharply, and with proportional increase in sliding energy - you can ruin a set of tyres very quickly in these scenarios.



This is where positive, relaxed driving styles shine and a combination of objective insight by the engineer and subjective insight from the driver can give clear direction on energy management.



It’s also about the engineer giving the driver a car that they are comfortable with. Difficult cars are harder to balance on the limit and setup changes are made based on feedback from the driver – a little shift in aero balance to fix an understeer tendency, a little less toe in at the rear to correct a turn in stability issue.



Let’s not forget Mercedes DAS system which dynamically adjusted toe in at the drivers request – this was to manage tyre comfort by manipulating energies.



So how do we learn where the most comfortable operating range of a tyre is?



In an ideal world, we would measure tyre temperatures in real-time and correlate this to performance data. This is somewhat difficult as most championships prohibit thermal sensors and the core layer, which is part of the tyre which is most strongly related to performance, is not so easily accessible.



Simulations with well correlated thermo-mechanical tyre models are also of good use but do require quite a lot of testing and information gathering. Companies such as MegaRide have emerged as experts in this.



In the majority of the times though, what it comes down to is selecting the appropriate compound based on track conditions, tracking degradation via laptimes and incorporating insight from driver feedback and data to develop a ‘map’ of performance and drive setup and driving technique changes.



Tyres are very communicative in the sense that through their degradation and relative temperatures, they tell you a lot about how the vehicle is using them. This information can be used to implement adjustments to setup or driving styles.



![Used racing tyres](https://static.wixstatic.com/media/67d9bf_5ccb45a23f2f4a9a9945a6e91a92caa5~mv2.jpg)

*Worn tyres will tell yo a lot about the conditions they experience while running. It's an important source of data*

The extreme end of bad tyre energy management is blistering and graining, which occur through different mechanisms, but are certainly a result of putting too much energy through a tyre when it’s not in a state to receive it.



Driving conditions have a huge part to play in this, for example wet tyres are softer compound than hard tyres – the average energy input over a lap is reduced by the wet track disrupting adhesion, but the water also conducts so much heat out of the tyre that they don’t get as hot.



The ability to elegantly manage tyre temperature, compound selection, and energy dynamics not only enhances the grip and balance of the vehicle but also significantly extends the operational lifespan of the tyres.

The sophistication and precision of tyre management strategies are what set apart the leaders in competitive racing. As engineers and strategists in this field, our continual challenge is to innovate and adapt, pushing the boundaries in pursuit of the perfect stint.



Part 2 of this article, coming soon will explore the relationship of driver technique with combined acceleration and how maximising the friction ellipse contributes to performance.



We’ll also look at the significance of quantifying and tuning stability and the considerations related to FWD, RWD and 4WD configurations in getting the most out of the grip available.



You won’t be waiting long..!



I welcome comments and discussion! Leave your thoughts below or find us on IG, Linkedin and [waveydynamics.com](http://waveydynamics.com)

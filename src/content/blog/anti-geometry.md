---
title: "The Principles of Anti-Geometry"
slug: "anti-geometry"
excerpt: "'Anti-Geometry' features on many of our favourite race cars, but what exactly is it and what are the physical principles defining it?"
date: "2022-05-16T10:00:20.059Z"
updated: "2022-05-17T12:50:27.894Z"
originalUrl: "https://www.waveydynamics.com/post/anti-geometry"
coverImage: "/images/blog/anti-geometry.jpg"
seoTitle: "Anti-Geometry in Race Car Suspension Explained"
seoDescription: "'Anti-Geometry' features on many of our favourite race cars, but what exactly is it and what are the physical principles defining it?"
categories: ['Vehicle Dynamics']
---

# The Principles of Anti-Geometry

Working with a GT3 car trackside recently, my attention was focused towards the suspension geometry on the front axle - in particular the degree of ‘anti-geometry’ present in the control arms. 

My initial observation was that it was quite a lot more pronounced than i’ve previously had experience with and i couldn’t immediately visualise what was going on, so i knew there was something missing from my understanding.

As usual when i run into situations like this, it’s time to dust of the notepad and get into some hand calculations!

Before i begin to work through to an understanding of the physics behind what anti-geometry is, and explore a method of determining how to define geometry for the performance we want, let’s start from the beginning and go back to the theory to make sure we are all on the same page.

## Anti-Theory

Anti-geometry (shortened from anti-pitching geometry) an application of classical mechanics utilised in designing the suspension geometry to minimise the pitching motions of the sprung mass under acceleration and braking. 

It's achieved by focusing the inclination of the control arms in the side view towards a common instantaneous centre and thus defining a pitch centre for each of the axles, front and rear.

![Figure 1: Anti-pitching geometry diagram showing control arms inclined towards an instantaneous centre in side view](https://static.wixstatic.com/media/67d9bf_105bab2f530848cf8045d8dacd3066f9~mv2.jpg)

*Figure 1: Anti-pitching geometry is introduced by inclining the control arms towards an instantaneous centre in the side view (Credit: Wavey Dynamics)*

Anti-geometry is usually categorised into two different elements; **anti-dive**, which prevents the body from pitching under braking and **anti-squat**, which prevents rearwards pitching under acceleration.

During deceleration under braking, inertial forces generate a pitching moment (torque) around the Centre of Mass (CoM) and the body pitches forward. This displacement changes the ride height at each end of the vehicle.

As the vehicle pitches, and the front splitter & front diffuser move closer to the track surface and the rear diffuser moves further away, the sensitivities of underbody air flow cause the aerodynamic loadings at each axle to change. The converse is of course true for squat under throttle.

The end result isn’t just a change total downforce, but also to the aerodynamic balance of the chassis.

If we want to limit the effect of this pitching displacement on our aerodynamic platform, traditional suspension systems present us with two options:

1. Use stiffer springs, or 

2. Design the suspension package such that effects of the pitching moment generated around the CoM are mitigated.

The former option is not preferable for a few reasons - stiffer springs result in reduced average grip as large variations in contact patch pressure are introduced, this also works the tyres very hard which means high wear and high temperatures.

## Just a Moment…

The beauty of vehicle dynamics is that it largely revolves around manipulation of forces and moments around the vehicle to reach specific performance outcomes, so with a little thought on physical principles and force vectors, we can do something interesting with the geometry.

![Figure 2: AMG GT3 race car employing anti-pitching geometry to maintain aerodynamic platform performance](https://static.wixstatic.com/media/67d9bf_7bdb0d4aa70947c1bfeaf9a28261b712~mv2.jpg)

*Figure 2: Cars such as this AMG GT3 employ anti-geometry to maintain the performance of the aerodynamics platform around a lap (Buggyra x MFT Racing)*

The principles of ‘anti-geometry’ involves strategically placing the pitch centres to produce a moment in opposition to the fundamental pitching moment generated through longitudinal acceleration.

The pitch centres are defined as the ‘virtual’ points of application of force generated at the contact patch onto the sprung mass. This means that in theory, a virtual linkage between the centre of force at the contact patch and the pitch centre on the sprung mass would be loaded in pure tension/compression.

This is same principle which allows us to define the instant centre & roll centre in the front view.

The location of the pitch centre also defines the centre of rotation of the contact patch and therefore the direction of velocity and force vectors.

Consideration of vector theory allows us to see that the force vector from the contact patch to the pitch centre has a both vertical and horizontal component. The horizontal component is the braking force generated by the slip ratio at the tyres, the proportion of the vertical component is what we are manipulating with anti-geometry.

![Figure 3: Diagram showing the normal line from contact patch to pitch centre defining the vertical braking force component](https://static.wixstatic.com/media/67d9bf_fbceb05453da4ebabc04049cc9b10ddb~mv2.jpg)

*Figure 3: The normal line (dashed red) from the contact patch to the pitch centre defines the vertical component of braking force (Wavey Dynamics)*

To understand how this works, i want to again reiterate the understanding that the pitch centre is considered as the virtual application point of longitudinal forces generated by the tyres on to the body.

The observation then, is that the location of this pitch centre defines the moment arm created in this force couple, so by strategically defining its location we can manipulate the vertical force component to generate a moment in opposition of the pitching moment

This concept gives rise to the ‘anti-dive’ terminology you all know so well.

We assess the magnitude of anti pitching effects as a % of the total pitching moment. If there is 0% anti-dive, there is no anti-geometry present, if there is 100% anti-dive then the pitching moment is entirely opposed by the anti-geometry and there is no displacement of the sprung mass.

Anti-dive and anti-squat effects are only generated by loaded axles, but can both feature on a chassis independently. Anti-dive is produced by both axles as they both contribute to total braking force. In a rear wheel drive vehicle, anti-squat is a factor of the rear axle geometry only.

## Mathematically Speaking

Now we’ll drive this home with a worked example and a little maths.

Defining a vehicle under the following conditions.

| Parameter | Value | Units |
| :---: | :---: | :---: |
| Mass | 1000 | kg |
| CoM Height | 0.4 | m |
| Deceleration | 10 | m/s² |
| Braking Force | 10000 | N |
| Brake Balance | 65 | % front |

*Table 1: Our example car's key parameters*

![Figure 4: Forces and moments acting on a vehicle during braking with anti-dive geometry illustrated](https://static.wixstatic.com/media/67d9bf_e8eac0d59b24446f80763f14155802bb~mv2.jpg)

*Figure 4: Detail of the forces and moments occuring around the vehicle during braking with anti-dive geometry. (Wavey Dynamics)*

**Step 1 - 0% Anti:**

We need to understand the pitching moment with 0% anti. This is dictated by the total braking force multiplied by the height of the CoM from the ground plane.

$$N_B = F_B \times h$$

So with our vehicle generating a braking force of 10kN, the pitching moment around the CoM equates to 4000Nm.

**Step 2 - Defining Targets: **

We must define our anti targets. In this case we’ll specify an arbitrary value of 50% which means we must generate an opposing moment (NO) around the CoM of 2000Nm. In a practical sense this will be dictated by conversation between the aerodynamic team and the vehicle dynamics team to capture and balance all the requirements of the vehicle. 

With the brake balance % defined above we have a contribution of 6500N from the front axle (FBFX) and 3500N at the rear (FBRX).

This produces the following maths:

$$
\begin{aligned}
N_O &= N_{OF} + N_{OR} \\
    &= F_{BFZ} \times r_F \sin\theta + F_{BRZ} \times r_R \sin\phi \qquad (Eqn.\ 1)
\end{aligned}
$$

Again, we are free to define the angles theta and phi with our geometry, so for demonstration purposes, let’s go with theta (θ) = 30[°](https://www.degreesymbol.net/) and phi (ϕ) = 30[°](https://www.degreesymbol.net/)

From the wisdom of Pythagoras, we can then calculate the vertical component of this force with a little trigonometry.

If: 

$$\tan(\theta) = \dfrac{F_{BFZ}}{F_{BFX}}$$

Then:

$$
\begin{aligned}
F_{BFZ} &= F_{BFX} \tan\theta \\
        &= -6500 \tan(30) = -3753 \text{ N}
\end{aligned}
$$

And likewise for the rear axle:

$$
\begin{aligned}
F_{BRZ} &= F_{BRX} \tan\phi \\
        &= -3500 \tan(-30) = 2021 \text{ N}
\end{aligned}
$$

NOTE: Pay attention to signs, in SAE convention, a vertical force towards the ground plane is positive.

**Step 3 - Finding Your Centres:**

Rearranging Eqn. 1, we can now find the moment arms required from pitch centre placement to generate this opposing moment.

$$r_F = \dfrac{N_{O-F}}{F_{BFZ} \sin\theta}$$

and: 

$$r_R = \dfrac{N_{O-R}}{F_{BRZ} \sin\phi}$$

Given that we know the total opposing moment required, we need to define a sensible contribution to this total moment from each of the axles.

Anti-squat requirements will dictate the location of the rear pitch centre and therefore automatically define the moment contribution remaining from the front axle, but for this case we’ll arbitrarily define that the front axle will contribute 1200Nm and the rear axle will contribute 800Nm.

Therefore:

$$r_F = \dfrac{1200}{3753 \sin(30)} = -0.64 \text{ m}$$

and

$$r_R = \dfrac{800}{2021 \sin(30)} = 0.79 \text{ m}$$

With some CAD (or the Cosine rule), it’s then an easy case of defining the radius of the pitch centre from the contact patch to place it appropriately relative to the CoM.

The basic relationship to be aware of is that the greater the angle of the normal line (shown in dashed red in Figure 4) relative to the ground plane, the larger the magnitude of the vertical force component, and the larger the radius of the pitch centre from the CoM, the greater the moment arm of the vertical force.

## Anti-Social Behaviour

You may then ask why we don’t set the anti-geometry to completely oppose the pitching moment and maintain a level chassis in all conditions, but we don’t - for good reason.

You may be familiar with the concept of jacking in the context of roll centre placements - the pitch centres are no different.

 We’ve discussed the generation of opposing moments so far, but the vertical force component will also lift the chassis - if we’re concerned with maintaining the orientation of the aero platform with respect to pitching movements, we’re equally concerned with it’s effect of increasing the ride height.

In GT chassis platforms, a typical anti-dive magnitude would fall at around 30%.

![Figure 5: Mercedes AMG GT3 front axle showing pronounced anti-geometry control arm inclination](https://static.wixstatic.com/media/67d9bf_9156251c44564c358e9cc96acbe962f2~mv2.jpg)

*Figure 5: The fairly striking geometry which inspired this article - as seen on front axle of the Mercedes AMG GT3. (Buggyra x MFT Racing)*

As well as the static impacts to the racecar, anti-geometry also introduces certain dynamic compromises to performance. 

With no anti-geometry present, all of the pitching moment is reacted by the springs. The presence of anti-geometry shifts a proportion of this reaction to the very stiff suspension members and thus, the softest component in this chain becomes the tyre.

In sharp braking applications; in the braking zone for example, this sudden loading of the tyre in this transient period can introduce an oscillation in the unsprung mass. In this moment, the average contact patch pressures are reduced and the result can be a ‘peaky’ feeling in the tyre.

Outside of braking applications, another effect of this kind of geometry is that the inertia of the sprung mass is introduced into the response of the wheel to road disturbances, the effect is similar to the former example and the capacity of the tyre to generate grip is reduced.

Its presence also introduces some longitudinal movement to the wheel travel in bump and rebound. This isn’t necessarily so detrimental, but it does introduce some dynamic variation in wheelbase and affects the suspension geometry under these conditions as the caster angle changes parameters such as the mechanical trail.

Efforts to decouple the pitch body mode from the heave mode would be useful in lessening the requirement for anti-geometry - the Porsche 919 FRIC system did this to a certain extent using hydraulic circuits to link front and rear axles, although this approach is only useful in transient situations.

Either way, as far as i’m aware no motorsport series allows this technology.

![Figure 6: Porsche 919 LMP1 with FRIC suspension system used to decouple pitch and heave body modes](https://static.wixstatic.com/media/67d9bf_38a9aa5fa6bd41d9a892d7938f57a657~mv2.jpeg)

*Figure 6: The Porsche 919 LMP1 platform used FRIC suspension to decouple the pitch mode from heave (Porsche Motorsport)*

## In Action

Anti-geometry is a parameter which can be varied over a race weekend by designing the chassis/gearbox with a range of fastening locations for the control arm pickups, or by designing a range of pickups covering a window of anti-settings.

Whether you find yourself trying to find the right setup trackside or defining the geometry in the design phase, now you know the maths!

The theory covered is an application of classical mechanics which also finds use in many engineering industries - especially relevant in motorbike suspension and the field of robotics where it can be applied to understand forces and moments around robotic arms. Can you think of any others?

I hope you found this useful. We cover anti-geometry, roll centres and much more in the Kinematics section of our ['Fundamentals of Vehicle Dynamics'](https://www.waveydynamics.com/vdfundamentals) course, so give us a message if you'd like to hear more about it.

Be inspired!

---

## About Wavey Dynamics:

Wavey Dynamics is a specialist automotive and motorsport engineering consultancy, 

Utilising exceptional innovation alongside modern instrumentation, data analysis and simulation tools, we help to drive a blend between a deep understanding of technology and clear performance outcomes.

We’re favourably placed to offer the following services:

- Vehicle dynamics development

- Aerodynamics development

- Performance & race engineering (Trackside)

- Engineering design

Contact us to discuss your projects.

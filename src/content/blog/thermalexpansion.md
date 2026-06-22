---
title: "Brake Disc Technologies; A Performance Comparison"
slug: "thermalexpansion"
excerpt: "There are 3 prominent brake rotor technologies used in modern vehicles. Some are more suitable to track use than others, let's explore why."
date: "2020-04-23T20:56:31.078Z"
updated: "2020-05-11T13:19:57.539Z"
originalUrl: "https://www.waveydynamics.com/post/thermalexpansion"
coverImage: "/images/blog/thermalexpansion.jpg"
seoTitle: "Brake Disc Technologies: Solid, 2-Piece & Floating"
seoDescription: "A CAE comparison of solid, 2-piece and floating brake disc technologies — analysing weight, thermal management, deformation and track suitability."
categories: ['Tech Bites']
---

# Brake Disc Technologies; A Performance Comparison

## Introduction

Within the automotive world there are various means from which to deliver braking force to a moving vehicle; friction braking, aero braking and regenerative braking being the most commonplace in modern times. Friction braking is the most widely used and all friction braking technologies follow the same method of action; which is, to transfer the kinetic energy possessed by the vehicle into thermal (heat) energy through the action of friction. The distinction however is the very different means through which this is achieved, and that is the basis of this article.

Our scope here is focused on 3 common disc brake technologies utilising a Cast Iron friction surface as opposed to a Carbon compound as used by some high-end performance cars and motorsport. The aim is to provide a sound understanding to the reader of characteristics and features of each technology and enable an informed choice to be made on which is ‘best’, based on their intended application.

Starting with an introduction on the common technologies used:

## Common Brake Disc Technologies

In order of increasing complexity, the three technologies below are the most commonly used in performance cars:

### Solid Disc (1-Piece)

![CAD model of a solid one-piece cast iron brake disc](https://static.wixstatic.com/media/67d9bf_9b04b1b9534a4d95a24162ba3b742e73~mv2.jpeg)

In this simple technology, the friction surface or rotor is formed out of the same continuous piece of Cast Iron as the mounting material known as the ‘mounting bell’. This is very easy and cheap to manufacture and provides all the basic features necessary for the job it is tasked to do. 

This technology generally is only seen in non-performance orientated cars, such as this BMW

![BMW with a solid one-piece brake disc installed on the wheel](https://static.wixstatic.com/media/67d9bf_585a18cad8c24dc1b024f1186ab53e1b~mv2.jpeg)

**Figure 1: BMW with a solid rotor**

### 2-Piece Disc

![CAD model of a 2-piece brake disc with aluminium mounting bell and cast iron rotor](https://static.wixstatic.com/media/67d9bf_38af110647664beba2cce91584fe3305~mv2.jpeg)

This time, the friction surface is again Cast Iron, however instead of having the friction surface and mounting bell formed from the same piece of continuous material, the mounting bell is provided by a separate part, usually being made of Aluminium. The rotor is attached to the mounting bell via fasteners - nuts and bolts.

The main advantage here being reduced weight - the thick, heavy Iron section is now replaced with a lighter Aluminium piece, it is also possible to swap an old rotor for a new one at end of life, preserving the bell and reducing costs/wastage.

![Track-focused BMW M3 fitted with a more aggressive 2-piece brake disc setup](https://static.wixstatic.com/media/67d9bf_6236b8b16bca45d5bde6721647637cd1~mv2.jpeg)

**Figure 2: More aggressive 2-piece disc setup on this track focused BMW M3**

### Floating Disc

Lastly we arrive at the floating disc

![CAD model illustrating the floating brake disc concept with bobbins connecting rotor to mounting bell](https://static.wixstatic.com/media/67d9bf_5df859f46f1745df810904c61c38177a~mv2.jpeg)

**Figure 3: The floating brake rotor concept**

To fully explain the term floating, it is necessary to understand the changes a brake disc assembly undergoes in use.

There is such a large amount of energy transfer from kinetic energy to thermal energy when heavy and repeated braking applications are performed (e.g. on a race track) that temperatures at the friction surface can reach well into the hundreds of degrees Celsius, with 700+° C being common in motorsport.

This thermal energy input causes the materials to undergo thermal expansion - this is nothing surprising, however when braking performance is directly linked to the surface area of contact between brake pad and brake rotor, this expansion becomes a necessary phenomenon to understand. 

![Brake rotor glowing red hot from extreme temperatures generated during repeated heavy braking](https://static.wixstatic.com/media/67d9bf_5d5c5967067640ed8ddd3ce877047266~mv2.jpeg)

**Figure 4: Brake rotor temperatures can become high enough to ignite pads and boil fluid.**

If, during this expansion a distortion is induced in the rotor with technologies described thus far, it can have a very noticeable effect on the rate of energy transfer the braking system has capacity for as the frictional surfaces lose optimal contact with each other. 

Furthermore, with the introduction of the 2-piece disc using a combination of iron and aluminium, the differing rates of thermal expansion of the two materials introduce a new variable - this must be understood to arrive at a suitable design solution. The floating disc is a response to this phenomenon and is achieved by implementing some interesting hardware between the rotor and mounting bell. 

![Close-up of floating disc bobbins constraining the rotor to the bell while allowing relative thermal expansion movement](https://static.wixstatic.com/media/67d9bf_422c0f236948411a8ad2e5426f9c6c90~mv2.jpeg)

**Figure 5: a typical bobbin design on a floating disc. The bobbin is bolted to the rotor, however there is no fixed attachment to the bell; it is constrained by the bobbin design and contact surfaces are free to move or ‘float’ relative to each other.**

Each manufacturer has their own method of achieving this, but ultimately the method of action is the same - to isolate the rotor from the differing thermal expansion rate of the mounting bell and maintain maximum contact area of friction surfaces. This means some relative movement between the two parts is required.

All the above technologies, provide the vehicle with the same frictional area for the transfer of energies and ultimately all do the same job, on paper at least - the nuances suddenly become interesting when you are in an application which is both weight critical and performance critical, with the latter being inextricably linked with the product of this energy transfer - heat. As the technology is explored further, it becomes clear that there are further variables to be considered in the equation of what amounts to a high performance brake disc.

So - this leads to the question “What technology is best and why?” - to further clarify on what we might mean by “best” in this context, the following characteristics might be considered and scored,

| Characteristic | Solid Disc (1-Piece) | 2-Piece Disc | Floating Disc |
|:---:|:---:|:---:|:---:|
| Weight | Highest | Lowest | Low |
| Complexity | Lowest | Low | Highest |
| Thermal Management | Low | Lowest | Highest |
| Cost | Lowest | High | Highest |
| Service Life | Highest | Low | Lowest |

**Table 1: Characteristics of each configuration**

In the remainder of this article we will be focusing on quantifying the performance related questions: which tech has the lightest weight and which has the most optimal thermal management properties?

## Method

In order to answer the working question, CAD and CAE will be used. The first step here is to prepare 3D models for each of the three variants. A control model was also designed simply featuring the brake rotor alone. This control rotor allowed the material to expand in free space with no interaction from any mounting bell, it indicates what the natural behaviour of the part would be and becomes the reference.

The geometry of the rotor and frictional surface area was chosen to represent a typical high performance sized disc, running at 365mm diameter, a frictional radius of 80mm and 34mm thickness - while the sizing is arbitrary, it will allow a good basis for comparison and the trends observed will apply to all sizes.

![Four CAD brake disc models in clockwise order: control disc, solid disc, 2-piece disc, and floating disc](https://static.wixstatic.com/media/67d9bf_d26a70c9afb74fb694ecb8e03aec7cce~mv2.jpeg)

**Figure 6: Pictured in clockwise orientation are the 4 working models; Control Disc, Solid Disc, 2-Piece Disc and the Floating Disc.**

The first and easiest task is to obtain weights. This will be done through the software and tabulated.

In order to quantify and answer the crucial question on heat management, an analysis of the thermal expansion of the system must be performed, this can again be done using the CAE software. A set of boundary conditions must be established in order to do this and are laid out as follows:

| Parameter | Value |
|:---:|:---:|
| Rotor Material | Cast Iron |
| Bell Material | Aluminium Alloy |
| Initial (Zero Strain) Temperature | 20° C |
| Final Temperature | 500° C |
| Constraints | Fixed in X, Y, Z at wheel studs; radial expansion allowed on front and rear bell faces; no axial expansion allowed |

**Table 2: Simulation boundary conditions**

This was kept consistent in each simulation to allow fair comparison of results. The working temperature of 500° C was chosen as an estimate of average temperature for most non-professional drivers at a trackday/ fast road driving setting. As mentioned, professional motorsport can reach temperatures way in excess of this.

## Results & Discussion

### Weights

As summed by the software from the material volume defined by the geometry and density of the applied material, the weights from the three models are found to be the following

| Technology | Weight (kg) |
|:---:|:---:|
| Solid Disc (1-Piece) | 11.500 |
| 2-Piece | 10.682 |
| Floating | 10.688 |

The 2-Piece configuration is the lightest by just a few grams due to the reduction in volume of Cast Iron used and it’s replacement with Aluminium. The Floating disc follows extremely closely - in this case the material removed from the Aluminium mounting bell is offset by the addition of steel bobbins. The heaviest configuration is the Solid Disc, weighing just over 7% more than the 2-Piece disc. This follows expectations.

### Thermal Management

### Control Disc

Starting with the control disc, the simulation was run to understand the free standing expansion. As expected the expansion mode of this simulation showed an isotropic character; with no hard fixing points, the material was free to expand uniformly and measurements of displacement reflected the hypothesis.

![FEA deformation plot of the control disc at 100x scale showing uniform isotropic thermal expansion](https://static.wixstatic.com/media/67d9bf_44629b601af243e2b0f38a7a232995de~mv2.jpeg)

**Figure 7: Isometric and side view of the control disc deformation shown at a scale of x100. **

Isotropic expansion is shown

### Solid Disc

Moving on to the Solid disc configuration, simulation was run once again. The resulting deformation plot shows the disc experiencing thermal expansion largely without distortion of the initial shape - as the disc here is one piece of continuous metal, the process of thermal expansion is again isotopic; this is positive behaviour and will allow the frictional surfaces to remain parallel - ensuring maximum contact with the brake pad as temperatures increase. 

![FEA deformation plot of the solid one-piece disc at 100x scale showing isotropic thermal expansion](https://static.wixstatic.com/media/67d9bf_dffc8309e2ba46d1884c0d3deef48b22~mv2.jpeg)

**Figure 8: Isometric and side view of the 1-Piece disc deformation shown at a scale of x100. **

Isotropic expansion is shown again.

### 2-Piece

The 2-Piece configuration is where things started to become interesting - Starting with a hypothesis that the differing expansion rates of the Iron and Aluminium (with the latter showing greater expansion per unit temperature increase) would introduce distortion into the rotor as the materials ‘fought’ each other, the simulation was again performed - The results confirmed this hypothesis and while not extreme in terms of absolute displacements, some pronounced distortion and anisotropic behaviour was seen.

![FEA deformation plot of the 2-piece disc at 100x scale showing anisotropic expansion and conical rotor distortion](https://static.wixstatic.com/media/67d9bf_07922665a020445082d902c7dc3a66c7~mv2.jpeg)

**Figure 9: Isometric and side view of the 2-Piece disc deformation shown at a scale of x100. **

Anisotropic expansion is shown and a conical profile is observed in the rotor in the side view.

The rotor, expanding less than the mounting bell, was forced to conform to a conical shape. In real terms the effect was fairly small at the simulation temperature however the effect is still there and may indicate that the brake pads no longer sit perfectly parallel to the rotor.

What this means is the now smaller surface area is expected to deliver the same braking torque as the parallel condition by the driver; increased brake pressure will be required which means greater heating of the remaining friction surface in contact. This may manifest itself as pad breakdown, irregular wear of both pad and rotor and localised high temperatures - ultimately sub-optimal performance; which is clearly to be avoided if possible.

### Floating

Lastly the floating configuration was simulated. The hypothesis here being that the bobbins allowing for relative movement between the rotor and bell will eliminate/ reduce the distortion observed with the 2-Piece system.

Results confirmed this - the bell was allowed to expand with greater freedom than the simple bolted system of the 2-Piece disc. There will of course be friction between the bobbins and the bell but this is not significant relative to the huge forces generated in thermal expansion.

![FEA deformation plot of the floating disc at 100x scale showing reduced anisotropic expansion versus the 2-piece configuration](https://static.wixstatic.com/media/67d9bf_8e0a6e27b6554934a502e865e5af2e37~mv2.jpeg)

**Figure 10: Isometric and side view of the floating disc deformation shown at a scale of x100. **

Anisotropic expansion is shown and a conical profile is observed in the rotor in the side view, although less severe than the 2-Piece configuration.

There is still however some distortion seen in the deformation plot and again, a slight conical shape observed. This is thought to be attributed to the asymmetrical geometry of the bell in this case, which was optimised for weight.

![Profile of the floating disc mounting bell geometry showing its asymmetric form that contributes to non-uniform thermal expansion](https://static.wixstatic.com/media/67d9bf_81e38017a74346e3a408cf3e1e220157~mv2.jpeg)

**Figure 11: Profile of rotor bell - clearly it's conducive to non-uniform expansion**

As this bell geometry expands, it will tend to follow a conical deformation mode which will of course affect the expansion of the rotor as the bobbins follow the path dictated by the bell material. Further study and optimisation of the bell geometry is expected to mitigate this effect.

Below you see the results of the study collated into a table. 

| Parameter | Control Disc | Solid Disc | 2-Piece Disc | Floating Disc |
|:---:|:---:|:---:|:---:|:---:|
| Overall Diameter Expansion (radial, mm) | 0.4564 | 0.4284 | 0.5625 | 0.4646 |
| Overall Width Expansion (axial, mm) | 0.1063 | 0.1096 | 0.0969 | 0.0913 |
| Outside Edge Distortion (axial, mm) | 0.00283 | 0.0077 | 0.1350 | 0.0726 |
| Friction Face Angle from Parallel (°) | 0.0020 | 0.0055 | 0.0961 | 0.052 |
| Deformation Mode | Isotropic | Isotropic | Anisotropic | Anisotropic |

**Table 4: Results of each of the simulations collated into a table.**

This gives a picture of the magnitude of displacements which are all well below the 1mm mark in both diameter and width expansion. The most insightful parameter relating to this article is the outside edge distortion which indicates the magnitude of the tendency for the disc to ‘cone’ and therefore gives understanding into the movement of the friction surfaces away from parallel condition, this is recorded in the friction face angle row - the solid disc performs best here, followed by the floating configuration.

## Conclusion

We have discussed in theory the importance of maintaining optimal contact area between disc and pad, however in practice the actual performance impact of a <0.1° angle from parallel between rotor and pad is negligible in all but the most competitive of racing situations. 

Perhaps of note is that Carbon composite discs are only seen in the floating configuration - this can be hypothesised as being mandatory due to the inherent brittle nature of the Carbon rotors, it will not distort as Iron does, it would simply crack.

Not discussed in this article however is the heat capacity and other heat transfer differences within the disc technologies - wheel bearings and various sensors and hardware mounted on the wheel hub/upright are sensitive to excess heat; a higher heat capacity and thermal mass mean the disc takes longer to cool between applications, radiated heat into the calliper and thus brake fluid can also become a concern with the solid configuration, which is by far the worst performing in this respect. Perhaps this will be a topic for exploration in a separate article.

A limitation of this simulation is that it assumes a uniform temperature throughout the whole disc, in a real scenario this of course would not always be the case and would produce a different deformation mode - the effects of this are unknown and would need further study to clarify.

To conclude then - it seems there is a clear winner in terms of both weight and thermal management out of the three technologies - the floating disc. The slightly sub-optimal distortion mode is balanced by the fairly sizeable weight saving, reduced thermal mass and reduction in conducted and radiated heat into sensitive components and fluids. The solid disc configuration is perhaps a ‘safe’ option if repeated heavy braking is not likely to be experienced.

Hope you enjoyed reading, keep tuned for further articles and please contact us as per below for further info or if you have any questions.

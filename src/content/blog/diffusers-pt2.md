---
title: "Understanding Diffusers | Pt. 2"
slug: "diffusers-pt2"
excerpt: "Following on from Part 1. The next article looks at the effect of ride height and the presence of strakes into diffuser performance."
date: "2021-03-18T15:37:36.413Z"
updated: "2021-05-14T14:23:18.904Z"
originalUrl: "https://www.waveydynamics.com/post/diffusers-pt2"
coverImage: "/images/blog/diffusers-pt2.png"
seoTitle: "Diffuser Aerodynamics Pt.2: Ride Height & Strakes"
seoDescription: "Part 2 of our diffuser CFD study — investigating how ride height sensitivity and strakes affect underbody aerodynamic performance."
categories: ['Aerodynamics']
---

# Understanding Diffusers | Pt. 2

Welcome to the second instalment of the two part article on understanding underbody diffuser flow. 

Part 1 of the study aimed to provide a clear understanding of the fundamentals of diffuser flow and identify the biggest influences and sensitivities into performance. In part 2, the second part of the experiment will be covered which focused on some practicalities relevant to real world performance.

Broken down into two main objectives, part 2 will cover:

1. The influence of external and dynamic factors such as ride height and their effect on diffuser performance.

2. The effect of strakes/ fences on performance, including their influence at different yaw angles.

![Toyota GR010 Hybrid LMP1 race car showing underfloor and diffuser design](https://static.wixstatic.com/media/67d9bf_0f283b94ed4549be9182deca738be8a5~mv2.png)

*[Credit: Toyota Gazoo Racing]*

## 

## **Ride Height**

## 

In Part 1, the studies were all made at a base ride height of 75mm, or h/L of 15%.

To recap, the CL (lift coefficient) in this condition was 0.876 and CD (drag coefficient) was 0.131, giving a -L/D of 6.67

I already had an understanding that changing the ride height will affect diffuser performance by influencing flow in two ways:

1. It changes the area ratio between the inlet and outlet of the diffuser section.

2. It changes the mass flow of air through the diffuser.

This is important because in a real application the ride height of the race car is constantly changing as the chassis moves in heave over bumps and with aerodynamic load. 

The changes in downforce that result with differing ride heights are a big one to understand as they have direct influence into the aeromap.

My experience gives me the feeling that there will be a ‘sweetspot' of ride heights which provide the best combination of mass flow and expansion, so I wanted to back that up with data.

Running in increments of 12.5mm, i performed a ride height sweep to generate a few data points above and below base ride height to create a map of performance.

| Base Model @ 16° | $C_L$ | $C_D$ | L/D |
|:---:|:---:|:---:|:---:|
| −37.5 mm | 0.730 | 0.106 | 6.88 |
| −25 mm | 0.856 | 0.131 | 6.53 |
| −12.5 mm | 0.871 | 0.132 | 6.60 |
| Base [75 mm] | 0.876 | 0.131 | 6.67 |
| +12.5 mm | 0.831 | 0.123 | 6.77 |
| +25 mm | 0.807 | 0.119 | 6.76 |

*Table 1: Diffuser performance at different ride heights.*

As a coincidence, the original 75mm ride height (which is an area ratio of approx. 3), was the point at which most downforce was produced, but what’s happening to the flow at ride heights above and below that to impact performance?

In ride height simulations down to -25mm ride height, the downforce is relatively stable and tails off only slightly, losing just over 2% (20 counts). 

Somewhere in between -25 and -37.5mm though, the flow through the diffuser completely breaks down as it is ‘choked’, falling a whole 16%, or 146 counts. 

*1 count amounts to a change in CL or CD  of 0.001

![Figure 1: CFD streamlines showing collapsed vortices and expanded separation bubble in the diffuser at -37.5mm ride height](https://static.wixstatic.com/media/67d9bf_f736a39aa6db444d83303a4dd6c1837b~mv2.png)

*Figure 1: Streamlines showing vortices and the separated region in the diffuser in -37.5mm ride height condition.*

![Figure 2: CFD surface flow vectors and pressure contour showing stalled diffuser flow at -37.5mm ride height](https://static.wixstatic.com/media/67d9bf_2399982a0d0e432c872e5a2c3123efb8~mv2.png)

*Figure 2: Surface flow vectors and pressure contour in the diffuser in -37.5mm ride height condition.*

It's quite a step change from the -25 to -37.5mm condition as you can see from the pressure contours. Remembering that lower pressure = more extraction and higher downforce, you can visualise the differences between the two.

There are two main observations of the flow in this condition:

1. The proximity of the vortices to the ground plane seems to stifle them - they form with less intensity and burst/collapse much sooner. This diminishes their effect in managing separation on adjacent surfaces, as we discovered in Part 1. 

 In this condition, the separation bubble is almost the entire width of the diffuser. 

2. The significantly larger size of the separated region has enough volume to interact with the ground plane. As the void created by this phenomenon must be filled, a huge amount of ambient air is rushing rearwards from the trialling edge. 

 Upstream flow is impeded in this condition as a back pressure is generated. 

At least on this relatively short, 500mm long diffuser section, the expansion gradient caused by area ratios > 4 proves a little too violent. A longer section would have behaved a little more favourably in this sense, reducing the inclination angle while maintaining the same inlet:outlet area ratio.

Interesting to note is that the diffuser is operating at its highest efficiency at the -37.5mm ride height, presumably due to the reduced underfloor mass flow and viscous drag caused by the separated flow. In this state the diffuser is ‘stalled’.

On the other side of the base condition when ride height is increased and the area ratio falls below around 3, flow attachment actually improves as the larger mass flow of air passing under the diffuser is expanded more gradually - the magnitude of the adverse pressure gradient is greatly reduced in this condition.

At 100mm ride height (a h/L of 20%), the flow is attached in the majority of the width of the diffuser section. The result however is considerably less suction, a 69 count drop, although this is accompanied by an increase in efficiency as viscous drag reduces.

![Figure 3: CFD surface flow vectors and pressure contour at increased ride height, showing greatly reduced separation region compared to the stalled condition](https://static.wixstatic.com/media/67d9bf_8657f117632548f08e6a0dd8c9a1eef5~mv2.png)

*Figure 3: Surface flow vectors and pressure contour in the diffuser in -37.5mm ride height condition. The separated region is magnitudes smaller in this configuration.*

It certainly seems there is a 'knife edge' to diffuser performance between working the flow hard enough where underfloor extraction is at its best, and stalling it. All useful information.

Here are the lift coefficients and efficiency charts at each of the simulated ride heights.

![Chart 1: Graph showing lift coefficient as a function of ride height, with peak downforce at the base 75mm ride height](https://static.wixstatic.com/media/67d9bf_ead271c948ed4fcdb1d6af4e7a4bc292~mv2.png)

*Chart 1: Lift Coefficient vs. Ride Height*

![Chart 2: Graph showing aerodynamic efficiency (L/D ratio) as a function of ride height](https://static.wixstatic.com/media/67d9bf_d11dc9c2d93046da88c7573cdfc51e85~mv2.png)

*Chart 2: Efficiency vs. Ride Height*

## **Strakes & Fences**

## 

Strakes or fences in diffuser sections are a very common sight in motorsport in almost all formulas. Their exact function though is not immediately obvious without properly studying their flow. 

![Rear view of a Lamborghini Huracán GT3 race car showing diffuser strakes and underfloor aerodynamic detailing, with a Porsche 911 GT3 in the background](https://static.wixstatic.com/media/67d9bf_cdacaddbc6954c96b8079cf7429db379~mv2.jpg)

At least in GT style diffusers like the one we are simulating for this article, there is no plan view expansion (I.e. the inlet width is identical to the outlet width) as featuring on some prototypes and open wheel formulas, which means their function to act as turning vanes to help organise the flow during the expansion isn’t the case here.

It almost seemed to me like they would be a hindrance to diffuser performance as their presence could negatively interact with vortex generation, so what was really happening?

Starting simple, I modelled some parallel strakes along the entire length of the diffuser.

![Figure 4: CAD model of the diffuser with parallel strakes running the full length of the section](https://static.wixstatic.com/media/67d9bf_d314fd6e9e6d442493f1386d5a4dd58c~mv2.png)

*Figure 4: CAD image showing the diffuser w/ strakes*

As I had expected, performance was reduced; 30 counts lost on downforce, although this did come with some benefit in the form of drag reduction, losing 8 counts of drag. This resulted in a slight increase in efficiency.

![Figure 5: CFD surface flow vectors and pressure contours showing reduced vortex intensity with diffuser strakes installed](https://static.wixstatic.com/media/67d9bf_615a1e02426244c8a0cb82d5a9f781ed~mv2.png)

*Figure 5: Surface flow vectors and pressure contours with the strakes diffuser.*

The important shoulder vortices are noticeably less intense in the strake condition. The strakes seemed to interfere and remove energy from them, which then influences attachment and expansion.

It seemed logical to consider that their benefit appeared in cases where there is crosswind or yaw angle present during cornering, so that's next to investigate. 

Repeating the flow studies with the both the base geometry and the full length strakes at 6 degrees of yaw angle produced the following insights.

![Chart 3: Diffuser lift coefficient vs yaw angle comparing the base configuration against the straked diffuser](https://static.wixstatic.com/media/67d9bf_6f54cdeadfd2406c83f074b106cf165d~mv2.png)

*Chart 3: Diffuser lift coefficient in base configuration and with strakes, demonstrating the effect of yaw angle.*

Clearly a negative effect in both cases, but interestingly the negative effect with the strake condition as larger, so they appear to make things worse!

In this ride height condition, the pressure across the width of the diffuser (Y-Axis) is higher with the strakes, which you have already seen affects the pressure of flow upstream of the diffuser. Plotting this on a graph also shows that the leading shoulder vortex forms with less intensity (@ Y = 500).

![Chart 4: Pressure distribution across diffuser width comparing base and straked configurations under 6 degrees of yaw](https://static.wixstatic.com/media/67d9bf_e5b8d45e7d8840389a8b7467745ae121~mv2.png)

*Chart 4: An overlay of the pressure plots across the width of the diffuser showing the effect of strakes under yaw conditions.*

With the same mechanism as the shoulder vortices, a smaller vortex forms on the leeward side of the inboard strake. This appears to give the boundary layer in the adjacent section more energy which recovers some of the lost pressure, but ultimately the result is a lower overall downforce.

![Figure 6: Side-by-side CFD comparison of wall shear and vortex intensity in the no-strake (left) and straked (right) diffuser at 6 degrees yaw, showing the secondary inboard vortex formed with strakes](https://static.wixstatic.com/media/67d9bf_f32c358cf263458c859b117d2333d6b4~mv2.png)

*Figure 6: Left: Wall shear and vortex intensity in the no strake condition with 6deg of yaw. Right: Wall shear and vortex intensity in the strake condition with 6deg of yaw. The secondary inboard vortex formed can be seen clearly.*

Wall shear plots are useful in showing the character of flow on aerodynamic surfaces (i.e. laminar/turbulent or attached/separated). Here, they are highlighting the interaction of the vortices with the diffuser surfaces. Plotting rotational flow and intensity shows the formation and strength of the vortices.

Flow at yaw angles has only been analysed at one ride height here, it may be reasonable to assume that behaviour might differ at other design points, but i won’t go there today. At this point, I have enough trust in the results to give me confidence that the main purpose of diffuser strakes is ultimately to do with 'tyre squirt’.

This very much simplified model delivered perfectly laminar air to the diffuser section, which wouldn’t be true in a real world scenario - upstream of the diffuser can be exposed parts of the chassis and drivetrain, suspension components and tyre wakes.

As diffusers run adjacent to the rear wheels in a real scenario, they are especially susceptible to the high pressure jet of air that shoots laterally from the front of the tyre contact patch towards the centreline of the chassis. 

This jet would certainly disturb the flow through the diffuser and degrade it's performance. Any features to control this incoming air such as these strakes, would go a ways to mitigate that effect.

I haven’t modelled that in this study as it’s such an application specific issue, but in the development of a diffuser for a specific application, modelling the cases of tyre squirt would be essential.

## **‘Best of’**

## 

To finish this piece of work, I wanted to pull all of our improvements together into one final ‘best of’ model to see how far the concept had developed its performance when compared to the initial, base geometry we started Part 1 off with. 

It would also be a good opportunity to demonstrate understandings gained as the sensitivity study progressed, and a bit of fun!

![3D CAD model of the 'best of' diffuser geometry incorporating parabolic leading edge, rounded trailing edge and shoulder fillets](https://static.wixstatic.com/media/67d9bf_0ac37a7b4ba74282aaecdc82ee1c2076~mv2.png)

*The 'Best of' geometry incorporating all the positive improvements made throughout the study*

The champion diffuser section featuring the parabolic leading edge, a rounded trailing edge and the shoulder fillets moved the performance up 124 counts in downforce to a lift coefficient of 1.000, and an increase in drag of 8 counts to a drag coefficient of 0.140. Bringing an increase in efficiency to L/D of 7.17, a 7% improvement.

| Model | L/D | $C_L$ | $C_D$ |
|:---:|:---:|:---:|:---:|
| Base Model [Ref] | −6.67 | 0.876 | 0.131 |
| 'Best of' Geometry | −7.17 | 1.000 | 0.140 |
| **Δ** | **+0.491** | **+0.124** | **+0.008** |

*Table 2: 'Best of' diffuser geometry collating all the improvements made from the base geometry throughout this article.*

## **Concluding**

The data consistently showed me that maximising the extraction power of the diffuser through flowing a large mass of air and maintaining just the right (adverse) pressure gradient to work the air maximally and extract as much energy as possible from the flow provided the best results.

By far, the treatment of the leading edge of the diffuser section was the most important aspect of its geometry, followed by the trailing edge treatment. These are logical findings.

Understanding the effect of ride height on performance was a particularly interesting part of this sensitivity study and is where I learned the most as I initially knew less about those interactions and the way in which flow breaks down at low ride heights.

It’s important to state that the experimental setup was relatively simplified and perhaps limited in the data it produced, so if you’re using the data in your designs, be careful not to take it literally and rather use it to observe the trends displayed and guide you, as I did.

The biggest flaw in the sensitivity study/ Design of Experiment was that tyre squirt wasn’t modelled, but as mentioned that falls outside the scope of this article somewhat. 

The intent of this study was to provide some guidance and framework to allow me to be efficient in the main project which to develop a diffuser for a specific application, which was accomplished, the finer details will be saved for that process.

Hope you enjoyed!

Be inspired.

---

Need some aerodynamics work for your project? Get in touch! 

[Contact Us](/contact) 

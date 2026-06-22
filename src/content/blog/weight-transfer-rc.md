---
title: "Geometric & Elastic Weight Transfer and the Roll Centre"
slug: "weight-transfer-rc"
excerpt: "Weight transfer has two essential components. Here's an overview of each and some exploration of how to use this knowledge at the track."
date: "2021-05-14T14:06:04.275Z"
updated: "2021-06-10T10:13:00.212Z"
originalUrl: "https://www.waveydynamics.com/post/weight-transfer-rc"
coverImage: "/images/blog/weight-transfer-rc.jpg"
seoTitle: "Geometric & Elastic Weight Transfer Explained"
seoDescription: "Understanding the two components of lateral weight transfer — geometric (via the roll centre) and elastic (via springs) — and how each affects race car setup."
categories: ['Vehicle Dynamics']
---

# Geometric & Elastic Weight Transfer and the Roll Centre

Spending some time focusing on suspension design and kinematics recently, i was playing around with the concepts of geometric and elastic weight transfer (alternatively 'load transfer') and the relationship with the total transfer experienced under lateral accelerations.

Weight transfer is something i’ve touched on in a few articles in the past, mainly as it’s such an important concept to understand in the concept of race car vehicle dynamics.

Today, we’re going to focus on _sprung_ mass weight transfer initiated by lateral chassis accelerations. 

The total quantity of lateral weight transfer itself is proportional to the height of the Centre of Mass (CoM) from the tyre contact patches, the width of the track on each axle and the magnitude of lateral acceleration experienced. 

This is a hard fact. No amount of spring stiffness can overcome that.

So let's look at the mathematics; total lateral weight transfer under cornering conditions is given by:

![Formula for total lateral weight transfer: ΔW = m·aY·h/t](https://static.wixstatic.com/media/67d9bf_cc0acd9d5f4d43538db1e0e259a5e150~mv2.jpg)

Where

- $\Delta W$ = Load transfer (N)
- $m$ = Vehicle mass (kg)
- $a_Y$ = Lateral acceleration (m/s²)
- $h$ = Height from track surface (m)
- $t$ = Track width (m)

As vehicle dynamicists, our desire to minimise weight transfer is tied to the concept of tyre load sensitivity and the negative effect on lateral acceleration that results from weight transfer.

Essentially, what you need to know about tyre load sensitivity is that the CoF of a tyre is inversely proportional to vertical load. Vertical load goes up, CoF goes down. This is the basis of why we aim to keep weight transfer as low as possible.

![Tyre load sensitivity chart showing the non-linear relationship between lateral force and vertical load with delayed slip angle peaks](https://static.wixstatic.com/media/67d9bf_5408b533cf504793892ffca7900b0d03~mv2.jpg)

*Chart 1: Tyre load sensitivity plot showing the non-linear increase of lateral force with increasing load and the delayed slip angle peaks. [Credit: http://racingcardynamics.com/racing-tires-lateral-force]*

You can read further as to why that is the case in the article [**here**](/blog/weight-transfer), where i demonstrate how a lateral weight transfer of 75% on a hypothetical race car results in a loss of 10% of its grip relative to an imaginary scenario where there is no weight transfer. 

As mentioned, total lateral weight transfer of the sprung mass is defined ultimately by the CoM height, but what’s less known is that this weight transfer is the sum of two components:

- Geometric weight transfer

- Elastic weight transfer

There is of course a weight transfer experienced by the unsprung mass, but in this article I’m focusing on the sprung mass as it’s the only element of weight transfer on the race car in our practical control.

![Racing car under lateral acceleration illustrating the relationship between cornering and weight transfer](https://static.wixstatic.com/media/67d9bf_19b7cb44ead64b4dab5a3694bb9d5a71~mv2.jpg)

*Weight transfer and lateral acceleration go hand in hand.*

So, if

$$\Delta W_{\text{TOTAL}} = \Delta W_{\text{GEOMETRIC}} + \Delta W_{\text{ELASTIC}}$$

Let’s begin by understanding the definitions.

**Geometric weight transfer** is most simply understood as the load transfer resulting from the moment arm  between lateral forces at the _contact patch_ and the effective application point of these forces to the chassis by the suspension members, which is the _roll centre._

![Suspension diagram showing roll centre position and the moment arm generating geometric weight transfer](https://static.wixstatic.com/media/67d9bf_818d124df662454e9d2c69769e239d09~mv2.jpg)

If the application point of these forces into the chassis is coincident with the CoM, which is the considered the point at which inertial forces are applied into the chassis, then weight transfer is purely geometric. This is an important point which i’ll explore further shortly.

Mathematically, this is represented as follows:

$$\Delta W_{\text{GEOMETRIC}} = \dfrac{m \cdot a_Y \cdot h_{RC}}{t}$$

To complete the picture - with pure geometric weight transfer there is no suspension deflection; the weight transfer is reacted directly at the tyres.

**Elastic weight transfer **on the other hand, is defined by the magnitude of the moment arm between the _CoM_ and the _roll centre_. It is effectively the capacity of the lateral acceleration to generate a rolling moment/ rolling torque around the CoM. 

![Diagram showing the roll moment arm between centre of mass and roll centre responsible for elastic weight transfer](https://static.wixstatic.com/media/67d9bf_cc2eb666fc994dc0b36f8533845da8cd~mv2.jpg)

As equilibrium of all forces must be achieved in steady-state cornering, the _roll moment_ must be reacted by the _roll stiffness_ of the chassis. Elastic weight transfer is therefore directly proportional to the roll stiffness produced by the ride springs & anti-roll bar (Nm/radian) and can be calculated from spring deflection.

Equilibrium is described as follows, where the roll moment and roll stiffness sum to a net zero torque about the CoM.

$$0 = K_\theta \cdot \theta - m \cdot a_Y \cdot (h_{CoM} - h_{RC})$$

Where

- $K_\theta = K_{\theta,F} + K_{\theta,R}$ = Total roll stiffness (Nm/rad)
- $\theta$ = Roll angle (rad)

Therefore, elastic weight transfer is expressed mathematically as:

$$
\begin{aligned}
\Delta W_{\text{ELASTIC}} &= \dfrac{M_\theta}{t} = \dfrac{m \cdot a_Y \cdot (h_{CoM} - h_{RC})}{t} \\[6pt]
&= \dfrac{K_\theta \cdot \theta}{t}
\end{aligned}
$$

To explore further, here are a few hypothetical scenarios and an analysis of the weight transfer that results.

## hRC = hCOM

When the roll centre is at equal height to the CoM, there is no chassis roll moment generated and therefore no body roll. 

In this condition lateral weight transfer is solely geometric, so while there’s no roll, you still expect to experience weight transfer. That should be clarified again. There’s no cheat code with vehicle dynamics.

While the low roll stiffness requirement in this condition sounds attractive as it allows the suspension to be very compliant to the road surface, producing a very low variation in contact patch pressure, there is a fairly significant catch.

Suspension members are loaded in compression and tension only, so as the roll centre increases in height from the ground level, the vertical component of their force into the chassis increases with it.

You guessed it…

Jacking forces, which act to literally lift the chassis during cornering. This generates quite a pronounced effect on vehicle performance. To outline one such effect, jacking forces sufficient to lift a chassis by a few millimetres can quite significantly affect the efficiency of an aero platform. 

In dynamic situations, any vertical body acceleration caused by jacking must be of course be reacted at the contact patch with an equal and opposite force. This can induce some cyclical, oscillating contact pressures at the tyre which lowers the average lateral force they can generate.

## hRC = 0

If the roll centre is located at ground level, jacking forces disappear as there is only a horizontal force component into the chassis, but the moment arm between the CoM and the roll centre is significant as the vertical separation between CoM and roll centre is at its highest.

The roll moment is maximal in this condition.

Here, weight transfer is purely elastic and requires huge roll stiffness to be provided via stiff springs and ARBs to provide adequate roll gradient and chassis control. This condition would be very detrimental to tyre performance as the variation in contact patch pressure is huge and a lot of energy is going into the tyres which could lead to a nervous character, producing high tyre temperatures and high wear rates. 

Safe to say, the advantages of this condition are far outweighed by the disadvantages.

## hRC < hCOM

This, ultimately is a condition vehicles find themselves in.

Here, the total weight transfer is a sum of geometric and elastic transfer, which can be in varying proportions depending on the requirements of the specifics.

There are some jacking forces, but the magnitude of the roll moment can be adjusted to suit the application at hand and provide a ‘best of both worlds’.

If you’re dealing with a heavily aero dependant car for example, there may be a sweet spot in terms of jacking forces driven by the aero map and the objective to keep dynamic ride height within a certain window.

In reality there are a number of drivers into optimum location of the roll centre, it’s quite a considered process and very application specific.

So, why is it useful to manipulate roll centre height in a trackside situation? 

At a particular circuit where a race engineer is working to meet a target roll gradient. They have the freedom to specify a low roll centre to provide a high roll moment, meeting the target with high roll stiffness, or the option keep the roll centre high and specify a low roll stiffness.

The answer reveals itself when the tyre is considered:

**Option a)** with a low roll centre and stiff springs puts a lot of energy into the tyre which has implications for tyre temperature and potential for degradation, especially with longer race distances.

**Option b)** with a high roll centre and relatively low roll moment allows the use of softer springs, perhaps improving conditions for the tyre, but at the detriment of the aero platform which now sees greater variation in right height. 

The answer is never black and white of course. The best condition for the day has some roots in the load sensitivity of the tyre and it’s important to also appreciate the effects that jacking forces have on performance, especially in dynamic conditions. 

While the steady-state performance may be identical, the two options would also produce quite different transient responses.

These kind of decisions need a holistic approach as they rarely work in isolation, but this should clearly demonstrate how useful a setup tool roll centre height can be to a race engineer.

This same theory applies to chassis pitch also, which is exactly the fundamentals of _anti-dive_ and _anti-squat geometry_.

In the longitudinal sense, pitch centres of each axle (rather than roll centres) dictate how much of the longitudinal weight transfer is reacted by the springs, which creates squat and dive (analogous to roll), or by the suspension members which minimise pitching moments but lead to the same jacking forces and negative dynamic tyre effects if used in excess.

![Diagram illustrating pitch centre geometry and the principles of anti-dive and anti-squat in longitudinal weight transfer](https://static.wixstatic.com/media/67d9bf_9395eba754234016876ec6061261ce86~mv2.jpg)

## Changing the Splits

There are two main tools that can be used trackside to manipulate both the total chassis roll moment and the percentage of total lateral load transfer experienced by each axle.

Next, i'll explore those and outline how they are adjusted.

## Roll Centre Height

Increasing the RCH on one axle has the effect of reducing the roll moment generated at that axle (reducing elastic weight transfer) and increasing the proportion of geometric weight transfer it experiences. 

For a given roll stiffness, adjustment of the RCH on a particular axle has the effect of manipulating the lateral load transfer distribution (read more [here](/blog/performance-engineering-tyre-management)), shifting the balance of the chassis.

Adjusting the roll centre can be done by moving the suspension hard points on the chassis, but due to the secondary effects this has on the overall wheel kinematics, it can be something like ‘opening a can of worms’. Not an easy way out.

## Roll Stiffness

The roll stiffness, or more specifically the roll stiffness distribution is perhaps a far more powerful tool in manipulating the lateral load transfer distribution (LLTD) between each axle of a chassis and comes with less drawbacks.

As the force generated by a spring opposes its deflection, the axle with a higher roll stiffness will result in an increased vertical force on the outside tyre under cornering. Through the mechanism of tyre load sensitivity outlined previously, that axle will now reach its peak slip angle earlier and saturate before the other one. This again shifts the balance of the chassis towards the axle with the higher stiffness

Roll stiffness can be manipulated in two ways.

**1.	Ride Springs**

Adjusting the roll stiffness generated by the ride springs is as easy as swapping new ones in with a different spring constant, but this method also has impact into the heave and pitch chassis modes as well as roll, which will change the behaviour of the chassis through a wider range of conditions, likely negatively.

**2.	ARB**

The action of the ARB is decoupled from heave and pitch, which means that changes to the contribution of roll stiffness from the ARB have a much more focused effect and is therefore more appropriate in influencing chassis balance.

Many ARBs are adjustable which makes this an easy way of manipulating roll stiffness.

## CoM Shift

I want to finish up with the additional insight into lateral weight transfer caused by the angular displacement of the CoM in roll conditions. 

In most cases this is approximated as zero due to its small magnitude relative to main weight transfer mechanisms, but it's wise to quantify it regardless.

A simple calculation of the weight transfer caused by 3 degrees of body roll can be shown below.

$$
\begin{aligned}
\Delta W_{CoM} &= (m \cdot g \cdot h)\sin(\theta) \\[4pt]
&= (1000 \times 9.81 \times 0.3)\sin(3°) \\[4pt]
&= 154\text{ N} \rightarrow \text{Approx. 3\% of total transfer}
\end{aligned}
$$

At a roll over condition (i.e. 0N on inside wheels), the transfer due to CoM shift is around 3% of the total. Small, but perhaps not negligible. Depends how much accuracy you're working with!

The maths outlined in the article above are working under the assumption that the tyre is an infinitely stiff spring.

In reality the tyre is of finite stiffness and has influence into the overall roll stiffness and level of body roll experienced. With that said, tyre stiffness is _less_ used as a setup tool to manage LLTD due to the more significant effects it has on contact patch area. 

It would be unwise to ignore this in detailed design stages though!

Hope you learned something today.

Be inspired.

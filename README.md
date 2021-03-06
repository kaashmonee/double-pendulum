# Double Pendulum Simulation

This will be simulating a double pendulum. 
A double pendulum is a piece of mass attached to another piece of mass via a piece of rigid wire or string.
The equations of motion for the double pendulum are derived via the Lagrangian formalism. The Lagrangian is defined as the difference of the kinetic energy and the potential energy of a system. The equations of motion are derived by solving the Euler-Lagrange equations. An Euler-Lagrange equation is difference of the time derivative of the partial derivative of the Lagrangian with respect to the generalized velocity and the partial derivative of the Lagrangian with respect to the generalized coordinates equals zero. The number of Euler-Lagrange equations will be proportional to the number of generalized coordinates. In this case, there were 2 generalized coordinates, Theta1 and Theta2. Theta1 and Theta2 are the angle subtended by a pendulum and the vertical. In solving the Euler-Lagrange equations, one gets coupled second order differential equations, the solutions to which are the equations of motion for the pendula. The motion of the pendula are approximated by multiplying small time intervals to the derivatives to approximate the location of the pendula. The derivations for the Euler-Lagrange equations can be found here: martin-euding.de/en/physics/euler-lagrange-equation. Inspired by michaeloliviera. Feel free to also explore a better simulation by michaeloliviera here: https://github.com/micaeloliveira/physics-sandbox/blob/feature/new-styling/assets/javascripts/pendulum.js. 

## Installation

Clone or download the repository onto your computer. Simply double click the HTML file and the program should start up on its own in your default browser.

## Usage

Use to explore the different ways in which tiny changes in mass or tiny changes in angles can have drastic effects on the motion of the double pendulum. 

## Credits

Inspired by double pendulum simulation on https://github.com/micaeloliveira/physics-sandbox/blob/feature/new-styling/assets/javascripts/pendulum.js. Used code snippets from michaeloliviera. Please check out his better simulation in the above link. 

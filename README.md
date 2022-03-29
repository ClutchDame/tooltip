# Tooltip

This project creates a **tooltip** using **React**.

## Installation

`yarn` or `npm i` to install packages

`yarn dev` or `npm run dev` to run the app locally

App starts on http://localhost:5000/

It shows how the component can be used :

- by setting the position parameter yourself (use one of `top`, `bottom`, `left` and `right`)

- by leaving `position` unset, which will default to an automatic positioning.

You will see 2 components using smart positioned tooltips.
The last one is a footer-like component to show how the tooltip changes position when close to the bottom of the viewport.

## Requirements

node >= 12.2.0

## What it does

1. Display tooltip when:

- hovering an element
- focusing an element

2. Hide tooltip when :

- mouse leaves element
- focus leves element (ie tabs to another focusable element)
- user hits Escape

3. Provide basic styles and animation (using SCSS only)

## What it doesn't do

Use fancy libs.
Scroll management. As the exercise mentioned, this is a prototype, I'll see with the designers what they think of this first version and adapt from there.

## What it doesn't do but could pretend to

User customizable animations.
Offer more positioning options : on element's 4 corners, giving it 8 possibilities.

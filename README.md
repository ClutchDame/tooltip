# Tooltip

This project creates a **tooltip** using **React**.

## Installation

`yarn` or `npm i` to install packages

`yarn dev` or `npm run dev` to run the app locally

App starts on http://localhost:5000/

It shows 2 examples of how to use this component:

- the first one is a header using positioning defined in your jsx. 4 options are available: `top`, `bottom`, `left` and `right`.
- another one (still WIP) shows how to use tooltip with smart positining, ie the tooltip will set its own position if it is outside of the viewport.

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

## What it doesn't do but could pretend to

User customizable animations.
Offer more positioning options (on element's 4 corners).

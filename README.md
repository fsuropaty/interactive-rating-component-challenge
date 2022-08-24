# Frontend Mentor - Interactive rating component challenge solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Interactive rating component challenge solution](#frontend-mentor---interactive-rating-component-challenge-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](/images/desktop-screenshot.png)
![](/images/mobile-screenshot.png)

### Links

- Solution URL: [Frontendmentor.io](https://www.frontendmentor.io/solutions/interactive-rating-component-challenge-using-tailwind-css-mCWgqwopF9)
- Live Site URL: [fsuropaty.github.io](https://github.com/fsuropaty/interactive-rating-component-challenge)

## My process

### Built with

- Tailwind CSS
- Vanilla JS
- Mobile-first workflow

### What I learned

I learned about get the value of radio button and change the content using innerHTML

```js
function getValue() {
  var getSelectedValue = $('input[name="rating"]:checked');
  return getSelectedValue.value;
}

function renderDOM() {
  $("#rating-card").innerHTML = `
  <div id="thank-you" class="grid gap-8 text-center ">
    <div class="flex items-center justify-center">
      <img src="./images/illustration-thank-you.svg" alt="" />
    </div>
    <div>
      <label class="text-orange rounded-full bg-Dark-Blue p-2 px-4 text-Orange my-8">
        You selected ${getValue()} out of 5
      </label>
    </div>
    <h1>Thank you!</h1>
    <p>
      We appreciate you taking the time to give a rating. If you ever need
      more support, don't hesitate to get in touch!
    </p>
  </div>`;
}
```

### Useful resources

- [W3Schools](https://www.w3schools.com) - Pretty much your guidebook in website development
- [MDN](https://developer.mozilla.org) - W3Schools but from Mozilla.

## Author

- Website - [fsuropaty](https://www.fsuropaty.github.io)
- Frontend Mentor - [@fsuropaty](https://www.frontendmentor.io/profile/fsuropaty)

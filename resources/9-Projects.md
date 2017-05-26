# Projects

Add this block of HTML right above `</section>`

```html
<h2>
  Projects
</h2>
<div class="project-list">
  <div class="project"></div>
  <div class="project"></div>
  <div class="project"></div>
  <div class="project"></div>
  <div class="project"></div>
  <div class="project"></div>
  <div class="project"></div>
  <div class="project"></div>
</div>
```

Then add this block of code to your `style.css`
```css
#project-list {
  display: flex;                  /* Flex box */
  flex-direction: row;            /* Left to right */
  flex-wrap: wrap;                /* Wrap content */
  justify-content: space-between; /* Spread space */
}

.project {
  flex: 0 0 140px;                /* No grow/shrink, 140px width */
  height: 140px;
  margin-bottom: 10px;
  background-color: #7AA3CC;
}
```

CSS Flexbox reference: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

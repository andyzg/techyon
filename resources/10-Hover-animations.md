# Hover

Animations can be triggered during specific mouse events through CSS.

First, define a property that can transition, as well as how long it transitions
for in the `.project` property clause
```css
.project {
  transition: 0.2s background-color; /* add this */
}
```

Then add this new block of CSS in `style.css`
```css
.project:hover {
  background-color: #0066CC;
}
```

[Next section: Publishing your website](https://github.com/andytechyon/andytechyon.github.io/blob/master/resources/11-Pushing-your-website.md)

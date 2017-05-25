# Hover

Animations can be triggered during specific mouse events through CSS.

First, define a property that can transition, as well as how long it transitions
for in the `.project` property clause
```
.project {
  ...
  transition: 0.2s background-color; /* add this */
}
```

Then add this new block of CSS in `style.css
```
.project:hover {
  background-color: #0066CC;
}
```

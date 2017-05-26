# Blue line

Let's spice up our website by adding a blue line at the very top. This can be
done by adding this CSS to our `style.css`
```
#line {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 4px;
  background-color: #0066CC;
}
```

And then adding this line right below `<body></body>`
```
<div id="line"></div>
```

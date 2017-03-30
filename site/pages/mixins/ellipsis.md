---
id: 05
title: 'Ellipsis'
layout: post
category: mixin
---

### SCSS Usage

```scss
.title {
    @include ellipsis;
}
```

### CSS Output

```scss
.title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
}
```

### SCSS Source

```scss
@mixin ellipsis {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
```

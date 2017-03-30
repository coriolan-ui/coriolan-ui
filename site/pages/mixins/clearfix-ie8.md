---
id: 03
title: 'Clearfix IE8'
layout: post
category: mixin
---

WTF!? IE8 is old fucking shit - Yes, but in China 38% users still use it. For this reason `clearfix-ie8` still need us.

### SCSS Usage

```scss
.container {
    @include clearfix-ie8;
}
```

### CSS Output

```scss
.container {
    zoom: 1;
}

.container::before,
.container::after {
    content: ".";
    display: block;
    height: 0;
    overflow: hidden;
}

.container::after {
    clear: both;
}
```

### SCSS Source

```scss
@mixin clearfix-ie8 {
    zoom: 1;
    &::before,
    &::after {
        content: ".";
        display: block;
        height: 0;
        overflow: hidden;
    }
    &::after {
        clear: both;
    }
}
```

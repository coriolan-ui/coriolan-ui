---
id: 02
title: 'Clearfix'
layout: post
category: mixin
---

### SCSS Usage

```scss
.container {
    @include clearfix;
}
```

### CSS Output

```scss
.container::after {
    clear: both;
    content: '';
    display: table;
}
```

### SCSS Source

```scss
@mixin clearfix {
    &::after {
        clear: both;
        content: "";
        display: table;
    }
}
```

---
id: 08
title: 'Pixels to Rems'
layout: post
category: mixin
---

### SCSS Usage

```scss
.item {
    font-size: rem(12);
}
```

### CSS Output

```scss
.item {
    font-size: 0.75rem;
}
```

### SCSS Source

```scss
@function rem($pxval) {
    @if not unitless($pxval) {
        $pxval: strip-units($pxval);
    }
    $base: $em-base;
    @if not unitless($base) {
        $base: strip-units($base);
    }
    @return ($pxval / $base) * 1rem;
}
```

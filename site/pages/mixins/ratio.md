---
id: 04
title: 'Ratio'
layout: post
category: mixin
---

SCSS

    .item {
        @include ratio(60%,1560px,500px);
    }

CSS Output

    .item {
        width: 60%;
        padding-bottom: 19.23077%;
    }

Source

    @mixin ratio($width, $ratio-width, $ratio-height) {
        width: $width;
        padding-bottom: ($ratio-height / $ratio-width) * $width;
        position: relative;
    }

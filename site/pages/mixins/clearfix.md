---
id: 02
title: 'Clearfix'
layout: post
category: mixin
---

SCSS

    .container {
        @include clearfix;
    }

CSS Output

    .container::after {
        clear: both;
        content: '';
        display: table;
    }

Source

    @mixin clearfix {
        &::after {
            clear: both;
            content: "";
            display: table;
        }
    }

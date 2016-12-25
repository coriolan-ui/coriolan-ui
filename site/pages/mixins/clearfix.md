---
id: 02
title: 'Clearfix'
layout: post
category: mixin
---

Source

    @mixin clearfix {
        &::after {
            clear: both;
            content: "";
            display: table;
        }
    }

SCSS Sintaxis

    .container {
        @include clearfix;
    }

CSS Output

    .container::after {
        clear: both;
        content: '';
        display: table;
    }

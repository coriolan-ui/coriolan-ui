---
id: 02
title: 'Clearfix'
layout: post
category: mixin
---

SCSS Usage

    .container {
        @include clearfix;
    }

CSS Output

    .container::after {
        clear: both;
        content: '';
        display: table;
    }

SCSS Source

    @mixin clearfix {
        &::after {
            clear: both;
            content: "";
            display: table;
        }
    }

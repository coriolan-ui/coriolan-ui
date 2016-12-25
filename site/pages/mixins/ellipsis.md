---
id: 05
title: 'Ellipsis'
layout: post
category: mixin
---

Source

    @mixin ellipsis {
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

SCSS Sintaxis

    .title {
        @include ellipsis;
    }

CSS Output

    .title {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display: block;
    }

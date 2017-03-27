---
id: 05
title: 'Ellipsis'
layout: post
category: mixin
---

SCSS Usage

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

SCSS Source

    @mixin ellipsis {
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

---
id: 07
title: 'Pixels to Ems'
layout: post
category: mixin
---

SCSS Usage

    .item {
        font-size: em(12);
        font-size: em(12, 24);
    }

CSS Output

    .item {
        font-size: 0.75em;
        font-size: 0.5em;
    }

SCSS Source

    @function em($pxval, $base: $em-base) {
        @if not unitless($pxval) {
            $pxval: strip-units($pxval);
        }
        @if not unitless($base) {
            $base: strip-units($base);
        }
        @return ($pxval / $base) * 1em;
    }

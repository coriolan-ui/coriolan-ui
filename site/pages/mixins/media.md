---
id: 01
title: 'Media'
layout: post
category: mixin
---

Coriolan UI is mobile first tool. Thats why our `media` mixin is very popular in whole galactic.

SCSS

    .media-usage {
        background: silver;

        @include media(XS) {
            background: pink;
        }

        @include media(S) {
            background: yellow;
        }

        @include media(M) {
            background: red;
        }

        @include media(L) {
            background: green;
        }

        @include media(XL) {
            background: blue;
        }

        @include media("(min-width: 768px) and (max-height: 800px)") {
            background: magenta;
        }
    }

CSS Output

    .media-usage {
        background: silver;
    }

    @media (min-width: 320px) {
        .media-usage {
            background: pink;
        }
    }

    @media (min-width: 508px) {
        .media-usage {
            background: yellow;
        }
    }

    @media (min-width: 754px) {
        .media-usage {
            background: red;
        }
    }

    @media (min-width: 1054px) {
        .media-usage {
            background: green;
        }
    }

    @media (min-width: 1300px) {
        .media-usage {
            background: blue;
        }
    }

    @media (min-width: 768px) and (max-height: 800px) {
        .media-usage {
            background: magenta;
        }
    }

Source

    @function translate-media-condition($c) {
        $condMap: (
            "XS": "(min-width: #{$XS})",
            "S": "(min-width: #{$S})",
            "M": "(min-width: #{$M})",
            "L": "(min-width: #{$L})",
            "XL": "(min-width: #{$XL})",
        );
        $result: map-get( $condMap, $c );
        @if ( $result == null ) {
            $result: $c;
        }
        @return $result;
    }

    @mixin media($args...) {
        $query: "";
        @each $arg in $args {
            $op: "";
            @if ( $query != "" ) {
                $op: " and ";
            }
            $query: $query + $op + translate-media-condition($arg);
        }
        @media #{$query}  { @content; }
    }

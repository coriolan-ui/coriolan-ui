---
id: 06
title: 'Placeholder'
layout: post
category: mixin
---

SCSS Usage

    textarea {
        width: 100%;
        font-size: 16px;

        @include placeholder {
            font-size: 12px;
        }
    }

CSS Output

    textarea {
        width: 100%;
        font-size: 16px;
    }

    textarea::-webkit-input-placeholder {
        font-size: 12px;
    }

    textarea::-moz-placeholder {
        font-size: 12px;
    }

    textarea:-moz-placeholder {
        font-size: 12px;
    }

    textarea:-ms-input-placeholder {
        font-size: 12px;
    }

SCSS Source

    @mixin placeholder {
        $prefixs: ":-webkit-input" ":-moz" "-moz" "-ms-input";
        @each $placeholder in $prefixs {
            &:#{$placeholder}-placeholder {
                @content;
            }
        }
    }

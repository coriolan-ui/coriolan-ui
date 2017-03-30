---
title: 'Installation'
layout: page
path: '/installation/'
---

### Via npm:

To install Coriolan UI via npm use this command in your terminal:

    npm install coriolan-ui --save

or shortly `npm i coriolan-ui -S`

Then import Coriolan UI in your sass/scss stylesheet from `node_modules` folder:

    @import '../node_modules/coriolan-ui/coriolan-ui';

### Via bower:

To install Coriolan UI via bower use this command in your terminal:

    bower install coriolan-ui --save

or shortly `bower i coriolan-ui -S`

Then import Coriolan UI in your sass/scss stylesheet from `bower_components` folder:

    @import '../bower_components/coriolan-ui/coriolan-ui';

### Then use it:

Now you can add any available mixin in your sass/scss stylesheet:

```sass
.container {
    @include clearfix;
}
```

Or even use any supported variable in your sass/scss stylesheet:

    .container {
        max-width: $XL;
    }

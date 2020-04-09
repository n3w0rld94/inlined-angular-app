# SPATest

This is an example Angular app fully contained in an html file. 

It supports out-of-the-box Angular Routing and (zone.js) Change Detection.

Once built, a "bundled.html" file appears in the dist folder and can be opened as an html page withuot the need to be served.

A use case is to load the above html filr in a secure cloud storage and then load it from an `<iframe>` allowing flexible integration in any web page and even markup document:

## Development server

Run `npm run serve` . The app will automatically reload if you change any of the source files.
>**NOTE**: Using `ng serve` will not load source maps.

## Build

Run `npm run build-dev` to build the project in development mode with inline source maps. Use `npm run build-prod` a production build.


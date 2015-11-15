# css-optimising
Just a playground for messing around with npm plugins for CSS.


### to run the default build

```
$ gulp
```

1. compiles SASS
2. autoprefixes CSS
3. minifies CSS
4. copies to public/CSS


### to run the full build

```
$ gulp all
```

1. runs default
2. (optional) copies contents of public to chosen folder


For option 2 simply uncomment the localDir line and add any folder pathname.  The main goal being, you can build to a sibling public folder and a locahost for sites using PHP, JAVA etc.


.

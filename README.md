# Thoughtworks
An assignment


#Project structure

We follow a sensible and low-maintenance project structure, wherein:
* all source files (HTML, Sass, JS) and assets (images, fonts), go into the `dist/` directory.
* all 3rd-party front-end dependencies ("vendor" files) go into the `bower_components/` directory.
* all development dependencies (`npm` packages) go into the `node_modules` directory.
* all production-ready files (HTML, CSS, JS, images, fonts), go into the `dist/` directory (not entire job is ready for the deployment due to the lack of time).
* all configuration files ( `package.json`, `bower.json`, `Gruntfile.js`) can be found in the project root.


In effect, this is what the project tree should look like:
```
.
+-- bower_components/
+-- node_modules/
+-- dist/
    +-- fonts/
    +-- images/
    +-- js/
    +-- css/
+-- www/
    +-- config/
    +-- constants/
    +-- controllers/
    +-- directives/
    +-- factories/
    +-- filters/
    +-- modals/
    +-- modules/
    +-- services/
    +-- templates/
+-- src/
	+-- sass compilation
+-- bower.json
+-- Gruntfile.js
+-- package.json
+-- README.md
```

## Project setup

First-time project setup consists of:
* installing Node.js, `npm`, `bower`, `grunt-cli`
* installing Ruby, `gem` and `sass`
* installing dev-dependencies (`npm` packages)
* installing front-end dependencies (`bower` packages)
* setting up `grunt` to watch the project files for changes

Once you've installed Node.js and `npm` on your system, install `bower`, `grunt-cli` and  globally, like so:
```
$ npm install -g grunt-cli bower 
```

Once you've installed Ruby and `gem` on your system, install the `sass` gem like so:
```
$ gem install sass
```

Next, `cd` into the project root to install the dev-dependencies, like so:
```
$ cd <PROJECT_ROOT>
$ npm install
```

Installing the front-end dependencies is really easy:
```
$ bower install
```

Finally, fire up `grunt` to open up a web-browser, watch the filesystem for changes, and to live-reload the browser whenever there's a relevant change:
```
$ grunt
```

The last 3 steps have been packaged into a single `npm` script inside `package.json`:
```
$ npm start
```

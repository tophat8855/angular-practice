#Angular Workshop Pt.1 - The Basics



##Step 0 - initial setup

Fork & clone this repo

Open up `index.html`

Inspect `app/index.html' and include angular library. Best place to get it from is [Google directly](https://developers.google.com/speed/libraries):

The latest release is 1.3.14:

`<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.min.js"></script>`


##Step 1 - data-binding & simple directives

Directives teach HTML new tricks.

In Angular, we add behavior to HTML through **directives**. A directive is a marker on a HTML tag that tells Angular to run or reference Angular code.  Directives allow us to extend/create our own HTML elements.

Angular directives start with the prefix **ng-**. For example:

The **ng-app** directive denotes the beginning of an application, and everything inside its tags will have access to binding. In other words,

[`ng-app`](http://docs.angularjs.org/api/ng/directive/ngApp) turns ordinary HTML into an Angular application

[Data binding](https://docs.angularjs.org/guide/databinding): `ng-model` binds an HTML element to a value / model. The binding is bi-directional. [MVVM](http://en.wikipedia.org/wiki/Model_View_ViewModel)

Double curly brackets denote Angular expressions: ```{{ an angular expression }}``` - this is not HandleBars.  Angular does not require a 3rd party templating system required like Ember does.

More on [directives](http://docs.angularjs.org/guide/directive). Directives [cheat sheet](http://www.cheatography.com/proloser/cheat-sheets/angularjs/)

**Rule**: When using HTML tags/attributes, first look if Angular offers a corresponding directive. If so, use it. For example:

- a tag, href attribute: `ng-href`
- img tag, src attribute: `ng-src`
- class attribute: `ng-class`

Take a moment to think about how you accomplish some of these things using Ember.


To catch up:

	git checkout one

**Exercise**: Show or hide a newly created div based on the value of an expression of your choice.

##Step 2 - expressions and filters

Let's play with angular expressions and some built-in filters.

[Filter](http://docs.angularjs.org/api/ng/filter/filter)

[Angular expressions in action](http://docs.angularjs.org/guide/expression)

To catch up:

	git checkout two

**Exercise**: Bind a new input variable to a model and send it through the **date** filter.

##Step 3 - arrays and loops

Loops are directives!

1) setup array. ``ng-init`` is like ``ng-model`` but allows to initialize model.

```
 <div ng-init="parks=['Yosemite','Yellowstone', 'Glacier' ,'Denali', 'Joshua Tree']">
```

2) ng-repeat

```
<ul>
 <span ng-repeat="park in parks">
        <li>{{ park }}
 </span>
</ul>
```

3) now add a search box

	<p>Search: <input ng-model="query">

4) and add search filter

`| filter:query `

Compare/Contrast with Ember!

**All this without a single line of JavaScript**

[ngRepeat](http://docs.angularjs.org/api/ng/directive/ngRepeat)

To catch up:

	git checkout three

##Step 4 - controllers

Time to start writing some Javscript...

[**controller**](http://docs.angularjs.org/guide/controller)


Create a new file ```first_controller.js``` and include it in the app.

In ```first_controller.js```, declare app module:

	var demoApp = angular.module("demoApp", []);

Add a controller:

	demoApp.controller('FirstController', function($scope) {
		//...
	});

Put container div under the control of controller

	<div ng-controller="FirstController">

Let's create an ```scoped variable``` and use it in the view.

[Scope](http://docs.angularjs.org/guide/scope): It's like the glue between model and view.

To catch up:

	git checkout four

##Step 5 - events

Let's build a currency converter function.  

Together: Add event handler, convert function and validation using $watch.

[Events](http://tutorials.jenkov.com/angularjs/events.html)

[Watching models](http://docs.angularjs.org/api/ng/type/$rootScope.Scope)

To catch up:

	git checkout five

# Karousel 1.0
It's a lightweight carousel,built using the javascript jQuery library. Karousel was designed to be a dynamic lightweight utility that gives webdesigners a powerful way of enhancing a website's user interface.

## Usage
Karousel follows a very simple pattern. A wrapping div containing .karousel-content elements that in turn can contain anything you want.

``` html
<div id="#banner">
<div class="karousel-content">
  <div> </div>
  <div style="display:none;"> </div>
  <div style="display:none;"> </div>
</div>
</div>
```

Trigger karousel just like any other jQuery plugin just query the element you want to make a karousel and use the karousel() function.

``` js

$("#banner").karousel();

```

## Options

Optionally you can pass an array of options while triggering karousel to customize it to your needs. 

- **pager** Boolean *(default:false)* - a flag indicating if you want to display a pager for the carousel.

-	**cyclic** Boolean *(default:false)* - a flag indicating if you want to display the carousel in a loop , i.e cyclic.

- **automate** Boolean *(default:false)* - a flag indicating if you would like to auto scroll through the carousel.

-	**vertical** Integer *(default:false)* - a flag indicating if you would like to use a vertical slider. 




## Example

``` js

$("#banner").karousel({
	pager: true,
  automate: true,
  vertical: true,
  cyclic: true
});

```

## Demo

You can view all kinds of carousels here (http://kumarappana.github.io/Karousel)


## Enhancements
The goal is to keep this plugin as simple as possible but 2 possible enhancements can be added:

- 1:1 swipe movement when using slide animations.

- optional callback after each slide transition could be helpful.


## License
Karousel jQuery plugin is &copy; 2013 [HuntShire](http://www.huntshire.com) and is licensed under the terms of GPL &amp; MIT licenses.

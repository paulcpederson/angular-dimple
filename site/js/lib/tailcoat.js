(function Tailcoat () {

var T = {
  version: '1.1.0'
};

// ┌───────────────┐
// │ DOM utilities │
// └───────────────┘

var dom = T.utils = {};

// ┌──────────────────────┐
// │ DOM event management │
// └──────────────────────┘

// returns standard interaction event based on touch support
dom.event = function () {
  // Due to complexity of pointer events and touch events
  // (pointerdown, msPointerDown, touchstart, touchmove what wait no)
  // we are returning click on dom.event untill we have a chance to do
  // more robust touch/mouse handling. This should solve weird Win8 bugs.
  return "click";
};

// add a callback function to an event on an element
dom.addEvent = function (el, event, fn) {
  if (el.addEventListener) {
    return el.addEventListener(event, fn, false);
  }
  if (el.attachEvent) {
    return el.attachEvent('on' + event, fn);
  }
};

dom.removeEvent = function (el, event, fn) {
  if (el.removeEventListener) {
    return el.removeEventListener(event, fn, false);
  }
  if (el.detachEvent) {
    return el.detachEvent('on' + event,  fn);
  }
};

// get the target element of an event
dom.eventTarget = function (event) {
  if (!event.target) {
    return event.srcElement;
  }
  if (event.target) {
    return event.target;
  }
};

// prevent default behavior of an event
dom.preventDefault = function (event) {
  if (event.preventDefault) {
    return event.preventDefault();
  }
  if (event.returnValue) {
    event.returnValue = false;
  }
};

// stop and event from bubbling up the DOM tree
dom.stopPropagation = function (event) {
  event = event || window.event;
  if (event.stopPropagation) {
    return event.stopPropagation();
  }
  if (event.cancelBubble) {
    event.cancelBubble = true;
  }
};

// ┌────────────────────┐
// │ class manipulation │
// └────────────────────┘

// check if an element has a specific class
dom.hasClass = function (elem, className) {
  var exp = new RegExp(' ' + className + ' ');
  if (exp.test(' ' + elem.className + ' ')) {
    return true;
  }

  return false;
};

// add one or more classes to an element
dom.addClass = function (elem, classes) {
  classes = classes.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (!dom.hasClass(elem, classes[i])) {
      elem.className += ' ' + classes[i];
    }
  }
};

// remove one or more classes from an element
dom.removeClass = function (elem, classes) {
  classes = classes.split(' ');

  for (var i = 0; i < classes.length; i++) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';

    if (dom.hasClass(elem, classes[i])) {
      while (newClass.indexOf(' ' + classes[i] + ' ') >= 0) {
        newClass = newClass.replace(' ' + classes[i] + ' ', ' ');
      }

      elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  }
};

// ┌───────────────┐
// │ DOM traversal │
// └───────────────┘

// returns closest element up the DOM tree matching a given class
dom.closest = function (className, context) {
  var result, current;
  for (current = context; current; current = current.parentNode) {
    if (current.nodeType === 1 && dom.hasClass(current, className)) {
      result = current;
      break;
    }
  }
  return current;
};

dom.getAttr = function(el, attr) {
  if (el.getAttribute) {
    return el.getAttribute(attr);
  }

  var result;
  var attrs = el.attributes;

  for (var i = 0; i < attrs.length; i++) {
    if (attrs[i].nodeName === attr) {
      result = attrs[i].nodeValue;
    }
  }

  return result;
};

// ┌──────┐
// │ misc │
// └──────┘

// return the index of an object in an array with optional offset
dom.indexOf = function (obj, arr, offset) {
  var i = offset || 0;

  if (arr.indexOf) {
    return arr.indexOf(obj, i);
  }

  for (i; i < arr.length; i++) {
    if (arr[i] === obj) {
      return i;
    }
  }

  return -1;
};

dom.makeArray = function (object) {
  var array = [];
  for (var i = 0; i < object.length; i++) {
    array.push(object[i]);
  }
  return array;
};

// ┌───────────────────┐
// │ feature detection │
// └───────────────────┘
// detect features like touch, ie, etc.

dom.isTouch = function () {
  if (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0)) {
    return true;
  }
  return false;
};

dom.isIE8 = function () {
  var html = document.getElementsByTagName('html')[0];
  if (dom.hasClass(html, 'ie8')){
    return true;
  } else {
    return false;
  }
};

dom.supportsPlaceholder = function () {
  var input = document.createElement("input");
  return ('placeholder' in input);
};

// ┌───────────────┐
// │ JS Components │
// └───────────────┘

// ┌───────────┐
// │ ACCORDION │
// └───────────┘
// Collapsible accordion list

T.accordion = function () {
  var accordions = document.querySelectorAll('.accordion');

  if (accordions.length > 0) {
    for (var i = 0; i < accordions.length; i++) {
      var children = accordions[i].children;

      for (var j = 0; j < children.length; j++) {
        dom.addEvent(children[j], dom.event(), toggleAccordion);
      }
    }
  }
};

function toggleAccordion (event) {
  var parent = dom.closest('accordion-section', dom.eventTarget(event));
  var children = dom.closest('accordion', parent).children;

  for (var i = 0; i < children.length; i++){
    dom.removeClass(children[i], 'active');
  }

  dom.addClass(parent, 'active');
}

// ┌────────────────┐
// │ CLICK DROPDOWN │
// └────────────────┘
// dropdown menu that shows on click

T.clickDropdown = function () {
  var dropdowns = dom.makeArray(document.querySelectorAll('.click-dropdown'));
  var body = document.querySelector('body');

  if (dropdowns.length === 0) {
    return;
  }

  function closeAllDropdowns () {
    for (var i = 0; i < dropdowns.length; i++) {
      dom.removeClass(dropdowns[i], 'visible');
    }
  }

  function bodyClickHandler (event) {
      var dropdown = dom.closest('click-dropdown', event.target);
      if (!dropdown) {
        closeAllDropdowns();
        dom.removeEvent(body, dom.event(), bodyClickHandler);
      }
  }

  function bindDropdown (el) {
    dom.addEvent(el, dom.event(), function(event) {
      dom.preventDefault(event);
      var dropdown = dom.closest('click-dropdown', event.target);
      if (dom.hasClass(dropdown, 'visible')) {
        dom.removeClass(dropdown, 'visible');
        dom.removeEvent(body, dom.event(), bodyClickHandler);
      } else {
        closeAllDropdowns();
        dom.addClass(dropdown, 'visible');
        dom.addEvent(body, dom.event(), bodyClickHandler);
      }
    });
  }

  for (var i = 0; i < dropdowns.length; i++) {
    var link = dom.closest('click-dropdown', dropdowns[i]);
    bindDropdown(link);
  }

};

// ┌────────┐
// │ DRAWER │
// └────────┘
// Toggleable menu drawer

T.drawer = function () {
  var drawer  = document.querySelector('.drawer');
  var buttons = dom.makeArray(document.querySelectorAll('.drawer-toggle'));

  if (buttons.length === 0) {
    return;
  }

  dom.addEvent(drawer, dom.event(), function(event) {
    var html = document.querySelector('html');
    var isDrawer = dom.hasClass(dom.eventTarget(event), 'drawer');

    if (isDrawer) {
      dom.preventDefault(event);
      dom.stopPropagation(event);

      dom.removeClass(drawer, 'active-left active-right');
      dom.removeClass(html, 'scroll-lock');

      setTimeout(function(){
        drawer.style.display = 'none';
      }, 250);
    }
  });

  for (var i = 0; i < buttons.length; i++) {
    bindDrawerToggle(buttons[i], drawer);
  }
};

function bindDrawerToggle (el, drawer) {

  dom.addEvent(el, dom.event(), function(event) {
    var direction = dom.getAttr(el, 'data-direction');
    var html = document.querySelector('html');

    dom.stopPropagation(event);
    dom.preventDefault(event);

    drawer.style.display = 'block';

    setTimeout(function(){
      dom.addClass(drawer, direction);
      dom.addClass(html, 'scroll-lock');
    }, 0);
  });
}

// ┌───────────────┐
// │ SITE DROPDOWN │
// └───────────────┘
// dropdown menu for all featured ArcGIS sites

T.dropdown = function () {
  var dropdown = document.querySelector('.site-dropdown');
  var toggle = document.querySelector('.site-dropdown-toggle');
  var body = document.querySelector('body');

  function closeDropdown (event) {
    var isToggle = dom.hasClass(event.target, 'site-dropdown-toggle');
    var isDropdown = dom.closest('site-dropdown', event.target);

    if (!isToggle && !isDropdown) {
      dom.removeClass(dropdown, 'visible');
      dom.removeEvent(body, dom.event(), closeDropdown);
    }
  }

  if (dropdown) {
    dom.addEvent(toggle, dom.event(), function(event) {
      if (dom.hasClass(dropdown, 'visible')) {
        dom.removeClass(dropdown, 'visible');
        dom.removeEvent(body, dom.event(), closeDropdown);
      } else {
        dom.addClass(dropdown, 'visible');
        dom.addEvent(body, dom.event(), closeDropdown);
      }
    });
  }
};

// ┌───────┐
// │ MODAL │
// └───────┘
// dismissable modal dialog box

T.modal = function () {
  var buttons = document.querySelectorAll('.modal-show');

  if (buttons.length > 0) {
    for (var i = 0; i < buttons.length; i++) {
      bindModalShow(buttons[i]);
    }

    bindModalDismiss();
  }
};

function bindModalShow (button) {
  var modal;
  var modalId = dom.getAttr(button, 'data-modal');
  var modals = document.querySelectorAll('.modal');

  for (var i = 0; i < modals.length; i++) {
    if (dom.getAttr(modals[i], 'data-modal') === modalId) {
      modal = modals[i];
      break;
    }
  }

  if (modal !== null && typeof modal !== 'undefined') {
    dom.addEvent(button, dom.event(), function(event) {
      var overlay = document.querySelector('.modal-overlay');
      var html = document.querySelector('html');

      dom.stopPropagation(event);
      dom.preventDefault(event);

      dom.addClass(html, 'scroll-lock');
      dom.addClass(overlay, 'visible');
      dom.addClass(modal, 'visible');

      if ((modal.offsetHeight + 50) < document.documentElement.clientHeight) {
        modal.style.marginTop = (modal.offsetHeight / -2) + 'px';
        dom.addClass(modal, 'vertically-centered');
      }
    });
  }
}

function bindModalDismiss () {
  var buttons = document.querySelectorAll('.modal-dismiss');
  var overlay = document.querySelector('.modal-overlay');

  if (buttons.length > 0) {
    // bind close modal to every modal-dismiss button
    for (var i = 0; i < buttons.length; i++) {
      dom.addEvent(buttons[i], dom.event(), closeModal);
    }
  }

  dom.addEvent(overlay, dom.event(), closeModal);
}

function closeModal (event) {

  var isOverlay = dom.hasClass(dom.eventTarget(event), 'modal-overlay');
  var isDismiss = dom.hasClass(dom.eventTarget(event), 'modal-dismiss');

  if (!isOverlay && !isDismiss) {
    return;
  }

  var modals = document.querySelectorAll('.modal');
  var overlay = document.querySelector('.modal-overlay');
  var html = document.querySelector('html');

  dom.stopPropagation(event);
  dom.preventDefault(event);

  for (var j = 0; j < modals.length; j++) {
    dom.removeClass(modals[j], 'visible');
  }

  dom.removeClass(html, 'scroll-lock');
  dom.removeClass(overlay, 'visible');
}

// ┌─────────────┐
// │ PLACEHOLDER │
// └─────────────┘
// Shim to add placeholder support to older browsers

T.placeholder = function () {

  var inputs = document.querySelectorAll('input');
  var supportsPlaceholder = dom.supportsPlaceholder();

  if (supportsPlaceholder === false) {

    for (var i = 0; i < inputs.length; i++) {
      var type = inputs[i].type;
      var validTypes = ['text', 'search', 'url', 'tel', 'email', 'password'];

      // Is the input a type with placeholder?
      if ( dom.indexOf(type, validTypes) !== -1 ){
        // Is the input's value attribute empty?
        var hasNoValue;
        if (inputs[i].value === '' || inputs[i].value === undefined) {
          hasNoValue = true;
        } else {
          hasNoValue = false;
        }

        // Does the input have a placeholder?
        var hasPlaceholder;
        if (inputs[i].getAttribute('placeholder') !== null) {
          hasPlaceholder = true;
        } else {
          hasPlaceholder = false;
        }

        if (hasNoValue && hasPlaceholder) {
          setInputValue(inputs[i]);
          dom.addEvent(inputs[i], 'focus', inputFocus);
        }
      }
    }
  }
};

// Set input value to the text of the placeholder, give it a placeholder class
function setInputValue (input) {
  input.value = input.placeholder;
  dom.addClass(input, 'placeholder');
}

// Remove the input value on focus, remove the placeholder class
function inputFocus (event) {
  var target = (dom.isIE8) ? event.srcElement : event.target;
  target.value = '';
  dom.removeClass(target, 'placeholder');
}

// ┌─────────────┐
// │ SITE SEARCH │
// └─────────────┘
// navigation element that expands to become a search bar

T.siteSearch = function () {
  var input = document.querySelector('.site-search-input');
  var search = document.querySelector('.site-search');
  function closeSearch (event) {
    if (dom.closest('site-search-form', event.target) !== null) {
      return;
    }
    input.value = 'Search';
    dom.removeClass(search, 'active');
    dom.removeEvent(document.querySelector('body'), 'click', closeSearch);
  }

  if (input) {
    input.value = 'Search';
    dom.addEvent(input, 'focus', function(event) {
      input.value = '';
      dom.addClass(search, 'active');
      dom.addEvent(document.querySelector('body'), 'click', closeSearch);
    });
  }
};

// ┌────────┐
// │ SUBNAV │
// └────────┘
// responsive subnav

T.subnav = function () {
  var subnavs = document.querySelectorAll('.navigation-bar.responsive');

  if (subnavs.length > 0) {
    var i, j, k, tab, group, linksInGroup, percent;
    var linkGroups = document.querySelectorAll('.navigation-bar.responsive ul');

    for (i = 0; i < subnavs.length; i++) {
      var nav = subnavs[i].children[0].children[1];
      var toggle = nav.children[0];
      dom.addEvent(toggle, dom.event(), toggleSubnav);
    }

    for (j = 0; j < linkGroups.length; j++) {
      group = linkGroups[j];
      linksInGroup = group.querySelectorAll('li');
      percent = (100 - 2*linksInGroup.length) / linksInGroup.length;

      for (k = 0; k < linksInGroup.length; k++){
        if (dom.isIE8()) {
          linksInGroup[k].style.width = percent + "%";
        } else {
          linksInGroup[k].style.maxWidth = percent + "%";
        }

      }
    }
  }
};

function toggleSubnav (event) {
  dom.preventDefault(event);
  var nav = dom.closest('navigation-bar-nav', event.target);

  if (dom.hasClass(nav, 'open')) {
    dom.removeClass(nav, 'open');
  } else {
    dom.addClass(nav, 'open');
  }
}

// ┌──────┐
// │ TABS │
// └──────┘
// tabbed content pane

T.tabs = function () {
  var tabs = document.querySelectorAll('.tab');
  if (tabs.length > 0) {
    // variables to be used in loops
    var i, j, k, tab, group, tabsInGroup, percent;
    var tabGroups = document.querySelectorAll('.tab-group');

    // Attach the switchTab event to all tabs
    for (i = 0; i < tabs.length; i++) {
      tab = tabs[i];
      dom.addEvent(tab, dom.event(), switchTab);
    }

    for (j = 0; j < tabGroups.length; j++) {
      group = tabGroups[j];
      tabsInGroup = group.querySelectorAll('.tab');
      percent = 100 / tabsInGroup.length;

      for (k = 0; k < tabsInGroup.length; k++){
        if (dom.isIE8()) {
          tabsInGroup[k].style.width = percent + "%";
        } else {
          tabsInGroup[k].style.maxWidth = percent + "%";
        }

      }
    }
  }
};

function switchTab (event) {
  dom.preventDefault(event);

  var tab = dom.eventTarget(event);
  var tabs = dom.closest('tab-nav', tab).querySelectorAll('.tab');
  var index = dom.indexOf(tab, tabs);
  var contents = dom.closest('tab-group', tab).querySelectorAll('.tab-content');

  for (var i = 0; i < tabs.length; i++){
    dom.removeClass(tabs[i], 'active');
    dom.removeClass(contents[i], 'active');
  }

  dom.addClass(tab, 'active');
  dom.addClass(contents[index], 'active');
}

// ┌─────────────────────┐
// │ Initialize Tailcoat │
// └─────────────────────┘
// start up Tailcoat and attach all the patterns
// optionally pass an array of patterns you'd like to watch

T.init = function (patterns) {
  if (patterns) {
    for (var i = 0; i < patterns.length; i++) {
      T[patterns[i]]();
    }
  } else {
    T.accordion();
    T.drawer();
    T.dropdown();
    T.clickDropdown();
    T.modal();
    T.placeholder();
    T.siteSearch();
    T.subnav();
    T.tabs();
  }
  if ( dom.isTouch() ) {
    dom.addClass(document.body, 'tailcoat-touch');
  }
};

// ┌─────────────────┐
// │ Expose Tailcoat │
// └─────────────────┘
// implementation borrowed from Leaflet

function expose () {
  var oldT = window.T;

  T.noConflict = function () {
    window.T = oldT;
    return this;
  };

  window.T = T;
}

// define Tailcoat for Node module pattern loaders, including Browserify
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = T;
}

// define Tailcoat as an AMD module
else if (typeof define === 'function' && define.amd) {
  define(T);
}

// define Tailcoat as a global T variable, saving the original T to restore later if needed
else {
  expose();
}

})();

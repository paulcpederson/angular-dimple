/*! tailcoat - v1.1.8 - 2014-08-21
*   https://github.com/ArcGIS/tailcoat
*   Copyright (c) 2014 Environmental Systems Research Institute, Inc.
*   Apache 2.0 License */
(function Tailcoat () {

  var T = {};

  // ┌───────────────┐
  // │ DOM utilities │
  // └───────────────┘

  var dom = T.utils = {};

  // ┌──────────────────────┐
  // │ DOM event management │
  // └──────────────────────┘

  // returns standard interaction event based on touch support
  dom.event = function () {
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

    var tab;
    var target = dom.eventTarget(event);
    if (dom.hasClass(target, 'tab')) {
      tab = target;
    } else {
      tab = dom.closest('tab', target);
    }
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

  T.tabs();
})();

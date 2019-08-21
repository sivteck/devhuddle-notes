Web Components
==============

- Suite of different tech to create reusable custom elements
  - Custom elements: Set of JS APIs to define custom elements and their behaviour
  - Shadow DOM: Set of JS APIs to attach an encapsulated "shadow" DOM tree to an element
  - HTML templates: <template> and <slot> elements to write markup templates.


Implementing Web Component
--------------------------

1. Create a class or function which defines the web component functionality.
2. Register the custom element using CustomElementRegistry.define()
3. Optionally attach a shadow DOM, Element.attachShadow(). Add child elements, event listeners etc,. to the shadow DOM
4. Optionally define HTML template using <template> and <slot> 
5. Ensoy!

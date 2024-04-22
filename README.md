# Waft design system

> ⚠️ Warning: This project is meant primary for learning and currently is in work in progress state. Expect breaking changes.

All-purpose design system, meant to be used in small to medium, framework or non-framework projects, where using something simple and non-intrusive is valued more than customizability and high amount of options.
Its primary targeted to developers building an application for learning a new technology or something which doesn't require flashy looks.
Web is the main supported platform but the system allows easier extension with more platforms.

### Objectives
* Phase MVP
  * [x] Define and setup initial structure and tooling
  * [x] Analyze and describe the use case and the scope of the design system which will be developed
    * [x] Target Audience
    * [x] Use Cases
    * [x] Define Supported Platforms
    * [x] Establish Design Principles
    * [x] Catalog Components
    * [x] Explain customization level and how styling could be done
  * [x] Define anatomy elements and collect resources
    * [x] Core values/Principles
    * [x] Define initial tokens
    * [x] Define initial systems, if needed
    * [x] Define initial components
    * [x] Add some guides
  * [x] Setup npm package and document how it should be used
  * [x] Auto deployment script
  * [x] Add docs for at least one process - component contribution
  * [x] Develop at least one component from the MVP list by following a process

* Phase Next
  * [ ] Test with different frameworks and add examples/recipes
  * [ ] Fix problems with build tools import and importmap
  * [ ] Make automatic documentation for components to work
  * [ ] Define and describe versioning
  * [ ] More Design principles - Adaptive/Responsive/Accessibility
  * [x] Setup Chromatic with CI
  * [ ] Add metrics - e.g. accessibility threshold
  * [ ] Setup tests
  * [ ] Make it more engaging - colors, gradients, animations
  * [ ] Light/dark theme
  * [ ] SSR components support

#### Inspiration
* https://design-system.service.gov.uk/
* https://baklava.design/
* https://material-web.dev/about/intro/
* https://www.fast.design/
* https://m3.material.io/
* https://fluent2.microsoft.design/
* https://polaris.shopify.com/
* https://mailchimp.com/design/
* https://carbondesignsystem.com/
* https://nordhealth.design/
* https://vaadin.com/design-system
* https://github.com/ing-bank/lion
* https://studio.backlight.dev/edit/5vtJtbY04aoD1dGKcsu1/introduction/?p=doc

#### Technology stack
* [Lit](https://lit.dev/)
* [ViteJS](https://vitejs.dev/)
* [Storybook](https://storybook.js.org/)
* [Chromatic](https://www.chromatic.com/)

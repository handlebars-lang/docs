---
layout: InteractivePlaygroundLayout
example:
  template: "{{> myPartial myOtherContext }}"
  partials:
    myPartial: "{{information}}"
  input:
    myOtherContext:
      information: Interesting!
---

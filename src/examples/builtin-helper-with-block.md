---
layout: InteractivePlaygroundLayout
example:
  template: |+
    {{#with person}}
    {{firstname}} {{lastname}}
    {{/with}}
  input:
    person:
      firstname: Yehuda
      lastname: Katz
---

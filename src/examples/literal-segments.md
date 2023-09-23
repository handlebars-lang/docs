---
layout: playground
example:
  template: |
    {{!-- wrong: {{array.0.item}} --}}
    correct: array.[0].item: {{array.[0].item}}

    {{!-- wrong: {{array.[0].item-class}} --}}
    correct: array.[0].[item-class]: {{array.[0].[item-class]}}

    {{!-- wrong: {{./true}}--}}
    correct: ./[true]: {{./[true]}}
  input:
    array:
      - item: item1
        item-class: class1
    true: "yes"
---

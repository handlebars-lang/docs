---
layout: InteractivePlaygroundLayout
example:
  template: |
    {{#each specialChars}}
        raw: "{{{char}}}", escaped: {{char}}  
    {{/each}}
  input:
    specialChars:
      - char: "&"
      - char: "<"
      - char: ">"
      - char: '"'
      - char: "'"
      - char: "`"
      - char: "="
---

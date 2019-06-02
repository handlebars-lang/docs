---
layout: InteractivePlaygroundLayout
example:
  template: |
    {{people.[0].firstname}} {{people.[0].lastname}} lives in {{people.[0].[resident-in]}}
  partials:
  input:
    people:
      - firstname: Yehuda
        lastname: Katz
        resident-in: San Francisco
      - firstname: Nils
        lastname: Knappmeier
        resident-in: Darmstadt
---

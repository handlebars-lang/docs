---
layout: playground
example:
  template: |
    {{log "debug logging" level="debug"}}
    {{log "info logging" level="info"}}
    {{log "info logging is the default"}}
    {{log "logging a warning" level="warn"}}
    {{log "logging an error" level="error"}}
  preparationScript: |-
    Handlebars.logger.level = 'error'
    console.log('Current log level: ', Handlebars.logger.level, '\n---')
  input:
---

Press F12 and open the dev-console to see the log output. In order to see debug output, you may need to configure your
dev-tools properly.

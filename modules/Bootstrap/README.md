# Bootstrap Module

This module will concentrate every rule or functionality that the system depends of, like: plugins setup, authentication flows, etc.
The system will run this module before any interaction, independent of page that the user is visiting

WARNING:
Do not put any complex or slow script in this module.
Any global wrapper component MUST be placed in App module.

### Routines

Just place a file in "routines" folder that exports a Routine object (with a name and an action).
Don't forget to setup your new routine in routines/index.ts file and to setup the execution flow in routines/flow.json file.

### Routines flow (flow.json)

You can run routines asynchronously.
The first level is synchronous, and arrays inside this level are async.

```
"flow": [
  "example1",
  "example2",
  "example3",
  ["example4", "example5", "example6"]
  "example7",
]
```

This code will trigger example #1 to #3 synchronnously, then trigger example #4 to #6 asynchronously and wait they finish to trigger example7 routine.

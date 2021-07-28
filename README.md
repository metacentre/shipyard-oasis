# shipyard-oasis

List of standard ssb plugins loaded by [oasis](https://github.com/fraction/oasis/blob/master/src/ssb/flotilla.js#L6). Used with **shipyard** to start a server configured the same as oasis.

# Usage

Pass the list of standard ssb plugins to shipyard to load.

```js
const shipyard = require('@metacentre/shipyard')
const plugins = require('@metacentre/shipyard-oasis')

const sbot = shipyard({}, { plugins })
```

Now you have a standard oasis running. You can add other plugins too; see [@metacentre/shipyard](https://github.com/metacentre/shipyard) for details.

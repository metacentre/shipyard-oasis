const test = require('ava')
const shipyard = require('@metacentre/shipyard')
const oasisPlugins = require('..')
const oasisLeniency = require('../lenient')
const ssbServerPlugins = require('@metacentre/shipyard-ssb')
const ssbServerLeniency = require('@metacentre/shipyard-ssb/lenient')

const plugins = [...oasisPlugins, ...ssbServerPlugins]
const lenient = [...oasisLeniency, ...ssbServerLeniency]

test.serial(
  'creates shipyard secret-stack & loads both oasis & ssb-server plugins',
  t => {
    const sbot = shipyard(
      {
        appname: 'ssb-shipyard-test',
        caps: {
          shs: 'MVZDyNf1TrZuGv3W5Dpef0vaITW1UqOUO3aWLNBp+7A=',
          sign: 'qym3eJKBjm0E0OIjuh3O1VX8+lLVSGV2p5UzrMStHTs='
        }
      },
      { plugins, lenient }
    )

    t.truthy(sbot)
    t.true(sbot.hasOwnProperty('getVectorClock')) // ssb-db
    t.true(sbot.hasOwnProperty('plugins'))
    t.true(sbot.hasOwnProperty('private1'))
    t.true(sbot.hasOwnProperty('onion'))
    t.true(sbot.hasOwnProperty('unixSocket'))
    t.true(sbot.hasOwnProperty('noAuth'))
    t.true(sbot.hasOwnProperty('gossip'))
    t.true(sbot.hasOwnProperty('replicate'))
    t.true(sbot.hasOwnProperty('blobs'))
    t.true(sbot.hasOwnProperty('invite'))
    t.true(sbot.hasOwnProperty('logging'))
    t.true(sbot.hasOwnProperty('query'))
    t.true(sbot.hasOwnProperty('links'))
    t.true(sbot.hasOwnProperty('ws'))
    t.true(sbot.hasOwnProperty('ebt'))
    t.true(sbot.hasOwnProperty('ooo'))
    t.true(sbot.hasOwnProperty('conn'))
    t.true(sbot.hasOwnProperty('about'))
    t.true(sbot.hasOwnProperty('friends'))
    t.true(sbot.hasOwnProperty('lan'))
    t.true(sbot.hasOwnProperty('meme'))
    t.true(sbot.hasOwnProperty('query'))
    t.true(sbot.hasOwnProperty('search'))
    t.true(sbot.hasOwnProperty('tangle'))

    t.truthy(sbot.tunnel.isRoom)
    t.true(sbot.hasOwnProperty('local'))
    t.true(sbot.hasOwnProperty('links2'))
    sbot.close()
  }
)

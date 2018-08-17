import React from 'react'
import { hot } from 'react-hot-loader'
import Theme from 'docz-theme-default'

import { imports } from './imports'
import db from './db.json'

import Wrapper from 'src/util/DoczWrapper.js'

const Root = () => (
  <Theme
    db={db}
    imports={imports}
    hashRouter={true}
    websocketUrl="ws://127.0.0.1:60505"
    wrapper={Wrapper}
  />
)

export default hot(module)(Root)

### Entities manager

Reducer, actions & selectors created to simplify work with entities.

### Installation
```
yarn add @fakundo/redux-entities
```

### Creating reducer

```js
import { createReducer } from 'redux-entities'
const collectionNames = ['subjects', 'users']
export default createReducer(collectionNames)
```

### Actions (action creators)

- replaceEntities(collectionName, entities)
- mergeEntities(collectionName, entities)
- deleteEntities(collectionName, ...entityKeys)
- replaceCollections(collections)
- mergeCollections(collections)
- purgeCollections(...collectionNames)
- purgeAllCollections()

### Selectors

- getEntities(state, collectionName, ...entityKeys)
- getEntity(state, collectionName, entityKey)
- getCollection(state, collectionName)

### With custom reducer

```js
import { createReducer } from 'redux-entities'

const createCustomReducer = initialState => (state, action) => {
  switch (action.type) {
    case LOG_OUT:
      return initialState

    detault:
      return state
  }
}

export default createReducer(['subjects', 'users'], createCustomReducer)
```

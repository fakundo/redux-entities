### Entities manager

Reducer, actions & selectors created to simplify work with entities.

### Installation
```
yarn add @fakundo/redux-entities
```

### Creating reducer

```javascript
import { createReducer } from 'redux-entities'
export default createReducer('subjects', 'users')
```

### Actions (action creators)

- replaceEntities(collectionName, entities)
- mergeEntities(collectionName, entities)
- deleteEntities(collectionName, ...entityKeys)
- replaceCollections(collections)
- mergeCollections(collections)
- purgeAllCollections()

### Selectors

- getEntities(state, collectionName, ...entityKeys)
- getEntity(state, collectionName, entityKey)
- getCollection(state, collectionName)

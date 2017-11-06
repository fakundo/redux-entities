import pick from 'lodash/pick'

export const getEntities = (state, collectionName, ...entityKeys) => {
  return pick(state.entities[collectionName], entityKeys)
}

export const getEntity = (state, collectionName, entityKey) => {
  const entities = getEntities(state, collectionName, [entityKey])
  return entities[entityKey]
}

export const getCollection = (state, collectionName) => {
  return state.entities[collectionName]
}

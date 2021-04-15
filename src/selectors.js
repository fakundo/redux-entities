import pick from 'lodash/pick'

export const getEntities = (state, collectionName, ...entityKeys) => (
  pick(state.entities[collectionName], entityKeys)
)

export const getCollection = (state, collectionName) => (
  state.entities[collectionName]
)

export const getEntity = (state, collectionName, entityKey) => {
  const entities = getEntities(state, collectionName, [entityKey])
  return entities[entityKey]
}

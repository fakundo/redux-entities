export const REPLACE_ENTITIES = 'REPLACE_ENTITIES'
export const MERGE_ENTITIES = 'MERGE_ENTITIES'
export const DELETE_ENTITIES = 'DELETE_ENTITIES'
export const REPLACE_ENTITY_COLLECTIONS = 'REPLACE_ENTITY_COLLECTIONS'
export const MERGE_ENTITY_COLLECTIONS = 'MERGE_ENTITY_COLLECTIONS'
export const PURGE_ENTITY_COLLECTIONS = 'PURGE_ENTITY_COLLECTIONS'
export const PURGE_ALL_ENTITY_COLLECTIONS = 'PURGE_ALL_ENTITY_COLLECTIONS'

export const replaceEntities = (collectionName, entities) => ({
  type: REPLACE_ENTITIES,
  collectionName,
  entities,
})

export const mergeEntities = (collectionName, entities) => ({
  type: MERGE_ENTITIES,
  collectionName,
  entities,
})

export const deleteEntities = (collectionName, ...entityKeys) => ({
  type: DELETE_ENTITIES,
  collectionName,
  entityKeys,
})

export const replaceCollections = (collections) => ({
  type: REPLACE_ENTITY_COLLECTIONS,
  collections,
})

export const mergeCollections = (collections) => ({
  type: MERGE_ENTITY_COLLECTIONS,
  collections,
})

export const purgeCollections = (...collectionNames) => ({
  type: PURGE_ENTITY_COLLECTIONS,
  collectionNames,
})

export const purgeAllCollections = () => ({
  type: PURGE_ALL_ENTITY_COLLECTIONS,
})

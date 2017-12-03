import merge from 'lodash/merge'
import mapValues from 'lodash/mapValues'
import omit from 'lodash/omit'
import reduce from 'lodash/reduce'
import assign from 'lodash/assign'
import * as actions from './actions'

export default (collectionNames, createCustomReducer = () => state => state) => {
  const initialState = reduce(
    collectionNames,
    (acc, collectionName) => assign(acc, { [collectionName]: undefined }),
    {}
  )

  const customReducer = createCustomReducer(initialState)

  return (state = initialState, action, ...rest) => {
    switch (action.type) {
      case actions.REPLACE_ENTITIES: {
        const { collectionName, entities } = action
        return {
          ...state,
          [collectionName]: {
            ...state[collectionName],
            ...entities
          }
        }
      }

      case actions.MERGE_ENTITIES: {
        const { collectionName, entities } = action
        const mergedEntities = mapValues(
          entities,
          (entity, key) => merge({}, state[collectionName][key], entity)
        )
        return {
          ...state,
          [collectionName]: {
            ...state[collectionName],
            ...mergedEntities
          }
        }
      }

      case actions.DELETE_ENTITIES: {
        const { collectionName, entityKeys } = action
        return {
          ...state,
          [collectionName]: omit(state[collectionName], entityKeys)
        }
      }

      case actions.REPLACE_ENTITY_COLLECTIONS:
        return { ...state, ...action.collections }

      case actions.MERGE_ENTITY_COLLECTIONS: {
        const mergedCollections = mapValues(
          action.collections,
          (collection, collectionName) => merge({}, state[collectionName], collection)
        )
        return { ...state, ...mergedCollections }
      }

      case actions.PURGE_ENTITY_COLLECTIONS: {
        const purgedCollections = reduce(
          action.collectionNames,
          (acc, collectionName) => assign(acc, { [collectionName]: undefined }),
          {}
        )
        return { ...state, ...purgedCollections }
      }

      case actions.PURGE_ALL_ENTITY_COLLECTIONS:
        return mapValues(state, () => undefined)

      default:
        return customReducer(state, action, ...rest)
    }
  }
}

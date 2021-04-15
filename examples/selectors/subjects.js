import { getCollection } from '@fakundo/redux-entities'

export const getSubjects = (state) => (
  getCollection(state, 'subjects')
)

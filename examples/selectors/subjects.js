import { getCollection } from '../../src'

export const getSubjects = state => getCollection(state, 'subjects')

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { getSubjects } from '../selectors/subjects'
import { fetchSubjectsAndDispatch } from '../actions/subjects'

const mapStateToProps = state => ({
  subjects: getSubjects(state)
})

const mapDispatchToProps = {
  fetchSubjectsAndDispatchAction: fetchSubjectsAndDispatch
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Subjects extends Component {
  static propTypes = {
    subjects: PropTypes.object,
    fetchSubjectsAndDispatchAction: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchSubjectsAndDispatchAction, subjects } = this.props
    if (isEmpty(subjects)) {
      fetchSubjectsAndDispatchAction()
    }
  }

  render() {
    const { subjects } = this.props
    // eslint-disable-next-line
    console.warn('Render Subjects: ', subjects)
    return isEmpty(subjects) ?
      <span>Loading ...</span> :
      <pre>{ JSON.stringify(subjects, null, ' ') }</pre>
  }
}

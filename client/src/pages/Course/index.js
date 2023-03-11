import React from 'react';

import { gql } from '@apollo/client';

import useUpdate from '../../hooks/useUpdate';
import Wrapper from '../../components/Wrapper';

const GET_COURSE_QUERY = gql`
  query GetCour($id: ID) {
    getCour(id: $id) {
      id
      title
    }
  }
`;

const UPDATE_COURSE_MUTATION = gql`
  mutation UpdateCours($id: ID, $document: CourseInput) {
    updateCours(id: $id, document: $document) {
      id
      title
    }
  }
`;

export default function Course() {
  const { formRender, actions, header, loading, error } = useUpdate({
    getQuery: GET_COURSE_QUERY,
    idName: 'id',
    addPath: '/members/add',
    updateMutation: UPDATE_COURSE_MUTATION,
    keysToRemove: ['__typename', '_id', 'id'],
    pathBack: '/cours',
    resourceType: 'Course',
    queryName: 'getCour',
  });

  return (
    <Wrapper loading={loading} error={error}>
      <>
        {header}

        {formRender}
        {actions}
      </>
    </Wrapper>
  );
}

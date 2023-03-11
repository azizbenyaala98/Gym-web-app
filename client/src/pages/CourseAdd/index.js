import React from 'react';
import { gql } from '@apollo/client';
import useAdd from '../../hooks/useAdd';

const ADD_COURSE_MUTATION = gql`
  mutation AddCours($document: CourseInput) {
    addCours(document: $document) {
      id
      title
    }
  }
`;

export default function CourseAdd() {
  const { rendrer } = useAdd({
    addMutation: ADD_COURSE_MUTATION,
    pathBack: '/cours',
    fields: ['title'],
    variableName: 'document',
    resourceType: 'course',
  });
  return <div>{rendrer}</div>;
}

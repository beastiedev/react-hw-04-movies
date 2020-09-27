import React, { Fragment } from 'react';

const ReleaseYear = ({ date }) => {
  const parseDate = () => {
    const year = new Date(date).getFullYear();
    if (isNaN(year)) {
      return '';
    }
    return `(${year.toString()})`;
  };

  return <Fragment>{parseDate()}</Fragment>;
};

export default ReleaseYear;

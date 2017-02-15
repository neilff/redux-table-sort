import React from 'react';

import LoadingDialog from './LoadingDialog';

// Shows the loading dialog if the prop `isLoading` is true
const LoadingOrComponent = (WrappedComponent) => {
  return (props) => (
    props.isLoading ?
      <LoadingDialog /> :
      <WrappedComponent { ...props } />
  );
};

export default LoadingOrComponent;

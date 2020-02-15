import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ExampleComponent = ({ children, className }) => {
  return <Div className={className}>{children && children}</Div>;
};

const Div = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: sans-serif;
  padding: 20px 40px;
  background: red;
  background: linear-gradient(to right, #734b6d, #42275a);
  color: #fff;
`;

ExampleComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ExampleComponent;

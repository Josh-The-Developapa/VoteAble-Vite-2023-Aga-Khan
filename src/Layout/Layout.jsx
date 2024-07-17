import React from 'react';
import Header from '../components/Header/Header';

function Layout(props) {
  return (
    <div className="flex-bg">
      <Header />
      {props.page}
    </div>
  );
}

export default Layout;

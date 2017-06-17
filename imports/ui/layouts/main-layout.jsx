import React,{Component} from 'react';
import SiteHeader from '../components/header';

const MainLayout = ({children}) => {
  return (
    <div className="main-layout-wrapper">
      <SiteHeader />
      <main>
        {children}
      </main>
    </div>
  )
}

export default MainLayout;

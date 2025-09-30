import React from 'react'
import Principles from './components/Principles';
import Call from './components/Call';
import CoreValues from './components/CoreValues';
import TimelineSection from './components/Timeline';
import ClientLogoSlider from './components/ClientLogoSlider';

const page = () => {
  return (
    <>
      <ClientLogoSlider/>
      <TimelineSection/>
      <CoreValues/>
      <Call/>
      <Principles/>
    </>
    
  );
}

export default page
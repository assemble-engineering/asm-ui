import React from 'react';
import {Video} from '@assemble-inc/core';

export default {
  title: 'Video',
  component: Video,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Video {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  className:'asm-video',
  autoPlay:false,
  controls:false,
  errorMessage:'Your browser does not support the video tag.',
  height:'100%',
  width:'100%',
  loop:false,
  muted:false,
  playsInline:false,
  poster:'',
  preload:'none',
  sources:[{
    src: '/sample-mp4-file-small.mp4',
    type: 'video/mp4'
  }],
};

import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "AWS Cloud Projects",
    'href': "BhavikGandhi_CloudProjectWork.pdf",
    'desc': "Professional Engineer with over 10+ years of experience ranging across numerous Technology fields such as build release management, software configuration, design, development and cloud implementation, with drive to learn new things.",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/antelope.png",
      'comment': ""
    }
  },
  {
    'title': "AWS Cloud Demo",
    'href': "BhavikGandhi_AWSCloudDemo.pdf",
    'desc': "Example Demo work for AWS Cloud Projects",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/car.png",
      'comment': ""
    }
  },
  {
    'title': "Prod-DR Work",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/balloon.png",
      'comment': ""
    }
  },
  {
    'title': "Migration Work",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/cheetah.png",
      'comment': ""
    }
  }

]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));

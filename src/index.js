// Importing Modules
import React from "react";
import { createRoot } from "react-dom/client";
import Comment from './comment'; // Ensure this path is correct
import profile1 from  './media/person1.jpg'
import profile2 from  './media/person2.jpg'
import profile3 from  './media/person3.jpg'

// Main App Component
const App = () => {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      <Comment name='Dave' date='Today at 5:00AM' comment='Hey! Nice work.'pfp={profile1}/>
      <Comment name='Sarah' date='Yesterday at 4:30PM' comment='wowowowow!' pfp={profile2}/>
      <Comment name='Clementine' date='3  days ago' comment=':3 <3' pfp={profile3}/>
    </div>
  );
};

// Find the root element in your HTML
const rootElement = document.querySelector("#root");

// Create a root and render your App component
const root = createRoot(rootElement);
root.render(<App />);

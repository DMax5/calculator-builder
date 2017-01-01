import React from 'react';
import './static-text.css';

const TextItem = ({headerText, headerStyle, bodyText, bodyStyle}) => {
  return (
    <div className="text-item">
      <div className="header" style={headerStyle}>
        {headerText}
      </div>
      <div className="content" style={bodyStyle}>
        {bodyText}
      </div>
    </div>
  );
};

export default TextItem;
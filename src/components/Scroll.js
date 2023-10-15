import React from 'react';

const Scroll = (props) =>{
 return(
    <div style={{overflowY: 'scroll', border: '1px solid rgb(4,78,97)', height: '800px' }}>
     {props.children}
    </div>
  );
};

export default Scroll;
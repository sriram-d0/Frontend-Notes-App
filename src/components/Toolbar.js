import React from 'react';
const Toolbar=({execute})=>{
    return(
        <div className='editor-toolbar'>
            <button onClick={()=>execute('bold')}>Bold</button>
            <button onClick={()=>execute('italic')}>Italic</button>
            <button onClick={()=>execute('underline')}>Underline</button>
            <button onClick={()=>execute('justifyLeft')}>Align Left</button>
            <button onClick={()=>execute('justifyCenter')}>Align Center</button>
            <button onClick={()=>execute('justifyRight')}>Align Right</button>
            <select onChange={(e)=>execute('fontSize',e.target.value)}>
                <option value="3">Normal</option>
                <option value="4">Large</option>
                <option value="5">Larger</option>
            </select>
        </div>
    );
};
export default Toolbar;
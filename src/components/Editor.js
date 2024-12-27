import React,{useRef} from 'react';
import Toolbar from './Toolbar';
const Editor=({addNote})=>{
    const editorRef=useRef(null);
    const execute=(command,value=null)=>{
        document.execCommand(command,false,value);
    };
    const handleSaveNote=()=>{
        if(editorRef.current){
            const content=editorRef.current.innerHTML;
            addNote(content);
            editorRef.current.innerHTML='';
        }
    };
    return(
        <div>
            <Toolbar execute={execute}/>
            <div 
                ref={editorRef}
                className='editor-area'
                contentEditable
                placeholder="Note here..."></div>
                <div className='actions'>
                    <button onClick={handleSaveNote}>Save Note</button>
                </div>
        </div>
    );
};

export default Editor;
import React from 'react'

function Button({children,click}){
    return(
        <div>
            <button onClick={click}>{children}</button>
        </div>
    )
}

function PlayButton({movie}){
    function handle_click(){
        alert(`vijay's${movie}`)
    }

    return(
        <Button click={handle_click}>play {movie}</Button>
    )
}
function UploadButton(){
    
    return(
        <Button click={()=>alert("uploading...")}>upload_img</Button>
    )
}

const ToolBar = () => {
  return (
    <div>
        <PlayButton movie="leo"/>
        <UploadButton/>
    </div>
  )
}

export default ToolBar
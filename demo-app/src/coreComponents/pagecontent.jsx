import * as reacts from 'react';

function ButtonSwitch(){

    const [state, updState] = reacts.useState(true);

    function buttonClick(){
        updState(!state);
    }

    function getState() {
        if (state) {
            return "ON";}
        else 
            {return "OFF";}
    }

    return (<button onClick={buttonClick}>{getState()}</button>);
}

const pageLibrary = {
    "ButtonSwitch":ButtonSwitch
};



export default function PageContent(pageId) {
    const page = pageLibrary[pageId];
    console.log(page)
    return page();
}
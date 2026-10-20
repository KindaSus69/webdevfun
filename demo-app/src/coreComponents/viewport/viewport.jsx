import PageContent from '../pagecontent';

export default function Viewport(){
    return (
        <div style={{width:"100%",flex:"1", display:"flex",flexDirection:'column',
            alignItems:"center", justifyContent:"center"

        }}>
            {PageContent("ButtonSwitch")}
        </div>
    );
}
const pages = import.meta.glob('/src/pages/**/*.jsx', {eager: true});

const pageRegistry = {};

for (const pagePath in pages) {
    const pageId = pagePath.split('/')[3];
    pageRegistry[pageId] = pages[pagePath].default;
}

export default function Viewport({pageId}){

    function loadPage(Id){
        
        let PageContents;
        console.log("loading page: '",Id,"'")


        try {
           PageContents = pageRegistry[Id];

           if (!PageContents || typeof PageContents !== "function") {
            throw new Error("404 page not found!");
           }

        } catch (error) {
            console.warn(error.message);
            PageContents = () => {return(<strong>404 not found!</strong>)};
        }
        
        return <PageContents/>;
    }

    return (
        <div className = {"app-viewport"} style={{flex:"1"}}>
            {loadPage(pageId)}
        </div>
    );
} 
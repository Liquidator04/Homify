import "./SearchCard.css"

export default function SearchCard({IMGurl,Name,Address,Price,Sqft,BHK,ContactNumber}){
    return (
        <>
            <div className="content-container">
                <img src={IMGurl} height={150} width={150}></img>
                <div>
                    {Name}
                    {Address}
                    <div class="data-container">
                        {Price}
                        {Sqft}
                        {BHK}
                    </div>
                </div>
            </div>
        </>
    )
}
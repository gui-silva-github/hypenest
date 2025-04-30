export default function Logo({h3, logo}){
    return (
        <>
        <div className="logo">
            <h3>{h3} <span>{logo}</span></h3>
        </div>
        </>
    )
}
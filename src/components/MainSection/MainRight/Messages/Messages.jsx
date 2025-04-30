export default function Messages({showMessageShadow, children}){
    return (
        <div className={`messages ${showMessageShadow ? 'boxshadow1' : ''}`}>
            {children}
        </div>
    )
}
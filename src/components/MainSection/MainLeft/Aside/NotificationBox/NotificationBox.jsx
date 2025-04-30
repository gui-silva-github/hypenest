export default function NotificationBox({notifications, children}){
    
    return (
        <div className="notification-box" style={{ display: notifications ? 'block' : 'none' }} >
            {children}
        </div>
    );
}
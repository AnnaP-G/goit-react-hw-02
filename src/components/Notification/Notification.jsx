import css from './Notification.module.css'
function Notification() {
  return (
    <div className={css.notificstion}>
      <p className={css.notificationText}>No feedback yet</p>
    </div>
  );
}

export default Notification;

import { useEffect, useState } from 'react';

const Notification = ({ message }: { message: String }) => {
  const [hideNotification, setHideNotification] = useState(true);

  useEffect(() => {
    // if (message === '') return;
    setHideNotification(() => false);

    const timeoutId = setTimeout(() => {
      setHideNotification(() => true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [message]);

  return (
    <div
      className={`notification ${
        hideNotification && 'hide-notification'
      }`}
    >
      {message}
    </div>
  );
};

export default Notification;

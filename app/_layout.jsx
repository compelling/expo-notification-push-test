import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { Stack } from 'expo-router';

export default function RootLayout() {
  useEffect(() => {
    // this fails in SDK 54 / RN 0.81 Bridgeless
    const sub = Notifications.addNotificationReceivedListener(n => {
      console.log("Received:", n);
    });
    return () => sub.remove();
  }, []);

  return <Stack />;
}
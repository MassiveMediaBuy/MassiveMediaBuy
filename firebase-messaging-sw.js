importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');
firebase.initializeApp({
    'messagingSenderId': '740713806035'
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon,
        click_action: payload.notification.click_action,
        requireInteraction: true
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
});
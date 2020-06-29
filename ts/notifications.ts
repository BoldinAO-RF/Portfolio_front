let elNotificationContent = document.getElementById("notifications_content");
let elNotification = document.getElementById("notifications");

elNotification.onclick = function () {
    if(getComputedStyle(elNotificationContent).visibility === "hidden"){
        elNotificationContent.style.visibility = 'visible';
    } else {
        elNotificationContent.style.visibility = 'hidden';
    }        
};
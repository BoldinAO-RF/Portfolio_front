var boxForMessages = $('#messages_box');
var messageBox = $('#message_to_send_textarea');

var divMessage;
var chatProfileInfo;
var profilePhoto;
var chatMessageTime;
var chatText;


$(function() {
    $('body').on("keyup", messageBox, function(event){
        if(event.keyCode == 13){
            divMessage = document.createElement('div');
            divMessage.className = 'chat_message';

            boxForMessages.append(divMessage);

            chatProfileInfo = document.createElement('div');
            chatProfileInfo.className = 'chat_profile_info';
            
            divMessage.append(chatProfileInfo);
            
            chatProfileInfo.innerHTML = 'Some Name';
            profilePhoto = document.createElement('img');
            profilePhoto.src = '/img/logoProfileMan.png';

            chatProfileInfo.append(profilePhoto);

            chatMessageTime = document.createElement('div');
            chatMessageTime.className = 'chat_message_time';

            divMessage.append(chatMessageTime);
            
            chatMessageTime.innerHTML = '8m';
            
            chatText = document.createElement('div');
            divMessage.append(chatText);

            chatText.className = 'chat_text';
            chatText.innerHTML = messageBox.val();
            messageBox.val('');
        }
    })
});
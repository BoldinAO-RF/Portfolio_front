var boxForMessages = $('#messages_box');
var messageBox = $('#message_to_send_textarea');

var divMessage;
var chatProfileInfo;
var profilePhoto;
var chatMessageTime;
var chatText;

async function sendRequestAddMessage() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'post',
        data: JSON.stringify({
            title: 'fooX',
            body: 'sasasmbar1',
            userId: 145620
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        dataType: 'json',
        success: function (data) {
            console.info(data);
        }
    });
}

async function getMessages() {
    $.ajax({
        type: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        function (data) {
            console.log(data);
        }
    })
}

async function sendMessage() {
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

$(function() {
    $('body').on("keyup", messageBox, async function(event){
        if(event.keyCode == 13){
            await getMessages();
            await sendMessage();
            await sendRequestAddMessage();
        }
    })
});
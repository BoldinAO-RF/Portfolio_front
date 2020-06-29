var boxForMessages = $('#messages_box');
var messageBox = $('#message_to_send_textarea');

var divMessage;
var chatProfileInfo;
var profilePhoto;
var chatMessageTime;
var chatText;

var urlPost, urlGet;

class test {

    constructor() {
        urlPost = 'https://jsonplaceholder.typicode.com/posts';
        urlGet = 'https://jsonplaceholder.typicode.com/todos/1';
    }

    sendRequestAddMessage() {
        $.ajax({
            url: urlPost,
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

    getMessages() {
        $.ajax({
            type: 'get',
            url: urlGet,
        }).then((data) => {
            console.log(data);
        })
    }

    sendMessage() {
        divMessage = document.createElement('div');
        divMessage.className = 'chat_message';

        boxForMessages.append(divMessage);

        chatProfileInfo = document.createElement('div');
        chatProfileInfo.className = 'chat_profile_info';

        divMessage.append(chatProfileInfo);

        chatProfileInfo.innerHTML = 'Some Name';
        profilePhoto = document.createElement('img');
        profilePhoto.src = './img/logoProfileMan.png';

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
}

$(() => {
    $('body').on("keyup", messageBox, (event) => {
        if (event.keyCode == 13) {
            var s = new test();
            s.getMessages();
            s.sendMessage();
            s.sendRequestAddMessage();
        }
    })
});
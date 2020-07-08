import { Msg } from "./data/messageContract";

var _urlPost, _urlGet;

export class Message {
    private static _divMessage:any;
    private static _chatProfileInfo:any;
    private static _profilePhoto:any;
    private static _chatMessageTime:any;
    private static _chatText:any;

    private static _messageBox:JQuery;
    private static _boxForMessages:JQuery;

    public get boxForMessages() : JQuery {
        return Message._boxForMessages;
    }
    
    public get messageBox() : JQuery {
        return Message._messageBox;
    }
    

    constructor() {
        _urlPost = 'https://jsonplaceholder.typicode.com/posts';
        _urlGet = 'https://localhost:32768/api/Message';

        Message._boxForMessages = $('#messages_box');
        Message._messageBox = $('#message_to_send_textarea')
    }

    public static addMessageToFront(text:string, fullNameUser:string) {
        Message._divMessage = document.createElement('div');
        Message._divMessage.className = 'chat_message';

        Message._boxForMessages.append(Message._divMessage);

        Message._chatProfileInfo = document.createElement('div');
        Message._chatProfileInfo.className = 'chat_profile_info';

        Message._divMessage.append(Message._chatProfileInfo);

        Message._chatProfileInfo.innerHTML = fullNameUser;
        Message._profilePhoto = document.createElement('img');
        Message._profilePhoto.src = './img/logoProfileMan.png';

        Message._chatProfileInfo.append(Message._profilePhoto);

        Message._chatMessageTime = document.createElement('div');
        Message._chatMessageTime.className = 'chat_message_time';

        Message._divMessage.append(Message._chatMessageTime);

        Message._chatMessageTime.innerHTML = '8m';

        Message._chatText = document.createElement('div');
        Message._divMessage.append(Message._chatText);

        Message._chatText.className = 'chat_text';
        Message._chatText.innerHTML = text;
    }

    public static getMessages() {
        $.ajax({
            type: 'get',
            url: _urlGet,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                const deserialized:Msg[] = jQuery.extend(true, [], msg);
                deserialized.forEach(element => {
                    Message.addMessageToFront(element.messageText, element.userFullName);
                });
            },
            error: function (req, status, error) {
                console.log(req, status, error);
            }
        })
    }
    
    public static sendRequestAddMessage() {
        $.ajax({
            url: _urlPost,
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
        // Message.addMessageToFront(Message._messageBox.val().toString());
        Message._messageBox.val('');
    }
}

var message = new Message();

$(() => {
    Message.getMessages();
    $('body').on("keyup", message.messageBox, (event) => {
        if (event.keyCode == 13) {
            Message.sendRequestAddMessage();
        }
    })
});
export class Msg {
  public messageText: string
  public userFullName: string

  constructor(init: Msg) {
    this.messageText = init.messageText;
    this.userFullName = init.userFullName;
  }
}
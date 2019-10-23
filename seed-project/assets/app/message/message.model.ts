export class MessageModel {
    constructor(
        public content: string,
        public username: string,
        public messageId?: string,
        public userId?: string
    ) {}
}
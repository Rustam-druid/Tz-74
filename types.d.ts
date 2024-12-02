export interface Messages {
    id:string;
    message:string;
}

export type MessageId = Omit<Messages, 'id'>;
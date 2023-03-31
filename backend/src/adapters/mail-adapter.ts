export interface MailAdapterProps{
    recipient:string
    subject:string,
    body:string
}

export interface MailAdapter{
    sendMail:(data:MailAdapterProps) =>Promise<void>
}
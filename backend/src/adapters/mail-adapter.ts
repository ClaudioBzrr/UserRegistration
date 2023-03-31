export interface MailAdapterProps{
    recipient:string
    subject:string,
    html:string
}

export interface MailAdapter{
    sendMail:(data:MailAdapterProps) =>Promise<void>
}
import emailjs from "@emailjs/browser";

interface EmailSenderProps {
    name: string,
    email: string,
    message: string,
}

const EmailSender = ({name, email, message} : EmailSenderProps) => {

    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

    if(!serviceId || !templateId || !publicKey){
        console.log("Missing emailjs configuration. Check .env variables");
        return;
    }

    // send the mail now
    emailjs.send(
        serviceId,
        templateId,
        {
            name: name,
            email: email,
            message: message
        },
        publicKey
    ).then(
        (result) => {
            console.log("Email sent to ", name);
        },
        (error) => {
            console.log("Unable to send email ", error);
        }
    )

}

export default EmailSender;
'use client'
import EmailSender from '@/app/helpers/EmailSender';
import { Send } from 'lucide-react';
import { useState } from 'react';

const SendMessageBox = () => {

  const [Name, setName] = useState<string>('')
  const [Email, setEmail] = useState<string>('')
  const [Subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleFeedbackFormSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {

      EmailSender({name: Name, email: Email, message: Subject});
      setName("");
      setEmail("");
      setSubject("");
      setMessage("Your message was sent successfully!");
      setTimeout(() => {
        setMessage("");
      }, 3000);

    } catch (error) {

      console.log("Error occured sending mail: ", error)
      
    } finally {
      setLoading(false);
    }

  }

  return (
    <div className='p-6 py-8 bg-gray-800 rounded-lg w-full max-w-[51rem] min-w-sm'>

      <div className='flex flex-col gap-5'>

        <h3 className='font-bold md:text-xl text-lg'>
          Send Me a Message
        </h3>

        <form onSubmit={handleFeedbackFormSubmit}>
          <div className='flex flex-col gap-5'>

            {/* name email section */}
            <div className='flex flex-col md:flex-row gap-4'>

              <div className='flex flex-col gap-1 md:w-1/2 w-full'>
                <label htmlFor="name" className='font-semibold'>
                  Name
                </label>
                <input
                  className='focus:outline-none focus:ring-cyan-400 focus:ring-3 rounded-sm border-gray-400 border focus:border-none p-2 px-4'
                  placeholder='Your name'
                  id='name'
                  type="text"
                  value={Name}
                  onChange={(e) => (setName(e.target.value))}
                  required
                />
              </div>

              <div className='flex flex-col gap-1 md:w-1/2 w-full'>
                <label htmlFor="email" className='font-semibold'>
                  Email
                </label>
                <input
                  className='focus:outline-none focus:ring-cyan-400 focus:ring-3 rounded-sm border-gray-400 border focus:border-none p-2 px-4'
                  placeholder='Your email'
                  type="email"
                  id="email"
                  value={Email}
                  onChange={(e) => (setEmail(e.target.value))}
                  required
                />
              </div>

            </div>

            {/* message section */}
            <div className='flex flex-col gap-2'>
              <label htmlFor="message" className='font-semibold'>
                Subject
              </label>
              <textarea
                className='focus:outline-none focus:ring-cyan-400 focus:ring-3 rounded-sm border-gray-400 border focus:border-none p-2 px-4 w-full min-h-[70px]'
                placeholder='Your message'
                id='subject'
                value={Subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            {message && <p className='text-sm text-green-500'>{message}</p>}

            {/* submit button */}
            <button
              className='bg-gradient-to-r from-purple-400 to-cyan-300 text-black font-medium rounded-md p-2 flex justify-center items-center gap-5 cursor-pointer active:scale-98 transition-all duration-200'
              type='submit'
            >
              Send Message
              <span>
                <Send className='h-4 w-4' />
              </span>
            </button>

          </div>
        </form>

      </div>

    </div>
  )
}

export default SendMessageBox

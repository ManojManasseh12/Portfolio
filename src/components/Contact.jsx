import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo, socialLinks, emailjsConfig } from '../data/portfolioData';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const form = formRef.current;
    const firstName = form.querySelector('#firstName')?.value.trim() || '';
    const lastName = form.querySelector('#lastName')?.value.trim() || '';
    const email = form.querySelector('#email')?.value.trim() || '';
    const message = form.querySelector('#message')?.value.trim() || '';

    // Validate required fields
    if (!firstName || !email || !message) {
      setStatus('error');
      setFeedback('Please fill in your name, email, and message.');
      setTimeout(() => {
        setStatus('idle');
        setFeedback('');
      }, 3500);
      return;
    }

    setStatus('sending');
    setFeedback('');

    try {
      const serviceId = emailjsConfig?.serviceId;
      const templateId = emailjsConfig?.templateId;
      const publicKey = emailjsConfig?.publicKey;

      const isEmailJsValid = 
        serviceId && 
        serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
        templateId && 
        templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
        publicKey && 
        publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

      if (isEmailJsValid) {
        // Send through EmailJS
        const templateParams = {
          from_name: `${firstName} ${lastName}`.trim(),
          first_name: firstName,
          last_name: lastName,
          from_email: email,
          reply_to: email,
          email: email,
          to_name: personalInfo.name || 'Manoj',
          message: message,
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // Fallback: Send directly to Manoj's inbox via Formsubmit
        const recipientEmail = personalInfo.emails.primary || 'manojithesh1205@gmail.com';
        const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: `${firstName} ${lastName}`.trim(),
            email: email,
            message: message,
            _subject: `Portfolio Contact from ${firstName} ${lastName}`.trim(),
            _captcha: 'false',
          }),
        });

        if (!response.ok) {
          throw new Error(`FormSubmit returned HTTP ${response.status}.`);
        }
      }

      setStatus('success');
      setFeedback('Message sent successfully! I will get back to you soon.');
      formRef.current?.reset();
    } catch (err) {
      console.error('Contact submission failed:', err);
      setStatus('error');
      setFeedback('Your message could not be sent. Please try again or email me directly.');
    }

    setTimeout(() => {
      setStatus('idle');
      setFeedback('');
    }, 5000);
  };

  return (
    <section 
      id="contact" 
      className="bg-[#0b1220] pt-24 md:pt-32 pb-24 md:pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-900 scroll-mt-20 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Simple Clean Section Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Reach Me
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Let's connect & build <span className="text-[#52dec5]">together</span>.
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            Have a project in mind, an opportunity, or a question? Send me a message below or connect directly on LinkedIn.
          </p>
        </div>

        {/* Clean Red Form Card */}
        <div 
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-[#111c2e] w-full rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 text-white shadow-[0_25px_60px_rgba(82,222,197,0.08)] border border-red-400/20"
        >
          {/* Top Card Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-8 border-b border-white/15">
            <div className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase opacity-95 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
              Send A Message
            </div>
            
            {/* LinkedIn Quick Link */}
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-white/10 hover:bg-white hover:text-[#187e71] border border-white/25 px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-10 w-full">
            <div className="flex flex-col md:flex-row gap-8 md:gap-14 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName" 
                    name="first_name"
                    placeholder="First Name" 
                    required
                    aria-label="First Name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="lastName" 
                    name="last_name"
                    placeholder="Last Name" 
                    aria-label="Last Name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="user_email"
                    placeholder="Email" 
                    required
                    aria-label="Email address"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder="Type your message here" 
                    required
                    aria-label="Your message"
                    rows="5"
                    className="w-full h-full min-h-[140px] md:min-h-[170px] bg-transparent border-b border-white/40 pb-3 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-end justify-between pt-4">
              {/* Permission Checkbox */}
              <div className="flex items-start gap-3 text-xs md:text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission" 
                  name="permission"
                  defaultChecked
                  className="mt-1 w-4 h-4 rounded border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[300px] leading-snug select-none">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Direct Inquiry & Submit Button */}
              <div className="w-full md:w-auto flex flex-col sm:flex-row sm:items-end gap-6 justify-between">
                <div className="text-xs text-white/80 font-medium max-w-[260px] leading-relaxed">
                  Direct inquiries:{' '}
                  <a 
                    href={`mailto:${personalInfo.emails.primary}`} 
                    className="underline hover:text-white transition-colors break-all"
                  >
                    {personalInfo.emails.primary}
                  </a>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className={`px-8 py-3.5 rounded-full border border-white text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 group whitespace-nowrap shadow-lg cursor-pointer ${
                    status === 'sending' 
                      ? 'opacity-60 cursor-not-allowed bg-white/10' 
                      : status === 'success'
                      ? 'bg-emerald-600 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                      : status === 'error'
                      ? 'bg-rose-900 border-rose-800 text-white'
                      : 'hover:bg-white hover:text-[#187e71] hover:scale-105 active:scale-95'
                  }`}
                >
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : status === 'success' ? (
                    <span className="flex items-center gap-2 font-semibold">
                      Sent Successfully ✓
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Success Feedback banner */}
            {feedback && (
              <div className="text-xs font-semibold py-2.5 px-4 rounded-xl text-center bg-white/15 backdrop-blur-sm border border-white/20 text-white animate-fade-in">
                {feedback}
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;

import { EarthCanvas } from '@app/components/canvas';
import { SectionWrapper } from '@app/hoc';
import { slideIn } from '@utils/motion';
import { motion } from 'framer-motion';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { styles } from 'src/style';

import emailjs from '@emailjs/browser';

const formEntry = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(formEntry);
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Michael',
          from_email: form.email,
          to_email: 'kasmickleva@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Thank you. I will get back to you as soon as possible.');
          setForm(formEntry);
        },
        () => alert('Ahh, something went wrong. Please try again.')
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type in your message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-4 px-8 outline-none w-fit text-white font-bold shadow-primary shadow-md rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');

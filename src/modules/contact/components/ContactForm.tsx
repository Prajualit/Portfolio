import clsx from 'clsx';
import { useState } from 'react';
import { FiClock as ClockIcon } from 'react-icons/fi';

import Button from '@/common/components/elements/Button';

interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

const formInitialState: FormDataProps = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataProps>(formInitialState);

  const [formErrors, setFormErrors] = useState<Partial<FormDataProps>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: value ? undefined : `${name} is required`,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const errors: Partial<FormDataProps> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.message.trim()) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      alert('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    try {
      console.log('Submitting form data directly to Web3Forms:', formData);
      
      // Create form data for Web3Forms
      const web3FormData = new FormData();
      web3FormData.append('access_key', '0862de0a-0e07-4031-aa50-7b36e1587f0e');
      web3FormData.append('name', formData.name);
      web3FormData.append('email', formData.email);
      web3FormData.append('message', formData.message);
      web3FormData.append('subject', `New Contact Form Message from ${formData.name}`);
      web3FormData.append('from_name', formData.name);
      
      // Submit directly to Web3Forms from the browser
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData
      });
      
      const result = await response.json();
      console.log('Web3Forms response:', result);
      
      if (response.ok && result.success) {
        alert('Message sent successfully! I\'ll get back to you soon.');
        setFormData(formInitialState);
        setFormErrors({});
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
      alert(`Error: ${errorMessage}. Please try again later.`);
    } finally {
      setIsLoading(false);
    }
  };

  const isSubmitDisabled = Object.values(formErrors).some((error) => error);

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-grow flex-col gap-5'>
        <div className='flex flex-col gap-5 md:flex-row'>
          <input
            className='w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none dark:border-neutral-700'
            type='text'
            placeholder='Name*'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className='w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none dark:border-neutral-700'
            type='email'
            placeholder='Email*'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className='w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none dark:border-neutral-700'
          rows={5}
          placeholder='Message*'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button
          className={clsx(
            'flex justify-center bg-neutral-800 py-2.5 hover:scale-[101%] hover:bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-950 hover:dark:bg-neutral-50',
          )}
          type='submit'
          icon={<></>}
          data-umami-event='Send Contact Message'
          disabled={isSubmitDisabled}
        >
          {isLoading ? 'Sending Message...' : 'Send Message'}
        </Button>
      </div>

      <div className='my-5 flex items-center gap-2 dark:text-neutral-400'>
        <ClockIcon />
        <div className='text-sm'>
          <span className='font-medium'>Avg. response:</span> 1-2 Hours (Working
          Hours, GMT+5:30)
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

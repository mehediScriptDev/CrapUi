import React, { useState } from 'react';
import { Mail, Github, MessageSquare, Send, MapPin, Phone } from 'lucide-react';

const ContactView = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      info: 'hello@reactboilerplate.dev',
      description: 'Send us an email anytime',
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: 'GitHub',
      info: 'github.com/reactboilerplate',
      description: 'Check out our open source code',
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Community',
      info: 'Join our Discord',
      description: 'Connect with other developers',
    },
  ];

  const faqs = [
    {
      question: 'How do I get started with this boilerplate?',
      answer:
        'Clone the repository, install dependencies with npm install, and run npm run dev to start development.',
    },
    {
      question: 'Can I use this for commercial projects?',
      answer:
        'Yes! This boilerplate is completely free and open source. You can use it for any project, including commercial ones.',
    },
    {
      question: 'How do I customize the styling?',
      answer:
        'The boilerplate uses Tailwind CSS. You can customize the styling by modifying Tailwind classes or adding your own CSS.',
    },
    {
      question: 'Is TypeScript supported?',
      answer:
        'The boilerplate is TypeScript-ready. You can start using TypeScript by renaming files to .tsx and adding type definitions.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Get In Touch</h1>
            <p className="text-xl leading-relaxed text-gray-600">
              Have questions about the boilerplate? Need help getting started? We're here to help
              you build amazing React applications.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-900">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-900">Other Ways to Reach Us</h2>
                <div className="mb-8 space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 rounded-lg bg-gray-50 p-4"
                    >
                      <div className="mt-1 text-blue-600">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="font-mono text-sm text-gray-700">{info.info}</p>
                        <p className="mt-1 text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Response Time */}
                <div className="rounded-lg bg-blue-50 p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">Response Time</h3>
                  <p className="text-sm text-gray-600">
                    We typically respond to messages within 24-48 hours. For urgent matters, please
                    reach out through our GitHub issues or community Discord.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Quick answers to common questions about the React boilerplate.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactView;

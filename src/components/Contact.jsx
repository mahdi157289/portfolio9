/**
 * File Role: Contact Section Component
 * Utility: Provides a form for visitors to send messages to the developer.
 * Technical description: Uses standard HTML forms styled with Tailwind CSS and glassmorphism effects.
 * Workflow inside the file:
 *  1. Imports Lucide icons and configuration data.
 *  2. Renders the contact form with input fields (Name, Email, Subject, Message).
 *  3. Uses a gradient button for the submit action.
 * Relation with other files: Imported by `App.jsx`. Uses data from `../config.jsx`.
 * Overall utility in the project: Enables user engagement and potential lead generation.
 */
import { Send } from 'lucide-react';
import { contact } from '../config';

const Contact = () => {
    const { title, titleHighlight, form } = contact;
    
    return (
        <section id="contact" className="py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-display font-bold text-center mb-16">
                    {title} <span className="gradient-text">{titleHighlight}</span>
                </h2>
                <div className="contact-card rounded-3xl p-8 md:p-12">
                    <form 
                        className="space-y-6"
                        action="https://formsubmit.co/83e7cb76bb8b7af3223a0e10e6152c8b" 
                        method="POST"
                    >
                        {/* Honeypot for spammers */}
                        <input type="text" name="_honey" style={{display: 'none'}} />
                        
                        {/* Disable Captcha for cleaner UX */}
                        <input type="hidden" name="_captcha" value="false" />
                        
                        {/* Auto Response (Optional) */}
                        <input type="hidden" name="_autoresponse" value="Thank you for your message! I will get back to you soon." />
                        
                        {/* Redirect back to the site after submission (Remove this line if you want the default Thank You page) */}
                        {/* <input type="hidden" name="_next" value="http://localhost:5173" /> */}

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="group">
                                <label className="block text-gray-400 mb-2 text-sm group-focus-within:text-purple-400 transition-colors">{form.name}</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-purple-500 focus:outline-none focus:bg-white/10 transition-all" 
                                    placeholder="John Doe" 
                                />
                            </div>
                            <div className="group">
                                <label className="block text-gray-400 mb-2 text-sm group-focus-within:text-purple-400 transition-colors">{form.email}</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-purple-500 focus:outline-none focus:bg-white/10 transition-all" 
                                    placeholder="john@example.com" 
                                />
                            </div>
                        </div>
                        <div className="group">
                            <label className="block text-gray-400 mb-2 text-sm group-focus-within:text-purple-400 transition-colors">{form.subject}</label>
                            <input 
                                type="text" 
                                name="subject"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-purple-500 focus:outline-none focus:bg-white/10 transition-all" 
                                placeholder="Project Inquiry" 
                            />
                        </div>
                        <div className="group">
                            <label className="block text-gray-400 mb-2 text-sm group-focus-within:text-purple-400 transition-colors">{form.message}</label>
                            <textarea 
                                name="message"
                                required
                                rows="4" 
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-purple-500 focus:outline-none focus:bg-white/10 transition-all resize-none" 
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl shadow-lg shadow-purple-500/30 btn-float flex items-center justify-center gap-3">
                            {form.button} <Send size={24} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

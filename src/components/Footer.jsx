/**
 * File Role: Footer Component
 * Utility: Displays the copyright notice and credits.
 * Technical description: A simple functional component with static content styled with Tailwind CSS.
 * Workflow inside the file:
 *  1. Imports configuration data.
 *  2. Renders the footer content.
 * Relation with other files: Imported by `App.jsx`. Uses data from `../config.jsx`.
 * Overall utility in the project: Marks the end of the page and provides legal/credit information.
 */
import { footer, social } from '../config';

const Footer = () => (
    <footer className="py-6 sm:py-8 relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-gray-400 text-sm sm:text-base">{footer.copyright}</p>
        </div>
    </footer>
);

export default Footer;

# Email Setup Instructions

This document explains how to set up the email functionality for your personal website's contact form.

## Setting Up EmailJS

The contact form on your website uses [EmailJS](https://www.emailjs.com/) to send emails directly from the client-side JavaScript without needing a server. Follow these steps to set it up:

1. **Create an EmailJS Account**:
   - Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
   - The free tier allows 200 emails per month

2. **Create an Email Service**:
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account

3. **Create an Email Template**:
   - Go to "Email Templates"
   - Click "Create New Template"
   - Design your email template with the following variables:
     - `{{from_name}}` - The name of the person contacting you
     - `{{from_email}}` - The email address of the person contacting you
     - `{{phone}}` - The phone number of the person contacting you
     - `{{message}}` - The message content
     - `{{to_email}}` - Your email address

4. **Update Your Website Code**:
   - Open `src/emailjs.js` and replace `YOUR_EMAILJS_USER_ID` with your actual EmailJS User ID
   - Open `src/components/Contact.js` and update:
     - `YOUR_EMAILJS_SERVICE_ID` with your service ID
     - `YOUR_EMAILJS_TEMPLATE_ID` with your template ID
     - `YOUR_EMAILJS_USER_ID` with your user ID
     - Verify that `to_email` is set to your correct email address

## Testing the Contact Form

After setting up EmailJS:

1. Start your development server with `npm start`
2. Navigate to the contact form
3. Fill out the form and submit it
4. Check your email to verify that you received the test message

## Troubleshooting

If emails are not being sent:

1. Check the browser console for any errors
2. Verify that all IDs (User ID, Service ID, Template ID) are correct
3. Make sure your email service is properly connected in EmailJS
4. Check if you've reached the monthly limit for the free tier (200 emails)

## Security Note

The current implementation includes your EmailJS credentials in the client-side code. While this is the standard approach with EmailJS, be aware that these credentials will be visible in your website's source code. EmailJS has built-in security measures to prevent abuse, but it's good to be aware of this limitation.

For additional security, you could consider:
- Setting up domain restrictions in your EmailJS account
- Implementing rate limiting
- Moving to a server-side solution if you need more security

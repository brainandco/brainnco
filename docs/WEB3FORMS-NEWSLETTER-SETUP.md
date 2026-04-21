# Newsletter: two emails (thank-you to subscriber + notification to you)

## What happens

1. **Subscriber** gets a “Thank you for subscribing” email (if you enable Autoresponder in Web3Forms).
2. **You** get an email at **newsletter@brainnco.com** with who subscribed (the “Subscriber Email” field).

## Setup in Web3Forms

1. Log in at **https://web3forms.com** and open the **newsletter** form (the one whose access key is in `NEXT_PUBLIC_WEB3FORMS_NEWSLETTER_ACCESS_KEY`).

2. **Receive submissions at**  
   Set this to **newsletter@brainnco.com**.  
   All signup notifications will go to this address and will include the “Subscriber Email” value so you can see who subscribed.

3. **Thank-you email to the subscriber (optional)**  
   - In the form settings, open **Autoresponder (Auto-Reply)**.  
   - This is a **Pro** feature. If you have Pro, enable it and set the message to something like:  
     **Subject:** Thank you for subscribing  
     **Message:** Thank you for subscribing to our newsletter. We’ll keep you updated.  
   - Web3Forms will send this to the address we send in the `email` field (the subscriber).

If you don’t use Autoresponder, the subscriber still sees the “Thanks for subscribing” message on your website after they submit; they just won’t get a separate thank-you email.

## Summary

| Email | Who gets it | Where it’s set |
|-------|-------------|----------------|
| Notification (who subscribed) | newsletter@brainnco.com | Web3Forms → Form → **Receive submissions at** = newsletter@brainnco.com |
| Thank you for subscribing | The person who subscribed | Web3Forms → Form → **Autoresponder** (Pro): enable and set subject/body |

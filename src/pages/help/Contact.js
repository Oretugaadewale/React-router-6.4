import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

const Contact = () => {
    // The action data gives us the return {error: `message must be over 10 chars long`}
const data = useActionData()

    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <Form method='post' action='/help/contact'>
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>

                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    )
}
export default Contact

// To access form using loader
// The request here means all the form data
export const contactAction = async ({ request }) => {
    console.log(request);

    const data = await request.formData()

    const submission = {
        email: data.get('email'),
        message:data.get('message')
    }
    console.log(submission)
    
    //send post request

  if (submission.message.length < 10) {
    return {error: `message must be over 10 chars long`}
  }
    // but if the form throw an error we wont be redirected
    //redirect the user
    return redirect('/')

}

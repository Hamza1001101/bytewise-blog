import { NewsletterAPI } from 'pliny/newsletter'
import siteMetadata from '@/data/siteMetadata'
import { NextResponse } from 'next/server'

const handler = NewsletterAPI({
  // @ts-ignore
  provider: siteMetadata.newsletter.provider,
})


export async function POST(request: Request, res) {
  console.log(handler.provider)
  const { email } = await request.json()
  console.log(email)
  const API_KEY =  process.env.API_KEY;
  const API_SERVER =  process.env.API_SERVER;
  const AUDIENCE_ID = process.env.AUDIENCE_ID
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`
  if (!email) {
    return this.status(400).json({ error: 'Email is invalid' })
  }
  const requestData = {
    email_address: email,
    status: 'subscribed',
  }
  const response = await fetch(url, {
    headers: {
      Authorization: `Token ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
    method: 'POST',
  })
  const data = await response.json()
  return NextResponse.json(200)
}

/*
export async function GET() {
  return NextResponse.json({ message: 'Hello - GET' });
}
*/

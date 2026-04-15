import { NextResponse } from 'next/server'

const VBOUT_API_KEY = process.env.VBOUT_API_KEY
const VBOUT_LIST_ID = '99440'
const VBOUT_EMAIL_FIELD = '415504'
const VBOUT_MESSAGE_FIELD = '415517'

export async function POST(request: Request) {
  const { email, message } = await request.json()

  if (!email || !message) {
    return NextResponse.json({ error: 'Email and message are required.' }, { status: 400 })
  }

  if (!VBOUT_API_KEY) {
    return NextResponse.json({ error: 'Server misconfiguration.' }, { status: 500 })
  }

  // Build request to Vbout AddContact endpoint (key must be a URL query param)
  const params = new URLSearchParams({
    listid: VBOUT_LIST_ID,
    status: 'Active',
    doubleoptin: '1', // 1 = Enabled, 0 = Disabled
    email,
    [`fields[${VBOUT_MESSAGE_FIELD}]`]: message,
  })

  const res = await fetch(
    `https://api.vbout.com/1/EmailMarketing/AddContact.json?key=${VBOUT_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    }
  )

  const data = await res.json()

  // Vbout returns status 0 for success
  if (!res.ok || data?.status === 'error') {
    console.error('Vbout API error:', data)
    return NextResponse.json({ error: 'Failed to submit. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

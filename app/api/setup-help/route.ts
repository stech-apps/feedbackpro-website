import { NextResponse } from 'next/server'

const VBOUT_API_KEY = process.env.VBOUT_API_KEY
const VBOUT_LIST_ID = '99440'
const VBOUT_MESSAGE_FIELD = '415517'

const clean = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

// Free-text answers that signal someone looking to earn money from surveys, not a business.
const JUNK = /\b(student|earn|earning|job|paid survey|work from home|online work)\b/i

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const name = clean(body.name)
  const email = clean(body.email)
  const company = clean(body.company)
  const businessType = clean(body.businessType)
  const branches = clean(body.branches, 20)
  const whatsapp = clean(body.whatsapp, 30)
  const city = clean(body.city, 60)
  const utms = body.utms && typeof body.utms === 'object' ? body.utms : {}

  if (!name || !email || !company || !businessType || !branches || !whatsapp) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (!VBOUT_API_KEY) {
    return NextResponse.json({ error: 'Server misconfiguration.' }, { status: 500 })
  }

  const quality = JUNK.test(`${company} ${businessType}`) ? 'LOW (possible survey-earner)' : 'OK'
  const source = Object.entries(utms)
    .map(([k, v]) => `${k}=${clean(v, 100)}`)
    .join(' ')

  const message = [
    'SETUP HELP REQUEST',
    `Name: ${name}`,
    `Company: ${company}`,
    `Business type: ${businessType}`,
    `Branches: ${branches}`,
    `WhatsApp: ${whatsapp}`,
    city && `City: ${city}`,
    `Lead quality: ${quality}`,
    source && `Source: ${source}`,
  ]
    .filter(Boolean)
    .join(' | ')

  const params = new URLSearchParams({
    listid: VBOUT_LIST_ID,
    status: 'unconfirmed',
    email,
    [`fields[${VBOUT_MESSAGE_FIELD}]`]: message,
  })

  const res = await fetch(`https://api.vbout.com/1/EmailMarketing/AddContact.json?key=${VBOUT_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  })
  const data = await res.json().catch(() => ({}))

  if (!res.ok || data?.status === 'error') {
    console.error('Vbout API error:', data)
    return NextResponse.json({ error: 'Failed to submit. Please try again or message us on WhatsApp.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const country =
    req.headers.get('x-nf-country') ??       // Netlify
    req.headers.get('x-vercel-ip-country') ?? // Vercel
    req.headers.get('cf-ipcountry') ??        // Cloudflare
    'US'

  return NextResponse.json({ country })
}

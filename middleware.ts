// nodeMiddleware.ts
import type { IncomingMessage, ServerResponse } from 'http'
import { randomBytes } from 'crypto'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export default function nodeMiddleware(
  req: NextRequest,
  next: () => void
) {
  console.log('🔥 Node middleware is running')
  console.log('Random byte:', randomBytes(1).toString('hex'))

  const res = NextResponse.next()
  // Set header — works in Node.js
  res.headers.set('x-node-middleware', 'active')

  return res
}
export const config = {
  runtime: 'nodejs',
}

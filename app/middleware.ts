// nodeMiddleware.ts
import type { IncomingMessage, ServerResponse } from 'http'
import { randomBytes } from 'crypto'

export default function nodeMiddleware(
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void
) {
  console.log('🔥 Node middleware is running')
  console.log('Random byte:', randomBytes(1))

  // Set header — works in Node.js
  res.setHeader('x-node-middleware', 'active')

  next()
}

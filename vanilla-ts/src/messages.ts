// messages.ts
import { getMessage } from '@extend-chrome/messages'

interface Stats {
  hi: number
  low: number
  date: string
}

export const [sendStats, statsStream, waitForStats] = getMessage<Stats>('STATS')

// If you have a message type with no data, use void rather than undefined
// This way you can call it with zero arguments
export const [sendReady, readyStream, waitForReady] = getMessage<void>('READY')
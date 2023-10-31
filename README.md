<h2>Motivation</h2>
Communication in browser extension is not type safe and this is super problematic. This package - <a href='https://www.extend-chrome.dev/messages'>extend-chrome.dev/messages</a> allow type safe communication between content script and background


<h2>Setup</h2>
I am using crxjs project according to <a href='https://github.com/NathanKr/browser-ext-crxjs-plaground'>this</a>. i simply clone it 


<h2>Usage</h2>
<ol>
<li>install the extension from dist directory in chrome  - done once</li>
<li>npm run dev</li>
</ol>

<h2>Code</h2>
 check <a href='https://www.extend-chrome.dev/messages'>source</a>
 <p>In this example the content script send messages to the background script but in general it can be also the other way around</p>

<h3>messages.ts</h3>

```
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
```

<h3>background.ts</h3>

```
import { statsStream } from './messages'

statsStream.subscribe(([{ hi, lo, date }, sender]) => {
  // Intellisense knows this is an Observable of
  // [Stats, chrome.runtime.MessageSender]
})

waitForReady().then(() => {
  console.log('content.ts is ready')
})
```

<h3>content.ts</h3>

```
import { sendStats } from './messages'

sendStats({ hi: 30, low: 14, date: '11/12/2019' })

// Throws a TS error
sendStats('not a Stats object')

sendReady()
```

<h2>Open issues</h2>
<ul>
<li>can i do communication also with popup using this tool</li>
</ul>
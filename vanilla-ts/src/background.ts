
console.log("background.ts --- ");
console.log(new Date());

// background.ts
import { statsStream, waitForReady } from './messages'

statsStream.subscribe(([stats, sender]) => {
  // Intellisense knows this is an Observable of
  // [Stats, chrome.runtime.MessageSender]
  console.log(stats,sender);
  
})

waitForReady().then(() => {
  console.log('content.ts is ready')
})

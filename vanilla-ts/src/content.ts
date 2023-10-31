import src from './lion.jpg'
import './content.css'
import { sendReady, sendStats } from './messages';
 
console.log('content.ts');
console.log(new Date());

const html = `
<div class="crx">
<h1>Nathan Krasney - watch the lion image below</h1>
<img src="${chrome.runtime.getURL(src)}" />
  
</div>
`

const doc = new DOMParser().parseFromString(html, 'text/html')
document.body.append(doc.body.firstElementChild!)

sendStats({ hi: 30, low: 14, date: '11/12/2019' })

// Throws a TS error
// sendStats('not a Stats object')--> not compiling

sendReady()

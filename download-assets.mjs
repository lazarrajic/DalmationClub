import https from 'https'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, 'public', 'images')

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true })

const assets = [
  ['https://www.dalmatian.org.nz/wp-content/uploads/2023/01/DCS-logo_2023-002.jpg', 'logo.jpg'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2026/03/Logo_Shield_final-150x150.png', 'logo-shield.png'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2017/11/logo-landscape-white-600px.png', 'logo-white.png'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2018/02/kolo-girls.jpg', 'photo-01.jpg'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2023/07/BSP_9211-scaled.jpg', 'photo-02.jpg'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2023/08/BSP_9080-scaled.jpg', 'photo-03.jpg'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2023/01/dancing-1-196x300.jpg', 'photo-04.jpg'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2022/12/BSP_6843-300x200.jpg', 'photo-05.jpg'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2022/12/BSP_5999-1024x681.jpg', 'photo-06.jpg'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2017/11/ladies.jpg', 'photo-07.jpg'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2017/11/archives2-780x1024.jpg', 'photo-08.jpg'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2017/11/members1-1024x768.jpg', 'photo-09.jpg'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2018/02/cake.jpg', 'photo-10.jpg'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2017/05/BSP_9150-scaled-570x570.jpg', 'photo-11.jpg'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2017/05/BSP_5739-scaled-570x570.jpg', 'photo-12.jpg'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2020/03/mothers-day-brunch-2020-500x370.png', 'event-01.png'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2026/04/Mens-Dinner-26-500x370.png', 'event-02.png'],
  ['https://www.dalmatian.org.nz/wp-content/uploads/2026/04/Ladies-Night-2026-FB-Event-500x370.png', 'event-03.png'],
]

function download(url, filename) {
  return new Promise((resolve) => {
    const dest = path.join(imagesDir, filename)
    const file = fs.createWriteStream(dest)
    const req = https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close()
        fs.unlinkSync(dest)
        download(res.headers.location, filename).then(resolve)
        return
      }
      if (res.statusCode !== 200) {
        file.close()
        fs.unlinkSync(dest)
        console.warn(`⚠️  WARNING: ${filename} returned ${res.statusCode} — skipping`)
        resolve(false)
        return
      }
      res.pipe(file)
      file.on('finish', () => {
        file.close()
        console.log(`✅  ${filename}`)
        resolve(true)
      })
    })
    req.on('error', (err) => {
      file.close()
      if (fs.existsSync(dest)) fs.unlinkSync(dest)
      console.warn(`⚠️  WARNING: ${filename} error — ${err.message}`)
      resolve(false)
    })
  })
}

const results = []
for (const [url, filename] of assets) {
  const ok = await download(url, filename)
  results.push({ filename, ok })
}

console.log('\n─── Download Summary ───')
const ok = results.filter(r => r.ok)
const failed = results.filter(r => !r.ok)
console.log(`✅  ${ok.length} downloaded successfully`)
if (failed.length) {
  console.log(`⚠️  ${failed.length} failed: ${failed.map(r => r.filename).join(', ')}`)
}

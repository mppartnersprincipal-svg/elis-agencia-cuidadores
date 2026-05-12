const { createCanvas } = require('canvas')
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js')
const fs = require('fs')
const path = require('path')

pdfjs.GlobalWorkerOptions.workerSrc = false

const pdfPath = path.resolve(__dirname, '../Logo/LOGO ELIS CUIDADORES-1.pdf')
const outDir  = path.resolve(__dirname, '../public')
const outPath = path.resolve(outDir, 'logo-elis.png')

fs.mkdirSync(outDir, { recursive: true })

async function convert() {
  const data = new Uint8Array(fs.readFileSync(pdfPath))
  const pdf = await pdfjs.getDocument({ data, isEvalSupported: false, disableWorker: true }).promise
  const page = await pdf.getPage(1)

  const scale = 3
  const viewport = page.getViewport({ scale })
  const canvas = createCanvas(viewport.width, viewport.height)
  const ctx = canvas.getContext('2d')

  await page.render({ canvasContext: ctx, viewport }).promise

  const buf = canvas.toBuffer('image/png')
  fs.writeFileSync(outPath, buf)
  console.log(`Logo convertido: ${outPath} (${viewport.width}x${viewport.height}px)`)
}

convert().catch(e => { console.error(e); process.exit(1) })

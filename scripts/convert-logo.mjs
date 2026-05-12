import { createRequire } from 'module'
import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const require = createRequire(import.meta.url)
const canvasMod = require('canvas')
const { createCanvas, Image, ImageData } = canvasMod

// Provide browser globals that pdfjs-dist needs in Node.js
global.Image = Image
global.ImageData = ImageData

const __dirname = dirname(fileURLToPath(import.meta.url))

const pdfjs = await import('../node_modules/pdfjs-dist/legacy/build/pdf.mjs')
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  '../node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs',
  import.meta.url
).href

class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height)
    return { canvas, context: canvas.getContext('2d') }
  }
  reset(data, width, height) {
    data.canvas.width = width
    data.canvas.height = height
  }
  destroy(data) {
    data.canvas.width = 0
    data.canvas.height = 0
  }
}

const pdfPath = resolve(__dirname, '../Logo/LOGO ELIS CUIDADORES-1.pdf')
const outDir  = resolve(__dirname, '../public')
const outPath = resolve(outDir, 'logo-elis.png')

mkdirSync(outDir, { recursive: true })

const data        = new Uint8Array(readFileSync(pdfPath))
const factory     = new NodeCanvasFactory()
const pdf         = await pdfjs.getDocument({ data, canvasFactory: factory, isEvalSupported: false }).promise
const page        = await pdf.getPage(1)
const scale       = 3
const viewport    = page.getViewport({ scale })
const canvasData  = factory.create(viewport.width, viewport.height)

await page.render({ canvasContext: canvasData.context, viewport, canvasFactory: factory }).promise

writeFileSync(outPath, canvasData.canvas.toBuffer('image/png'))
console.log(`Logo convertido: ${outPath} (${viewport.width}x${viewport.height}px)`)

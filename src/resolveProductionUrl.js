import { studioClient as client} from "./utils/studioClient"
import supportedLanguages from "../schemas/locale/supportedLanguages"

const previewSecret = `r1cwoxr23565t06518d6pyaaaltckb09p45q`
// enable demo on the same Vercel or Netlify host, no matter what it is
const remoteUrl = window.location.origin
const localUrl = `http://localhost:3000`

export default async function resolveProductionUrl(doc) {
  return `http://localhost:3333/${doc.slug.current}`
}
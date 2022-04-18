export default async function resolveProductionUrl(doc) {
  return `http://localhost:3333/${doc.slug.current}`
}
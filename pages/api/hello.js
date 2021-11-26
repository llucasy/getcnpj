// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCNPJ } from "../../core/puppeteer"

export default async function handler(req, res) {

  const cidade = req.query.cidade || 'sao-paulo-sp'

  const links = await getCNPJ(cidade)
  res.status(200).json(links)
}

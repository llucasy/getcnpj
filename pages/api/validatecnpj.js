// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { validatecnpj } from "../../core/puppeteer"

export default async function handler(req, res) {

  const cnpj = req.query.cnpj || '28646208000100'

  const datacnpj = await validatecnpj(cnpj)
  res.status(200).json(datacnpj.arr)
}

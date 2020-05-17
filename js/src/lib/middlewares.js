export const sampleMiddleware = async (req, res) => {
  console.log('input request body  -> ', await req.body())
}

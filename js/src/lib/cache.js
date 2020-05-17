import { connect } from "https://denopkg.com/keroxp/deno-redis/mod.ts";
import { cache } from '../../config/constants.js'

const redis = await connect({
  hostname: cache.hostname,
  port: cache.port
});

export const getJSON = async (id) => {
  const response = await redis.get(`${cache.prefix}:${id}`)
  if (!response) return response
  return JSON.parse(response)
}

export const setJSON = async (key, data, ttl) => {
  const response = await redis.set(`${cache.prefix}:${key}`, JSON.stringify(data), ttl || cache.expiry)
  return response
}

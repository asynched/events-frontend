import { useState, useEffect } from 'react'

export default function Async({ promise, fallback, resolve, reject }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    promise.then(setData).catch(setError)
  }, [promise])

  if (error) {
    return reject(error)
  }

  if (data) {
    return resolve(data)
  }

  return fallback
}

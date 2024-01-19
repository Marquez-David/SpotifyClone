'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { getToken } from '@/services/requests'

export const useToken = () => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const fetchToken = async () => {
      const response = await getToken()
      setToken(response)
    }

    fetchToken()
  }, [])

  return { token, setToken }

}
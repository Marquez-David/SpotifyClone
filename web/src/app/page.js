'use client'

import { useEffect } from "react"

import { AUTH_URL } from "@/utils/constants"


const Login = () => {

  useEffect(() => {
    const access_token = localStorage.getItem('token')
    if (!access_token) {
      window.location.href = AUTH_URL;
    } else {
      window.location.href = '/home';
    }

  }, []);
}

export default Login
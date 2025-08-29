import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/PhishCode_FE_Capstone/' : './'

  return {
    plugins: [react()],
    base: base,
  }
})

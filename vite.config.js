import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
//Array vacio para acumular lo que va eligiendo el usuario
let menuElegido = JSON.parse(localStorage) || []
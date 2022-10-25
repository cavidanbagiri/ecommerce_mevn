import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  return defineConfig({
    plugins: [vue()],
    server: {
      proxy: {
        "/api": {
          target:process.env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    
  });
};

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   server:{
//     proxy:{
//       '/api':{
//         // target:import.meta.env.VITE_API_URL,
//         target:'http://localhost:3000',
//         changeOrigin:true,
//         rewrite: path => path.replace(/^\/api/, '')
//       }
//     }
//   },
// })

### Steps

- Init sveltekit proyect
- pnpm i -D @sveltejs/adapter-static@next
- pnpm i @capacitor/core @capacitor/cli @capacitor/android
- pnpx cap init [FAIL]


- Init sveltekit proyect
- npm i -D @sveltejs/adapter-static@next
- npm i @capacitor/core @capacitor/cli @capacitor/android
- npx cap init
- cambiar configuración de capacitor.config.json: "webDir": "build"
- npx cap add android
- add layout.js and write: `export const prerender = true;`
- add layout.svelte and add `slot`
- npm run build
- npx cap sync
- npx cap open android
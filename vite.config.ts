import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
    manifest_version: 3,
    name: "chrome-extension-template",
    description: "chrome extension template",
    version: "0.0.0",
    content_scripts: [
        {
            matches: [
                "https://kuwa.app/*"
            ],
            js: [
                "src/index.ts"
            ]
        }
    ]
});

export default defineConfig({
    plugins: [crx({ manifest })],
});
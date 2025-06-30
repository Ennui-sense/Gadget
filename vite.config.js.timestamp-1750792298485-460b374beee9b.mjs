// vite.config.js
import { defineConfig } from "file:///C:/www/gadget/node_modules/.pnpm/vite@5.4.19_sass@1.89.1_terser@5.41.0/node_modules/vite/dist/node/index.js";
import { ViteImageOptimizer } from "file:///C:/www/gadget/node_modules/.pnpm/vite-plugin-image-optimizer@1.1.8_vite@5.4.19_sass@1.89.1_terser@5.41.0_/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import { createHtmlPlugin } from "file:///C:/www/gadget/node_modules/.pnpm/vite-plugin-html@3.2.2_vite@5.4.19_sass@1.89.1_terser@5.41.0_/node_modules/vite-plugin-html/dist/index.mjs";
import ViteSvgSpriteWrapper from "file:///C:/www/gadget/node_modules/.pnpm/vite-svg-sprite-wrapper@1.4.1_vite@5.4.19_sass@1.89.1_terser@5.41.0_/node_modules/vite-svg-sprite-wrapper/dist/index.js";
import handlebars from "file:///C:/www/gadget/node_modules/.pnpm/vite-plugin-handlebars@2.0.0_sass@1.89.1_terser@5.41.0/node_modules/vite-plugin-handlebars/dist/index.js";
var vite_config_default = defineConfig({
  root: "src",
  build: {
    outDir: "../dist"
  },
  plugins: [
    handlebars({
      partialDirectory: "src/partials"
    }),
    ViteSvgSpriteWrapper({
      icons: "src/img/svg/*.svg",
      outputDir: "src/img"
    }),
    ViteImageOptimizer({
      exclude: "sprite.svg",
      svg: {
        js2svg: {
          pretty: true
        }
      },
      jpg: {
        quality: 75
      },
      jpeg: {
        quality: 75
      },
      png: {
        quality: 75
      }
    }),
    createHtmlPlugin({
      minify: true
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx3d3dcXFxcZ2FkZ2V0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFx3d3dcXFxcZ2FkZ2V0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi93d3cvZ2FkZ2V0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJ1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4taHRtbCdcclxuaW1wb3J0IFZpdGVTdmdTcHJpdGVXcmFwcGVyIGZyb20gJ3ZpdGUtc3ZnLXNwcml0ZS13cmFwcGVyJ1xyXG5pbXBvcnQgaGFuZGxlYmFycyBmcm9tICd2aXRlLXBsdWdpbi1oYW5kbGViYXJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuXHRyb290OiAnc3JjJyxcclxuXHRidWlsZDoge1xyXG5cdFx0b3V0RGlyOiAnLi4vZGlzdCcsXHJcblx0fSxcclxuXHRwbHVnaW5zOiBbXHJcblx0XHRoYW5kbGViYXJzKHtcclxuXHRcdFx0cGFydGlhbERpcmVjdG9yeTogJ3NyYy9wYXJ0aWFscydcclxuXHRcdH0pLFxyXG5cdFx0Vml0ZVN2Z1Nwcml0ZVdyYXBwZXIoe1xyXG5cdFx0XHRpY29uczogJ3NyYy9pbWcvc3ZnLyouc3ZnJyxcclxuXHRcdFx0b3V0cHV0RGlyOiAnc3JjL2ltZydcclxuXHRcdH0pLFxyXG5cdFx0Vml0ZUltYWdlT3B0aW1pemVyKHtcclxuXHRcdFx0ZXhjbHVkZTogJ3Nwcml0ZS5zdmcnLFxyXG5cdFx0XHRzdmc6IHtcclxuXHRcdFx0XHRqczJzdmc6IHtcclxuXHRcdFx0XHRcdHByZXR0eTogdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0anBnOiB7XHJcblx0XHRcdFx0cXVhbGl0eTogNzVcclxuXHRcdFx0fSxcclxuXHRcdFx0anBlZzoge1xyXG5cdFx0XHRcdHF1YWxpdHk6IDc1XHJcblx0XHRcdH0sXHJcblx0XHRcdHBuZzoge1xyXG5cdFx0XHRcdHF1YWxpdHk6IDc1XHJcblx0XHRcdH1cclxuXHRcdH0pLFxyXG5cdFx0Y3JlYXRlSHRtbFBsdWdpbih7XHJcblx0XHRcdG1pbmlmeTogdHJ1ZVxyXG5cdFx0fSksXHJcblx0XVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStOLFNBQVMsb0JBQW9CO0FBQzVQLFNBQVMsMEJBQTBCO0FBQ25DLFNBQVMsd0JBQXdCO0FBQ2pDLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sZ0JBQWdCO0FBRXZCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixXQUFXO0FBQUEsTUFDVixrQkFBa0I7QUFBQSxJQUNuQixDQUFDO0FBQUEsSUFDRCxxQkFBcUI7QUFBQSxNQUNwQixPQUFPO0FBQUEsTUFDUCxXQUFXO0FBQUEsSUFDWixDQUFDO0FBQUEsSUFDRCxtQkFBbUI7QUFBQSxNQUNsQixTQUFTO0FBQUEsTUFDVCxLQUFLO0FBQUEsUUFDSixRQUFRO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVDtBQUFBLE1BQ0Q7QUFBQSxNQUNBLEtBQUs7QUFBQSxRQUNKLFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDTCxTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0EsS0FBSztBQUFBLFFBQ0osU0FBUztBQUFBLE1BQ1Y7QUFBQSxJQUNELENBQUM7QUFBQSxJQUNELGlCQUFpQjtBQUFBLE1BQ2hCLFFBQVE7QUFBQSxJQUNULENBQUM7QUFBQSxFQUNGO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

// File: src/Launcher/LauncherConfig.ts
// App config untuk pipeline baru (sampai Clock). Core lama TIDAK dipakai.

import type { LauncherConfigRoot, BgLayer, LayerConfig } from "./LauncherConfigSchema";
import { SCHEMA_VERSION } from "./LauncherConfigSchema";

/* ==============================
   Backgrounds (pakai ini, bukan "layerBG" jadul)
   ============================== */
const BACKGROUNDS: BgLayer[] = [

/* ===== LAYER BG 1 BLOCK START: layer-orbit-clock-demo ===== */
  {
    id: "BG1",
    src: "/src/Launcher/LauncherAsset/CLOCK (7).png",
    xPct: 50,
    yPct: 50,
    scalePct: 100,
    opacityPct: 100,
    z: 0,
    fit: "contain",
  },
/* ===== LAYER 1 BLOCK START: layer-orbit-clock-demo ===== */

/* ===== LAYER BG 1 BLOCK START: layer-orbit-clock-demo ===== */
  {
    id: "BG3",
    src: "/src/Launcher/LauncherAsset/CLOCK (7).png",
    xPct: 50,
    yPct: 50,
    scalePct: 100,
    opacityPct: 100,
    z: 0,
    fit: "contain",
  },
/* ===== LAYER 1 BLOCK START: layer-orbit-clock-demo ===== */



];

/* ==============================
   Layers
   ============================== */
const LAYERS: LayerConfig[] = [

  
/* ===== LAYER 1 BLOCK START: layer-orbit-clock-demo ===== */
    {
    id: "layer-orbit-clock-demo",           // unik per layer
    path: "/src/Launcher/LauncherAsset/CLOCK (8).png",              // ganti sesuai asset
    enabled: true,                          // true | false
    zHint: 20,                              // 0..100 (urutan render)

    // ---------- LOGIC 2: posisi & skala ----------
    l2: {
      enabled: true,                        // true | false
      clampMode: "none",                    // "none" | "bounds"
      centerMode: "pct100",                 // "pct100"(0..100) | "extendedPct"(-200..200)
      center: { xPct: 50, yPct: 50 },       // pusat layar
      scalePct: 90,                         // 1..400 (berbasis vmin)
      minScalePct: 10,                      // 1..400
      maxScalePct: 400,                     // 1..400
      marginPct: 5,                         // 0..50 (dipakai kalau clampMode="bounds")
      rounding: "round",                    // "round" | "floor" | "ceil"
    },

    // ---------- LOGIC 2A: sudut anchored ----------
    l2a: {
      enabled: false,                        // true | false
      rotationMode: "anchored",             // fixed
      base: { xPct: 0,  yPct: 50 },         // extendedPct relatif pusat gambar (kuning)
      tip:  { xPct: 0,  yPct: -50 },        // extendedPct relatif pusat gambar (merah)
      pivot: "center",                      // "center" | "base"
      align: "vertical",                    // "vertical" | "axis"
    },

    // ---------- LOGIC 3: spin absolut ----------
    spin: {
      enabled: false,                        // true | false
      rpm: 1,                               // 0..120
      direction: "cw",                      // "cw" | "ccw"
      maxFps: 60,                           // 15..60
      easing: "linear",                     // placeholder
      pivotSource: "logic2-center",         // "logic2-center" | "logic2A-base"
    },

    // ---------- LOGIC 3A: orbit absolut ----------
    orbit: {
      enabled: false,                        // true | false
      rpm: 0.5,                             // 0..60
      direction: "cw",                      // "cw" | "ccw"
      radiusPct: 20,                        // 0..100 (vmin). Dipakai kalau line=none/invalid
      orbitPoint: "dotmark",                // "dotmark" | { xPct:0..100, yPct:0..100 } (layar)
      line: "center",                       // "none" | "center" | "base" | "tip" | {xPct,yPct}
      startPhase: "auto",                   // "auto" | number derajat (0=kanan, 90=atas)
      maxFps: 60,                           // 15..60
      showLine: false,                      // true buat debug lingkaran orbit
    },

    // ---------- CLOCK / TIMEZONE ----------
    clock: {
      enabled: false,                       // true | false
      sync: "device",                       // "device" | "utc"
      // utcOffsetMinutes: 420,             // wajib kalau sync="utc" (contoh: +7 jam = 420)
      role: "minute",                       // "hour" | "minute" | "second"
      secondMode: "smooth",                 // "smooth" | "tick" (khusus role="second")
      hourStyle: 12,                        // 12 | 24
      offsetDeg: 0,                         // -180..180 (offset tambahan)
    },

    // ---------- EFFECT (reserve, opsional) ----------
    effect: {
      enabled: false,                       // true | false
      visibility: "visible",                // "visible" | "hidden"
      opacityPct: 100,                      // 0..100
      blend: "normal",                      // css mix-blend-mode
      blurPx: 0,
      brightnessPct: 100,                   // 0..200 (validator clamp)
      contrastPct: 100,
      saturatePct: 100,
      grayscalePct: 0,
      hueRotateDeg: 0,
    },
  },
/* ===== LAYER 1 BLOCK END: layer-orbit-clock-demo ===== */

/* ===== LAYER 2 BLOCK START: layer-orbit-clock-demo ===== */
    {
    id: "layer-orbit-clock-demo",           // unik per layer
    path: "/src/Launcher/LauncherAsset/CLOCK (5).png",              // ganti sesuai asset
    enabled: true,                          // true | false
    zHint: 20,                              // 0..100 (urutan render)

    // ---------- LOGIC 2: posisi & skala ----------
    l2: {
      enabled: true,                        // true | false
      clampMode: "none",                    // "none" | "bounds"
      centerMode: "pct100",                 // "pct100"(0..100) | "extendedPct"(-200..200)
      center: { xPct: 50, yPct: 50 },       // pusat layar
      scalePct: 77,                         // 1..400 (berbasis vmin)
      minScalePct: 10,                      // 1..400
      maxScalePct: 400,                     // 1..400
      marginPct: 5,                         // 0..50 (dipakai kalau clampMode="bounds")
      rounding: "round",                    // "round" | "floor" | "ceil"
    },

    // ---------- LOGIC 2A: sudut anchored ----------
    l2a: {
      enabled: false,                        // true | false
      rotationMode: "anchored",             // fixed
      base: { xPct: 0,  yPct: 50 },         // extendedPct relatif pusat gambar (kuning)
      tip:  { xPct: 0,  yPct: -50 },        // extendedPct relatif pusat gambar (merah)
      pivot: "center",                      // "center" | "base"
      align: "vertical",                    // "vertical" | "axis"
    },

    // ---------- LOGIC 3: spin absolut ----------
    spin: {
      enabled: false,                        // true | false
      rpm: 1,                               // 0..120
      direction: "cw",                      // "cw" | "ccw"
      maxFps: 60,                           // 15..60
      easing: "linear",                     // placeholder
      pivotSource: "logic2-center",         // "logic2-center" | "logic2A-base"
    },

    // ---------- LOGIC 3A: orbit absolut ----------
    orbit: {
      enabled: false,                        // true | false
      rpm: 0.5,                             // 0..60
      direction: "cw",                      // "cw" | "ccw"
      radiusPct: 20,                        // 0..100 (vmin). Dipakai kalau line=none/invalid
      orbitPoint: "dotmark",                // "dotmark" | { xPct:0..100, yPct:0..100 } (layar)
      line: "center",                       // "none" | "center" | "base" | "tip" | {xPct,yPct}
      startPhase: "auto",                   // "auto" | number derajat (0=kanan, 90=atas)
      maxFps: 60,                           // 15..60
      showLine: false,                      // true buat debug lingkaran orbit
    },

    // ---------- CLOCK / TIMEZONE ----------
    clock: {
      enabled: false,                       // true | false
      sync: "device",                       // "device" | "utc"
      // utcOffsetMinutes: 420,             // wajib kalau sync="utc" (contoh: +7 jam = 420)
      role: "minute",                       // "hour" | "minute" | "second"
      secondMode: "smooth",                 // "smooth" | "tick" (khusus role="second")
      hourStyle: 12,                        // 12 | 24
      offsetDeg: 0,                         // -180..180 (offset tambahan)
    },

    // ---------- EFFECT (reserve, opsional) ----------
    effect: {
      enabled: false,                       // true | false
      visibility: "visible",                // "visible" | "hidden"
      opacityPct: 100,                      // 0..100
      blend: "normal",                      // css mix-blend-mode
      blurPx: 0,
      brightnessPct: 100,                   // 0..200 (validator clamp)
      contrastPct: 100,
      saturatePct: 100,
      grayscalePct: 0,
      hueRotateDeg: 0,
    },
  },
/* ===== LAYER 2 BLOCK END: layer-orbit-clock-demo ===== */

/* ===== LAYER 3 BLOCK START: layer-orbit-clock-demo ===== */
    {
    id: "layer-orbit-clock-demo",           // unik per layer
    path: "/src/Launcher/LauncherAsset/CLOCK (2).png",              // ganti sesuai asset
    enabled: true,                          // true | false
    zHint: 20,                              // 0..100 (urutan render)

    // ---------- LOGIC 2: posisi & skala ----------
    l2: {
      enabled: true,                        // true | false
      clampMode: "none",                    // "none" | "bounds"
      centerMode: "pct100",                 // "pct100"(0..100) | "extendedPct"(-200..200)
      center: { xPct: 50, yPct: 50 },       // pusat layar
      scalePct: 24,                         // 1..400 (berbasis vmin)
      minScalePct: 10,                      // 1..400
      maxScalePct: 400,                     // 1..400
      marginPct: 5,                         // 0..50 (dipakai kalau clampMode="bounds")
      rounding: "round",                    // "round" | "floor" | "ceil"
    },

    // ---------- LOGIC 2A: sudut anchored ----------
    l2a: {
      enabled: false,                        // true | false
      rotationMode: "anchored",             // fixed
      base: { xPct: 0,  yPct: 50 },         // extendedPct relatif pusat gambar (kuning)
      tip:  { xPct: 0,  yPct: -50 },        // extendedPct relatif pusat gambar (merah)
      pivot: "center",                      // "center" | "base"
      align: "vertical",                    // "vertical" | "axis"
    },

    // ---------- LOGIC 3: spin absolut ----------
    spin: {
      enabled: true,                        // true | false
      rpm: 1,                               // 0..120
      direction: "cw",                      // "cw" | "ccw"
      maxFps: 60,                           // 15..60
      easing: "linear",                     // placeholder
      pivotSource: "logic2-center",         // "logic2-center" | "logic2A-base"
    },

    // ---------- LOGIC 3A: orbit absolut ----------
    orbit: {
      enabled: false,                        // true | false
      rpm: 0.5,                             // 0..60
      direction: "cw",                      // "cw" | "ccw"
      radiusPct: 20,                        // 0..100 (vmin). Dipakai kalau line=none/invalid
      orbitPoint: "dotmark",                // "dotmark" | { xPct:0..100, yPct:0..100 } (layar)
      line: "center",                       // "none" | "center" | "base" | "tip" | {xPct,yPct}
      startPhase: "auto",                   // "auto" | number derajat (0=kanan, 90=atas)
      maxFps: 60,                           // 15..60
      showLine: false,                      // true buat debug lingkaran orbit
    },

    // ---------- CLOCK / TIMEZONE ----------
    clock: {
      enabled: false,                       // true | false
      sync: "device",                       // "device" | "utc"
      // utcOffsetMinutes: 420,             // wajib kalau sync="utc" (contoh: +7 jam = 420)
      role: "minute",                       // "hour" | "minute" | "second"
      secondMode: "smooth",                 // "smooth" | "tick" (khusus role="second")
      hourStyle: 12,                        // 12 | 24
      offsetDeg: 0,                         // -180..180 (offset tambahan)
    },

    // ---------- EFFECT (reserve, opsional) ----------
    effect: {
      enabled: false,                       // true | false
      visibility: "visible",                // "visible" | "hidden"
      opacityPct: 100,                      // 0..100
      blend: "normal",                      // css mix-blend-mode
      blurPx: 0,
      brightnessPct: 100,                   // 0..200 (validator clamp)
      contrastPct: 100,
      saturatePct: 100,
      grayscalePct: 0,
      hueRotateDeg: 0,
    },
  },
/* ===== LAYER 3 BLOCK END: layer-orbit-clock-demo ===== */



/* ===== LAYER 3 BLOCK START: layer-orbit-clock-demo ===== */
    {
    id: "layer-orbit-clock-demo",           // unik per layer
    path: "/src/Launcher/LauncherAsset/CLOCK (6).png",              // ganti sesuai asset
    enabled: true,                          // true | false
    zHint: 20,                              // 0..100 (urutan render)

    // ---------- LOGIC 2: posisi & skala ----------
    l2: {
      enabled: true,                        // true | false
      clampMode: "none",                    // "none" | "bounds"
      centerMode: "pct100",                 // "pct100"(0..100) | "extendedPct"(-200..200)
      center: { xPct: 50, yPct: 50 },       // pusat layar
      scalePct: 90,                         // 1..400 (berbasis vmin)
      minScalePct: 10,                      // 1..400
      maxScalePct: 400,                     // 1..400
      marginPct: 5,                         // 0..50 (dipakai kalau clampMode="bounds")
      rounding: "round",                    // "round" | "floor" | "ceil"
    },

    // ---------- LOGIC 2A: sudut anchored ----------
    l2a: {
      enabled: false,                        // true | false
      rotationMode: "anchored",             // fixed
      base: { xPct: 0,  yPct: 50 },         // extendedPct relatif pusat gambar (kuning)
      tip:  { xPct: 0,  yPct: -50 },        // extendedPct relatif pusat gambar (merah)
      pivot: "center",                      // "center" | "base"
      align: "vertical",                    // "vertical" | "axis"
    },

    // ---------- LOGIC 3: spin absolut ----------
    spin: {
      enabled: true,                        // true | false
      rpm: 1.5,                               // 0..120
      direction: "ccw",                      // "cw" | "ccw"
      maxFps: 60,                           // 15..60
      easing: "linear",                     // placeholder
      pivotSource: "logic2-center",         // "logic2-center" | "logic2A-base"
    },

    // ---------- LOGIC 3A: orbit absolut ----------
    orbit: {
      enabled: false,                        // true | false
      rpm: 0.5,                             // 0..60
      direction: "cw",                      // "cw" | "ccw"
      radiusPct: 20,                        // 0..100 (vmin). Dipakai kalau line=none/invalid
      orbitPoint: "dotmark",                // "dotmark" | { xPct:0..100, yPct:0..100 } (layar)
      line: "center",                       // "none" | "center" | "base" | "tip" | {xPct,yPct}
      startPhase: "auto",                   // "auto" | number derajat (0=kanan, 90=atas)
      maxFps: 60,                           // 15..60
      showLine: false,                      // true buat debug lingkaran orbit
    },

    // ---------- CLOCK / TIMEZONE ----------
    clock: {
      enabled: false,                       // true | false
      sync: "device",                       // "device" | "utc"
      // utcOffsetMinutes: 420,             // wajib kalau sync="utc" (contoh: +7 jam = 420)
      role: "minute",                       // "hour" | "minute" | "second"
      secondMode: "smooth",                 // "smooth" | "tick" (khusus role="second")
      hourStyle: 12,                        // 12 | 24
      offsetDeg: 0,                         // -180..180 (offset tambahan)
    },

    // ---------- EFFECT (reserve, opsional) ----------
    effect: {
      enabled: false,                       // true | false
      visibility: "visible",                // "visible" | "hidden"
      opacityPct: 100,                      // 0..100
      blend: "normal",                      // css mix-blend-mode
      blurPx: 0,
      brightnessPct: 100,                   // 0..200 (validator clamp)
      contrastPct: 100,
      saturatePct: 100,
      grayscalePct: 0,
      hueRotateDeg: 0,
    },
  },
/* ===== LAYER 3 BLOCK END: layer-orbit-clock-demo ===== */




/* ===== LAYER 3 BLOCK START: layer-orbit-clock-demo ===== */
    {
    id: "layer-orbit-clock-demo",           // unik per layer
    path: "/src/Launcher/LauncherAsset/CLOCK (4).png",              // ganti sesuai asset
    enabled: true,                          // true | false
    zHint: 21,                              // 0..100 (urutan render)

    // ---------- LOGIC 2: posisi & skala ----------
    l2: {
      enabled: true,                        // true | false
      clampMode: "none",                    // "none" | "bounds"
      centerMode: "pct100",                 // "pct100"(0..100) | "extendedPct"(-200..200)
      center: { xPct: 50, yPct: 50 },       // pusat layar
      scalePct: 40,                         // 1..400 (berbasis vmin)
      minScalePct: 10,                      // 1..400
      maxScalePct: 400,                     // 1..400
      marginPct: 5,                         // 0..50 (dipakai kalau clampMode="bounds")
      rounding: "round",                    // "round" | "floor" | "ceil"
    },

    // ---------- LOGIC 2A: sudut anchored ----------
    l2a: {
      enabled: false,                        // true | false
      rotationMode: "anchored",             // fixed
      base: { xPct: 0,  yPct: 50 },         // extendedPct relatif pusat gambar (kuning)
      tip:  { xPct: 0,  yPct: -50 },        // extendedPct relatif pusat gambar (merah)
      pivot: "center",                      // "center" | "base"
      align: "vertical",                    // "vertical" | "axis"
    },

    // ---------- LOGIC 3: spin absolut ----------
    spin: {
      enabled: true,                        // true | false
      rpm: 2,                               // 0..120
      direction: "cw",                      // "cw" | "ccw"
      maxFps: 60,                           // 15..60
      easing: "linear",                     // placeholder
      pivotSource: "logic2-center",         // "logic2-center" | "logic2A-base"
    },

    // ---------- LOGIC 3A: orbit absolut ----------
    orbit: {
      enabled: false,                        // true | false
      rpm: 0.5,                             // 0..60
      direction: "cw",                      // "cw" | "ccw"
      radiusPct: 20,                        // 0..100 (vmin). Dipakai kalau line=none/invalid
      orbitPoint: "dotmark",                // "dotmark" | { xPct:0..100, yPct:0..100 } (layar)
      line: "center",                       // "none" | "center" | "base" | "tip" | {xPct,yPct}
      startPhase: "auto",                   // "auto" | number derajat (0=kanan, 90=atas)
      maxFps: 60,                           // 15..60
      showLine: false,                      // true buat debug lingkaran orbit
    },

    // ---------- CLOCK / TIMEZONE ----------
    clock: {
      enabled: false,                       // true | false
      sync: "device",                       // "device" | "utc"
      // utcOffsetMinutes: 420,             // wajib kalau sync="utc" (contoh: +7 jam = 420)
      role: "minute",                       // "hour" | "minute" | "second"
      secondMode: "smooth",                 // "smooth" | "tick" (khusus role="second")
      hourStyle: 12,                        // 12 | 24
      offsetDeg: 0,                         // -180..180 (offset tambahan)
    },

    // ---------- EFFECT (reserve, opsional) ----------
    effect: {
      enabled: false,                       // true | false
      visibility: "visible",                // "visible" | "hidden"
      opacityPct: 100,                      // 0..100
      blend: "normal",                      // css mix-blend-mode
      blurPx: 0,
      brightnessPct: 100,                   // 0..200 (validator clamp)
      contrastPct: 100,
      saturatePct: 100,
      grayscalePct: 0,
      hueRotateDeg: 0,
    },
  },
/* ===== LAYER 3 BLOCK END: layer-orbit-clock-demo ===== */



/* ===== LAYER 3 BLOCK START: layer-orbit-clock-demo ===== */
    {
    id: "layer-orbit-clock-demo",           // unik per layer
    path: "/src/Launcher/LauncherAsset/CLOCK (3).png",              // ganti sesuai asset
    enabled: true,                          // true | false
    zHint: 20,                              // 0..100 (urutan render)

    // ---------- LOGIC 2: posisi & skala ----------
    l2: {
      enabled: true,                        // true | false
      clampMode: "none",                    // "none" | "bounds"
      centerMode: "pct100",                 // "pct100"(0..100) | "extendedPct"(-200..200)
      center: { xPct: 50, yPct: 50 },       // pusat layar
      scalePct: 32,                         // 1..400 (berbasis vmin)
      minScalePct: 10,                      // 1..400
      maxScalePct: 400,                     // 1..400
      marginPct: 5,                         // 0..50 (dipakai kalau clampMode="bounds")
      rounding: "round",                    // "round" | "floor" | "ceil"
    },

    // ---------- LOGIC 2A: sudut anchored ----------
    l2a: {
      enabled: false,                        // true | false
      rotationMode: "anchored",             // fixed
      base: { xPct: 0,  yPct: 50 },         // extendedPct relatif pusat gambar (kuning)
      tip:  { xPct: 0,  yPct: -50 },        // extendedPct relatif pusat gambar (merah)
      pivot: "center",                      // "center" | "base"
      align: "vertical",                    // "vertical" | "axis"
    },

    // ---------- LOGIC 3: spin absolut ----------
    spin: {
      enabled: true,                        // true | false
      rpm: 1,                               // 0..120
      direction: "ccw",                      // "cw" | "ccw"
      maxFps: 60,                           // 15..60
      easing: "linear",                     // placeholder
      pivotSource: "logic2-center",         // "logic2-center" | "logic2A-base"
    },

    // ---------- LOGIC 3A: orbit absolut ----------
    orbit: {
      enabled: false,                        // true | false
      rpm: 0.5,                             // 0..60
      direction: "cw",                      // "cw" | "ccw"
      radiusPct: 20,                        // 0..100 (vmin). Dipakai kalau line=none/invalid
      orbitPoint: "dotmark",                // "dotmark" | { xPct:0..100, yPct:0..100 } (layar)
      line: "center",                       // "none" | "center" | "base" | "tip" | {xPct,yPct}
      startPhase: "auto",                   // "auto" | number derajat (0=kanan, 90=atas)
      maxFps: 60,                           // 15..60
      showLine: false,                      // true buat debug lingkaran orbit
    },

    // ---------- CLOCK / TIMEZONE ----------
    clock: {
      enabled: false,                       // true | false
      sync: "device",                       // "device" | "utc"
      // utcOffsetMinutes: 420,             // wajib kalau sync="utc" (contoh: +7 jam = 420)
      role: "minute",                       // "hour" | "minute" | "second"
      secondMode: "smooth",                 // "smooth" | "tick" (khusus role="second")
      hourStyle: 12,                        // 12 | 24
      offsetDeg: 0,                         // -180..180 (offset tambahan)
    },

    // ---------- EFFECT (reserve, opsional) ----------
    effect: {
      enabled: false,                       // true | false
      visibility: "visible",                // "visible" | "hidden"
      opacityPct: 100,                      // 0..100
      blend: "normal",                      // css mix-blend-mode
      blurPx: 0,
      brightnessPct: 100,                   // 0..200 (validator clamp)
      contrastPct: 100,
      saturatePct: 100,
      grayscalePct: 0,
      hueRotateDeg: 0,
    },
  },
/* ===== LAYER 3 BLOCK END: layer-orbit-clock-demo ===== */















  
];

/* ==============================
   Root config
   ============================== */
export const AppConfig: LauncherConfigRoot = {
  schemaVersion: SCHEMA_VERSION,
  meta: { app: "Launcher Logic Pipeline", build: new Date().toISOString() },
  backgrounds: BACKGROUNDS,
  layers: LAYERS,
  // defaults: {} // opsional; kita pakai nilai eksplisit di layer untuk kejelasan
};

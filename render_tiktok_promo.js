import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const FFMPEG = "C:\\Users\\ABDER\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-9.0.1-full_build\\bin\\ffmpeg.exe";
const WORK_DIR = "c:\\Users\\ABDER\\Downloads\\nour react";
const BRAIN_DIR = "C:\\Users\\ABDER\\.gemini\\antigravity\\brain\\ce0cf4de-4b71-4d2f-b7cf-094d7511fd31";
const USER_UP = path.join(BRAIN_DIR, ".user_uploaded");
const TEMP_FRAMES = path.join(WORK_DIR, "temp_promo_frames");

if (!fs.existsSync(TEMP_FRAMES)) {
  fs.mkdirSync(TEMP_FRAMES, { recursive: true });
}

// 1. Source assets
const assets = {
  chambre: path.join(WORK_DIR, "public", "game-assets", "chambre.jpg"),
  chambre_ingame: path.join(USER_UP, "media_1789239307967.png"),
  carrefour: path.join(WORK_DIR, "public", "game-assets", "carrefour.jpg"),
  map_ingame: path.join(USER_UP, "media_1789239285094.jpg"),
  village_ingame: path.join(USER_UP, "media_1789239307936.png"),
  verger: path.join(WORK_DIR, "public", "game-assets", "verger.jpg"),
  coucher_soleil: path.join(WORK_DIR, "public", "game-assets", "bg_epilogue_coucher_soleil.jpg"),
  quiz_mockup: path.join(WORK_DIR, "public", "playstore_screenshots", "3_quiz_sources_verifiees.jpg"),
  poster: path.join(USER_UP, "media_1789239285112.jpg"),
  logo: path.join(WORK_DIR, "public", "game-assets", "logo_nour.png"),
  audio: path.join(WORK_DIR, "public", "audio", "ch1", "s1_intro_1.mp3")
};

console.log("Generating styled 1080x1920 frames for 6 scenes...");

async function generateScene1() {
  // Scene 1: HOOK (0-3.5s)
  // Background: Chambre warm light with dramatic text
  const bg = await sharp(assets.chambre)
    .resize(1080, 1920, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 0.95, saturation: 1.1 })
    .toBuffer();

  const svgOverlay = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="darkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.65" />
          <stop offset="35%" stop-color="#000000" stop-opacity="0.2" />
          <stop offset="65%" stop-color="#000000" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.8" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="shadow">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.9"/>
        </filter>
      </defs>
      
      <rect width="1080" height="1920" fill="url(#darkGrad)" />
      
      <!-- Top Badge -->
      <g transform="translate(540, 320)">
        <rect x="-180" y="-30" width="360" height="60" rx="30" fill="rgba(30,20,10,0.75)" stroke="#D4AF37" stroke-width="2"/>
        <text x="0" y="8" font-family="Georgia, serif" font-size="22" font-weight="bold" fill="#F3E5AB" text-anchor="middle" letter-spacing="4">AVENTURE NARRATIVE</text>
      </g>
      
      <!-- Center Hook Text -->
      <g transform="translate(540, 960)" filter="url(#shadow)">
        <text x="0" y="-80" font-family="'Cinzel', Georgia, serif" font-size="64" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">
          ET SI TON
        </text>
        <text x="0" y="0" font-family="'Cinzel', Georgia, serif" font-size="76" font-weight="900" fill="#FBD38D" text-anchor="middle" letter-spacing="3" filter="url(#glow)">
          QUOTIDIEN
        </text>
        <text x="0" y="90" font-family="'Cinzel', Georgia, serif" font-size="60" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">
          DEVENAIT UN JEU ?
        </text>
      </g>
      
      <!-- Bottom Hint -->
      <g transform="translate(540, 1650)">
        <text x="0" y="0" font-family="sans-serif" font-size="28" font-weight="500" fill="#E2D9C8" text-anchor="middle" opacity="0.9">
          🌙 Un RPG spirituel &amp; immersif
        </text>
      </g>
    </svg>
  `);

  await sharp(bg)
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .toFile(path.join(TEMP_FRAMES, "frame_scene1.png"));
  console.log("Scene 1 frame generated.");
}

async function generateScene2() {
  // Scene 2: Gameplay - Bedroom & Real Life Actions (3.5 - 7.5s)
  // Background: Chambre in-game dialog screenshot
  const bg = await sharp(assets.chambre_ingame)
    .resize(1080, 1920, { fit: 'cover', position: 'center' })
    .toBuffer();

  const svgOverlay = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="topBottomGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1A120B" stop-opacity="0.85" />
          <stop offset="25%" stop-color="#000000" stop-opacity="0.2" />
          <stop offset="75%" stop-color="#000000" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#1A120B" stop-opacity="0.9" />
        </linearGradient>
        <filter id="cardShadow">
          <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.8"/>
        </filter>
      </defs>
      
      <rect width="1080" height="1920" fill="url(#topBottomGrad)" />
      
      <!-- Big Upper Title -->
      <g transform="translate(540, 360)" filter="url(#cardShadow)">
        <rect x="-420" y="-120" width="840" height="240" rx="24" fill="rgba(24, 18, 12, 0.88)" stroke="#E0A96D" stroke-width="3"/>
        <text x="0" y="-45" font-family="'Cinzel', Georgia, serif" font-size="36" font-weight="bold" fill="#D4AF37" text-anchor="middle" letter-spacing="2">
          DANS NOUR
        </text>
        <text x="0" y="10" font-family="sans-serif" font-size="34" font-weight="700" fill="#FFFFFF" text-anchor="middle">
          Tes bonnes actions réelles
        </text>
        <text x="0" y="65" font-family="'Cinzel', Georgia, serif" font-size="38" font-weight="900" fill="#F6C85F" text-anchor="middle" letter-spacing="1">
          FONT AVANCER TON HISTOIRE
        </text>
      </g>
      
      <!-- Floating Action Pills -->
      <g transform="translate(540, 1550)" filter="url(#cardShadow)">
        <!-- Pill 1 -->
        <g transform="translate(-280, 0)">
          <rect x="-110" y="-35" width="220" height="70" rx="35" fill="rgba(35, 25, 15, 0.9)" stroke="#48BB78" stroke-width="2"/>
          <text x="0" y="8" font-family="sans-serif" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">🛏️ Ranger son lit</text>
        </g>
        <!-- Pill 2 -->
        <g transform="translate(0, 0)">
          <rect x="-120" y="-35" width="240" height="70" rx="35" fill="rgba(35, 25, 15, 0.9)" stroke="#ECC94B" stroke-width="2"/>
          <text x="0" y="8" font-family="sans-serif" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">🕌 Prière du jour</text>
        </g>
        <!-- Pill 3 -->
        <g transform="translate(280, 0)">
          <rect x="-110" y="-35" width="220" height="70" rx="35" fill="rgba(35, 25, 15, 0.9)" stroke="#4299E1" stroke-width="2"/>
          <text x="0" y="8" font-family="sans-serif" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">📖 5 min lecture</text>
        </g>
        
        <text x="0" y="90" font-family="sans-serif" font-size="26" font-weight="600" fill="#ED8936" text-anchor="middle">
          ⚡ +50 XP Spirituel • Niveau Supérieur Débloqué
        </text>
      </g>
    </svg>
  `);

  await sharp(bg)
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .toFile(path.join(TEMP_FRAMES, "frame_scene2.png"));
  console.log("Scene 2 frame generated.");
}

async function generateScene3() {
  // Scene 3: MAP & Choices (7.5 - 12s)
  // Background: Carrefour / Map screen
  const bg = await sharp(assets.carrefour)
    .resize(1080, 1920, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 0.9 })
    .toBuffer();

  const svgOverlay = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="darkVignette" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#140E07" stop-opacity="0.85" />
          <stop offset="30%" stop-color="#000000" stop-opacity="0.1" />
          <stop offset="70%" stop-color="#000000" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#140E07" stop-opacity="0.9" />
        </linearGradient>
        <filter id="choiceShadow">
          <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000" flood-opacity="0.75"/>
        </filter>
      </defs>
      
      <rect width="1080" height="1920" fill="url(#darkVignette)" />
      
      <!-- Header -->
      <g transform="translate(540, 280)" filter="url(#choiceShadow)">
        <text x="0" y="-30" font-family="'Cinzel', Georgia, serif" font-size="30" font-weight="bold" fill="#D4AF37" text-anchor="middle" letter-spacing="3">
          LE CARREFOUR DES DESTINS
        </text>
        <text x="0" y="30" font-family="'Cinzel', Georgia, serif" font-size="52" font-weight="900" fill="#FFFFFF" text-anchor="middle">
          QUEL CHEMIN VAS-TU CHOISIR ?
        </text>
      </g>
      
      <!-- 4 RPG Direction Signs -->
      <g transform="translate(540, 920)" filter="url(#choiceShadow)">
        <!-- Choice 1 -->
        <g transform="translate(0, -220)">
          <rect x="-380" y="-45" width="760" height="90" rx="18" fill="rgba(30, 22, 14, 0.92)" stroke="#48BB78" stroke-width="3"/>
          <circle cx="-310" cy="0" r="22" fill="#48BB78" />
          <text x="-310" cy="8" font-family="sans-serif" font-size="24" fill="#000" text-anchor="middle">✓</text>
          <text x="-260" y="8" font-family="Georgia, serif" font-size="34" font-weight="bold" fill="#FFFFFF">✨ Nouvelles Habitudes</text>
          <text x="310" y="8" font-family="sans-serif" font-size="22" font-weight="bold" fill="#68D391" text-anchor="end">SENTIER 1 →</text>
        </g>
        
        <!-- Choice 2 -->
        <g transform="translate(0, -90)">
          <rect x="-380" y="-45" width="760" height="90" rx="18" fill="rgba(30, 22, 14, 0.92)" stroke="#ED8936" stroke-width="3"/>
          <circle cx="-310" cy="0" r="22" fill="#ED8936" />
          <text x="-310" cy="8" font-family="sans-serif" font-size="24" fill="#000" text-anchor="middle">🤝</text>
          <text x="-260" y="8" font-family="Georgia, serif" font-size="34" font-weight="bold" fill="#FFFFFF">🤝 Amitié &amp; Bienveillance</text>
          <text x="310" y="8" font-family="sans-serif" font-size="22" font-weight="bold" fill="#FBD38D" text-anchor="end">SENTIER 2 →</text>
        </g>
        
        <!-- Choice 3 -->
        <g transform="translate(0, 40)">
          <rect x="-380" y="-45" width="760" height="90" rx="18" fill="rgba(30, 22, 14, 0.92)" stroke="#4299E1" stroke-width="3"/>
          <circle cx="-310" cy="0" r="22" fill="#4299E1" />
          <text x="-310" cy="8" font-family="sans-serif" font-size="24" fill="#000" text-anchor="middle">📖</text>
          <text x="-260" y="8" font-family="Georgia, serif" font-size="34" font-weight="bold" fill="#FFFFFF">📖 Quête de Connaissance</text>
          <text x="310" y="8" font-family="sans-serif" font-size="22" font-weight="bold" fill="#90CDF4" text-anchor="end">SENTIER 3 →</text>
        </g>
        
        <!-- Choice 4 (Waswas) -->
        <g transform="translate(0, 170)">
          <rect x="-380" y="-45" width="760" height="90" rx="18" fill="rgba(25, 15, 20, 0.92)" stroke="#E53E3E" stroke-width="3"/>
          <circle cx="-310" cy="0" r="22" fill="#E53E3E" />
          <text x="-310" cy="8" font-family="sans-serif" font-size="24" fill="#FFF" text-anchor="middle">⚠️</text>
          <text x="-260" y="8" font-family="Georgia, serif" font-size="34" font-weight="bold" fill="#FEB2B2">⏳ Procrastination &amp; Doute</text>
          <text x="310" y="8" font-family="sans-serif" font-size="20" font-weight="bold" fill="#FEB2B2" text-anchor="end">ÉPREUVE ⚠️</text>
        </g>
      </g>
      
      <!-- Bottom Prompt -->
      <g transform="translate(540, 1600)" filter="url(#choiceShadow)">
        <rect x="-240" y="-35" width="480" height="70" rx="35" fill="#D69E2E" stroke="#FFF" stroke-width="2"/>
        <text x="0" y="10" font-family="'Cinzel', Georgia, serif" font-size="26" font-weight="900" fill="#1A120B" text-anchor="middle" letter-spacing="2">
          ▶ CHOISIR SA VOIE
        </text>
      </g>
    </svg>
  `);

  await sharp(bg)
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .toFile(path.join(TEMP_FRAMES, "frame_scene3.png"));
  console.log("Scene 3 frame generated.");
}

async function generateScene4() {
  // Scene 4: Gameplay Montage & Dialogues (12 - 17s)
  // Background: Village square in-game with Le Sage
  const bg = await sharp(assets.village_ingame)
    .resize(1080, 1920, { fit: 'cover', position: 'center' })
    .toBuffer();

  const svgOverlay = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="topBottomGrad4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#140E07" stop-opacity="0.9" />
          <stop offset="25%" stop-color="#000000" stop-opacity="0.1" />
          <stop offset="75%" stop-color="#000000" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#140E07" stop-opacity="0.9" />
        </linearGradient>
        <filter id="popShadow">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.85"/>
        </filter>
      </defs>
      
      <rect width="1080" height="1920" fill="url(#topBottomGrad4)" />
      
      <!-- Big 3 Pillars at top -->
      <g transform="translate(540, 360)" filter="url(#popShadow)">
        <rect x="-440" y="-100" width="880" height="200" rx="24" fill="rgba(20, 14, 8, 0.9)" stroke="#D4AF37" stroke-width="3"/>
        <text x="-260" y="15" font-family="'Cinzel', Georgia, serif" font-size="46" font-weight="900" fill="#48BB78" text-anchor="middle">EXPLORE.</text>
        <text x="0" y="15" font-family="'Cinzel', Georgia, serif" font-size="46" font-weight="900" fill="#ECC94B" text-anchor="middle">APPRENDS.</text>
        <text x="260" y="15" font-family="'Cinzel', Georgia, serif" font-size="46" font-weight="900" fill="#4299E1" text-anchor="middle">PROGRESSE.</text>
      </g>
      
      <!-- In-game Feature Badges at bottom -->
      <g transform="translate(540, 1540)" filter="url(#popShadow)">
        <rect x="-420" y="-70" width="840" height="140" rx="20" fill="rgba(25, 18, 12, 0.92)" stroke="#E2E8F0" stroke-width="2"/>
        <text x="0" y="-15" font-family="sans-serif" font-size="28" font-weight="bold" fill="#FFFFFF" text-anchor="middle">
          📜 Dialogues Profonds &amp; Quiz de Sagesse
        </text>
        <text x="0" y="35" font-family="sans-serif" font-size="24" font-weight="500" fill="#FBD38D" text-anchor="middle">
          Sources Authentiques (Coran &amp; Hadiths vérifiés)
        </text>
      </g>
    </svg>
  `);

  await sharp(bg)
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .toFile(path.join(TEMP_FRAMES, "frame_scene4.png"));
  console.log("Scene 4 frame generated.");
}

async function generateScene5() {
  // Scene 5: Cinematic Sunset & Noura (17 - 21s)
  // Background: Coucher de soleil avec Noura & Othman
  const bg = await sharp(assets.coucher_soleil)
    .resize(1080, 1920, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 1.05, saturation: 1.15 })
    .toBuffer();

  const svgOverlay = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sunsetGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2D1A0E" stop-opacity="0.6" />
          <stop offset="40%" stop-color="#000000" stop-opacity="0.0" />
          <stop offset="65%" stop-color="#000000" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#1A0D06" stop-opacity="0.95" />
        </linearGradient>
        <filter id="dialogShadow">
          <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000" flood-opacity="0.9"/>
        </filter>
      </defs>
      
      <rect width="1080" height="1920" fill="url(#sunsetGrad)" />
      
      <!-- Top chapter indicator -->
      <g transform="translate(540, 260)">
        <text x="0" y="0" font-family="'Cinzel', Georgia, serif" font-size="26" font-weight="bold" fill="#FEEBC8" text-anchor="middle" letter-spacing="4">
          — L'AVENTURE INTÉRIEURE —
        </text>
      </g>
      
      <!-- Cinematic RPG Dialogue Box at Bottom -->
      <g transform="translate(540, 1480)" filter="url(#dialogShadow)">
        <rect x="-440" y="-120" width="880" height="240" rx="24" fill="rgba(24, 15, 8, 0.94)" stroke="#ECC94B" stroke-width="3"/>
        
        <!-- Character Name Badge -->
        <rect x="-400" y="-155" width="180" height="50" rx="12" fill="#D69E2E" stroke="#FFF" stroke-width="2"/>
        <text x="-310" y="-122" font-family="'Cinzel', Georgia, serif" font-size="26" font-weight="900" fill="#1A120B" text-anchor="middle">NOURA</text>
        
        <!-- Speech text -->
        <text x="0" y="-30" font-family="Georgia, serif" font-size="38" font-style="italic" font-weight="600" fill="#FFFFFF" text-anchor="middle">
          « Ton aventure
        </text>
        <text x="0" y="25" font-family="Georgia, serif" font-size="44" font-style="italic" font-weight="bold" fill="#F6E05E" text-anchor="middle">
          ne fait que commencer… »
        </text>
        
        <text x="360" y="85" font-family="sans-serif" font-size="20" font-weight="bold" fill="#A0AEC0" text-anchor="end">
          CONTINUER ▶
        </text>
      </g>
    </svg>
  `);

  await sharp(bg)
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .toFile(path.join(TEMP_FRAMES, "frame_scene5.png"));
  console.log("Scene 5 frame generated.");
}

async function generateScene6() {
  // Scene 6: FINAL OUTRO & CTA (21 - 25s)
  // Background: Poster / Warm artistic background
  const bg = await sharp(assets.poster)
    .resize(1080, 1920, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 0.92 })
    .toBuffer();

  const svgOverlay = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="outroGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#140E07" stop-opacity="0.8" />
          <stop offset="50%" stop-color="#000000" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#140E07" stop-opacity="0.95" />
        </linearGradient>
        <filter id="finalGlow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="ctaShadow">
          <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000" flood-opacity="0.9"/>
        </filter>
      </defs>
      
      <rect width="1080" height="1920" fill="url(#outroGrad)" />
      
      <!-- Big Game Logo & Title -->
      <g transform="translate(540, 420)" filter="url(#ctaShadow)">
        <text x="0" y="-40" font-family="'Cinzel', Georgia, serif" font-size="110" font-weight="900" fill="#FBD38D" text-anchor="middle" letter-spacing="12" filter="url(#finalGlow)">
          NOUR
        </text>
        <text x="0" y="45" font-family="'Cinzel', Georgia, serif" font-size="44" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="8">
          — LE JEU —
        </text>
        
        <!-- Tagline -->
        <g transform="translate(0, 140)">
          <text x="0" y="0" font-family="Georgia, serif" font-size="30" font-style="italic" fill="#E2E8F0" text-anchor="middle">
            « Une aventure. Des choix.
          </text>
          <text x="0" y="45" font-family="Georgia, serif" font-size="34" font-style="italic" font-weight="bold" fill="#F6C85F" text-anchor="middle">
            Une histoire à vivre. »
          </text>
        </g>
      </g>
      
      <!-- Big Call to Action Button -->
      <g transform="translate(540, 1420)" filter="url(#ctaShadow)">
        <!-- CTA Button -->
        <rect x="-380" y="-55" width="760" height="110" rx="30" fill="#DD6B20" stroke="#FEEBC8" stroke-width="4"/>
        <text x="0" y="15" font-family="'Cinzel', Georgia, serif" font-size="40" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">
          DÉCOUVRE NOUR ↓
        </text>
      </g>
      
      <!-- URL & Platforms -->
      <g transform="translate(540, 1620)">
        <rect x="-340" y="-35" width="680" height="70" rx="35" fill="rgba(20, 14, 8, 0.85)" stroke="#D4AF37" stroke-width="2"/>
        <text x="0" y="10" font-family="monospace, sans-serif" font-size="28" font-weight="bold" fill="#FBD38D" text-anchor="middle" letter-spacing="1">
          nour-le-jeux.web.app
        </text>
      </g>
      
      <!-- Platform Badges -->
      <g transform="translate(540, 1750)">
        <text x="0" y="0" font-family="sans-serif" font-size="22" font-weight="600" fill="#CBD5E0" text-anchor="middle">
          📱 Disponible sur Google Play &amp; Navigateur Web
        </text>
      </g>
    </svg>
  `);

  await sharp(bg)
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .toFile(path.join(TEMP_FRAMES, "frame_scene6.png"));
  console.log("Scene 6 frame generated.");
}

async function renderAll() {
  await generateScene1();
  await generateScene2();
  await generateScene3();
  await generateScene4();
  await generateScene5();
  await generateScene6();

  console.log("All 6 scene frames ready. Generating 6 high quality video clips with smooth Ken Burns zooms...");

  const clips = [
    { file: "frame_scene1.png", dur: 3.5, zoom: "min(zoom+0.0018,1.25)", out: "pclip1.mp4" },
    { file: "frame_scene2.png", dur: 4.0, zoom: "min(zoom+0.0014,1.20)", out: "pclip2.mp4" },
    { file: "frame_scene3.png", dur: 4.5, zoom: "min(zoom+0.0012,1.18)", out: "pclip3.mp4" },
    { file: "frame_scene4.png", dur: 5.0, zoom: "min(zoom+0.0012,1.18)", out: "pclip4.mp4" },
    { file: "frame_scene5.png", dur: 4.0, zoom: "min(zoom+0.0015,1.22)", out: "pclip5.mp4" },
    { file: "frame_scene6.png", dur: 4.0, zoom: "min(zoom+0.0008,1.12)", out: "pclip6.mp4" }
  ];

  for (let i = 0; i < clips.length; i++) {
    const c = clips[i];
    const inputPath = path.join(TEMP_FRAMES, c.file);
    const cmd = `"${FFMPEG}" -y -loop 1 -i "${inputPath}" -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='${c.zoom}':d=1:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30" -t ${c.dur} -c:v libx264 -preset fast -pix_fmt yuv420p "${c.out}"`;
    console.log(`Encoding clip ${i + 1}/${clips.length} (${c.dur}s)...`);
    execSync(cmd, { cwd: WORK_DIR, stdio: 'inherit' });
  }

  // Create concat file
  const concatContent = clips.map(c => `file '${c.out}'`).join('\n');
  fs.writeFileSync(path.join(WORK_DIR, "promo_concat.txt"), concatContent, { encoding: 'ascii' });

  const finalOutput = path.join(WORK_DIR, "tiktok_promo_nour_final.mp4");
  console.log("Combining all clips with audio track...");

  const finalCmd = `"${FFMPEG}" -y -f concat -safe 0 -i promo_concat.txt -stream_loop -1 -i "${assets.audio}" -c:v libx264 -c:a aac -b:a 192k -t 25 -pix_fmt yuv420p "${finalOutput}"`;
  execSync(finalCmd, { cwd: WORK_DIR, stdio: 'inherit' });

  console.log(`\n🎉 PROMO TIKTOK VIDEO COMPLETE: ${finalOutput}`);
}

renderAll().catch(err => {
  console.error("Error rendering video:", err);
  process.exit(1);
});

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const FFMPEG = "C:\\Users\\ABDER\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-9.0.1-full_build\\bin\\ffmpeg.exe";
const WORK_DIR = "c:\\Users\\ABDER\\Downloads\\nour react";
const GAME_ASSETS = path.join(WORK_DIR, "public", "game-assets");
const PUBLIC_DIR = path.join(WORK_DIR, "public");
const TEMP_FRAMES = path.join(WORK_DIR, "temp_prologue_frames");

if (!fs.existsSync(TEMP_FRAMES)) {
  fs.mkdirSync(TEMP_FRAMES, { recursive: true });
}

const assets = {
  chambre: path.join(GAME_ASSETS, "chambre.jpg"),
  vallee: path.join(GAME_ASSETS, "vallee.jpg"),
  carrefour: path.join(GAME_ASSETS, "carrefour.jpg"),
  verger: path.join(GAME_ASSETS, "verger.jpg"),
  coucher_soleil: path.join(GAME_ASSETS, "bg_epilogue_coucher_soleil.jpg"),
  affiche: path.join(PUBLIC_DIR, "affiche_nour_whatsapp.jpg"),
  audio: path.join(WORK_DIR, "public", "audio", "ch1", "s1_intro_1.mp3")
};

console.log("Creating Prologue Cinematic frames (1080x1920)...");

// Frame 1: L'Aube & Le Silence (0 - 3.5s)
async function buildFrame1() {
  const bg = await sharp(assets.chambre)
    .resize(1080, 1920, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 0.95, saturation: 1.1 })
    .toBuffer();

  const svg = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0F0A05" stop-opacity="0.8" />
          <stop offset="35%" stop-color="#000000" stop-opacity="0.1" />
          <stop offset="65%" stop-color="#000000" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#0F0A05" stop-opacity="0.9" />
        </linearGradient>
        <filter id="fShadow">
          <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.9"/>
        </filter>
      </defs>
      <rect width="1080" height="1920" fill="url(#g1)" />
      
      <!-- Top chapter indicator -->
      <g transform="translate(540, 280)">
        <rect x="-180" y="-28" width="360" height="56" rx="28" fill="rgba(20, 14, 8, 0.85)" stroke="#D4AF37" stroke-width="2"/>
        <text x="0" y="8" font-family="'Cinzel', Georgia, serif" font-size="20" font-weight="bold" fill="#FBD38D" text-anchor="middle" letter-spacing="4">PROLOGUE</text>
      </g>
      
      <!-- Cinematic Story Text -->
      <g transform="translate(540, 1520)" filter="url(#fShadow)">
        <rect x="-440" y="-80" width="880" height="160" rx="20" fill="rgba(15, 10, 6, 0.88)" stroke="rgba(212,175,55,0.4)" stroke-width="1.5"/>
        <text x="0" y="-15" font-family="Georgia, serif" font-size="34" font-style="italic" fill="#FFFFFF" text-anchor="middle">
          « Chaque grand voyage commence
        </text>
        <text x="0" y="35" font-family="Georgia, serif" font-size="36" font-style="italic" font-weight="bold" fill="#FBD38D" text-anchor="middle">
          dans le silence d'une aube… »
        </text>
      </g>
    </svg>
  `);

  await sharp(bg).composite([{ input: svg, top: 0, left: 0 }]).toFile(path.join(TEMP_FRAMES, "pframe1.png"));
}

// Frame 2: L'Éveil & L'Intention (3.5 - 7.5s)
async function buildFrame2() {
  const bg = await sharp(assets.vallee)
    .resize(1080, 1920, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 0.95, saturation: 1.15 })
    .toBuffer();

  const svg = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0F0A05" stop-opacity="0.85" />
          <stop offset="30%" stop-color="#000000" stop-opacity="0.1" />
          <stop offset="70%" stop-color="#000000" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#0F0A05" stop-opacity="0.9" />
        </linearGradient>
        <filter id="fShadow2">
          <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.9"/>
        </filter>
      </defs>
      <rect width="1080" height="1920" fill="url(#g2)" />
      
      <g transform="translate(540, 1500)" filter="url(#fShadow2)">
        <rect x="-450" y="-90" width="900" height="180" rx="20" fill="rgba(15, 10, 6, 0.9)" stroke="rgba(212,175,55,0.5)" stroke-width="1.5"/>
        <text x="0" y="-25" font-family="Georgia, serif" font-size="32" font-style="italic" fill="#FFFFFF" text-anchor="middle">
          « Une quête où chaque acte sincère
        </text>
        <text x="0" y="25" font-family="Georgia, serif" font-size="36" font-style="italic" font-weight="bold" fill="#ECC94B" text-anchor="middle">
          dissipe l'ombre du doute et du Waswâs. »
        </text>
      </g>
    </svg>
  `);

  await sharp(bg).composite([{ input: svg, top: 0, left: 0 }]).toFile(path.join(TEMP_FRAMES, "pframe2.png"));
}

// Frame 3: Le Carrefour des Destins (7.5 - 11.5s)
async function buildFrame3() {
  const bg = await sharp(assets.carrefour)
    .resize(1080, 1920, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 0.9, saturation: 1.1 })
    .toBuffer();

  const svg = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0F0A05" stop-opacity="0.8" />
          <stop offset="35%" stop-color="#000000" stop-opacity="0.1" />
          <stop offset="70%" stop-color="#000000" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#0F0A05" stop-opacity="0.9" />
        </linearGradient>
        <filter id="fShadow3">
          <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.9"/>
        </filter>
      </defs>
      <rect width="1080" height="1920" fill="url(#g3)" />
      
      <g transform="translate(540, 1500)" filter="url(#fShadow3)">
        <rect x="-440" y="-85" width="880" height="170" rx="20" fill="rgba(15, 10, 6, 0.9)" stroke="rgba(212,175,55,0.5)" stroke-width="1.5"/>
        <text x="0" y="-20" font-family="Georgia, serif" font-size="32" font-style="italic" fill="#FFFFFF" text-anchor="middle">
          « Plusieurs chemins s'ouvrent devant toi.
        </text>
        <text x="0" y="30" font-family="Georgia, serif" font-size="36" font-style="italic" font-weight="bold" fill="#68D391" text-anchor="middle">
          La connaissance et la bienveillance te guideront. »
        </text>
      </g>
    </svg>
  `);

  await sharp(bg).composite([{ input: svg, top: 0, left: 0 }]).toFile(path.join(TEMP_FRAMES, "pframe3.png"));
}

// Frame 4: L'Appel & La Lumière du Couchant (11.5 - 15.5s)
async function buildFrame4() {
  const bg = await sharp(assets.coucher_soleil)
    .resize(1080, 1920, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 1.05, saturation: 1.2 })
    .toBuffer();

  const svg = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1A0D06" stop-opacity="0.75" />
          <stop offset="40%" stop-color="#000000" stop-opacity="0.0" />
          <stop offset="70%" stop-color="#000000" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#140A04" stop-opacity="0.95" />
        </linearGradient>
        <filter id="fShadow4">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.9"/>
        </filter>
      </defs>
      <rect width="1080" height="1920" fill="url(#g4)" />
      
      <g transform="translate(540, 1480)" filter="url(#fShadow4)">
        <rect x="-440" y="-100" width="880" height="200" rx="20" fill="rgba(20, 12, 6, 0.94)" stroke="#ECC94B" stroke-width="2.5"/>
        <rect x="-400" y="-130" width="160" height="46" rx="10" fill="#D69E2E"/>
        <text x="-320" y="-99" font-family="'Cinzel', Georgia, serif" font-size="22" font-weight="900" fill="#1A120B" text-anchor="middle">NOURA</text>
        
        <text x="0" y="-15" font-family="Georgia, serif" font-size="34" font-style="italic" fill="#FFFFFF" text-anchor="middle">
          « Othmân… Ton cœur est prêt.
        </text>
        <text x="0" y="38" font-family="Georgia, serif" font-size="40" font-style="italic" font-weight="bold" fill="#F6E05E" text-anchor="middle">
          Notre aventure commence maintenant. »
        </text>
      </g>
    </svg>
  `);

  await sharp(bg).composite([{ input: svg, top: 0, left: 0 }]).toFile(path.join(TEMP_FRAMES, "pframe4.png"));
}

// Frame 5: Titre Majeur & Éveil de NOUR (15.5 - 19.5s)
async function buildFrame5() {
  const bg = await sharp(assets.affiche)
    .resize(1080, 1920, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 0.9 })
    .toBuffer();

  const svg = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0F0A05" stop-opacity="0.8" />
          <stop offset="45%" stop-color="#000000" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#0F0A05" stop-opacity="0.95" />
        </linearGradient>
        <filter id="glowTitle">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="fShadow5">
          <feDropShadow dx="0" dy="8" stdDeviation="15" flood-color="#000" flood-opacity="0.9"/>
        </filter>
      </defs>
      <rect width="1080" height="1920" fill="url(#g5)" />
      
      <g transform="translate(540, 520)" filter="url(#fShadow5)">
        <text x="0" y="-30" font-family="'Cinzel', Georgia, serif" font-size="120" font-weight="900" fill="#FBD38D" text-anchor="middle" letter-spacing="14" filter="url(#glowTitle)">
          NOUR
        </text>
        <text x="0" y="55" font-family="'Cinzel', Georgia, serif" font-size="44" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="8">
          — L'AVENTURE INTÉRIEURE —
        </text>
      </g>
      
      <g transform="translate(540, 1480)" filter="url(#fShadow5)">
        <rect x="-380" y="-55" width="760" height="110" rx="30" fill="rgba(30, 20, 12, 0.92)" stroke="#D4AF37" stroke-width="2.5"/>
        <text x="0" y="15" font-family="'Cinzel', Georgia, serif" font-size="34" font-weight="900" fill="#ECC94B" text-anchor="middle" letter-spacing="3">
          ENTRER DANS L'HISTOIRE ▶
        </text>
      </g>
    </svg>
  `);

  await sharp(bg).composite([{ input: svg, top: 0, left: 0 }]).toFile(path.join(TEMP_FRAMES, "pframe5.png"));
}

async function renderPrologue() {
  await buildFrame1();
  await buildFrame2();
  await buildFrame3();
  await buildFrame4();
  await buildFrame5();

  console.log("Frames generated. Encoding cinematic clips with smooth Ken Burns zooms...");

  const clips = [
    { file: "pframe1.png", dur: 3.8, zoom: "min(zoom+0.0014,1.20)", out: "pro_clip1.mp4" },
    { file: "pframe2.png", dur: 4.0, zoom: "min(zoom+0.0012,1.18)", out: "pro_clip2.mp4" },
    { file: "pframe3.png", dur: 4.0, zoom: "min(zoom+0.0012,1.18)", out: "pro_clip3.mp4" },
    { file: "pframe4.png", dur: 4.0, zoom: "min(zoom+0.0014,1.20)", out: "pro_clip4.mp4" },
    { file: "pframe5.png", dur: 3.8, zoom: "min(zoom+0.0008,1.10)", out: "pro_clip5.mp4" }
  ];

  for (let i = 0; i < clips.length; i++) {
    const c = clips[i];
    const inputPath = path.join(TEMP_FRAMES, c.file);
    const cmd = `"${FFMPEG}" -y -loop 1 -i "${inputPath}" -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='${c.zoom}':d=1:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30" -t ${c.dur} -c:v libx264 -preset fast -pix_fmt yuv420p "${c.out}"`;
    console.log(`Encoding Prologue clip ${i + 1}/${clips.length} (${c.dur}s)...`);
    execSync(cmd, { cwd: WORK_DIR, stdio: 'inherit' });
  }

  // Write concat list
  const concatContent = clips.map(c => `file '${c.out}'`).join('\n');
  fs.writeFileSync(path.join(WORK_DIR, "prologue_concat.txt"), concatContent, { encoding: 'ascii' });

  // Output 1: in public/game-assets/cinematic_prologue.mp4
  const assetOutput = path.join(GAME_ASSETS, "cinematic_prologue.mp4");
  // Output 2: in public/intro_cinematic.mp4 (for instant live use in SplashScreen)
  const introOutput = path.join(PUBLIC_DIR, "intro_cinematic.mp4");

  console.log("Assembling final Prologue video with audio soundtrack...");
  const assembleCmd = `"${FFMPEG}" -y -f concat -safe 0 -i prologue_concat.txt -stream_loop -1 -i "${assets.audio}" -c:v libx264 -c:a aac -b:a 192k -t 19.5 -pix_fmt yuv420p "${assetOutput}"`;
  execSync(assembleCmd, { cwd: WORK_DIR, stdio: 'inherit' });

  // Copy to public/intro_cinematic.mp4
  fs.copyFileSync(assetOutput, introOutput);

  console.log(`\n🎉 PROLOGUE CINEMATIC GENERATED SUCCESSFULLY!`);
  console.log(`1. Game Asset: ${assetOutput}`);
  console.log(`2. Intro Cinematic: ${introOutput}`);
}

renderPrologue().catch(err => {
  console.error("Error generating prologue cinematic:", err);
  process.exit(1);
});

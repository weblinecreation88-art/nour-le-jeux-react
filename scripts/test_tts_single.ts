import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const apiKey = process.env.GEMINI_API_KEY || '';

function pcmToWav(pcmBuffer: Buffer, sampleRate = 24000, numChannels = 1, bitDepth = 16): Buffer {
  const byteRate = (sampleRate * numChannels * bitDepth) / 8;
  const blockAlign = (numChannels * bitDepth) / 8;
  const dataSize = pcmBuffer.length;
  const chunkSize = 36 + dataSize;
  const header = Buffer.alloc(44);

  header.write('RIFF', 0);
  header.writeUInt32LE(chunkSize, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitDepth, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcmBuffer]);
}

async function generateBeat(beatId: string, voiceName: string, text: string) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-tts-preview:generateContent?key=${apiKey}`;
  console.log(`Generating ${beatId} with ${voiceName}...`);
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [{ text }]
      }],
      generationConfig: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName: voiceName
            }
          }
        }
      }
    })
  });

  if (!res.ok) {
    const txt = await res.text();
    console.error(`HTTP error ${res.status}:`, txt);
    return false;
  }

  const data: any = await res.json();
  const part = data.candidates?.[0]?.content?.parts?.[0];
  if (!part?.inlineData?.data) {
    console.error('No audio in response:', data);
    return false;
  }

  const pcm = Buffer.from(part.inlineData.data, 'base64');
  const wav = pcmToWav(pcm, 24000);
  const outPathMp3 = path.resolve(`public/audio/ch1/${beatId}.mp3`);
  const outPathWav = path.resolve(`public/audio/ch1/${beatId}.wav`);
  fs.writeFileSync(outPathMp3, wav);
  fs.writeFileSync(outPathWav, wav);
  console.log(`SUCCESS! Saved ${beatId} (${wav.length} bytes) to ${outPathMp3}`);
  return true;
}

async function test() {
  await generateBeat(
    's1_hook_6',
    'Puck',
    "Maman... Et si je n'y arrivais pas ? À aller vers les autres, à parler, à trouver ma place..."
  );
  await new Promise((r) => setTimeout(r, 1500));
  await generateBeat(
    's1_hook_1',
    'Algenib',
    "L’aube venait à peine de toucher les hauteurs... Mais dans la vallée, le village était déjà éveillé. Des voix, des pas, des rires. Othmân reste assis sur son lit, les yeux posés sur son sac de voyage encore vide."
  );
}

test().catch(console.error);

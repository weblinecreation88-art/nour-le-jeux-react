import avatarHero from '../assets/images/pixel_othman_child_portrait.png';
import avatarNoura from '../assets/images/pixel_noura_maternal_guide.png';
import avatarNouraFull from '../assets/images/pixel_noura_maternal_guide.png';
import avatarWaswas from '../assets/images/pixel_waswas_mist_vortex.png';
import avatarGrandWaswas from '../assets/images/pixel_waswas_mist_vortex.png';
import avatarJeune from '../assets/images/pixel_enfant_village_portrait.png';
import avatarSavant from '../assets/images/pixel_savant_father_portrait.png';
import bgChambre from '../assets/images/bg_chambre_1788128574397.jpg';
import bgCarrefour from '../assets/images/bg_carrefour_poteau_1788269918837.jpg';
import bgWaswas from '../assets/images/bg_scene_waswas_pure_mist_1788273203805.jpg';
import bgVillage from '../assets/images/bg_village_square_1788270397793.jpg';
import bgVallee from '../assets/images/bg_vallee_village_approach_1788270427768.jpg';
import bgRefus from '../assets/images/bg_scene_refus_ruelle_1788270843346.jpg';
import bgGeste from '../assets/images/bg_scene_geste_oliviers_1788271406874.jpg';
import bgJardin from '../assets/images/bg_scene_jardin_abandonne_1788271802094.jpg';
import bgClimax from '../assets/images/bg_climax_pure_mist_1788273223875.jpg';
import bgFin from '../assets/images/bg_chapter_end_dawn_1788280400414.jpg';


// Pixel Art Assets
import pixelHeroRoom from '../assets/images/pixel_hero_room_1788184496067.jpg';
import pixelChapterMap from '../assets/images/pixel_chapter_map_1788184511829.jpg';
import pixelDialogueScene from '../assets/images/pixel_dialogue_scene_1788184527769.jpg';
import pixelAldwinGuide from '../assets/images/pixel_aldwin_guide_1788184542153.jpg';
import pixelTravelerSprite from '../assets/images/pixel_traveler_sprite_1788184558861.jpg';
import pixelClockTower from '../assets/images/pixel_clock_tower_1788184573280.jpg';

export const PIXEL_ASSETS = {
  room: pixelHeroRoom,
  map: pixelChapterMap,
  dialogueScene: pixelDialogueScene,
  aldwin: pixelAldwinGuide,
  traveler: pixelTravelerSprite,
  clockTower: pixelClockTower,
  nouraFull: avatarNouraFull,
  savant: avatarSavant
};


// Asset management for custom character sprites and scene backgrounds
export interface CustomAssetsConfig {
  characters: {
    personnage?: string;
    noura?: string;
    waswas?: string;
    grand_waswas?: string;
    jeune?: string;
  };
  backgrounds: {
    chambre?: string;
    carrefour?: string;
    waswas?: string;
    vallee?: string;
    village?: string;
    refus?: string;
    geste?: string;
    jardin?: string;
    climax?: string;
    fin?: string;
  };
}

export const DEFAULT_ASSETS: CustomAssetsConfig = {
  characters: {
    personnage: avatarHero,
    noura: avatarNoura,
    waswas: avatarWaswas,
    grand_waswas: avatarGrandWaswas,
    jeune: avatarJeune
  },
  backgrounds: {
    chambre: bgChambre,
    carrefour: bgCarrefour,
    waswas: bgWaswas,
    vallee: bgVallee,
    village: bgVillage,
    refus: bgRefus,
    geste: bgGeste,
    jardin: bgJardin,
    climax: bgClimax,
    fin: bgFin
  }
};

const STORAGE_KEY = 'nour_custom_assets_config';

export const loadCustomAssets = (): CustomAssetsConfig => {
  if (typeof window === 'undefined') {
    return DEFAULT_ASSETS;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Migrate old assets if stored in localStorage
      if (parsed?.characters?.noura && parsed.characters.noura.includes('1788128520960')) {
        parsed.characters.noura = avatarNoura;
      }
      if (parsed?.characters?.personnage && parsed.characters.personnage.includes('1788128508365')) {
        parsed.characters.personnage = avatarHero;
      }
      return {
        characters: {
          ...DEFAULT_ASSETS.characters,
          ...parsed.characters,
          // Always ensure latest default assets if old placeholder was stored
          noura: parsed?.characters?.noura && !parsed.characters.noura.includes('1788128520960') && !parsed.characters.noura.includes('1788269108981') && !parsed.characters.noura.includes('1788272446588') && !parsed.characters.noura.includes('1788272725566') && !parsed.characters.noura.includes('1788272734312') ? parsed.characters.noura : avatarNoura,
          personnage: parsed?.characters?.personnage && !parsed.characters.personnage.includes('1788128508365') && !parsed.characters.personnage.includes('1788269298280') && !parsed.characters.personnage.includes('1788272430181') ? parsed.characters.personnage : avatarHero,
          jeune: parsed?.characters?.jeune && !parsed.characters.jeune.includes('1788271163280') ? parsed.characters.jeune : avatarJeune,
          waswas: parsed?.characters?.waswas && !parsed.characters.waswas.includes('1788128534360') && !parsed.characters.waswas.includes('1788272482663') ? parsed.characters.waswas : avatarWaswas,
          grand_waswas: parsed?.characters?.grand_waswas && !parsed.characters.grand_waswas.includes('1788128534360') && !parsed.characters.grand_waswas.includes('1788271852092') && !parsed.characters.grand_waswas.includes('1788272498618') ? parsed.characters.grand_waswas : avatarGrandWaswas
        },
        backgrounds: {
          ...DEFAULT_ASSETS.backgrounds,
          ...parsed.backgrounds,
          carrefour: parsed?.backgrounds?.carrefour || bgCarrefour,
          waswas: parsed?.backgrounds?.waswas && !parsed.backgrounds.waswas.includes('1788128534360') && !parsed.backgrounds.waswas.includes('1788270124623') ? parsed.backgrounds.waswas : bgWaswas,
          village: parsed?.backgrounds?.village && !parsed.backgrounds.village.includes('1788128547686') ? parsed.backgrounds.village : bgVillage,
          vallee: parsed?.backgrounds?.vallee || bgVallee,
          refus: parsed?.backgrounds?.refus || bgRefus,
          geste: parsed?.backgrounds?.geste || bgGeste,
          jardin: parsed?.backgrounds?.jardin && !parsed.backgrounds.jardin.includes('1788128585555') ? parsed.backgrounds.jardin : bgJardin,
          climax: parsed?.backgrounds?.climax && !parsed.backgrounds.climax.includes('1788128561021') && !parsed.backgrounds.climax.includes('1788271822613') ? parsed.backgrounds.climax : bgClimax,
          fin: parsed?.backgrounds?.fin && !parsed.backgrounds.fin.includes('1788272214125') ? parsed.backgrounds.fin : bgFin
        }
      };
    }
  } catch (e) {
    console.error('Failed to load custom assets config', e);
  }
  return DEFAULT_ASSETS;
};

export const saveCustomAssets = (config: CustomAssetsConfig): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch (e) {
      console.error('Failed to save custom assets config', e);
    }
  }
};


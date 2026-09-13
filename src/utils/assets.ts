import avatarHero from '../assets/images/pixel_othman_child_portrait.png';
import avatarNoura from '../assets/images/pixel_noura_maternal_guide.png';
import avatarNouraFull from '../assets/images/pixel_noura_maternal_guide.png';
import avatarWaswas from '../assets/images/pixel_waswas_mist_vortex.png';
import avatarGrandWaswas from '../assets/images/pixel_waswas_mist_vortex.png';
import avatarJeune from '../assets/images/pixel_enfant_village_portrait.png';
import avatarMarchand from '../assets/images/pixel_marchand_portrait.png';
import avatarSavant from '../assets/images/pixel_savant_father_portrait.png';
import avatarNarrateur from '../assets/images/pixel_narrateur_sage_transparent.png';
import bgChambre from '../assets/images/bg_chambre_1788128574397.jpg';
import bgChambreDefait from '../assets/images/bg_chambre_lit_defait.jpg';
import bgCarrefour from '../assets/images/bg_carrefour_poteau_1788269918837.jpg';
import bgCarrefourSacPose from '../assets/images/bg_carrefour_sac_pose.jpg';
import bgWaswas from '../assets/images/bg_scene_waswas_pure_mist_1788273203805.jpg';
import bgWaswasClair from '../assets/images/bg_scene_waswas_clair.jpg';
import bgVillage from '../assets/images/bg_village_accueillant.jpg';
import bgVillageMefiant from '../assets/images/bg_village_mefiant.jpg';
import bgVallee from '../assets/images/bg_vallee_village_approach_1788270427768.jpg';
import bgRefus from '../assets/images/bg_scene_refus_ruelle_1788270843346.jpg';
import bgRefusJeuneCorde from '../assets/images/bg_scene_refus_jeune_corde.jpg';
import bgGesteRenverse from '../assets/images/bg_scene_geste_oliviers_1788271406874.jpg';
import bgGesteRanges from '../assets/images/bg_scene_geste_paniers_ranges.jpg';
import bgJardin from '../assets/images/bg_scene_jardin_abandonne_1788271802094.jpg';
import bgJardinEncombre from '../assets/images/bg_scene_jardin_encombre.jpg';
import bgClimax from '../assets/images/bg_climax_pure_mist_1788273223875.jpg';
import bgClimaxApaise from '../assets/images/bg_climax_apaise.jpg';
import bgFin from '../assets/images/bg_chapter_end_dawn_1788280400414.jpg';
import bgMosqueeMarches from '../assets/images/bg_mosquee_marches_attelle.jpg';
import bgMosqueePatio from '../assets/images/bg_mosquee_patio_vigne.jpg';
import bgMaisonSoins from '../assets/images/bg_maison_soins_apothicaire.jpg';
import bgVergerFleur from '../assets/images/bg_verger_fleur_lanterne.jpg';
import bgMontagneClimax from '../assets/images/bg_montagne_interieure_climax.jpg';
import bgMarcheFruitsRenverses from '../assets/images/bg_marche_fruits_renverses.jpg';
import bgMarcheFruitsReconcilie from '../assets/images/bg_marche_fruits_reconcilie.jpg';
import bgCuisineBouillon from '../assets/images/bg_cuisine_bouillon.jpg';
import bgVergerAmandiers from '../assets/images/bg_verger_amandiers.jpg';
import bgAtelierSculpture from '../assets/images/bg_atelier_sculpture_sac.jpg';
import bgEpilogue from '../assets/images/bg_epilogue_coucher_soleil.jpg';


// Pixel Art Assets
import pixelHeroRoom from '../assets/images/pixel_hero_room_1788184496067.jpg';
import pixelChapterMap from '../assets/images/pixel_chapter_map_1788184511829.jpg';

export const PIXEL_ASSETS = {
  room: pixelHeroRoom,
  map: pixelChapterMap,
  dialogueScene: bgVillage,
  aldwin: avatarNoura,
  traveler: avatarHero,
  clockTower: bgVillage,
  waswasAvatar: avatarGrandWaswas,
  nouraFull: avatarNouraFull,
  savant: avatarSavant,
  narrateur: avatarNarrateur,
  mosqueeMarches: bgMosqueeMarches,
  mosqueePatio: bgMosqueePatio,
  maisonSoins: bgMaisonSoins,
  vergerFleur: bgVergerFleur,
  montagneClimax: bgMontagneClimax,
  atelierSculpture: bgAtelierSculpture,
  epilogue: bgEpilogue
};


// Asset management for custom character sprites and scene backgrounds
export interface CustomAssetsConfig {
  characters: {
    personnage?: string;
    noura?: string;
    waswas?: string;
    grand_waswas?: string;
    jeune?: string;
    marchand?: string;
    enfant?: string;
    narrateur?: string;
  };
  backgrounds: {
    chambre?: string;
    chambre_defait?: string;
    carrefour?: string;
    carrefour_sac_pose?: string;
    waswas?: string;
    waswas_clair?: string;
    vallee?: string;
    village?: string;
    village_mefiant?: string;
    refus?: string;
    refus_jeune_corde?: string;
    geste?: string;
    geste_renverse?: string;
    jardin?: string;
    jardin_encombre?: string;
    climax?: string;
    climax_apaise?: string;
    fin?: string;
    mosquee_marches?: string;
    mosquee_patio?: string;
    maison_soins?: string;
    verger_fleur?: string;
    montagne_climax?: string;
    marche_renverse?: string;
    marche_reconcilie?: string;
    cuisine_bouillon?: string;
    verger_amandiers?: string;
    atelier_sculpture?: string;
    epilogue?: string;
  };
}

export const DEFAULT_ASSETS: CustomAssetsConfig = {
  characters: {
    personnage: avatarHero,
    noura: avatarNoura,
    waswas: avatarWaswas,
    grand_waswas: avatarGrandWaswas,
    jeune: avatarJeune,
    marchand: avatarMarchand,
    enfant: avatarJeune,
    narrateur: avatarNarrateur
  },
  backgrounds: {
    chambre: bgChambre,
    chambre_defait: bgChambreDefait,
    carrefour: bgCarrefour,
    carrefour_sac_pose: bgCarrefourSacPose,
    waswas: bgWaswas,
    waswas_clair: bgWaswasClair,
    vallee: bgVallee,
    village: bgVillage,
    village_mefiant: bgVillageMefiant,
    refus: bgRefus,
    refus_jeune_corde: bgRefusJeuneCorde,
    geste: bgGesteRanges,
    geste_renverse: bgGesteRenverse,
    jardin: bgJardin,
    jardin_encombre: bgJardinEncombre,
    climax: bgClimax,
    climax_apaise: bgClimaxApaise,
    fin: bgFin,
    mosquee_marches: bgMosqueeMarches,
    mosquee_patio: bgMosqueePatio,
    maison_soins: bgMaisonSoins,
    verger_fleur: bgVergerFleur,
    montagne_climax: bgMontagneClimax,
    marche_renverse: bgMarcheFruitsRenverses,
    marche_reconcilie: bgMarcheFruitsReconcilie,
    cuisine_bouillon: bgCuisineBouillon,
    verger_amandiers: bgVergerAmandiers,
    atelier_sculpture: bgAtelierSculpture,
    epilogue: bgEpilogue
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
          grand_waswas: parsed?.characters?.grand_waswas && !parsed.characters.grand_waswas.includes('1788128534360') && !parsed.characters.grand_waswas.includes('1788271852092') && !parsed.characters.grand_waswas.includes('1788272498618') ? parsed.characters.grand_waswas : avatarGrandWaswas,
          narrateur: parsed?.characters?.narrateur || avatarNarrateur
        },
        backgrounds: {
          ...DEFAULT_ASSETS.backgrounds,
          ...parsed.backgrounds,
          carrefour: parsed?.backgrounds?.carrefour || bgCarrefour,
          waswas: parsed?.backgrounds?.waswas && !parsed.backgrounds.waswas.includes('1788128534360') && !parsed.backgrounds.waswas.includes('1788270124623') ? parsed.backgrounds.waswas : bgWaswas,
          village: parsed?.backgrounds?.village && !parsed.backgrounds.village.includes('1788128547686') && !parsed.backgrounds.village.includes('1788270397793') ? parsed.backgrounds.village : bgVillage,
          vallee: parsed?.backgrounds?.vallee || bgVallee,
          refus: parsed?.backgrounds?.refus || bgRefus,
          geste: parsed?.backgrounds?.geste || bgGesteRanges,
          jardin: parsed?.backgrounds?.jardin && !parsed.backgrounds.jardin.includes('1788128585555') ? parsed.backgrounds.jardin : bgJardin,
          climax: parsed?.backgrounds?.climax && !parsed.backgrounds.climax.includes('1788128561021') && !parsed.backgrounds.climax.includes('1788271822613') ? parsed.backgrounds.climax : bgClimax,
          fin: parsed?.backgrounds?.fin && !parsed.backgrounds.fin.includes('1788272214125') ? parsed.backgrounds.fin : bgFin,
          atelier_sculpture: parsed?.backgrounds?.atelier_sculpture || bgAtelierSculpture
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


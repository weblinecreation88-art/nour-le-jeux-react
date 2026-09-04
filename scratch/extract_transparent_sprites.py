import os
from PIL import Image, ImageFilter

src_path = r'src/assets/images/characters_master_sheet.jpg'
img = Image.open(src_path).convert("RGBA")
width, height = img.size

# Function to remove black background (make transparent or soft gradient)
def process_character_crop(box, output_png_path, bg_color_gradient=None):
    crop = img.crop(box).convert("RGBA")
    
    # Process transparency: pixels that are close to black (r<25, g<25, b<25) become transparent
    datas = crop.getdata()
    new_data = []
    for item in datas:
        # Distance to pure black
        r, g, b, a = item
        # If very dark (background of the sheet)
        if r < 28 and g < 28 and b < 28:
            new_data.append((0, 0, 0, 0)) # Transparent
        else:
            new_data.append(item)
    
    crop.putdata(new_data)
    crop.save(output_png_path, "PNG")
    print(f"Saved transparent sprite: {output_png_path}")

# 1. Othmân (Enfant Protagoniste)
process_character_crop(
    (int(width * 0.005), int(height * 0.06), int(width * 0.14), int(height * 0.325)),
    r'src/assets/images/pixel_othman_child_portrait.png'
)

# 2. Noura (Guide Maternelle)
process_character_crop(
    (int(width * 0.525), int(height * 0.055), int(width * 0.68), int(height * 0.33)),
    r'src/assets/images/pixel_noura_maternal_guide.png'
)

# 3. Villageois Homme
process_character_crop(
    (int(width * 0.005), int(height * 0.36), int(width * 0.13), int(height * 0.53)),
    r'src/assets/images/pixel_villageois_portrait.png'
)

# 4. Villageoise Femme
process_character_crop(
    (int(width * 0.495), int(height * 0.365), int(width * 0.605), int(height * 0.55)),
    r'src/assets/images/pixel_villageoise_portrait.png'
)

# 5. Savant / Père
process_character_crop(
    (int(width * 0.005), int(height * 0.565), int(width * 0.12), int(height * 0.75)),
    r'src/assets/images/pixel_savant_father_portrait.png'
)

# 6. Enfant Village
process_character_crop(
    (int(width * 0.375), int(height * 0.575), int(width * 0.47), int(height * 0.75)),
    r'src/assets/images/pixel_enfant_village_portrait.png'
)

# 7. Marchand
process_character_crop(
    (int(width * 0.005), int(height * 0.79), int(width * 0.15), int(height * 0.99)),
    r'src/assets/images/pixel_marchand_portrait.png'
)

# 8. Waswas Vortex
process_character_crop(
    (int(width * 0.435), int(height * 0.785), int(width * 0.54), int(height * 0.97)),
    r'src/assets/images/pixel_waswas_mist_vortex.png'
)

print("Transparency processing complete!")

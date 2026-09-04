import os
from PIL import Image

src_path = r'src/assets/images/characters_master_sheet.jpg'
img = Image.open(src_path)
width, height = img.size
print(f"Master Sheet Dimensions: {width}x{height}")

# Define normalized box coordinates (left, top, right, bottom)
# Total width: ~1024 / height: ~683
# Let's compute exact pixel coords

# 1. Protagoniste Othmân (main large bust top left)
# Roughly x: 10 to 140, y: 55 to 320
othman_crop = img.crop((int(width * 0.005), int(height * 0.06), int(width * 0.14), int(height * 0.325)))
othman_crop.save(r'src/assets/images/pixel_othman_child_portrait.jpg', quality=95)

# 2. Noura Guide (main large bust top right-center)
# Roughly x: 530 to 680, y: 55 to 325
noura_crop = img.crop((int(width * 0.525), int(height * 0.055), int(width * 0.68), int(height * 0.33)))
noura_crop.save(r'src/assets/images/pixel_noura_maternal_guide.jpg', quality=95)

# 3. Villageois Homme (main bust)
# Roughly x: 10 to 125, y: 360 to 525
villageois_crop = img.crop((int(width * 0.005), int(height * 0.36), int(width * 0.13), int(height * 0.53)))
villageois_crop.save(r'src/assets/images/pixel_villageois_portrait.jpg', quality=95)

# 4. Villageoise Femme (main bust)
# Roughly x: 500 to 600, y: 360 to 545
villageoise_crop = img.crop((int(width * 0.495), int(height * 0.365), int(width * 0.605), int(height * 0.55)))
villageoise_crop.save(r'src/assets/images/pixel_villageoise_portrait.jpg', quality=95)

# 5. Savant / Père
# Roughly x: 5 to 120, y: 560 to 745
savant_crop = img.crop((int(width * 0.005), int(height * 0.565), int(width * 0.12), int(height * 0.75)))
savant_crop.save(r'src/assets/images/pixel_savant_father_portrait.jpg', quality=95)

# 6. Enfant Village
# Roughly x: 375 to 470, y: 575 to 745
enfant_crop = img.crop((int(width * 0.375), int(height * 0.575), int(width * 0.47), int(height * 0.75)))
enfant_crop.save(r'src/assets/images/pixel_enfant_village_portrait.jpg', quality=95)

# 7. Marchand
# Roughly x: 5 to 150, y: 790 to 990
marchand_crop = img.crop((int(width * 0.005), int(height * 0.79), int(width * 0.15), int(height * 0.99)))
marchand_crop.save(r'src/assets/images/pixel_marchand_portrait.jpg', quality=95)

# 8. Waswas Vortex
# Roughly x: 435 to 540, y: 785 to 970
waswas_crop = img.crop((int(width * 0.435), int(height * 0.785), int(width * 0.54), int(height * 0.97)))
waswas_crop.save(r'src/assets/images/pixel_waswas_mist_vortex.jpg', quality=95)

print("All character portraits successfully extracted from the official master sheet!")

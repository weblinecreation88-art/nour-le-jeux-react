$ffmpeg = "C:\Users\ABDER\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.1-full_build\bin\ffmpeg.exe"
$brain = "C:\Users\ABDER\.gemini\antigravity\brain\ce0cf4de-4b71-4d2f-b7cf-094d7511fd31"
$img1 = "$brain\tiktok_scene1_othman_aube_1789238714918.jpg"
$img2 = "$brain\tiktok_scene2_waswas_mystere_1789238740307.jpg"
$img3 = "$brain\playstore_mockup_1_1789226927739.jpg"
$img4 = "$brain\playstore_mockup_3_1789226966103.jpg"
$img5 = "$brain\playstore_mockup_4_1789226987405.jpg"
$audio = "c:\Users\ABDER\Downloads\nour react\public\audio\ch1\s1_intro_1.mp3"
$out = "c:\Users\ABDER\Downloads\nour react\tiktok_teaser_nour.mp4"

Write-Host "Rendering 5 TikTok clips with smooth Ken Burns effects..."

# Clip 1
& $ffmpeg -y -loop 1 -i $img1 -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0015,1.22)':d=1:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30" -t 5 -c:v libx264 -preset fast -pix_fmt yuv420p "clip1.mp4"

# Clip 2
& $ffmpeg -y -loop 1 -i $img2 -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0012,1.18)':d=1:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30" -t 5 -c:v libx264 -preset fast -pix_fmt yuv420p "clip2.mp4"

# Clip 3
& $ffmpeg -y -loop 1 -i $img3 -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0010,1.15)':d=1:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30" -t 5 -c:v libx264 -preset fast -pix_fmt yuv420p "clip3.mp4"

# Clip 4
& $ffmpeg -y -loop 1 -i $img4 -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0010,1.15)':d=1:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30" -t 5 -c:v libx264 -preset fast -pix_fmt yuv420p "clip4.mp4"

# Clip 5
& $ffmpeg -y -loop 1 -i $img5 -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0010,1.15)':d=1:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30" -t 5 -c:v libx264 -preset fast -pix_fmt yuv420p "clip5.mp4"

# Concat
"file 'clip1.mp4'`nfile 'clip2.mp4'`nfile 'clip3.mp4'`nfile 'clip4.mp4'`nfile 'clip5.mp4'" | Set-Content "concat_list.txt" -Encoding utf8

# Final encode with background narration/audio (looping audio to fill 25s)
& $ffmpeg -y -f concat -safe 0 -i concat_list.txt -stream_loop -1 -i $audio -c:v libx264 -c:a aac -b:a 192k -t 25 -pix_fmt yuv420p $out

Write-Host "DONE! File generated at: $out"

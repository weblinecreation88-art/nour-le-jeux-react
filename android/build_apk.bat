@echo off
set "JAVA_HOME=C:\Program Files\Microsoft\jdk-21.0.12.101-hotspot"
set "ANDROID_HOME=C:\Users\ABDER\AppData\Local\Android\Sdk"
set "PATH=%JAVA_HOME%\bin;%PATH%"
echo Building with JAVA_HOME: %JAVA_HOME%
call gradlew.bat --stop
call gradlew.bat assembleDebug
if %ERRORLEVEL% equ 0 (
    echo Copying APK to project root...
    copy /Y "app\build\outputs\apk\debug\app-debug.apk" "..\Nour-LaVoieDeLaSagesse-debug.apk"
    echo APK created successfully at: Nour-LaVoieDeLaSagesse-debug.apk
)

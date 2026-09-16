@echo off
set "JAVA_HOME=C:\Program Files\Microsoft\jdk-21.0.12.101-hotspot"
set "ANDROID_HOME=C:\Users\ABDER\AppData\Local\Android\Sdk"
set "PATH=%JAVA_HOME%\bin;%PATH%"
echo Building Release APK with JAVA_HOME: %JAVA_HOME%
call gradlew.bat --stop
call gradlew.bat assembleRelease
if %ERRORLEVEL% equ 0 (
    echo Copying Release APK to project root...
    copy /Y "app\build\outputs\apk\release\app-release.apk" "..\NOUR-LaVoieDeLaSagesse-final.apk"
    copy /Y "app\build\outputs\apk\release\app-release.apk" "..\nour-release-direct.apk"
    echo APK created successfully at: NOUR-LaVoieDeLaSagesse-final.apk
)

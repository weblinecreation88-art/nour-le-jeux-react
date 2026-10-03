@echo off

set "ANDROID_HOME=C:\Users\ABDER\AppData\Local\Android\Sdk"
set "PATH=%JAVA_HOME%\bin;%PATH%"
set "JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-21.0.11.10-hotspot"`r`necho Building Release APK with JAVA_HOME: %JAVA_HOME%
call gradlew.bat --stop
call gradlew.bat assembleRelease
if %ERRORLEVEL% equ 0 (
    echo Copying Release APK to project root...
    copy /Y "app\build\outputs\apk\release\app-release.apk" "..\NOUR-LaVoieDeLaSagesse-final.apk"
    copy /Y "app\build\outputs\apk\release\app-release.apk" "..\nour-release-direct.apk"
    echo APK created successfully at: NOUR-LaVoieDeLaSagesse-final.apk
)

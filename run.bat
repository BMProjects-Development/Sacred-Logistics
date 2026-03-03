@echo off
setlocal enabledelayedexpansion

echo [INFO] Searching for Java 17...

set "JAVA_EXEC="

for /d %%i in (
    "C:\Program Files\Eclipse Adoptium\jdk-17*"
    "C:\Program Files\Eclipse Adoptium\jre-17*"
    "C:\Program Files\Java\jdk-17*"
    "C:\Program Files\Java\jre-17*"
    "C:\Program Files\Zulu\zulu-17*"
) do (
    if exist "%%i\bin\java.exe" (
        set "JAVA_EXEC=%%i\bin\java.exe"
        goto :START_SERVER
    )
)

java -version 2>&1 | findstr "17." >nul
if %errorlevel% equ 0 (
    set "JAVA_EXEC=java"
    goto :START_SERVER
)

echo.
echo [ERROR] Java 17 was NOT found!
echo Found versions in Adoptium folder:
dir /b "C:\Program Files\Eclipse Adoptium\"
echo.
echo Please install Java 17 (Temurin 17 LTS).
pause
exit

:START_SERVER
echo [SUCCESS] Found Java 17 at: "%JAVA_EXEC%"
echo.

"%JAVA_EXEC%" @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.19.2-43.5.0/win_args.txt nogui

pause
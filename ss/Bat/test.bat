@echo off
::Creating article on articles.html
echo CHOOSE SMALLER ARTICLE IMAGE FOR ARTICLES.HTML POST DESCRIPTOR: 
timeout /t 3
set dialog="about:<input type=file id=FILE><script>FILE.click();new ActiveXObject
set dialog=%dialog%('Scripting.FileSystemObject').GetStandardStream(1).WriteLine(FILE.value);
set dialog=%dialog%close();resizeTo(0,0);</script>"
for /f "tokens=* delims=" %%p in ('mshta.exe %dialog%') do set "file=%%p"
For %%A in ("%file%") do (
    Set Name=%%~nxA
)
echo You chose: %Name%
echo.
echo.
set "source_folder=C:\WEBSITES\thecrux.github.io\ss\images"
set "result_folder_1=C:\WEBSITES\thecrux.github.io\ss\images\small-images"
set "smallImage=%source_folder%\%name%"
echo the full path: %smallImage%
echo.
echo.
pause
for %%a in ("%smallImage%") do (
   call scale.bat -source "%%~fa" -target "%result_folder_1%\%%~nxa" -max-height 250 
)
 
@echo off
set /p articletitle="Enter Article Title: "
set /p htmlfilename="Enter exact html file name: "
@echo ^<li^>^<a class^=^"search-a" href="%htmlfilename%^" title^=^"^"^>%articletitle%^</a^>^</li^> >> ..\..\thecrux.github.io\ss\common\search.html
echo .
echo .
echo COMPLETE...
timeout /t 1
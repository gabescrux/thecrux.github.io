@echo off
:LOOP
set /p htmlfile="Exact html file name without .html: "
set htmlfileext=%htmlfile%.html
set filepath=..\common\
set htmlfilename=..\%htmlfile%.html
set articleIndex=..\common\articlesIndex.html
break > %htmlfilename%
set /p articletitle="Article Title: "
set /p authorname="Enter author name (e.g. Gabriel Ulrich): "
set /p description="Paste article description here: "
echo .
echo .
echo Choose IMAGE for article: 
timeout /t 3
set dialog="about:<input type=file id=FILE><script>FILE.click();new ActiveXObject
set dialog=%dialog%('Scripting.FileSystemObject').GetStandardStream(1).WriteLine(FILE.value);
set dialog=%dialog%close();resizeTo(0,0);</script>"
for /f "tokens=* delims=" %%p in ('mshta.exe %dialog%') do set "file=%%p"
For %%A in ("%file%") do (
    Set Name=%%~nxA
)
echo You chose: %Name%
set image=images/%Name%
set /p altimg="Alt for the image: "
set altimg=[%altimg%]
set /p imghref="Enter reference link for image (if none enter #): "
::header
@echo ^<^!DOCTYPE html^> > %htmlfilename%
echo ^<html^> >> %htmlfilename%
echo 	^<head^> >> %htmlfilename%
echo 		^<title^>Serving Silent ^| %articletitle% ^</title^> >> %htmlfilename%
echo 		^<^!-- Links --^> >> %htmlfilename%
echo 		^<link rel^="stylesheet" href^="css/main.css"^> >> %htmlfilename%
echo 		^<link rel^="stylesheet" href^="css/header.css"^> >> %htmlfilename%
echo 		^<link rel^="shortcut icon" type^="image/x-icon" href^="images/icon/fishsmall.ico"/^> >> %htmlfilename%
echo 		^<^!-- meta --^> >> %htmlfilename%
echo 		^<meta charset^="UTF-8"^> >> %htmlfilename%
echo 		^<meta name^="viewport" content^="width=device-width, initial-scale=1"^>  >> %htmlfilename%
echo 		^<meta name^="author" content^="%authorname%"^> >> %htmlfilename%
echo 		^<meta name^="description" content^="%description%"^>  >> %htmlfilename%
echo 		^<meta property^="og:url" content^="www.servingsilent.com/%htmlfileext%"^>  >> %htmlfilename%
echo 		^<meta property^="og:image" content^="%altimg%"^>  >> %htmlfilename%
echo 		^<meta property^="og:description" content^="%description%"^>  >> %htmlfilename%
echo 		^<meta property^="og:title" content^="Serving Silent | %articletitle%"^> >> %htmlfilename%
echo 		^<meta property^="og:site_name" content^="Serving Silent | Home"^> >> %htmlfilename%
echo 		^<meta property^="og:see_also" content^="www.ServingSilent.com"^> >> %htmlfilename%
echo 		^<meta name^="twitter:card" content^="Serving Silent | %articletitle%"^> >> %htmlfilename%
echo 		^<meta name^="twitter:url" content^="www.servingsielnt.com/%htmlfileext%"^>  >> %htmlfilename% 
echo 		^<meta name^="twitter:title" content^="Serving Silent | Home"^> >> %htmlfilename%
echo 		^<meta name^="twitter:description"content^="%description%"^> >> %htmlfilename%
echo 		^<meta name^="twitter:image" content^="%altimg%"^> >> %htmlfilename%
echo 	^</head^> >> %htmlfilename% 
::body
echo 	^<body^> >> %htmlfilename%
echo 		^<div id^="page-wrapper"^> >> %htmlfilename%
echo 			^<^!-- Header --^> >> %htmlfilename%
echo 			^<div id^="web-header"^>^</div^> >> %htmlfilename%
echo 			^<^!-- Main --^> >> %htmlfilename%
echo 			^<section id^="main"^> >> %htmlfilename%
echo 				^<div class^="container"^> >> %htmlfilename%
echo 					^<div class^="row"^> >> %htmlfilename%
echo 						^<div class^="col-8 col-12-medium"^> >> %htmlfilename%
echo 							^<^!-- Content --^> >> %htmlfilename%
echo 							^<article class^="boxArticle post"^> >> %htmlfilename%
echo 							^<a href^="%imghref%" class^="image featured"^>^<img src^="%image%" alt^="%altimg%" /^>^</a^> >> %htmlfilename%
::article content
echo .
echo .
echo Choose an ARTICLE with ext of .html:
timeout /t 3
set dialog="about:<input type=file id=FILE><script>FILE.click();new ActiveXObject
set dialog=%dialog%('Scripting.FileSystemObject').GetStandardStream(1).WriteLine(FILE.value);
set dialog=%dialog%close();resizeTo(0,0);</script>"
for /f "tokens=* delims=" %%p in ('mshta.exe %dialog%') do set "file=%%p"
echo The file you chose:
for %%F in ("%file%") do echo %%~nxF
type %file% >> %htmlfilename%
::footer & javascript
echo Writing...
echo 							^</article^> >> %htmlfilename%
echo 						^</div^> >> %htmlfilename%
echo 						^<^!-- Sidebar --^> >> %htmlfilename%
echo 						^<div class^="col-4 col-12-medium"^> >> %htmlfilename%
echo 							^<section class^="boxSide o-h" itemscope^> >> %htmlfilename%
echo 								^<header style^="padding:20px"^> >> %htmlfilename%
echo 									^<h4^>Search Articles:^</h4^> >> %htmlfilename%
echo 										^<input style^="width:100%%" id^="articleSearch" type^="text" placeholder^="Auto Search..."^> >> %htmlfilename%
echo 								^</header^> >> %htmlfilename%
echo 								^<ul id^="articleList" style^="margin:20px"^> >> %htmlfilename%
echo 									^<div id^="web-rightSideBar"^>^</div^> >> %htmlfilename%
echo 								^</ul^> >> %htmlfilename%
echo 							^</section^> >> %htmlfilename%
echo 							^<section class^="boxSide"^> >> %htmlfilename%
echo 								^<header style^="padding:20px"^> >> %htmlfilename%
echo 									^<h4^>More...^</h4^> >> %htmlfilename%
echo 								^</header^> >> %htmlfilename%
echo 							^</section^> >> %htmlfilename%
echo 						^</div^> >> %htmlfilename%
echo 					^</div^> >> %htmlfilename%
echo 				^</div^> >> %htmlfilename%
echo 			^</section^> >> %htmlfilename%
echo 			^<^!-- footer --^> >> %htmlfilename% 
echo 			^<div id^="web-footer"^>^</div^> >> %htmlfilename%
echo 		^</div^> >> %htmlfilename%
echo		^<^!-- script --^> >> %htmlfilename%
echo 		^<script src^="js/jquery.min.js"^>^</script^> >> %htmlfilename%
echo 		^<script src^="js/main.js"^>^</script^> >> %htmlfilename%
echo 		^<script src^="js/articleOnLoad.js"^>^</script^> >> %htmlfilename%
echo 	^</body^> >> %htmlfilename%
echo ^</html^> >> %htmlfilename%
::Question to continue
setlocal
:PROMPT
SET /P AREYOUSURE=Continue(Y/[N]): 
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END
goto YES
:END
goto NO
endlocal
:NO
setlocal
:PROMPT
SET /P AREYOUSURE=Would you like to delete your progress?(Y/[N]): 
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END1
goto AREYOUSURE
:END1
goto YES
endlocal
:AREYOUSURE
setlocal
:PROMPT
SET /P AREYOUSURE=Are you sure?(Y/[N]): 
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END2
goto DELETE
:END2
goto YES
endlocal
:DELETE
del %htmlfilename%
echo DELETED %htmlfileext%! STARTING OVER IN 3 SECONDS.
timeout /t 3
goto LOOP
endlocal
:YES
::add to side bar
echo Adding article link to side bar search...
@echo ^<li^>^<a class^="search-a" href^="%htmlfileext%" title^="%articletitle%" itemprop^="Article"^>%articletitle%^</a^>^</li^> >> %filepath%search.html
echo .
echo .
set /p postDescriptor="Enter Post descriptor('Article' 'Video' 'Audio' or other..): "

echo Choose small image for %postDescriptor%: 
timeout /t 3
set dialog="about:<input type=file id=FILE><script>FILE.click();new ActiveXObject
set dialog=%dialog%('Scripting.FileSystemObject').GetStandardStream(1).WriteLine(FILE.value);
set dialog=%dialog%close();resizeTo(0,0);</script>"
for /f "tokens=* delims=" %%p in ('mshta.exe %dialog%') do set "file=%%p"
For %%A in ("%file%") do (
    Set Name=%%~nxA
)
echo You chose: %Name%
set image=images/%Name%
echo .
echo .

echo Choose small image for %postDescriptor%: 
timeout /t 3
set dialog1="about:<input type=file id=FILE><script>FILE.click();new ActiveXObject
set dialog1=%dialog1%('Scripting.FileSystemObject').GetStandardStream(1).WriteLine(FILE.value);
set dialog1=%dialog1%close();resizeTo(0,0);</script>"
for /f "tokens=* delims=" %%p in ('mshta.exe %dialog1%') do set "file1=%%p"
For %%A in ("%file1%") do (
    Set Name1=%%~nxA
)
echo You chose: %Name1%
set authorImage=images/icon/%Name1%
echo .
echo .

@echo ^<article class^="mb-4"^> >> %articleIndex%
echo    ^<a href^="%htmlfileext%"^> >> %articleIndex%
echo 		^<div class^="row position-relative"^> >> %articleIndex%
echo			^<img class^="col-3 col-4-medium col-12-small o-cover" src^="%image%"alt="%altimg%"/^> >> %articleIndex%
echo			^<div class^="unhide736 bottom-left-top-right mr-5"^>%authorname% ^</div^> >> %articleIndex%
echo 			^<div class^="bottom-left-top-right"^>^<img class^="author-icon" src^="%authorImage%"alt^="%authorIconAlt%"/^> >> %articleIndex%
echo         	^<span class^="hide736"^> %authorname%^</span^>^</div^> >> %articleIndex%
echo			^<div class^="article-descriptor"^>%postDescriptor%^</div^> >> %articleIndex%
echo				^<div class^="article-title col-9 col-8-medium col-12-small"^> >> %articleIndex%
echo					^<div class^="article-d-none"^> ^<h3^>%articletitle%^</h3^> >> %articleIndex%
echo						^<p^>%description%^</p^> >> %articleIndex% 
echo					^</div^> >> %articleIndex%
echo				^</div^> >> %articleIndex%
echo			^</div^> >> %articleIndex%
echo 	^</a^> >> %articleIndex%
echo ^</article^> >> %articleIndex%
pause



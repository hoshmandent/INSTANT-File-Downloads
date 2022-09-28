# INSTANT File Downloads Using JavaScript:
## Instantly download a file from your web page into the users computer Using a JavaScript Script.
<br />
<br />

## For this demonstration I'm going to use Windows for the System and The Calculator app located at 'C:\Windows\System32\calc.exe'


---

# Steps
* Get The Content of Calc.exe in Powershell by running 
```powershell
(Get-Content C:\Windows\System32\calc.exe)
```
this will output a bunch of data representing Calc.exe

* Run The following Command to Base64 encode the output.
```powershell
$base64string = [Convert]::ToBase64String([IO.File]::ReadAllBytes('C:\Windows\System32\calc.exe'))
```
this will Encode the data into Base64 String making it easier to work with.

* Now to Output the $base64string variable we need to put it in a file run the following command to write the data into a file
```powershell
$base64string | Out-File TempData.log
```
* now open the file up in your favorite code editor or just use notepad by running the command:
```powershell
notepad.exe TempData.log
```
* Copy the Whole Data and paste it in the [script.js](script.js) Variable named 'filedata'
```

# After copying the base64 encoded data into that variable now we can start to code the whole script.js file

# **for educational purposes Only!**
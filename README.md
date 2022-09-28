# INSTANT File Downloads Using JavaScript:
## Instantly download a file from your web page into the users computer Using a JavaScript Script.
<br />
<br />

## For this demonstration I'm going to use Windows for the System and The Calculator app located at 'C:\Windows\System32\calc.exe'


---
<br />


# Steps
1. Get The Content of Calc.exe in Powershell by running 
```powershell
(Get-Content C:\Windows\System32\calc.exe)
```
this will output a bunch of data representing Calc.exe

1. Run The following Command to Base64 encode the output.
```powershell
$base64string = [Convert]::ToBase64String([IO.File]::ReadAllBytes('C:\Windows\System32\calc.exe'))
```
# **for educational purposes Only!**
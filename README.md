# INSTANT File Downloads Using JavaScript:
## Instantly download a file from your web page into the users computer Using a JavaScript Script.
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


## After copying the base64 encoded data into that variable now we can start to code the whole script.js file
* first of we're going to create a function to convert the base64 data into Bytes
```js
function base64tobytes(base64data){
    var binaryValues = atob(base64data);
    var binaryLength = binaryValues.length
    var bytesData = new Uint8Array(binaryLength);

    for ( var i = 0; i < binaryLength; i++){
        bytesData[i] = binaryValues.charCodeAt(i);
    }

    return bytesData.buffer;
}
```
i'm not gonna get into this much because it's basic js and im just using built-in Library in JavaScript and There's a lot of documentations online for these.

---

* Now we're going to pass the data into the function
```js
var fileBytes = base64tobytes(filedata); 
```

* now we're going to defind a new Blob it has to be a new Blob because this is a object.
```js
var blob = new Blob([fileBytes], {"type":"octet/stream"});
```
* now we have to force the user into downloading, we can do that by creating an html anchor tag.
```js
var anchor = document.createElement("a");
document.body.append(anchor);
// we can hide the anchor by using some basic CSS
anchor.style = "display: None;"
```
* now the important part, we need to create a url that reach out for the blob we created earlier.
```js
var url = window.URL.createObjectURL(blob);
anchor.href = url;
```
* and finally we want to force that to download, we can do it by simply putting:
```js
anchor.download = filename;
```
* now we do need to force and click on that a tag HTML element.
```js
anchor.click();
```
* If you want to remove after the download put this in your code.
```js
window.URL.revokeObjectURL(url);
```
Now you can check that calc.exe is working fine with all of it's funcationality.
# **for educational purposes Only!**

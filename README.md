# code-challenge

Tested with node v12.14.0

git clone 

npm install

npm start 

npm test 

## Test

Ako je sve prošlo dobro:
```
Test start
Login OK
 --> null OK!
xxc --> x2c1 OK!
vbb --> v1b2 OK!
XXXYYYYZZQXX --> X3Y4Z2Q1X2 OK!
Error page for null . OK!
Error page for { inputString: { test: 'object' } } . OK!
Test end

```
Testira se endpoint encoder s praznim stringom, tri različita stringa (iz polja **string_array**), null i objektom. Test je napravljen u node.js, ali bez korištenja bilo kakvih dodatnih paketa.

Test.js prvo napravi poziv na **/login**, a onda s tim tokenom testira **/encoder**.

##Aplikacija
Backend je u node.js. 

Frontend je čisti javascript i html (s minimalno css-a), neovisan o node.js i bez dependance-ija. 

Ideja je bila rješiti zadatak bez dodatnih paketa, to jest 'najniže' moguće. File-ovi login.js, authorization.js nisu mjenjani, u package.json je dodan samo test.js.

Backendu je dodan endpoint **encoder** koji prima i vraća string, ako prolazi autorizacija. 

Funkcija **encoder** prolazi kroz dobiveni string, kada će slijedeći znak biti različit od trenutnog, doda na izlazni string trenutni znak i stanje brojača (k).

Login endpoint sprema token u local storage.

Pozivi na endpoint napravljeni su u čistom javascriptu.

U frontendu su dvije stranice, index("/") i home("/home"), pri čemu home stranica samo uz token iz local storage-a šalje ajax za get_home.html iz kojeg je moguće napraviti poziv na encoder endpoint.

U **app.js** su dodani get-ovi za sve frontend file-ove.


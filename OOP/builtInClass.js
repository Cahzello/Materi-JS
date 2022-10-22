// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
const tanggal = new Date(); 
 
// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
const lengkap = new Date(dateString); 
 
// #3 parameter dalam bentuk number, misal 87400000
const mili = new Date(miliseconds); 
 
// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
const myDate = new Date(year,month,date,hour,minute,second,millisecond); 

// built in method date

myDate.getMonth()

myDate.getFullYear()

myDate.getDate()

myDate.getHours()

myDate.getMinutes()

myDate.getSeconds()

myDate.getMilliseconds()

myDate.getTime()

myDate.getDay()

// static method built in class date

// parse(datestring)
Date.parse("2021-01-01")

// UTC(year, [..params])
Date.UTC(2021, 01, 01)

// date string format

/*

Format	Penjelasan

YYYY	4 digit tahun, misalkan : 2021
MM	    2 digit bulan, misalkan : 01 berarti Januari
DD	    2 digit tanggal 01 sampai 31
HH	    2 digit jam 0 sampai 23
mm	    2 digit menit 0 sampai 59
ss	    2 digit detik 0 sampai 59
sss 	3 digit milidetik 0 sampai 999
-	    Pemisah untuk tanggal
:	    Pemisah untuk waktu
Z	    Berarti tanggal akan diatur sebagai UTC


*/


### DATE AND TIME FORMAT 

## t ----> full time in milliseconds
## h ----> 24 hours with 1 or 2 digits by setting it
## h ----> 12 hours with 1 or 2 digits by setting it
## m ----> minutes with 1 or 2 digits by setting it
## s ----> seconds with 1 or 2 digits by setting it
## ms ---> milliseconds
## D ----> current date with 1 or 2 digits by setting it
## d ----> day of the week with 1 or 2 digits by setting it
## dd ---> day of the week with 3 letters, eg: Mon, Tue.
## ddd --> day of the week with full letters, eg: Monday.
## M ----> month with 1 or 2 digits by setting it
## MM  --> day of the month with 3 letters, eg: Jan, Feb.
## MMM --> day of the month with full letters, eg: January.
## y ----> full year, eg: 2022
## Y ----> the last 2 digits of the year, eg: 23.

Some of socket.js inbuilt functions are: _alert() different from the windows own, _print(), _printTo(), _confirm(), different date and time format, just short code like MM() for 3 letters week date, eg, Mon, Tue. state(), define() and so on.... still counting
_danger(), _warning(), _info(), _success(), greeting() are there too
They are more
That's what makes it better than jquery


Do you know what I want to do, I want to do it so that they can write js code in html tag and html  attribute using {{ /*js code here*/ }} like react and laravel, so how I want to do it is that, in the html tag own, before we can know that they want to write js code there, they'll write connect.html() in the js file so inside that parameter will be the element they want to select before they can write js file in else you can't know apart from that and if is attribute they want to write the js code, we'll use connect.attr(), so they can write js code there, and we'll convert the code in the {{}} to a js code and evaluate it and we'll return it as js code

Another function I want to do is that they'll be able to include innerHTML in another html file or the same html file using the queryselector as far as they've linked the js in the 2 file and they'll put it in that same {{}} to show that they're coding js, and it'll be included in the file they put it, and they'll add append or prepend to the include parameter to show the position where it's going to add the innerHTML contents like include("#root", "append") and if the did not add the append or prepend there, it'll be append atomatically, notice that append means the content should be add at the top of the innerHTML and the old one there will remain under the new one and prepend is the opposite of that append which means it'll be under like this example: innerHTML += theContentsOfTheOuterFile  
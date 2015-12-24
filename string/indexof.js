/* indexOf()

Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex, Returns -1 if the value is not found. The indexOf method is case sensitive.

Syntax

string.indexOf(searchValue[, fromIndex]) //fromIndex is optional.It specifies from which index should the search start.Its default value is 0.
Example
*/


"My name is very long.".indexOf("name"); // returns 3
"My name is very long.".indexOf("Name"); // returns -1 , it's case sensitive
"Where are you going?".indexOf("are",11); //returns -1
"Learn to Code".indexOf(""); //returns 0 
"Learn to Code".indexOf("",3); //returns 3
"Learn to Code".indexOf("",229); returns 13 , which is the string.length
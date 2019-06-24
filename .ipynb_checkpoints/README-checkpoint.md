# UFO Sightings - Query Table with JavaScript and D3

![InitialLoad](ReadMeImages/picture1.png)

## Overview

A dataset is provided as a .js file which is a list of objects.   A webpage is created which allows the user to search the dataset by various key values. 

## Tools & Technologies Used: 

* JavaScript
* D3 library
* Bootstrap Templates
* HTML 5.0
* CSS

### Part 1 - Populate Table

* Create a basic HTML using bootstrap.

* Append all values from the dataset to the table.

* In this example, there is no transformation of the data and the search must match the string.   Things to include in the future:
*** Date formats.
*** Upper case state and country codes.
*** Camel case cities.


### Part 2 - Allow User to Filter Table

* Code for filter options where the names and number of filter columns are not used.
***  Ensure HTML is marked up with input elements to support this strategy.

* Include JavaScript code that will listen for events and search through the data to find rows that match user input.


### Part 3 - Other

*   Allow the user to reset the table.

### Miscellaneous Notes

*  The CSS was modified to allow for:
*** On hover, there is a color change of each row to allow for easier viewing.
*** Column headers are left aligned.  (Opposed to Center)

# Screen Images

![InitialLoad](ReadMeImages/picture1.png)
<br>
![TableView](ReadMeImages/picture2.png)
<br>
![ReloadPage](ReadMeImages/picture3.png)
<br>
![HoverColor](ReadMeImages/picture4.png)
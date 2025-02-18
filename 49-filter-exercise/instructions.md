# Filter Exercise

Let's get some practice using the filter method. Write a function called `validUserNames` that accepts an array of usernames (strings).  **It should return a new array, containing only the usernames that are less than 10 characters. **For example:

1.  validUserNames(['mark',  'staceysmom1978',  'q29832128238983',  'carrie98',  'MoanaFan']);
2.  // => ["mark", "carrie98", "MoanaFan"]

**Note:** The syntax for this solution might be a little strange to you at this point in the course because it requires you to write the code, that you just learned in the previous lecture, inside of a function. e.g.,

1.  function validUserNames(usernames)  {
2.  // your code here
3.  }

or if you want to get fancy with an arrow function:

`const validUserNames = usernames => // your code here;`\
There is no need to define an actual array of usernames, that part is done for you behind the scenes.
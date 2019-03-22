The map() feature is very powerful. You can apply the effects to each dataType in an array. The part that I still don't fully know is why or when exactly you need to have the array equal the array.map() and why you can't just do it directly.
Remember that when you call the function inside of the map higher order function, you should not include the parenthesis.
I have found the answer to all my questions regarding the map feature. The reason why you need to have the array equal the array .map is because it needs a place to store the desired changes. Furthermore, whenever I would use the map feature, it would replace the values I originally had with the values of the function inside the map feature. The reason why this was happening, was because I was forgetting to use the return statement, and furthermore, I needed to have parameter that can store my original array, within the function that was being mapped. And I needed to add the parameter plus the calculation or effect I wanted the array to have.

Spread/Rest operators: These 2 are so powerful. I think I like the rest operator even more. The cool thing is that you can actually combine both of the to make insanely versatile functions. You can use the rest operator to make sure you the amount of parameters in the function can be expanded dynamically. Then you build an array with the values of as many parameters as you want. Then you use the spread operator with the array as the value, and what will happen is, the function is going to be filled with all the data inside the array.

Destructuring is also very cool. You can take a simple object, and turn each of the properties in it into a variable. I still don't know how it works with more complex objects. I know you can make up the the list of variable names, and just assign them to the key you desire, but what I still don't know is if you can assign all the properties that share one name, to one variable and basically turn that into an array. I'm about to try it.

Today I have learned about destructuring multi dimensional objects. That's exactly what I was wondering how to do. I also found out that you can destructure  nested objects using bracket notation. I still don't know if there is a way to include multiple properties, inside one variable with the Destructuring.
You can also destructure arrays, by using one of the var keywords followed by an array containing the variables you wish to create, and then, by either equaling the content inside the array you wish to destructure, or the name of the array you wish to destructure. I've been messing with this and I'm also recapping some of the stuff I previously learned so I don't forget it

Going along with the destructuring theme, you can actually use the rest operator to store the remainder of the array you're destructuring.
Furthermore you can also use destructuring within your function by simply creating an object as a parameter, and adding the properties you desire. Then when you call the function you can include the object name that contains the desired properties, and this will destructure that object.

I'm now exploring simple fields. This is pretty useful when you're writing an object literal where you need to use the parameter inputs as the values, or if you need to have empty strings, you can simply omit the values and it'll know to fill them out when you call the function. In other words, you can have 3 variables each with a given value. You can then create an object with the keys that have the same names as the 3 variables, and you can simply omit the values. es6 will know to grab those variables and fill the values of the keys with the same values as the variables.

You can write concise declarative functions inside an object, and omit the function, var, let etc keywords, and the equal sign. This only works as long as it's inside of an object (I think this explains a lot of the confusion I had with react and functions)

There are different ways of creating objects
1-Object literals (These are the standard ones you know and trust)
  let myObj = {
    name: "Paulie",
    email: "paulie2000@mail.com",
    age: 24
  }

2-New Object Syntax (So far I only know how to create one empty object using this method. Need to investigate further). Does the same as the object literal but for simplicity, readability, and execution speed, we are advised to use the object literal instead. 
  let myObj = new.Object()

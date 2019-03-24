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

2-New Object Syntax (So far I only know how to create one empty object using this method. Need to investigate further. Apparently you add properties using dot and bracket notation. I have to try it out). Does the same as the object literal but for simplicity, readability, and execution speed, we are advised to use the object literal instead.
  let myObj = new Object()

3-Constructor (I've been spending a bunch of time learning and understanding how constructors work. This is a lot so brace yourself. Constructors create objects all centered around the same theme. There's the es5 and es6 syntax. Here I'm showing an example of each of them)
  ES5 CONSTRUCTOR
  function Car(make, model, year){
    this.make = make,
    this.model = model,
    this.year = year
  }

  ES6 CONSTRUCTOR
  class Car{
    constructor(make, model, year){
      this._make = make,
      this._model = model,
      this._year = year
    }
  }

  HOW TO CREATE A NEW OBJECT USING CONSTRUCTOR (You create the object the same way)
  let myCar = new Car("Honda", "Accord", 2010)

Using getter and setter functions: This has been a fairly confusing topic for me so far, but I think I'm starting to get it a little bit. Here's my attempt at explaining this. getter fuctions access a property within your constructor so that the property can remain private, and return the value of that property. I suppose the purpose of this is so that you can use the name of the function as the property name so that people don't have access to the real property name and they can still get the value. Although, I still don't fully understand how the original property is privatized. I also don't fully know if there's a way to include all properties inside of the constructor into one getter function, and be able to access all properties from within it, or if you have to create one getter method for each of the properties.
Setter methods allow you to change the value of said property, and it's a method so you're able to add as much logic as you want to said property. For example, you can add some validation by throwing errors if the property values don't meet certain criteria, although when I tried validating it, it worked but only when I accessed the setter function, but it didn't work when I access the property the way I normally access it. Again, I think this has to do with knowing how to privatize my properties and globalize the getter and setter methods. Will provide examples below.

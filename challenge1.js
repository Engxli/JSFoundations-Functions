/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printNmae()
{
    console.log("Ali Ahmad");
}
printNmae("Ali Ahmad");

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(age_)
{
    console.log(2022-age_);
}
printAge(1998);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name_, language_)
{
    if(language_ === "en")
    {
        console.log(`Hello ${name_}`);
    }else if(language_ === "es")
    {
        console.log(`Hola ${name_}`);
    }else if(language_ === "fr")
    {
        console.log(`Bonjour ${name_}`);
    }else if(language_ === "mr")
    {
        console.log(`Merhaba ${name_}`);
    }else
    {
        console.log(`Please choose one of the following languages:
                     1- en
                     2- es
                     3- fr
                     4- tr  `);
    }
}

printHello("Ali", "en");
printHello("Ali", "es");
printHello("Ali", "fr");
printHello("Ali", "mr");

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1_, num2_)
{
    if(num1_ > num2_)
    {
        console.log("The bigger number is", num1_);
    }else
    {
        console.log("The bigger number is", num2_);
    }
}
printMax(11,10);
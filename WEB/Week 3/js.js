function printvalues(x) // x=20
{
    var count=0; 
    while(count<x) 
    {
        document.write("<h1>Count Value: " + count + "</h1>");
        count=count+5; 
    }
}

function welcome() 
{
    document.write("<h1 style='color: blue;'>Welcome to JS Function</h1>"); // Instead of alert you can also add 
    // alert("Welcome to JS Function"); // This will show a pop-up alert box with the message
}

    function addNumbers(a,b)
    {
        document.write("Sum: " + (a+b));    
    }
function compareNumbers(a,b)
{
    if (a==b) 
    {
        document.write("Both number are identical ");
    }
    else 
    {
        if(a>b)
        {
            document.write(a + " is greater than " + b);
        }
        else
        {
            document.write(b + " is greater than " + a);
        }
    }
}
# Basic-Calculator-Website
A basic arithmetic calculator developed while learning HTML, CSS and JavaScript. The project supports user input, input validation and basic arithmetic operations.

## Calculaor.html
1. Firstly, I created the html, css and javascript files for the calculator. 

2. I began working on the html file first. I used the HTML template from Week 5 Studio slides. I added the link to the CSS and javascript in the head tag; specifically I added defer for the link to the javascript file as it is executed after running through the whole html-Same as adding the link at the end of the body.

3. I changed the title tag.

4. I added a div tag and named it a class called Caluclator which is the whole block of where the calculator will be.

5. I added the heading of the calculator.

6. I added the divs of the input for the first and second numbers along with their inputs and p tags, these are divided to their respective sections. Note that both types are number, so it will only accept numbers. Each section has its own respective id.

7. Then I added a p tag to describe which arithemitc button to use.
8. I added another div with id Buttons and created four buttons with their labels and each button links to its repctive function that will be created and found in the javascript file. 

9. I then created the the output which will display the result; the result id is the text that tays contsant whilst the span id answer will display the outcome of the calculator, it is the only part that will change.



## calculatorstyle.css
1. Firstly I added CSS tempalte that completely refreshes the style of the webpage, making it a blank canvas. 

2. I formatted the body where it will center the calcualtor body to be in the middle along with its background colour and its default font size and font style. 

3. I formatted the div Calculator where I adjusted its height and width, margin, its padding to ensure text does touch the border, its colour, round out the borders, its direction as it is a flexbox - should be vertical and gap between elemnts insdie.

4. I formatted the h2 and aligned it to the center.

5. I then formated the labels for both input with its colour, boldness and margin.

6. I then formatted the inputs, its width, padding, border, colors, font size. 

7. I formatted the paragraph which is between the secondinput box and the buttons. 

8. I formatted the div buttons and made it a griad which is 2x2 with its set gap.

9. Then I formatted the actual buttons, its padding, the font style, the colors, I changed the sursor to a pointer when it reaches the button. When the buttons are clicked, I formatted it to become darker in clolour and shrink a bit to give an illusion of it being clicked. 

10. I formatted the output section like a rectangle through font style, background color and borders format. 

## Calculatorscript

1. I started with the addition function, firstly I assigned two varables called val1, val2 to be the values extarcted from the inputs. 
2. I used an if statemnet to check if whether the user typed numbers in both inputs, if not, the result says that the values are missing and that text is highlited in red. The else, then assigns a and b to the integer of val1, val2 since the latter variables are strings. the sum is the addition between a and b, then the result is displayed in white.

3. This procedure is replicated for both subtract and multiplication and division functions but the change is their respective operations.

4. Note for division function, another if statment is nested inside where it checks if b is zero, if so, it displays a divison error as a number can't be divided by zero. 


---

All these aforesaid steps were followed to create the basic calculator.

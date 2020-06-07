//          ASSIGNMENT NUMBER : 05

//          ASSIGNMENT  OF JAVASCRIPT

//          TASK # 01 (ALERTS)

//          EX # 01
alert("WELCOME TO THIS WEBSITE");
//          EX # 02
alert("JavaScript Alert! " +  "\r\n" + "Error! please enter a valid password");
//          EX # 03
alert("JavaScript Alert! " +  "\r\n" + "Welcome to JS land...." + "\r\n" + "Happy Coding!");
//          EX # 04
alert("JavaScript Alert! " +  "\r\n"  + "Welcome to JS Land...");
alert("JavaScript Alert! " +  "\r\n"  + "Happy Coding!");
//          EX # 05
alert("JavaScript Alert! " +  "\r\n" + "\r\n" + "Hello...I can run JS through my web browser's console");
//          EX #06
alert("Hello World");
alert("Pakistan Zindabad");
alert("Welcome to Web page!");




//          TASK # 02 (VARIABLES FOR STRING)

//          EX # 01
var username;
//          EX # 02
var myName = "Fashad Ahmed Siddique";
//          EX # 03
var message = "Hello World";
alert(message);
//          EX # 04
var n1 = "Jhone Doe";
var n2 = "15 ";
var n3 = "Certified Mobile Application Development";
alert(n1);
alert(n2 + "years old");
alert(n3);
//          EX # 05
var food = "PIZZA"+"\r\n"+"PIZZ"+"\r\n"+"PIZ"+"\r\n"+"PI"+"\r\n"+"P";
alert(food);
//          EX # 06
var email = "fashad.ahmed20@gmail.com";
alert("My email address is " + email);
//          EX # 07
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from a book " + book);
//          EX # 08
document.write("Yah! I can write HTML content through JavaScript" + "\r\n");
//          EX # 09
var pattern_1 = "               ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"; 
alert(pattern_1); 




//          TASK # 03 (VARIABLES FOR NUMBERS)

//          EX # 01
var age = 18;
alert("I am " + age + " years old");
//          EX # 02
var keep_track = 14;
alert("You have visited this page " + keep_track + " times.");
//          EX # 03
var birth_year = 2001;
document.write("</br>" + "My birth year is " + birth_year + "</br>" + "Data type of my declared variable is number");
//          EX # 04
var n = prompt("enter your name");
var t = prompt("enter product title");
var q = prompt("enter the quantity");

document.write("</br>"+n+"Ordered"+q+t+"(s) on XYZ Clothing Store");




//          TASK # 04 (VARIABLES NAMES : LEGAL & ILLEGAL)

//          EX # 01
var name = "JohnDoe" , userName = "user99" , age = "24";
//          EX # 02

//          Legal Variable
name_1 = "lionel";
fatherName = "Andres";
Age = "26";
club_EU = "barca";
transfer_10 = "marca";

//          Illegal Variable
// 1_name_1 = "lionel";
// 5666.fatherName = "Andres";
// !_Age = "26";
// $_club_EU = "barca";
// -transfer_10 = "marca";

// Illegal variables are comented due to hindrance in running program

//          EX # 03

document.write("<p style='font-size: 24px;'>Rules for naming JS Variables</p>");
document.write("Variable names can only contain numbers, $ sign and _. For example: $my_1stVariable; " + "</br>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name." + "</br>");
document.write("Variable names are case sensitive." + "</br>");
document.write("Variable names should not be JS Key words." + "</br>");



//      TASK # 05 (MATH EXPRESSIONS)

//      EX # 01
var n_51 = prompt("enter first number: ");
var n_52 = prompt("enter second number: ");
var n_512 = n_51 + n_52; 
document.write('</br>'+"Sum of " + n_51 + " and " +n_52 + " is " + n_512 + '</br>');

//      EX # 02

var n_512$ = n_51 - n_52; 
document.write("Subtraction of " + n_51 + " and " +n_52 + " is " + n_512$ + '</br>');

var n_$512 = n_51 * n_52; 
document.write("Product of " + n_51 + " and " +n_52 + " is " + n_$512 + '</br>');

var n_5$12 = n_51 / n_52; 
document.write("Division of " + n_51 + " and " +n_52 + " is " + n_5$12 + '</br>');

var n_51$2 = n_51 % n_52; 
document.write("Modulus of " + n_51 + " and " +n_52 + " is " + n_51$2 + '</br>' + '</br>');

//      EX # 03

document.write('Value after variable declaration is: ??' + '</br>');
var pique = prompt('enter a number : ');
document.write('Initial Value : ' + pique + '</br>');
document.write('Value after Increment is ' , ++pique + '</br>' );
var pique_1 = pique + 7;
document.write('Value after addition is ' + pique_1 + '</br>');
document.write('Value after decrement is ' + --pique_1 + '</br>');
document.write('The Remainder is : ' + pique_1 % 3 + '</br>' + '</br>');

//      EX # 04

var movie_ticket = 600;
document.write('The cost of buying 5 movie tickets is : ' + 600*5 + 'PKR' + '</br>' + '</br>');

//      EX # 05

var tat_123 = prompt('enter a numbre to generate multiplication table : ');
document.write('Table of ' + tat_123 + '</br>');

for (i = 1; i<=12;i++){
    document.write(tat_123 + " x " + i + " = " + tat_123*i + '</br>');
}
document.write('</br>');

//      EX # 06

var temp_cel = prompt("enter temperature in farenheit : ");
temp_cels = (temp_cel - 32) * (5/9) ;
document.write( temp_cel + '°F is ' + temp_cels + '°C.' + '</br>');

var temp_far = prompt("enter temperature in celsius : ");
temp_fare = (temp_far * (9/5)) + 32;
document.write(temp_far + '°C is ' + temp_fare + '°F.' + '</br>' + '</br>');

//      EX # 07

var price_1 = prompt('enter cost of item 1 : ');
var price_2 = prompt('enter cost of item 2 : ');
var ord_1 = prompt('enter quantity of item 1 : ');
var ord_2 = prompt('enter quantity of item 2 : ');
var ship_charge = 500;
var ord_1$ = price_1 * ord_1;
var ord_2$ = price_2 * ord_2;
var order_cost_total = ord_2$ + ord_1$ + ship_charge;
document.write('Price of item 1 is : ' + price_1 + '</br>');
document.write('Quantity of item 1 is : ' + ord_1 + '</br>');
document.write('Price of item 2 is : ' + price_2 + '</br>');
document.write('Quantity of item 2 is : ' + ord_2 + '</br>');
document.write('Shipping Price : ' + ship_charge + '</br>');
document.write('Total Cost of your Order is :  ' + order_cost_total + '</br>' + '</br>');

//      EX # 08

var gain_marks = prompt('enter gained marks : ');
var to_marks = prompt('enter total marks : ');
var per_cen = ((gain_marks/to_marks) * 100);
document.write("<p style='font-size: 24px;'>Marksheet</p>" + '</br>');
document.write('Total Marks : ' + to_marks + '</br>');
document.write('Marks Achieved : ' + per_cen + '</br>');
document.write(per_cen +'%'+ '</br>' + '</br>');

//      EX # 09

document.write("<p style='font-size: 24px;'>Currency in PKR</p>" + '</br>');
document.write('Total Currency in PKR : ' + ((10*104.80) + (25*28)) + '</br>' + '</br>');

//      EX # 10

var rn = 5;
document.write((rn+5*10/2) + '</br>' + '</br>');

//      EX # 11

document.write("<p style='font-size: 24px;'>Age Calculator</p>" + '</br>');
var current_year  = prompt('enter current year : ');
var birth_yea = prompt('enter birth year : ');
document.write('Current Year : ' + current_year + '</br>');
document.write('Born Year : ' + birth_yea + '</br>');
document.write('Your Age is : ' + (current_year - birth_yea) + '</br>' + '</br>');

//      EX # 12

document.write("<p style='font-size: 24px;'>The Geometrizer</p>" + '</br>');
var rad = prompt('enter radius of circle : ');
document.write('Radius of Circle : ' + rad + '</br>');
document.write('The Circumference of circle : ' , (2*3.142*rad),'</br>');
document.write('The Area of circle is : ' , (3.142*(rad*rad)) , '</br>' , '</br>');

//      EX # 13

var f_a = prompt("enter your fouvrite snacks : ");
var c_a = prompt("enter your current age : ");
var m_a = prompt("enter your maximum age : ");
var p_p = prompt("amount of snacks per day you eat(in numbers) : ");
var t_t = (m_a-c_a)*p_p;
document.write("<p style='font-size: 24px;'>The Lifetime Supply Calculator</p>" + '</br>');
document.write("Favourite Snacks is",f_a+"</br>");
document.write("Your current age is ",c_a+"</br>");
document.write("Your maximum age is ",m_a+"</br>");
document.write("Amount of snacks per day is ",p_p+"</br>");
document.write("You will need ",t_t," ",f_a," ","to last you until the ripe old age of"," ",m_a+"</br>"+"</br>");



//      TASK # 09 -- 11 ( MATH EXPRESSIONS)

//      EX # 01

var x = prompt('enter a number : ');
document.write("<p style='font-size: 24px;'>The Result!</p>" + '</br>');
document.write('The value of x is : ' , ++x, '</br>');
document.write('-------------------------------------------' + '</br>');
document.write('The value of ++x is : ' , ++x,'</br>');
document.write('Now The value of x is : ' + x + '</br>');
document.write('The value of x++ is : ' , x++,'</br>');
document.write('Now The value of x is : ' + x + '</br>');
document.write('The value of --x is : ' , --x , '</br>' );
document.write('Now The value of x is : ' + x + '</br>');
document.write('The value of x-- is : ' , x-- , '</br>' );
document.write('Now The value of x is : ' + x + '</br>');

//      EX # 02

var a =2;
var b = 1;
var result = (--a )-(--b)+(++b)+(b--);
document.write('a is : ' + a + '</br>');
document.write('b is : ' + b + '</br>');
document.write('result is : ' + result + '</br>' + '</br>');

//      EX # 03
 var name_greet = prompt('enter your name : ');
 alert('Welcome ' + name_greet + ' to my website ThankYou!');

 //     EX # 05

 var tat_1234 = prompt('enter a numbre to generate multiplication table : ');

for (i = 1; i<=12;i++){
     if (tat_1234 == [1,2,3,4,5,6,7,8,9]){
        document.write(tat_1234 + " x " + i + " = " + tat_1234*i + '</br>');        

    }
    else {
        document.write('5' + " x " + i + " = " + 5*i + '</br>');

    }
}
document.write('</br>');

//      EX # 06

var sub1 = prompt('enter subject 1  name : ');
var sub2 = prompt('enter subject 2  name : ');
var sub3 = prompt('enter subject 3  name : ');
var marks_all = 100;
var g_1 = prompt('enter gained marks in subject 1 : ');
var g_2 = prompt('enter gained marks in subject 2 : ');
var g_3 = prompt('enter gained marks in subject 3 : ');
var marks_all_tree = 300;
var gain_tot = g_1 + g_2 + g_3;
var b_per = (gain_tot / marks_all_tree) * 100;
var g_p_1 = ((sub1/marks_all) * 100);
var g_p_2 = ((sub2/marks_all) * 100);
var g_p_3 = ((sub3/marks_all) * 100) ;

document.write('Sub.' + '   ' + 'Tot.M' +  '   '+ 'Obt.Ma' + '  ' + 'MarksPer.' + '</br>' + '</br>');
document.write('sub1' + '   ' + marks_all + '   ' + g_1 + '     ' + g_p_1 + '</br>' + '</br>');
document.write('sub2' + '   ' + marks_all + '   ' + g_2 + '     ' + g_p_2 + '</br>' + '</br>');
document.write('sub3' + '   ' + marks_all + '   ' + g_3 + '     ' + g_p_3 + '</br>' + '</br>');
document.write('    ' + marks_all_tree + '      ' + gain_tot + '      ' + b_per+'%' + '</br>' + '</br>');




//         TASK # 09 - 11 ( USER INPUT & CONDITIONAL STATEMENT )

//          EX # 01

city_khi = prompt('enter city name : ' );
if ( city_khi === 'KARACHI' || city_khi === 'karachi' || city_khi === 'Karachi'){
    alert('WELCOME TO THE CITY OF LIGHTS');
}

//          EX # 02

gen_der = prompt('enter your gender: ');
if (gen_der === 'male' || gen_der === 'Male'){
    alert('Good Morning Sir!');
} 
else if (gen_der === 'female' || gen_der === 'Female'){
    alert('Good Morning Madam!');
} 
else{
    alert('enter male or female')
}

//          EX # 03

var traffic_sign = prompt('Enter the traffic light color form Red,Yellow or Green : ');
if (traffic_sign === 'Red'){
    alert('Must Stop!');
}
else if (traffic_sign === 'Yellow'){
    alert('Ready to move');
}
else if (traffic_sign === 'Green'){
    alert('Move now');
}
else{
    alert('enter right command');
}

//          EX # 04

var rem_fuel = prompt('enter remaining fuel of vehicle ( in litres ) : ');
if (rem_fuel === 0.25){
    alert('Please refill the fuel of your car');
}

//          EX # 05

// var a = 4;
// if (++a === 5){ alert("given condition for variable a is true"); } 
 
// var b = 82; 
// if (b++ === 83){ alert("given condition for variable b is true"); } 

// var c = 12; 
// if (c++ === 13){ alert("condition 1 is true"); } 

// if (c === 13){ alert("condition 2 is true"); } 

// if (++c < 14){ alert("condition 3 is true"); }

// if(c === 14){ alert("condition 4 is true"); } 

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost)
// { alert("The cost equals"); } 

// if (true){ alert("True"); }
// if (false){ alert("False"); } 

// if("car" < "cat")
// { alert("car is smaller than cat"); } 

//          EX # 06

var sub1$ = prompt('enter subject 1  name : ');
var sub2$ = prompt('enter subject 2  name : ');
var sub3$ = prompt('enter subject 3  name : ');

var g_1$ = prompt('enter gained marks in subject 1 : ');
var g_2$ = prompt('enter gained marks in subject 2 : ');
var g_3$ = prompt('enter gained marks in subject 3 : ');

var marks_all_$tree = 300;
var gain_tot$ = g_1 + g_2 + g_3;
var b_per$ = (gain_tot$ / marks_all_$tree) * 100;

if (b_per$ >= 80 ){
    document.write("<p style='font-size: 24px;'>MARKSHEET</p>" + '</br>');
    document.write('Total Marks : '+marks_all_$tree + '</br>');
    document.write('Obtained Marks : '+gain_tot$ + '</br>');
    document.write('percentage : '+b_per$ + '</br>');
    document.write('Grade : ' + 'A-one' + '</br>');
    document.write('Remarks : ' + 'Excellent' + '</br>' + '</b>');
}
else if (b_per$ <80 && b_per$ >=70 ){
    document.write("<p style='font-size: 24px;'>MARKSHEET</p>" + '</br>');
    document.write('Total Marks : '+marks_all_$tree + '</br>');
    document.write('Obtained Marks : '+gain_tot$ + '</br>');
    document.write('percentage : '+b_per$ + '</br>');
    document.write('Grade : ' + 'A' + '</br>');
    document.write('Remarks : ' + 'Good' + '</br>' + '</b>');
}
else if (b_per$ < 70 && b_per$ >= 60){
    document.write("<p style='font-size: 24px;'>MARKSHEET</p>" + '</br>');
    document.write('Total Marks : '+marks_all_$tree + '</br>');
    document.write('Obtained Marks : '+gain_tot$ + '</br>');
    document.write('percentage : '+b_per$ + '</br>');
    document.write('Grade : ' + 'B' + '</br>');
    document.write('Remarks : ' + 'You need to improve' + '</br>' + '</b>');
}
else if (b_per$ < 60){
    document.write("<p style='font-size: 24px;'>MARKSHEET</p>" + '</br>');
    document.write('Total Marks : '+marks_all_$tree + '</br>');
    document.write('Obtained Marks : '+gain_tot$ + '</br>');
    document.write('percentage : '+b_per$ + '</br>');
    document.write('Grade : ' + 'Fail' + '</br>');
    document.write('Remarks : ' + 'Sorry' + '</br>'+ '</b>');
}
else{
    document.write('Enter a valid entry' + '</b>' + '</b>');
}

//          EX # 07

var secret_num = 7;
var guess_num = prompt('guess a sceret number ranging from 0 till 10 : ');
if (guess_num == secret_num){
    document.write('Bingo ! Correct Answer !!!' +  '</b>' + '</b>');
}
else if(guess_num + 1 === secret_num){
    document.write('Close enough to the correct answer' +  '</b>' +  '</b>');
}
else{
    document.write('wrong guess' +  '</b>' +  '</b>');
}

//          EX # 08

var by_3 = prompt('enter number : ');
if(by_3 % 3 == 0){
    alert('the number is divisible by 3');
}

//          EX # 09

var o$ = prompt('enter number : ');
if(o$ % 2 == 0){
    alert('It is an even number');
}
else if(o$%2 != 0 ){
    alert('It is an odd number');
}

//          EX # 10

var a$a = prompt("enter the temperature");

if (a$a>40){
    alert("It's too hot outside ");
}
else if(a$a >30){
    alert(" The whether today's is Normal");
}
else if(a$a >20){
    alert(" Today's whether is cool");
}
else if(a$a >10){
    alert("OMG! Today's whether is cool");
}
else{
    alert("incorrect temerature");
}

//          EX # 11

 var n$ = prompt("enter first number");
 var m$ = prompt("enter second number");
 var a$ = prompt("enter the operator which you want");
 if( a$ === "+"){
     alert(m$+n$);
 }
 else if(a$ === "-"){
     alert(n$-m$);
 }
 else if( a$ === "*"){
     alert(n$*m$);
 }
 else if( a$ === "/"){
     alert(n$/m$);
 }
 else if( a$ === "%"){
     alert(n$%m$);
 }
 else{
     alert("unable to do");
 }
 


//         TASK 12 - 13 ( IF....ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS )

//         EX # 01

 var caa = prompt("enter something");

if( "A"<=caa && caa<="Z"){
    document.write("uper case");
}
else if ("a"<=caa && caa<="z"){
    document.write("lower case" + '</br>' + '</br>');
}
else if(-9<=caa && caa<=9){
    document.write("Integer") + '</br>' + '</br>';
}
else{
    document.write("special character") + '</br>' + '</br>';
}

//          EX # 02

var amn = prompt("enter a first number");
var bmn = prompt("enter a second number");
if (amn == bmn){
    alert('Both are equal');
}else if( amn>bmn){
    alert(amn);
}else if(amn<bmn){
    alert(bmn);
}


//          EX # 03

var pi = prompt("enter a number");

if (pi > 0){
    alert("positive");
}else if( pi<0){
    alert("negative");
}else{
    alert("zero");
}

//          EX # 04

var aw = prompt("enter a first number");

if (aw == "a" || aw == "e" || aw == "i" || aw =="o" || aw =="u" || aw == "A" || aw == "E" || aw =="I" || aw == "O" || aw == "U"){
    alert("true");
}
else{
    alert("false");
}

//          EX # 05

var pas_w = 'zidane_10';
var pas_e = prompt('enter your password : ');
if (pas_e != ' '){
    if(pas_e == pas_w){
        alert('Correct! The password you entered matches the original password');
    }
    else{
        alert('Incorect Password');
    }
}
else{
    alert('enter the password please');
}

//          EX # 06

var greeting;
var hour = 13;
if(hour<18){
    alert(greeting="Good Day");
}
else{
    alert(greeting = "Good Evening");
}


//          EX # 07


var tqa = prompt("enter the time");

if (tqa>=0000 && tqa<1200){
    alert("Good Morning");
}
else if (tqa>=1200 && tqa<1700){
    alert("Good Afternoon");
}
else if(tqa>=1700 && tqa<2100){
    alert("Good Evening");
}
else if (tqa>=2100 && tqa<=2359){
    alert("Good Night");
}
else{
    alert("enter correct time");
}



//          TASK 14 - 16 ( ARRAYS )

//          EX # 01

stud_name = [];

//          EX # 02

var stu_name = new Array();

//          EX # 03

var str_ing = ['alfecido' , 'gelato' , 'robins'];

//          EX # 04
var num_ber = [1,2,3,4,5,6];

//          EX # 05
var bool_ean = ['True','False'];

//          EX # 06
var mi_xed = ['laMasia' , 10,'messi' , 36,'True'];

//          EX # 07

var qua_lifi_cation = ['SSC','HSC','BCS','BS','B.COM','MS','M.Phil.','PhD'];
document.write('QUALIFICATIONS');
for (var i = 0; i<qua_lifi_cation.length;i++){
    document.write( i  + " .. " + qua_lifi_cation[i] + + '</br>' + '</br>');
}

            EX # 08

var st =  ['fas' , 'ahm' , 'sid'];
var cr = ['499','388','427'];

document.write('Score of ' + st[0] + ' is ' + cr[0] + '. Percenatge : ' +  ((cr[0] / 500 ) * 100) + '</br>' + '</br>');
document.write('Score of ' + st[1] + ' is ' + cr[1] + '. Percenatge : ' +  ((cr[1] / 500 ) * 100) + '</br>' + '</br>');
document.write('Score of ' + st[2] + ' is ' + cr[2] + '. Percenatge : ' +  ((cr[2] / 500 ) * 100) + '</br>' + '</br>');

//             EX # 09

var col_or$ = ['blue','yellow','red','pink','green'];
for (i=0;i<=col_or$.length;i++){
    document.write(col_or$[i] + '</br>');
}


var as_k = prompt('enter color you wanna add in array : ');
col_or$.unshift(as_k);
document.write(as_k + '</br>');


var ae_k = prompt('enter color you wanna add at the end : ');
col_or$.push(ae_k);
document.write( col_or$ + '</br>');

var as_k_1 =   prompt('enter color you wanna add in array : ');
col_or$.unshift(as_k_1);
document.write( col_or$ + '</br>');

col_or$.shift();
document.write( col_or$ + '</br>');

col_or$.pop();
document.write( col_or$ + '</br>');

a_d = prompt('at which index you wanna add : ');
a_d_c = prompt('enter color name: ');
col_or$[a_d] = a_d_c;
document.write( col_or$ + '</br>');

b_d = prompt('at which index you wanna remove : ');
b_d_c = prompt('enter nuber of color you wanna delete : ');
col_or$.splice(b_d , b_d_c);
document.write( col_or$ + '</br>');

document.write('</br>');


         EX # 10

var m_t = [320,236,396,402];
document.write('Students Marks : '+m_t + '<br>');
var m_t_1 = m_t.sort();
document.write('Students Marks in Ascending order : '+m_t_1 + '<br>');

//         EX # 11

var cities_1 = ['Karachi' ,'Islamabad','Lahore','Peshawar','Quetta'];
var selected_city  = [cities_1];

var x$ = selected_city.splice(2,2);


document.write('All cities : ' + cities_1 + '<br>');
document.write('Selected Cities : '+ x$ + '<br>' + '<br>');

//          EX # 12

var ar$ = ['This ','is ','my ','cat '];
document.write('Array  :' + '<br>');
document.write(ar$ + '<br>');
document.write('String : ' + '<br>');
document.write(ar$.join(' ')  + '<br>' + '<br>');

//          EX # 13

var x_w = ['keyboard','mouse','printer','monitor'];
document.write("Devices"+"<br>");
document.write(x_w);
document.write("<br>"+"<br>");
for(i=0;i<x_w.length;i++){
    document.write('Out :  ' + '<br>');
    document.write(x_w[i] + '<br>' + '<br>');
}

//          EX # 14

var d= ["keyboard","mouse","printer","monitor"];
document.write("Devices"+"<br>");
document.write(d);
document.write("<br>"+"<br>");
for(i=3;i>=0;i--){
    document.write("Out:"+"<br>");
    document.write(d[i]+"<br>" + "<br>");
}

//          EX # 15

var dist_$ = ['Nokia', 'Samsung','Apple','Motorolla','LG','Infinix','Techno','Oppo','Haier'];
document.write('SELECT A COMPANNY FROM DROP DOWN MENU' + '<br>');
for ( i = 0; i < dist_$.length ; i++){
    document.write((i+1)+'. '+dist_$[i] + '<br>' + '<br>');
}



         TASK 17 - 20 ( ARRAYS AND LOOP )

           EX # 01

var g$fg = new Array(2); 
  
document.write("Creating 2D array <br>" + '<br>');
for (var i = 0; i < g$fg.length; i++) { 
    g$fg[i] = new Array(2); 
} 
document.write('<br>' + '<br>');

//          EX # 02 

var gfg = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (var i=0 ; i < gfg.length ; i++){
    document.write(gfg[i].join(' ') + '<br>');
}

document.write('<br>' + '<br>');


//          EX # 03

for(var z = 0; z < 11;z++){
    document.write(z + '<br>');
}
document.write('<br>' + '<br>');

//          EX # 04

var m_l_s = prompt('enter a number to show its multiplication table : ');
var s_l_m = prompt('enter te length of multiplication table : ');

document.write("<p style='font-size: 16px;'>Multiplication Table of  : </p>" +m_l_s+ '</br>');
document.write('Table Length : ' + s_l_m + '<br>');

for(o = 0; o<=s_l_m ; o++){
    document.write(m_l_s + ' x ' + o + ' = ' + m_l_s*o + '<br>' + '<br>');
}

//          EX # 05

var fruits_$ = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for(i = 0; i<fruits_$.length ; i++){
    document.write(fruits_$[i] + '<br>');
}
document.write('<br>' + '<br>');
for( j = 0 ; j<fruits_$.length; j++){
    document.write('Element at index ' + j + ' is ' + fruits_$[j] + '<br>' );
}
document.write('<br>' + '<br>');

//          EX # 07

document.write("<p style='font-size: 24px;'>Counting : </p>" + '</br>');
for(i = 1; i <= 15 ; i++){
    document.write(i + ', ');
}
document.write('<br>' + '<br>');
document.write("<p style='font-size: 24px;'>Reverse Counting : </p>"  + '</br>');
for(i = 10; i >= 1  ; i--){
    document.write(', ' + i);
}
document.write('<br>' + '<br>');
document.write("<p style='font-size: 24px;'>Even : </p>" + '</br>');
for(var s = 1; s <= 20 ; s++){
    if(s%2 == 0){
        document.write(s + ', ');
    }
}
document.write('<br>' + '<br>');
document.write("<p style='font-size: 24px;'>Odd : </p>" + '</br>');
for(var s = 1; s <= 20 ; s++){
    if(s%2 != 0){
        document.write(s + ', ');
    }
}
document.write('<br>' + '<br>');
document.write("<p style='font-size: 24px;'>Even : </p>" + '</br>');
for(var s = 1; s <= 20 ; s++){
    if(s%2 == 0){
        document.write(s + 'k, ');
    }
}

//          EX # 07

var zx = ["cake","apple pie","cookie","chips","patties"];
var zy = prompt("Welcome to ABC bakery What do you want to order sir/ma'am");

for(x=0; x<=4 ; x++){
    if(zx[x]==zy){
        document.write(zx[x]," ","is available at index"," ",x," " ,"in our bakery");
    }
   
}
if(zx[0]==zy || zx[1]==zy || zx[2]==zy || zx[3]==zy || zx[4]==zy){        
}
else if(zx[0]!=zy || zx[1]!=zy || zx[2]!=zy || zx[3]!=zy || zx[4]!=zy){
    document.write("We are Sorry" ," "+zy+" ","is not available in our bakery");
}

//          EX # 08

var r$ = [24, 53, 78, 91, 12];
document.write('Array Items : ' + r$ + '<br>');

var largest= 0;

for (i=0; i<=largest;i++){
    if (r$[i]>largest) {
        var largest=r$[i];
    }
}




document.write('The largest number in an array is : '+largest + '<br>' + '<br>');

//          EX # 09

var r$1 = [24, 53, 78, 91, 12];
document.write('Array Items : ' + r$1 + '<br>');

var largest1= 0;

for (i=0; i<=largest1;i++){
    if (r$1[i]>largest1) {
        var largest1=r$1[i];
    }
}



document.write('The largest number in an array is : '+largest1 + '<br>' + '<br>');

//          EX # 10

var may_10 = 5;
for(i=1;i<=20;i++){
    document.write(i*may_10+",");
}
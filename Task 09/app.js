// //            ASSIGNMENT NUMBER : 09

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
//            ASSIGNMENT  OF JAVASCRIPT

//            TASK # 21 - 25 ( STRING METHODS )

//                   EX # 01

var firstName = prompt('Enter your first name : ');
var lastName = prompt('Enter our last name : ');
var fullName = firstName + ' ' + lastName;
alert('Welcome To This Webpage Dear ' + fullName);


//                   EX # 02

var favoritePhone = prompt('enter your favourite phone model : ');
document.write('My favourite phone model is : ' + favoritePhone + '<br>');
document.write('Length of String is : '  + (favoritePhone.length) +  '<br>' + '<br>');


//                   EX # 03

var stp = 'Pakistan';
document.write('String : ' + stp + '<br>');
document.write("Index of 'n' : " + stp.indexOf('n') + '<br>' + '<br>');


//                   EX # 04

var stpp = 'Hello World';
document.write('String : ' + stpp + '<br>');
document.write("Last Index of 'l' : " + stpp.lastIndexOf('l') + '<br>' + '<br>');


//                   EX # 05

var stppp = 'Pakistani';
document.write('String : ' + stppp + '<br>');
document.write('Character at Index 3 is : ' + stppp.charAt(3) + '<br>' + '<br>');


//                   EX # 06

var firstName$ = prompt('Enter your first name : ');
var lastName$ = prompt('Enter our last name : ');
var fullName$ = firstName$.concat(lastName$);
alert('Welcome To This Webpage Dear ' + fullName$);


//                   EX # 07

var cityh = 'Hyderabad';
document.write('City : '+cityh + '<br>');
cityi = cityh.replace("Hyder","Islam");
document.write('After Replacement : '+cityi + '<br>' + '<br>');


//                  EX # 08

var message = 'Ali and Sami are best friends. They play cricket and football together.';
message = message.replace(/and/g,"&");
document.write(message + '<br>' + '<br>');


//                  EX # 09

var n$1 = '472';
document.write(n$1 + '<br>');
document.write('String' + '<br>');
document.write(parseInt(n$1) + '<br>');
document.write('Number' + '<br>'  +'<br>');


//                  EX # 10

var userInput = prompt('enter a word : ');
document.write('User Input : ' + userInput + '<br>');
document.write('Upper Case : ' + userInput.toUpperCase() + '<br>' + '<br>');


//                  EX # 11                                                                                          


var a = prompt("enter");
var b =  a.slice(0,1).toUpperCase()+a.slice(1,10); 
document.write("User input: ",a,"<br>");
document.write("Upper case: ",b);


//                  EX # 12

var num = 35.36;
document.write('Number : ' + num + '<br>');
num = num.toString()
nmu = num.replace('.','')
document.write('Result : ' + nmu + '<br>' + '<br>');


//                  EX # 13

var sim = prompt('Enter your username : ');
if(sim === '@' || sim === '!' ||sim === '.' ||sim === ',' ){
    alert('Please! enter a valid username');}
var sim = prompt('Enter your username : ');


//                  EX # 14

var A = ['cake','apple pie','cookie','chips','patties'];
var cafu = prompt('Enter you wanna choose : ');
cafu = cafu.toLowerCase();
for(i=0;i<A.length;i++){
    if(A[i] === cafu){
        document.write(cafu + ' is available at index ' + A.indexOf(cafu) + ' in our bakery.' + '<br>' + '<br>');
    }
else{
        document.write('we are sorry ' + cafu + 'is not available in our bakery!');
        break
    }
}


//                  EX # 15                                          

var apo = prompt("enter your password");
document.write("entered password ", apo, "<br>");

if (apo.slice(0, 1) <= 1000000) {
    document.write("Password cannot start with the numbers ", "<br>");
    document.write("plz enter a valid password" + "<br>" + "<br>");
}
else if (apo.length <= 6) {
    document.write("Password length cannot be less tha 6 character ", "<br>");
    document.write("plz enter a valid password"+ "<br>" + "<br>");
}
for (var i=0; i < apo.length; i++){
    switch(apo){
        case "!" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "@" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "#" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "$" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "%" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "^" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "&" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "*" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "=" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "+" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;
    }
}

//                 EX # 16

var university = 'University of Karachi';
university = university.split("");
// console.log(university);
for (i=0 ; i < university.length ; i++){
    document.write(university[i] + '<br>');
}


//                  EX # 17

var en$ = prompt('enter input character : ');
document.write('User Input : ' + en$ + '<br>');
document.write('Last Character of Input : ' + en$.substr(-1) + '<br>' + '<br>');


//                  EX # 18

var senta = 'The quick brown fox jumps over the lazy dog .';
document.write(senta + '<br>');
senta1 = senta.toLowerCase();
c = (senta1.match(/the/g)).length;
document.write('There are ' + c + ' occurences of word \'the\' .' + '<br>'  + '<br>');





              //   TASK 26 - 30 ( MATH METHODS)

//                  EX # 01

var no = +prompt('enter a +ve integar : ');
if( no > 0){
        document.write("Number : "+ no +"<br>");
        document.write("Round of value : "+ Math.round(no)  +"<br>");
        document.write("Floor value : "+ Math.floor(no) +"<br>");
        document.write("Ceil value : "+ Math.ceil(no) +"<br>" + "<br>");
}


//                  EX # 02

var noo = +prompt('enter a +ve integar : ');
if( noo < 0){
        document.write("Number : "+ noo +"<br>");
        document.write("Round of value : "+ Math.round(noo)  +"<br>");
        document.write("Floor value : "+ Math.floor(noo) +"<br>");
        document.write("Ceil value : "+ Math.ceil(noo) +"<br>" + "<br>");
}


//                  EX # 03

var twerw = +prompt('enter a number : ');
document.write('The absolute value of ' + twerw + ' is ' + Math.abs(twerw) + '<br>' + '<br>' );


//                  EX # 04

t = Math.random() *6 ;
document.write("The random value of dice is : " + Math.ceil(t) + '<br>' + '<br>');


//                  EX # 05

t$t = Math.random() * 2 ;
t$tf = Math.floor(t$t)
document.write(t$tf + '<br>');
if(t$tf == '2'){
    document.write('random coin value :  HEADS' + '<br>' + '<br>'  );}
else if(t$tf == '1'){
    document.write('random coin value :  TAILS' + '<br>' + '<br>'  );}

    

//                  EX # 06

var lahm = Math.random()*100;
document.write("Random number between 1 and 100 : " + Math.ceil(lahm) + '<br>' + '<br>');


//                  EX # 07

var a = prompt('enter weight : '); 
if (a.substr(3) == "" || a.substr(3) == "kg" || a.substr(2) == "kg" || a.substr(5) == "kgs" || a.substr(4) == "kgs" || a.substr(5) == "kilograms" || a.substr(4) == "kilograms"){
    document.write("The weight of user is : " + a + '<br>');
}


//                  EX # 08

var g1 = Math.random() * 10;
g1 = Math.floor(g1);
var g2 = +prompt('enter your guess between 1 to 10 : ');

if ( g2 === g1){
    alert('Congratulations , Right Guess!');
}
else{
    alert('Hard Luck try Next time !');
}




            //     TASK 31 - 34 ( DATE METHODS )

//                  EX # 01

var dAt = new Date();
document.write(dAt + '<br>' + '<br>');


//                  EX # 02

var d = new Date();
var Mat = d.getMonth();
document.write('Current Month : '+Mat + '<br>' + '<br>');


//                  EX # 03

var d = new Date();
var Day = d.toString();
Day1 = Day.slice(0,3) ;
document.write('Today is '+ Day1+ '<br>' + '<br>');
 

//                  EX # 04

var d = new Date();
var Day = d.toString();
Day1 = Day.slice(0,3);

if ( Day1 === 'Saturday' || Day1 === 'Sunday'){
    document.write('It\'s Funday!'+ '<br>' + '<br>');
    
}



//                  EX # 05

var d = new Date();
var dayOfMonth = d.getDate();
// document.write(d)

if ( dayOfMonth < 16){
        document.write('First Fifteen Days of month'+ '<br>' + '<br>');    
}
else{
        document.write('Last days of month'+ '<br>' + '<br>');
}


//                  EX # 06

var d = new Date();
document.write('Current Date : '+ d + '<br>');
var millsSince = d.getTime();
document.write('elapsed millisecods since January 1 , 1970  : '+ millsSince + '<br>');
var min = millsSince / 1000 * 60 ;
document.write('elapsed minutes since January 1 , 1970  : '+ millsSince + '<br>' + '<br>');


//                  EX # 07

var d = new Date();
var currentHrs = d.getHours();
if ( currentHrs > 12 ){
    document.write('It\'s AM' + '<br>' + '<br>');
}
else{
    document.write('It\'s AM' + '<br>' + '<br>');
}


//                  EX # 08

var w = new Date("Dec 31,2020");
var o = w.getTime();
document.write("Last Date : " + o + '<br>' + '<br>');


//                  EX # 09

var a$$ = new Date("Jun 18,2015");
var b$$ = a$$.getTime();
var c$$ = new Date();
var d$$ = c$$.getTime();
var e$$ = d$$ - b$$;
var f$$ = Math.floor(e$$/(1000*60*60*24));
document.write(f$$ + " days have passed away since1st Ramadan , 2015" + "<br>" + "<br>");


//                  EX # 10

var a$$$ = new Date(prompt("enter the refrence date : "));
var b$$$ = a$$$.getTime();
var c$$$ = new Date("Jan 1,2015");
var d$$$ = c$$$.getTime();
var e$$$ = b$$$ - d$$$ ;
var f$$$ = Math.floor(e$$$/(1000*60));
document.write("On refrence Date " + a$$$ +" now " + f$$$ + " seconds had passed since begining of 2015 " + "<br>" + "<br>");


//                 EX # 11

var a$$$$ = new Date();
var d$$$$ = a$$$$.getHours();
var f$$$$ = d$$$$-1;
var c$$$$ = new Date();
var b$$$$ = c$$$$.setHours(f$$$$);

document.write("Current Date : "+a$$$$+"<br>");
document.write("1 hour before it was : "+c$$$$+"<br>"+"<br>");


//                  EX # 12

var a7 = new Date();
var d7 = a7.getFullYear();
var f7 = d7-100;
var c7 = new Date();
var b7 = c7.setFullYear(f7);

document.write("Current Date : "+a7+"<br>"+"<br>");
alert("100 years back,it was : " + c7);


//                  EX # 13

var a4 = new Date(prompt("enter date of birth : "));
var k4 = a4.toString();
var l4 = k4.slice(11,15);
var b4 = a4.getTime();
var c4 = new Date();
var d4 = c4.getTime();
var e4 = d4 - b4;
var f4 = Math.floor(e4/(1000*60*60*12*24*30));
document.write("Your age is : " + f4 + "<br>");
document.write("your birth year is : " + l4 + "<br>" + "<br>" );


//                  EX # 14

var hb = new Date();
var hc = hb.toString();
var ha = hc.slice(4,8);
var hn = prompt("enter your name");
var hu = +prompt("enter number of units");
var hf = hu*16;

document.write("<p style='font-size: 24px;'> K - ELECTRIC BILL</p>");
document.write("Customer Name : "+hn+"<br>");
document.write("Current Month : "+ha+"<br>");
document.write("Number of units charge : "+hu+"<br>");
document.write("Charge per unit : 16"+"<br>"+"<br>");
document.write("Net Amount Payable (with due date) : "+hf+"<br>");
document.write("Last Payable surcharge : 350"+"<br>");
document.write("Gross Amount Payable(After due date) : ", + (hf+350) + "<br>");





 //                TASK 35 - 38 ( FUNCTIONS )

//                  EX # 01

function current()
    {
        var d = new Date();
        return document.write(d + '<br>' + '<br>');
    }
current();


//                  EX # 02

function greet()
    {
        var firstName$ = prompt('Enter your first name : ');
        var lastName$ = prompt('Enter our last name : ');
        var fullName$ = firstName$ + ' ' + lastName$;
        return alert('Welcome To This Webpage Dear ' + fullName$);
    }
greet();


//                  EX # 03

function plus()
    {
        var firstName1 = +prompt('Enter your first number : ');
        var lastName1 = +prompt('Enter second number : ');
        alert(firstName1 +  lastName1);
    }
plus();


//                  EX # 04

var num1 = +prompt('enter first number : ');
var num2 = +prompt('enter second number : ');
var op = prompt('enter operation: ');

function calc(num1,op,num2){
    if(op == "+"){
        return num1 + num2
    }
    else if(op === "-"){
        return num1 - num2
    } 
    else if(op === "*"){
        return num1 * num2
    }
    else if(op === "/"){
        return num1 / num2
    }
    else if(op === "%" ){
        return num1 % num2
    }
    else{
        return "Incorrect Operator!"
    }
}
var result = calc(num1,op,num2);

alert(result);


//                 EX # 05

function sq(ar)
    {
        return alert(ar*ar)
    }
var ar = +prompt('enter a number : ');
sq(ar);


//                 EX # 06

function factorial(in$)
    {
        var fc = 1

        if (in$ < 0){
            return alert('factorial of negative number is not possible!')
        }
        else if (in$ === 1 || in$ === 0){
            return alert('factorial is 1');
        }
        else{
            for (var i = 1; i <= in$ ; i++){
                fc = fc * i;
            }
            return alert(fc);
        }

    }

var in$ = +prompt('enter a number : ');
factorial(in$);


//                  EX # 07

function counting()
    {
        for(var i =k1 ; i <= k2 ; i++){
             document.write(i + '<br>');
        }
    }

var k1 = +prompt('enter first number : ');
var k2 = +prompt('enter second number : ');

counting();


//                  EX # 08

var base = +prompt('enter base : ');
var perPendicular = +prompt('enter perpendicular : ');


function hypoTnuse()
    {
        dav = square() ** 0.5
        return dav
        function square()
            {
               return  base$ = base * base;
               return per$ = perPendicular * perPendicular;
                hyp$ = base$ + per$;
               return hyp$
            }
    }

hypoTnuse();
document.write('Hypotnuse: ' + hypoTnuse() +  '<br>' + '<br>');


//                  EX # 09

function areaSquare(height,width)
    {
        document.write('The Area is : ' + height * width);
    }

var height = +prompt('enter height : ');
var width = +prompt('enter width : ');

areaSquare(height,width);


//                  EX # 10

var word = prompt("Enter your name: ");
var c = "";

function palindrome()
    {

        for (var i = word.length - 1; i >= 0 ;i--){
            c += word[i]
        }

        if (word === c){
            return alert(word + " is a palindrome");
        }
    }
palindrome();


//                  EX # 11

function case(v)
    {

        var s = str=> str[0].toUpperCase()+str.slice(1).toLowerCase();
        var b = v.split(" ");
        var c = v.split(" ").map(s).join(" ");
        console.log(c);

    }

var v = prompt("enter the sentence");
case(v);


//                  EX # 12

function long (a)
    {

        var arr = a.split(" ")
        var c ;
        var d = 0;
        for (i=0;i<arr.length;i++){
            if(arr[i].length>d){
                d = arr[i].length;
                c= arr[i];
            }

        }
    // long();
    document.write("Sentence : "+a+"<br>");
    document.write("The longest word in sentence : " + c + "<br>" + "<br>");

    }

var a = prompt("enter the sentence");
f = long(a);


//                  EX # 13

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return  a=letter_Count;
}
var str = prompt('sentence : ');
var letter = prompt('give : ');
console.log(char_count(str, letter));
document.write('In sentence ' + str + ' the word ' + letter + ' occurs ' + a + ' times ' + '<br>' );


//                  EX # 14

var r = prompt("enter the radius");
function calcCircumference(r){
    document.write("The circumference is : " + (2*3.42*r) +  "<br>");
    
}

calcCircumference(r);

function calcarea(r){
    document.write("The area is : " + (3.142*(r)**2));
    
}

calcarea(r);

// //            ASSIGNMENT  OF JAVASCRIPT

// //            TASK # 38 - 42 ( FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS  )

// //              EX # 01

var a = +prompt("enter the base : ");
var b = +prompt("enter the power : ");

function power(a,b)
{
    return a**b;
}
p = power(a,b);
alert(p);

        //    EX # 02

var x = +prompt("enter year : ");

function leapYear(x)
{
    if (x%4===0)
    {
        if(x%400===0 || x%100!==0)
        {
            alert(x + " is leap year");
        }
        else
        {
            alert(x + "is not aleap year");
        }
    }
    else
    {
        alert(x + "is not a leap year");
    }
}
leapYear(x);

         EX # 03

var a = +prompt("enter length a : ");
var b = +prompt("enter length b : ");
var c = +prompt("enter length c : ");
var S = 0;
function swl(a,b,c)
{
    S = (a + b + c)/2;
    return S;
}
swl(a,b,c);

function area(S,a,b,c)
{
    alert("Area of triangle is " + (S * (S-a) * (S-b) * (S-c)) + " units");
}
area(S,a,b,c);

//          EX # 04

var marksOne = +prompt("Enter marks out of 100 : ");
var marksTwo = +prompt("Enter marks out of 100 : ");
var marksThree = +prompt("Enter marks out of 100 : ");
var a$ = 0;
var p$ = 0;
function avg(marksOne,marksTwo,marksThree)
{
    a$ = (marksOne + marksTwo + marksThree) / 3;
    return a$;
}
function per(marksOne,marksTwo,marksThree)
{
    p$ = ((marksOne + marksTwo + marksThree) / 300 ) * 100;
    return p$;
}
function displayResult()
{
    alert("Average : " + avg(marksOne,marksTwo,marksThree));
    alert("Percenatge : " + per(marksOne,marksTwo,marksThree) + "%");
}
displayResult();

//          EX # 05

var senTence = prompt("enter a text : ");
var word = prompt('enter string : ');
function index()
{
    for (var i = 0; i < senTence.length ; i++){
        if (senTence[i] == word)
        {
            alert(i);
            break;
        }
    }
}
index();

         EX # 06
var str = prompt('enter string : ');
function removeVowels(str){
    var vowels = "aieuo";
    var strArr = str.toLowerCase().split("");
    var newArr = strArr.filter(function(letter){
        if(vowels.indexOf(letter)  == -1){
            return letter;
        }
    });
     var string = "";
     newArr.forEach(function(letter){
         string += letter;
     });
     return string;
}

print(removeVowels(str));

         EX # 07 

var str1 = prompt('enter sentence : ');
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if ((vowel_list.indexOf(str1[x]) !== -1) && (vowel_list.indexOf(str1[x+1]) !== -1))
    {
      vcount += 1;
    }
  
  }
  alert(vcount);

}
vowel_count(str1);

         EX # 08

var distKm = +prompt("enter distance : ");
function m()
{
    var distM = distKm * 1000;
    alert('Distance in metre : ' + distM);
}
m();

function cm()
{
    var distCm = distKm * 100000;
    alert('Distance in centi-metre : ' + distCm);
}
cm();

function inch()
{
    var distInch = distKm * 39370.1 ;
    alert('Distance in inches : ' + distInch);
}
inch();

function feet()
{
    var distFeet = distKm * 3280.84;
    alert('Distance in feet : ' + distFeet);
}
feet();

         EX # 09

var workingHour = +prompt('enter working hours : ');
workingHour = (workingHour / 40) * 100;
function pay()
{
    if (workingHour > 40)
    {
        alert('Amount earned after Over-time : ' + 12 * workingHour);
    }
}
pay();

        EX # 10

var amount = +prompt('enter amount to withdraw : ');
function deno()
{
    alert( amount/100 + ' Hundred rupees notes ' + (amount % 100) / 50) + ' fifty rupees notes ' +  (((amount % 100) % 50) / 10) + ' ten rupees notes' );
    alert('remaining rupees : ' +  (((amount % 100) % 50) / 10)));
}
deno();



//                  TASK # 43 - 48  ( EVENTS )

//              EX # 01

// done in html

//              EX # 02

// done in html

//              EX # 03

function del()
{
    document.getElementById("aa1").remove(); 
}

//              EX # 04 


function changeImage()
{
    var carR = document.getElementById('ca');
    carR.src = 'b2.jpg';
}

function out()
{
    var carR = document.getElementById('ca');
    carR.src = 'b1.jpg';
}

//              EX # 05 
 
let btnAdd = document.querySelector('#add');
let btnSub = document.querySelector('#sub');
let input = document.querySelector('input');

btnAdd.addEventListener('click' , () =>{
    input.value = parseInt(input.value) + 1;
});

btnSub.addEventListener('click' , () =>{
    input.value = parseInt(input.value) - 1;
});

//              TASK # 49 - 52 ( EVENTS) & 53 - 60 ( DOM )


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function readmore() {
    var text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, neque. Qui expedita cum sed, doloremque nisi ex dignissimos ad corporis laborum ratione tempora architecto laboriosam id repellendus tenetur corrupti distinctio."
    var pera = document.getElementById('pera');
    pera.innerHTML = text;
}

function img() {
    var images = ["1.jpg", "2.jpg", "3.jpg", "4.png" "5.jpg"
"6.jpg" "7.jpg" "7.jpg" "8.jpg" "9.jpg" "10.jpg" "11.jpg" "12.jpg" "13.jpg" "14.jpg" "15.jpg" ];
    for (var i = 0; i < images.length; i++) {
        document.getElementById("modal").innerHTML += '<img class="modal-content" id="modal-img" src="'+ images[i] +'">';
    }
}
img();

//Loop through array and display all images in browser using innerHTML.

function functionArray(){
    for (i = 0; i < imgArray.length; i++) {
        imgArray[i];
    }
    document.getElementById("pozeGallery").innerHTML = imgArray.src;
};

var imgArray = new Array();
imgArray[1] = new Image();
imgArray[1].src = 'image/1.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'image/2.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'image/3.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'image/4.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'image/5.jpg';

imgArray[6] = new Image();
imgArray[6].src = 'image/6.jpg';

imgArray[7] = new Image();
imgArray[7].src = 'image/7.jpg';

imgArray[8] = new Image();
imgArray[8].src = 'image/8.jpg';

imgArray[9] = new Image();
imgArray[9].src = 'image/9.jpg';

imgArray[10] = new Image();
imgArray[10].src = 'image/10.jpg';

imgArray[11] = new Image();
imgArray[11].src = 'image/11.jpg';

imgArray[12] = new Image();
imgArray[12].src = 'image/12.jpg';

imgArray[13] = new Image();
imgArray[13].src = 'image/13.jpg';

imgArray[14] = new Image();
imgArray[14].src = 'image/14.jpg';

imgArray[15] = new Image();
imgArray[15].src = 'image/15.jpg';

//Add class 'modal-open'



$(document).on("click" ".open-", function () {
    var myBookId = $(this).data('id');
    $(".modal-body #bookId").val( myBookId );
    // As pointed out in comments, 
    // it is unnecessary to have to manually call the modal.
    // $('#addBookDialog').modal('show');
});

//Add style to display block:

var div = document.querySelector("div");
// One property
div.style.display = "block";
// Multiple properties
div.style.cssText = "display:block; color:red"; 
// Multiple properties
div.setAttribute("style", "display:block; color:red");


        
var result = document.getElementById("main-content");
document.getElementsByClassName("render").innerHTML = result;

function myFunction() {
document.getElementById("f-name").value="Fashad";
document.getElementById("l-name").value="Ahmed Siddique";
document.getElementById("email").value="fashad.ahmed20@gmail.com";
}

$(document).ready(function(){

$("#ch").click(function(){
    $("#head").text("Welcome, Student")
    $("#change").text("Changing Title..")

})

$("#ch").dblclick(function(){
    $("#head").text("HELLO, BSIT31C")
    $("#change").text("Changing Title...")

})

})

$("#hide").click(function(){
    $(".stud1").hide("slow")
    $("#change").text("Hiding the profile")



})

$("#show").click(function(){
    $(".stud1").show("slow")
    $("#change").text("Showing the profile Again..")
})

$(".odd").click(function(){

    $("#odd").css("background","red")
    $("#odd1").css("background","red")
    $("#even").css("background","cornflowerblue")
    $("#even1").css("background","cornflowerblue")

    

})

$(".even").click(function(){

    $("#even").css("background","green")
    $("#even1").css("background","green")
    $("#odd").css("background","cornflowerblue")
    $("#odd1").css("background","cornflowerblue")

})

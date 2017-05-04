$(document).ready(function(){
var studentList=['Alan', 'Yanella', 'Josue', 'Joel', 'Tushar', 'Odalys'];
var scriptEducators=['Aaron', 'Julia','Justin','Zach','Alyxe'];
$( "#studentButton").click(function(){
    var randomStudents = Math.floor (Math.random()*studentList.length);
    $("#studentDisplay").append(ScriptEders[randomStudents]);
});
$("teacherButton").click(function(){
    var randomTeachers=Math.floor(Math.random()*ScriptEducators.length);
    $("teacherDisplay").append(ScriptEducators[randomTeachers]);
});
create database OnlineExam

create table Registration(User_id int identity(1,1) primary key,Fullname varchar(50),Email varchar(50) unique ,Password varchar(50),City varchar(50),DOB date,State varchar(50),
Qualification varchar(50),Year_of_Completion date,Mobile_no varchar(50));


create table Subject(Subject_id int primary key,Subject_name varchar(50) );




create table Level(Level_id int primary key, Level_Name varchar(100));


create table Exam(Exam_id int primary key,Questions nvarchar(255),Question_id int,
File_id int,Subject_id varchar(50));




create table ExamDetails(Duration time,Level_id int  references level(Level_id),Cutoff int,Exam_id int references Exam(Exam_id) );



 create table Filename(File_id int primary key, File_Name varchar(50));

 
create table QuestionDetails(Question_id int primary key,File_id int references Filename(File_id),Question nvarchar(255),Correctansweres varchar(50),
Subject_id int references Subject(Subject_id),Level_id int references level(Level_id));

create table ReportDetails(User_id int references Registration(User_id),Level_id int references level(Level_id),
MarksObtained int, Subject_id int references Subject(Subject_id));


create table Admin_Login(Email varchar(50),Password varchar(50));



select * from Registration
select * from Subject
select * from ReportDetails
select * from Exam
select * from ExamDetails
select * from level
select * from QuestionDetails
select * from Filename
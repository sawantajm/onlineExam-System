create database OnlineExam



select * from  Registration


create table Registration(User_id int identity(1,1) primary key,Fullname varchar(50),Email varchar(50) unique ,Password varchar(50),
City varchar(50) ,DOB date,State varchar(50),
Qualification varchar(50),Year_of_Completion date,Mobile_no varchar(50));


insert into Registration(Fullname,Email,Password,City,DOB,State,Qualification,Year_of_Completion,Mobile_no)values('Ajinath','sawantajm@gmail.com',
'Ajay@123','Aurangabad','1998-01-08','Maharashtra','BE','2020-01-12','7756953384'),('rahul','rahul@123@gmail.com',
'Rahul@123','Aurangabad','1998-01-08','Maharashtra','BE','2020-01-12','7756953385');







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

insert into ReportDetails(User_id,Level_id,MarksObtained,Subject_id)values(1,1,80,1),(2,1,80,1);





create table Admin_Login(Email varchar(50),Password varchar(50));

drop table ForgotPassword

select * from Registration
select * from Subject
select * from ReportDetails
select * from Exam
select * from ExamDetails
select * from level
select * from QuestionDetails
select * from Filename
select * from stateN
select * from district


create table district(districtId int primary key,districtName varchar(100),stateId int references stateN(stateId))
insert into level(Level_id,Level_Name)values(1,'Level_1'),(2,'Level_2'),(3,'Level_3')

insert into Subject(Subject_id,Subject_name)values(1,'java'),(2,'c#.Net'),(3,'C++'),(4,'SQL');

select * from Subject

insert into QuestionDetails(Question_id,Question,Option1,Option2,Option3,Option4,Correctanswers,Subject_id,Level_id)
values(1,'In which memory a String is stored, when we create a string using new operator?','Stack','String memory','Heap memory',
'Random storage space','Heap memory',1,1),(2,' What is the use of the intern() method?','It returns the existing string from memory',
'It creates a new string in the database','It modifies the existing string in the database',
'None of the above','It returns the existing string from memory',1,1),(3,'Which of the following is a marker interface?','Runnable interface',
'Remote interface','Readable interface','Result interface','Remote interface',1,1),(4,'Which of the following is a reserved keyword in Java?','object'
,'strictfp','main','system','strictfp',1,1),(5,' Which keyword is used for accessing the features of a package?','package','import',
'extends','export','export',1,1)





insert into QuestionDetails(Question_id,Question,Option1,Option2,Option3,Option4,Correctanswers,Subject_id,Level_id)
values(6,'An interface with no fields or methods is known as a ______.','Runnable Interface',
'Marker Interface','Abstract Interface','CharSequence Interface','Marker Interface',1,2),(7,'Which of the following is an immediate subclass of the Panel class?','Applet class',
'Window class','Frame class','Dialog class','Applet class',1,2),(8,'Which option is false about the final keyword?','A final method cannot be overridden in its subclasses.',
'A final class cannot be extended.','A final class cannot extend other classes.','A final method can be inherited.','A final class cannot extend other classes.',1,2),
(9,'Which of these classes are the direct subclasses of the Throwable class?','RuntimeException and Error class',
'Exception and VirtualMachineError class','Error and Exception class','IOException and VirtualMachineError class','Error and Exception class',1,2),
(10,'What do you mean by chained exceptions in Java?',
'Exceptions occurred by the VirtualMachineError','An exception caused by other exceptions',
'Exceptions occur in chains with discarding the debugging information','None of the above','An exception caused by other exceptions',1,2)










select * from Report




select * from QuestionDetails

--   MySQL - mange data
-- large amount data 
-- save the data
-- day 1 date-24-6

/*
we use /* (astrik) use the multiple line comment 
*/ use to close the multiple line comment  

 */

create the signlue line comment we use -- 

 /*for create database */
 
 create database practice;
 create database practice2;
 /*
 - now i have crate the database the database con't
 we create after create the database  i can see by 
 schema than refresh
 use practice;   */
 
 /*before the crating the table we have to 
 active the database in which we are to crate 
 the table */
 
 /*
 
two way to active the database
   short cut double click on the databse the name 
use the query use database name  */
use practice;

/*
  now i create the employee table under the practise*/
  

 create table employee(
 id int,
 name varchar(20),
 salary int,
 doj date);
 
 -- after that again refresh schema
  --  now i insert the data in table
  
  insert into employee values
  (1,"raju",10000,"2001-10-1"),
  (2,"shyam",20000,"2002-10-1"),
  (3,"mohan",25000, "002-05-1");
  
  
  -- i want to see the sturctue of the of the table
  
  desc employee;
 
 -- now iwant to seee the data inside the table
 
 select * from employee;
 
 create database a;
 use a;
 create table b(
 id int,
 name varchar(20)
 );
 desc b;
 insert into b values
 (1,"Raju"),
 (2,"Shyam");
 
 select * from b;
 
 --  mysql  vs sql 
 /* mysql is a tool in which i use the sql 
 
 language to manage the data */
 /* why do i fra  to manage the data ?*/
/* other tool mange the data but mysql can handle large (bundle) of data and data
 is parament mean the is more secure as compair to other tool here maultiple
 people access the same data base and file don't carrepted */
 
 
 create database c;
 use c;
 create table d (
 id int, 
 name varchar(20),
 dates date,
 salary int
 );
 
 insert into d values
 (1,"a","2022-10-01",10000),
 (2,"b","2022-02-01",15000),
 (3,"c","2022-01-01",16000),
 (4,"d","2022-01-01",18000);
 desc d;
 select * from d;
 
 
 --  2 day
 -- rdbms    dbms 
 -- sql  sql and other lang 
 
 /* is my ql rdbms and dbms ?
 mysql is in rdbms ans dbms both  
 beacuse for the tool rdbms 5 condition is required 
 1- sql lang. used to manage the data
 2- data store in tabluar format
 3- concurrency control (means multiple peole access can access the account trasition infacted and other trasition
 4- data indegraity control( if the  col me set than it will be unique before and after trasiton
 5- acid propertice
 
 dbms con. are 
 1- sql and any other lang. used to mange the data
 2- tabluar or any other format
 remain three are same and by default mysql is in rdbms and dbms both
 */
 
 create table d(
 id int,
 name varchar(20)
 );
 
 /* now i wnat to add the new column in existing table */
 alter table d add column preformance varchar(20);
 desc d;
 
 insert into d values
 ( 1,"a", "good"),
(2,"b","good");

select * from d;

alter table d add column behavior varchar(20);
desc d;
-- now i wnat to change the datatype of new column 

alter table d modify column behavior int; 
 desc d;
 alter table d modify column behavior varchar(20);
 
 /* i want to add  data into */ 
 update d set behavior = case
 when id<2 then "Good"
 when id>2 then "v-good"
 else
 "Excellent"
 end;
 
 set sql_safe_updates=0;
 
 select * from d;
 /* now i want to drop the new column 
 alter table d drop column  performance;
 
 /* now i want to rename table d to d1*/
 
 -- 30
 -- sql comment is cre 
 
 /*ddl - it is instand of data defination lang. it consis the comment of drop , rename, crate, alter, truncate be can remamar this comment dcart 
 dml-  (data , manufaction lang.) it consis  insert update delete 
 ddl -comment work on outer sturcture table dml - internal sturcture table
 dcl-(data contral lang.) it consis grand and revake 
 dql -( data query lanf. ) select comment which is used to fetch the data
 tcl -(trasition control lang.) it consis commit rollback savepoint */
 
 
 create database c;
 use c;
 create table d (
 id int, 
 name varchar(20) );
 
 insert into d values 
 (1, "a"),
 (2,"b");
 
 select * from d;
 /*now i wnat ot delete the role where id =1  */
 
 
 delete from d where id =1;
  set sql_safe_updates=0;
   -- now we are to comlete data in side the table
  truncate d;
  
  -- now iwant ot remove the complete sturctue of the table 
  drop table d;
  
  
  -- 1-7
  create database a;
  use a;
  create table b (
  id int, name varchar(20));
  
  insert into b values
  (1,"anuj"),
  (2,"rohit");
  
  select * from b;
  
  insert into b values
  (3,"prakash");
  
  rollback;
  select * from b;
  set autocommit=0;
  
    insert into b values
  (4,"shubham"),
  (5,"priya");
  select * from b;
  commit;
  rollback;
  select * from b;
  
    insert into b values
  (6,"a");
  rollback;
  select * from b;
  
   insert into b values
  (7,"anjali");
  savepoint sp1;
 insert into b values
  (8,"sonam");
  
  select * from b;
  
  rollback to sp1;
  
  /* tcl comment - it is consist commit rollback and savepoint comment 
to see the use of firstly we have to run the query 
set autocommit=0 because by default system store the data into per. storg so  it doesnot allow system do it 

now we be run commit that time only it store the data it per. memoty  sabouse i have to inserted 2 roe and ru;n the comment 
now i will rollback than system will come till 2 row
beause rollbak brings bag tll last par. save
now i wll inset the 3 and 4 row but i wnat that rollback
 system sut come tll come 3 row but proble is that system will cmm onl per. store tiyo to i task is to comae to 3 row and rollback
 but the per data  store till the 2 roe only 
 so now ihave to ceate the savepoint bt last per store and the asisting row 
 save point is a land mark the sentex to create the save poit is savepoint anem 
 now if the rollback to savepoint  i have the create the savepoint3 after the 3 roe it will so the data till 3 row vut the per.
 datais sotre  till the 2 row 
 once i have means reach the 2 row now ti want to rollback to sp1 (samvepointname) it wll not take place */
 
 -- 2-6
 
 
 /* dcl we wnat ot allow the access for the pertiquer table to any user 
 now i want to allow for the pertiquer col. col2,  on  table_name to user_name
 now we  want to stop the access for the pertipulat any user rewoke all on table_name to user_name 
 now i wnat to stop the access for the pertiqular col. to any table and user-naem
 */
 
 grant all on table_name to user_name;
 grant column1,column2 on table_name to user_name;
 -- revoke all on table_name to user_name;
   -- revoke column1,column2 on table_name to user_name;
   
   
  /* dcl comment  insist of data control lang. and it consist grant and revoke comment 
  this comment are use add the adminstion level 
  grand is use to provide the access for any table 
  revoke is use to stop the access anuy tabel 
  
  
  /* is sql decreative  or  proceczer lang
  sql is a decreative lang. not procezer because unter it be give the comment and mysql follow the comment*/
  
  
  /*  we speack that the ddl cmmand work on the outer stucture but there is a truncate  cmmand which work internally insidethe tabe so how can we justify it 
  actully truncate remove compleate data inside the table which causee  data base sixe is be small so overall its ifact the out stucture  of the database */
  
  --   constaint   unique , not null, check, default     3-
  
  -- 4

use a;

/*  now we create customer table in which the id is the primary key*/
create table customers(
id int primary key,
name varchar(20) not null);  

desc customers;

insert into customers values 
(1,"A"),
(2,"b");

/* now i am gone create orders table in which orderid is a primary key ordername with not nuull and cusrtomer id  with forgine key  */
create table orders(
o_id int primary key,
o_name varchar(20) not null,
c_id int,
foreign key(c_id) references customers(id)
);  

desc orders;


create table a (
a_id int primary key,
a_name varchar(20) not null);

desc a;

insert into a values 
(1,"A"),
(2,"b");

 
 create table b (
b_id int primary key,
b_age int check(b_age>18),
b_sal int default 15000,
id int,
foreign key(id) references a(a_id)
);

desc b;
insert into b (b_id, b_age,id) values
(3,24,1) ;


--   6 

/*  now  i have create data dase funcation in which i have insert table emmploys */
select * from employees;

-- text function
/* now the task is to join the first name and last name */
/* we use the aliyas to provide the temp. clo. header */
select concat(first_name ," ",last_name) as 'fullname' from employees;
/* i need the first col and frist col length*/
select first_name,length(first_name) from employees;

/* now i need the complate table with extigate  col. provide the len. last name and provide the aliyas and last col lenght */
select * ,length(last_name) as length from employees;

/* now the task is to apoted the suppart of the first name means i need the three later name text strating sencond number
*/
select substr(first_name, 2,3) as substring from employees;
/* now i need the 2 leter of the first name text from left side */
select left(first_name,2) from employees;

/* now i need hte two leter form the text from the right side */
select right(first_name,2) from employees;

/* now i want ot search that onder mysql where the sql is plase*/
select instr("my sql","sql");
select locate("sql","my sql");
/*
now i wnat the first name in the uppercase */
select *,upper(first_name) from employees;
/* similary for lower*/
select *,lower(first_name) from employees;
/* now i wnat to remove the unneccer spacing of first name col*/
select ltrim(first_name) from employees;
/* for the right side */
select rtrim(first_name) from employees;
/* both side*/
select trim(first_name) from employees;
/* for convrt ing any text into proper  meas firstleter capital and remening with small
but proper fun. not sapoted by mysql 4
now replase mysql , love sql*/
select replace('mysql is working','mysql','love sql');
/* 

-- 7
 /* now  reverse the first col  */
 
 select reverse(first_name) from employees;
 
 -- here over task make the salary lenght equal to 10
 select lpad(salary,10,0) from employees;

    select pad(salary,10,0) from employees;                                 
    
    -- aggragate fun.  this are the fun. which take multiple num. of input row and provide the signle value output
    
    select sum(salary) from employees;
     select max(salary) from employees; 
     select min(salary) from employees;
     select avg(salary) from employees; 
     select count(salary) from employees;
     
     
     -- numeric fun  it is provide the row bis outjput take the n number input row and  frovide the same num. out put  of row
     -- now we want ro round  the salary clo. till one after the decimal value 
     select round(salary,1) from employees;
     
     -- we will use the floor fun. which bring the data back
      select floor(salary) from employees;
     -- we wil luse ceil it bring hte value in the coming side
      select ceil(salary) from employees;
      
      -- 
       select sqrt(salary) from employees;
        select power(salary,2) from employees;
        
        -- date and time fun
        -- 
        select now();
        select current_time();
        select current_date();
        select current_timestamp();
        select year(now());
        select year("2020-5-24");
        
         select monthname(now());
          select month(now());
           select day(now());
            select dayname(now());
             select dayofweek(now());
             
             -- i want ot add the current add 10 day
              select date_add(now() ,interval 10 day);
              select date_sub(now() ,interval 10 day);
              --- now i wnat to find the bt 2 date
              select datediff(now() , "2026-7-27");
              
              -- now malke any value positive we can use absoule fun
               select abs(datediff(now() , "2026-7-27"));
               
               -- now we are to change the date formet
               
               select date_format("2020-02-22",'%d-%m-%y');
               select date_format("2020-02-22",'%D-%M-%Y');
               
               
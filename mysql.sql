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
 
 
 Property	Meaning
A – Atomicity	All or Nothing
C – Consistency	Database remains valid
I – Isolation	Transactions don't interfere
D – Durability	Committed data is permanent

Atomicity: Cash is dispensed and your account is debited. If either step fails, neither happens.
Consistency: Your account balance remains correct after the transaction.
Isolation: Other transactions on your account don't see a half-completed withdrawal.
Durability: Once the withdrawal is successful, the updated balance is permanently recorded, even if the bank's server crashes afterward.


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
               
               
               
--  clauses
select * from employees;
/* we use the clause to define the task under sql statement
there are bareis type of clauses 

1 where clause : we use to apply the fileter condition under the sql statement 
now the task is to apoted the salary data with greater than 50000 */
select * from employees where salary >50000;

/* now the task is to difine the dept. vise  total salary */
select department ,sum(salary) as totalsalary from employees group by department;


/* now i need hte department total salary but total salary is greater than 100000 */
select department ,sum(salary) as totalsalary from employees group by department having totalsalary>100000 ;
/* we use the grop by clause to parform the gouping  and we use the hanving clause to parform the filetertion on the applied output */

/* now i need the data is age is > 25 */
select  * from employees where age >25;
/* now i wnat the dat with age is > 25 and salary is areni the desc. order  */
select  * from employees where age >25  order by salary desc;

-- now i need asc. oder
select  * from employees where age >25  order by salary ;

/* wee use the order by clause to aergve the desc and asc order for desc. rewrite desc and asc. rewrite asc and level  black */
/* i need the data salary is > 25000 */
select  * from employees where salary >25000;
/* adn salary is avger. desc order and we need top 5 row only */

select  * from employees where salary >25000 order by salary desc limit 5;

/* we use the limit clause to restrid the no. of row*/
-- the q is pre.  but now i need the top 5 row asit of 2 row

select  * from employees where salary >25000 order by salary desc limit 5 offset 2;

/* we use the uffset clause to drop the number of rows form the begin
the clause sevens way to use 
from - where -group -having -select -order -limit offset  */

/* now we need the data we shows dept .vies salary and the age of the worker most be > 25 and  where i need the top 3 row  asipion 1 row
*/
select department ,sum(salary) as totalsalary 
from employees 
where age >25 
group by department 
limit 1,3;


-- 9 
-- opretor  

/* employee related ti delhi or mumbai  */
select * from employees where city = 'Delhi' or city ='Mumbai';

-- city = delhi and salary >30k must be satisfied */
select * from employees where city = 'Delhi' and salary>30000;

-- department form it either finamnce 
select * from employees where department= 'IT' or department='Finance';
select * from employees where department in ('it','finance');
-- department not from it and finance 
select * from employees where department not in ('it','finance');

-- tell the data in which firstname starts with  p 
select * from employees where first_name like 'p%';
-- tell the data in which firstname end  with  a
select * from employees where first_name like '%a';

-- tell the data in which under firest-name the je comes at the second position 
select * from employees where first_name like '_e%';

-- tell the data in which length of first _name is 5
select * from employees where first_name like '_____';


-- first_name start with p or n 
-- department  len is 2


select * from employees where department like '__' and  (first_name like 'p%' or first_name like 'n%');

-- data in which age exist bt 20 an d 25


select * from employees where  age between 20 and 25;


--  null is exist in department   / check whether null exists in department or not   (notnull 0 isnull 1 

select *,isnull(department) from employees;
-- tell the data we show department vias total salary and total salary most be > than 100000 and  department  
 -- must be areg. desc. order and we need the department either which start with i ,h,f,b,s  need the output from 2 row 
 
 select department ,sum(salary) from employees 
 where department like 'i%' or department like 'h%' or department like 'f%' or department like 'b%' or department like 's%'
 group by department 
 having sum(salary)>100000  
 order by department desc 
 limit 1,1;
 
 
-- 10
 select * from employees;
 select * from employees where  salary between 30000 and 50000;

 select * from employees where city in ('delhi','mumbhi') and  age between 20 and 25  and experience_years>2;

 select * from employees where city like 'd%' or city like 'b%' and  salary >50000 ;
 
 
  select * from employees where (city like 'd%' || 'b%') and  salary >50000 ;
  
   
  select * from employees where salary >50000 and city like 'd%' || 'b%' ;
  
  
  
  
  -- 11
  
  -- trigger ,store procedures, views ,indexs ,mindow function, normlization ,
  -- shortcut the create the table,joins,custom function , null function, how to drop primary and foreign key coloring in mysql
  
  -- is null operator
  
  
  CREATE TABLE employees_null_practice (
emp_id INT,
emp_name VARCHAR(50),
department VARCHAR(50),
salary INT,
bonus INT,
manager_id INT
);

INSERT INTO employees_null_practice VALUES
(1, 'Amit', 'IT', 50000, 5000, NULL),
(2, 'Rahul', 'HR', NULL, 3000, 1),
(3, 'Sita', NULL, 45000, NULL, 1),
(4, 'Neha', 'Finance', 60000, NULL, 2),
(5, 'Vikas', 'IT', NULL, 4000, 2),
(6, 'Priya', NULL, 52000, 3500, 3),
(7, 'Ankit', 'HR', 48000, NULL, NULL),
(8, 'Pooja', 'Finance', NULL, 2000, 4),
(9, 'Rohit', NULL, 55000, NULL, NULL),
(10, 'Sneha', 'IT', NULL, NULL, 5);
  
  -- is null orperetor
  select * ,isnull(salary) from employees_null_practice;
  
  /* here create a new col. which is providing the infomation or salary col. tha t does not exist here no*/
  
  
  -- ifnull () and coalesce() fuctijons   
  
  -- i am to crate a nww col.whith the table which difene the salary col. 
  -- and if the null values exist the salart col. than it replave the null by sum value which i difine
  
  
  select *, ifnull(salary,bonus) from employees_null_practice;
  
  /* now i need the another col. whiach desc. the salary col. if the null exits there than replased by th e bonus col. 
  and if the bonus concet the null than i goes another value and sach for multiple col. coalesce */
  
  
    select *, coalesce(salary,bonus,20000) from employees_null_practice;

-- 13

-- Create Database
CREATE DATABASE join_practice_db;
USE join_practice_db;

-- Customers Table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    city VARCHAR(50)
);

INSERT INTO customers VALUES
(1,'Amit Sharma','Delhi'),
(2,'Neha Verma','Mumbai'),
(3,'Rahul Singh','Pune'),
(4,'Priya Patel','Ahmedabad'),
(5,'Karan Mehta','Delhi');

-- Employees Table
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    department VARCHAR(50)
);

INSERT INTO employees VALUES
(101,'Rohit Kumar','Sales'),
(102,'Anjali Gupta','Sales'),
(103,'Vikas Jain','Support');

-- Products Table
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    price INT
);

INSERT INTO products VALUES
(201,'Laptop',60000),
(202,'Mobile',20000),
(203,'Headphones',2000),
(204,'Keyboard',1500),
(205,'Mouse',800);

-- Orders Table
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    emp_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (emp_id) REFERENCES employees(emp_id)
);

INSERT INTO orders VALUES
(301,1,101,'2025-01-10'),
(302,2,102,'2025-01-12'),
(303,3,101,'2025-01-15'),
(304,1,103,'2025-01-18'),
(305,5,102,'2025-01-20');

-- Order Details Table
CREATE TABLE order_details (
    order_detail_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO order_details VALUES
(1,301,201,1),
(2,301,203,2),
(3,302,202,1),
(4,303,205,3),
(5,304,204,2),
(6,305,201,1),
(7,305,205,2);

-- Example Multiple JOIN Query
SELECT 
    c.customer_name,
    c.city,
    o.order_id,
    o.order_date,
    e.emp_name AS handled_by,
    p.product_name,
    p.price,
    od.quantity,
    (p.price * od.quantity) AS total_price
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN employees e ON o.emp_id = e.emp_id
JOIN order_details od ON o.order_id = od.order_id
JOIN products p ON od.product_id = p.product_id;  


drop database join_practice_db;

-- JOIN PRACTICE DATASET





CREATE DATABASE IF NOT EXISTS join_practice;
USE join_practice;

-- Customers table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    city VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO customers VALUES
(1,'Shubham','Delhi','shubham@gmail.com'),
(2,'Amit','Mumbai','amit@gmail.com'),
(3,'Neha','Pune','neha@gmail.com'),
(4,'Rohit','Delhi','rohit@gmail.com'),
(5,'Priya','Bangalore','priya@gmail.com');

-- Categories table
CREATE TABLE categories (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(50)
);

INSERT INTO categories VALUES
(1,'Electronics'),
(2,'Clothing'),
(3,'Books');

-- Products table
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    price DECIMAL(10,2),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

INSERT INTO products VALUES
(101,'Laptop',50000,1),
(102,'Mobile',20000,1),
(103,'T-Shirt',500,2),
(104,'Jeans',1200,2),
(105,'SQL Book',700,3);

-- Orders table
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO orders VALUES
(1001,1,'2024-01-10'),
(1002,2,'2024-01-12'),
(1003,1,'2024-01-15'),
(1004,3,'2024-01-18'),
(1005,5,'2024-01-20');

-- Order Items table
CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO order_items VALUES
(1,1001,101,1),
(2,1001,103,2),
(3,1002,102,1),
(4,1003,105,3),
(5,1004,104,1),
(6,1005,101,1);

-- SAMPLE JOIN QUERY
SELECT customers.customer_name, products.product_name, order_items.quantity
FROM customers
JOIN orders ON customers.customer_id = orders.customer_id
JOIN order_items ON orders.order_id = order_items.order_id
JOIN products ON order_items.product_id = products.product_id;


-- categories

--  14
-- cartision product 
select * from customers cross join categories;

-- natural join
select * from customers natural join categories;

select * from customers natural join orders;

-- if that table not exits same col . in the table  query provide the cartison product 
-- and may be table have same col. so that query return the inner join


-- full join  
select * from customers full  join orders;

select * from customers as c full join orders as o on c.customer_id =o.customer_id;


/* joins are used to combine the rows of the muyltiple table with help of common col. bt them
it use for the merge operation bt the table 
basic join are 7 types
inner join , left, right, full outer join, self join, cross , natural join

inner join- its provide the common part bt the 2 table  
left join- left is equal to inner join + left table and unmatch of right table and
            right able value unter the unmatch condition its provide with null
right join- right is = to inner join + right table and unmatch of left table and 
				where left table value is privete with null doing the unmatch row
                
cross join - it provide the cartision product under which be didnot define the common col.
					beacuse if common  col. exete and doesnot exists bt the table its just provide 
                    the carision product. means multipleing the combine each row ofthe one table with 
                    all the rows of the under table.
natural join - here also be not need describe the common col. beacuse the common col. is search by 
						natural join it self 
                        if the common col exist bt the table than if profoce the inner join and common 
                        col. does not exist bt the table than it parform it means providethe carision product
full outer join- it is the commsion of inner join + left table unmatch row the right table and the 
							right table and unmatch row the left table
self join -  a join with the table it self its the self join basically inner join
 step to do it 
 1 create the douplecate of the table vertual with the help of alias (as) 
 2 here last ex. our task was to find the empl. name and manager name under which the employee works.alter
 so i have create the 2 copys of emp. as e and m and providethe conndition that on the basis of e.manager_id = m.employess._id 
 we are the create 2 col. first empl. name and the other manager
 whan the common col. condition satifafis that time e table providethe emp. name and m table also provide the work as manager name 
 */

create database selfjoin;  
use selfjoin;

-- Create Employee table 
CREATE TABLE employee ( employee_id INT PRIMARY
KEY, employee_name VARCHAR(50), job_title VARCHAR(50), manager_id INT,
salary INT );

-- Insert data 
INSERT INTO employee VALUES (1, 'Amit', 'CEO', NULL,
100000); 
INSERT INTO employee VALUES (2, 'Neha', 'Manager', 1, 75000);
INSERT INTO employee VALUES (3, 'Raj', 'Manager', 1, 72000);
 INSERT INTO
employee VALUES (4, 'Priya', 'Team Lead', 2, 60000); 
INSERT INTO
employee VALUES (5, 'Vikas', 'Team Lead', 2, 58000); 
INSERT INTO
employee VALUES (6, 'Sneha', 'Developer', 4, 45000); 
INSERT INTO
employee VALUES (7, 'Arjun', 'Developer', 4, 43000); 
INSERT INTO
employee VALUES (8, 'Kavita', 'Developer', 5, 42000); 
INSERT INTO
employee VALUES (9, 'Rohit', 'Intern', 6, 25000); 
INSERT INTO employee
VALUES (10, 'Pooja', 'Intern', 7, 24000); 
INSERT INTO employee VALUES
(11, 'Manish', 'HR', 2, 50000); 
INSERT INTO employee VALUES (12,
'Simran', 'Accountant', 3, 52000);                          
                    

select * from employee;

SELECT 
    e.employee_name AS emp, m.employee_name AS manager
FROM
    employee AS e
        JOIN
    employee AS m ON e.manager_id = m.employee_id;


-- window function  15



CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    department VARCHAR(50),
    salary INT
);

INSERT INTO employees (emp_id, emp_name, department, salary) VALUES
(101, 'Amit', 'HR', 50000),
(102, 'Riya', 'IT', 60000),
(103, 'Sohan', 'IT', 60000),
(104, 'Priya', 'Finance', 75000),
(105, 'Rahul', 'HR', 50000),
(106, 'Neha', 'Finance', 75000),
(107, 'Karan', 'IT', 90000),
(108, 'Simran', 'HR', 50000),
(109, 'Vikas', 'Finance', 90000),
(110, 'Anjali', 'IT', 60000),
(111, 'Rohit', 'HR', 45000),
(112, 'Pooja', 'Finance', 75000),
(113, 'Arjun', 'IT', 90000),
(114, 'Kavya', 'HR', 45000),
(115, 'Manish', 'Finance', 60000);


/* i want the complate data with the new col.which is tell the reainking on the basis salary col. the person 
who is having highing salary and having highest rank    
*/

--- rank window function
-- rank fun.

select * ,rank() over(order by salary desc) as ranking from employees;
select * ,rank() over(order by salary desc) as ranking from employees;
-- skip the upcoming value
-- dense rank
select * ,dense_rank() over(order by salary desc) as ranking from employees;

--- row number
select * ,row_number() over(order by salary desc) as ranking from employees;

--- ntile
select * ,ntile(4) over(order by salary desc) as ranking from employees;

--- value window function
-- first_value
select * ,first_value(salary) over(order by salary desc) as ranking from employees;

-- last_value
select * ,last_value(salary) over(order by salary desc) as ranking from employees;

-- lead window function
select * ,lead(salary) over(order by salary desc) as ranking from employees;

-- lag fun.
select * ,lag(salary) over(order by salary desc) as ranking from employees;

--- aggreggate  window function
-- sum  rolling sum
select * ,sum(salary) over(order by salary desc) as ranking from employees;

-- max
select * ,max(salary) over(order by salary desc) as ranking from employees;
  -- min
select * ,min(salary) over(order by salary desc) as ranking from employees;
-- count 
select * ,count(salary) over(order by salary desc) as ranking from employees;
-- avg
select * ,avg(salary) over(order by salary desc) as ranking from employees;

/* now we wnat to do the gruping and on the basis of dept grouping we obtaion the rollling sum of salary col. */
select * ,sum(salary) over(partition by department order by salary desc) as ranking from employees;


/* window fun. give the row  vias output 
num. of input row = num. of output row
if the over (is avalilble in the query ) it is window fun.
rank fun. if the tipe of the value take place than it is skip the upcoming rows
dencs rank- if same rank than upcoming rank doesnot skip 
ntile - its divide the data inoto = num. of part what be define under the ntile
row number - its provide the unqie identit num each row

values window function
first_value -and lastvalue the first value 
and last value provide the ofthe data of the basis of partion

the lead fun provideth e coming value where the lag fun. provide the last and privous values

agg. win. fun.
all aff .win .fun work on row level basis exp. if i perpome the min fun. 
than its donest find the minmum value col. level it does row by row

over () it is identit of the window fun.
order by- in which col. we are to perfome the fun operation
partionby - it is ontional but it is need the gourp by than we use it .alter

*/


--- 16

create database er;
use er;



/*  
you can create er diagram  both before and after database design but silate differnce 
usealy enitty diagram is crate before the built the db it was a blue print of plan it has as dicity which enitty (table ) attribut (col.) , and relationship with exeted 
with developers design the db str. using the diagram first after the db design er diagram can also we generated after the already create in thsi
case the diagram is made from the existing  ftable it help to vistual the db and understand the database stucture  */


 /* acid propertasqbal  */
 
/* acit properties
 
 1.atomicity :- under 8  the saql tranjection wroks in two conditions only either to be completely pass to be completely fail
 
 2.consistency:- under 8 if i make any column with unique constant then it will be unique before and after the tranjection 
 it is about data inrigrative voilnce     
 
 3.isolation:- under at one tranjection tacking placet then it does't effet the onther tranjection
 
 4.d for drubrility :if we are going to commit any tranjection then suppose at the point of augucation(contro+enter) just
 after that exident the sysytem gfailuer tacke place then when be agin recollect the system show that  time
 the query tranjection is completey done there but before pressing (contro+enter)  is the sysyemt falure tackimng palce then the system gone atomocity*/
 show databases;
 
 /*systemdefine object and database object/user define objects
 
 sdo are thoese which are created by the system to improver it's wroking ex:when i witre show databses that time some databses are visable 
 whichc i haven't careted also so these are sdo which improve the system working 
 
 dbo are thoese which are created by user to  improve the suytem working 
 
 ex:index ,views ,triggers , function ,store prossiger*/
 
 
 /now i am to create a index for the salary column under the windo function databse/
 

 

 


create index first_index
on employees(salary);

show indexes from employees;

drop index first_index on employees;

create index first_index
on employees(department);

show indexes from employees;

drop index first_index on employees;


/* index:- index is use to speeup the theory retrivale time it store the values with their location 

in the real life we want to  read any topic ubder the book then we don't find the topic page by page we go index page and directly jump 
to the perticular topic simillarly before creating the index  system has to scan each row but after creating the index system can directly jumped 
to pertocular desier row but stil index is not perfor

1.beacuse index covers the serve  sapace 
2.it slow downs the dml operation ex:if we update in the index column then the update has to be done on the index also 
so over all wrking increases and the time also increases

index is perfored the larzer tables only because smaller tbale system can itself scan 

for porimary,fogin ,and unique key under my sql the system create the index by on 

on the basis structure the system is creatogries in two types
1.betree index
2.hash type index

and the basis of storage it is classfiy in two types
1.clusterd index 
2.noneclusterd index

 and index can be crtaeted on one and more column that time it is comp0ssed index*/



create database primary_key;
use primary_key;

CREATE TABLE A(A_id int primary key,
    A_named VARCHAR(50)
    );
CREATE TABLE B (
    B_id int primary key,
    B_name VARCHAR(50),
    
    A_id int,
    
    
   foreign key (A_id) references A(A_id));
   
   
  
   desc A;
   desc B;
   
    alter table A drop primary key
    
    /* how to drop foregin key*/
 
 --- how to drop foreign key
 
 
 
 
 
 --  458
 
 create database primarykey;
use primarykey;

CREATE TABLE a(a_id int primary key,
    a_named VARCHAR(50)
    );
CREATE TABLE b(
    b_id int primary key,
    b_name VARCHAR(50),
    
    b_id int,
    
    -- how to drop foreign key and primary key
   foreign key (a_id) references a(a_id));
   
    
    alter table a drop primary key;
    
     alter table b drop foreign key b_ibfk_1;
     
     desc a;
    desc b;
    
    drop index a_id on b;
    
     desc a;
    desc b;
    
    CREATE TABLE a(a_id int primary key,
    a_named VARCHAR(50)
    );
    
 insert into a values (1,"A");
     
     
     /*the black color is represnt the column name ,table name, while the dark blue color represnt the resuve keywords the light 
     blue clor represnt the comments and the orange and red color represnt the values*/
     
     
      
    create database shortcut;
use shortcut;

/*composit primary key:- */

 insert into a values (1,"A");
 
 
 INSERT INTO a VALUES (1, 'A');


create table A(
id int,
course_id int,
marks int,
primary key (id,course_id));
desc A;


-- 458





 
 
 
 
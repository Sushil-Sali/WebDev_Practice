create table user(id int primary key,username varchar(20)
 unique not null,email varchar(20) unique not null,password varchar(20) not null);
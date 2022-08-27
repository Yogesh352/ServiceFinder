create database serviceFinder;

use serviceFinder;

create table CLIENT 
(clientID int not null,
cName varchar(128) not null,
cEmail varchar(128) not null,
constraint client_pk primary key (clientID));

create table SOLUTION
(SID int not null,
title varchar(128) not null,
constraint SID_pk primary key (SID));

create table FEATURE
(SID int not null,
FID int not null,
fName varchar(128) not null,
fDescription varchar(128) not null,
constraint feature_pk primary key (SID, FID),
constraint feature_fk foreign key (SID) references SOLUTION(SID));

create table CHECKLIST
(clientID int not null,
SID int not null,
FID int not null,
selected boolean not null,
constraint checklist_pk primary key (clientID, SID, FID),
constraint checklist_fk1 foreign key (clientID) references CLIENT(clientID),
constraint checklist_fk2 foreign key (SID, FID) references FEATURE(SID, FID));
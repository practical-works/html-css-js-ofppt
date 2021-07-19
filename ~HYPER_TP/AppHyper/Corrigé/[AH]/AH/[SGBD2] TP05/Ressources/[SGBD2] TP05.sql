
---**-.__ Question 1 __.-**---

use master 
go

if exists (select	*
		   from		sys.databases
		   where	name = 'SGBD2_TP05')
	drop database SGBD2_TP05
go

create database SGBD2_TP05
go

use SGBD2_TP05
go

create table Chambres(
	Numéro		varchar(5)
				constraint PK_Chambres primary key
				constraint CK_Numéro_Chambres check ((Numéro like 'Ch[0-9][0-9][0-9]') and (Numéro not like 'Ch000') ),
	Prix		money
				constraint CK_Prix_Chambres check (Prix > 0),
	Type		varchar(10)
				constraint CK_Type_Chambres check (Type in ('Simple', 'Double'))
				default 'Simple')
go

create table Clients(
	Numéro		varchar(5)
				constraint PK_Clients primary key
				constraint CK_Numéro_Clients check (isnumeric(Numéro) = 1),
	Nom			varchar(30),
	Pays		varchar(10))
go

create table Réservations(
	Numéro			varchar(7)
					constraint PK_Réservations primary key
					constraint CK_Numéro_Réservations check (isnumeric(Numéro) = 1),
	Client			varchar(5)
					constraint FK_Client_Clients_Réservations foreign key references Clients(Numéro),
	Chambre			varchar(5)
					constraint FK_Chambres_Réservations foreign key references Chambres(Numéro),
	DateDébut		datetime,
	DateFin			datetime,
	constraint		CK_DateDébut_DateFin_Réservations check (DateDébut < DateFin),
	constraint		U_Chambre_DateDébut_DateFin_Réservations unique (Chambre, [DateDébut], DateFin))
go

---**-.__ Question 2 __.-**---
begin tran
begin try
		insert into Chambres values ('Ch000', 500, default)
		insert into Chambres values ('Ch001', 500, default)
		insert into Chambres values ('Ch002', 800, 'Double')
		insert into Chambres values ('Ch003', 700, default)
		insert into Chambres values ('Ch004', 1000, 'Double')
		insert into Chambres values ('Ch005', 650, default)	
		insert into Chambres values ('Ch005', 750, default)	
		insert into Chambres values ('Ch006', 0, default)		
		insert into Chambres values ('Ch007', 650, '?')
	 commit tran
end try
begin catch
   rollback tran
end catch
go
begin tran
begin try
insert into Clients values ('00001', 'Arnold schwarzenegger', 'USA')
insert into Clients values ('00002', 'Daniel Lama', 'France')
insert into Clients values ('00003', 'Robert Le petit', 'France')
insert into Clients values ('00004', 'Cécile Fabian', 'Belgique')
insert into Clients values ('00005', 'Antonio Banderas', 'Espagne')
insert into Clients values ('00006', 'Adelaide Fentsch', 'Allemagne')
insert into Clients values ('00007', 'Wolfgang Oberham', 'Allemagne')
insert into Clients values ('00008', 'Shahrukh Khan', 'Inde')
 commit tran
end try
begin catch
   rollback tran
end catch
go

begin tran
begin try
insert into Réservations values ('0000001', '00001', 'Ch002', '2/2/2011', '7/2/2011')
insert into Réservations values ('0000002', '00001', 'Ch004', '9/2/2011', '15/2/2011')
/*insert into Réservations values ('0000003', '00002', 'Ch001', '7/2/2011', '13/2/2011')*/
insert into Réservations values ('0000004', '00003', 'Ch002', '4/3/2011', '5/3/2011')
insert into Réservations values ('0000005', '00004', 'Ch003', '11/2/2011', '31/3/2011')
insert into Réservations values ('0000006', '00002', 'Ch004', '17/2/2011', '21/2/2011')
insert into Réservations values ('0000007', '00001', 'Ch002', '15/3/2011', '15/5/2011')
insert into Réservations values ('0000008', '00001', 'Ch004', '27/2/2011', '13/3/2011')
insert into Réservations values ('0000009', '00007', 'Ch004', '1/4/2011', '3/4/2011')
insert into Réservations values ('0000010', '00004', 'Ch003', '1/4/2011', '4/4/2011')
insert into Réservations values ('0000011', '00006', 'Ch003', '2/4/2011', '29/4/2011')
insert into Réservations values ('0000012', '00007', 'Ch002', '23/5/2011', '28/5/2011')
insert into Réservations values ('0000013', '00008', 'Ch001', '11/6/2011', '15/1/2012')
insert into Réservations values ('0000014', '00001', 'Ch004', '1/10/2011', '31/12/2011')
insert into Réservations values ('0000015', '00007', 'Ch002', getdate(), dateadd(day, 15, getdate()))
insert into Réservations values ('0000016', '00008', 'Ch001', '13/6/2011', '17/1/2012')
insert into Réservations values ('0000017', '00002', 'Ch004', '10/12/2011', '19/12/2011')
insert into Réservations values ('0000018', '00003', 'Ch001', '13/6/2011', '17/1/2012')
  commit tran
end try
begin catch
   print'erreur'

	   print error_message()
	   print error_line()
  rollback tran
end catch
   

go


--Question3:
create function f_1() 
		returns table
	as	return	select	*
				from	chambres
				where	langid = @idLangue
	go

	select * from Chambres

-----Q3---------
create procedure ps_03(@numéro varchar(5) , @nom varchar(30), @pays varchar(10))
as begin
    begin try 
	insert into clients values (@numéro,@nom,@pays)

	print'ok'
	end try
	begin catch
	   print'erreur'

	   print error_message()
	   print error_line()

	end catch
end 
exec pc_03  '00009' ,'Mohamed Ramzi', 'Egypte'
exec pc_03 '00008' ,'Benoît Sarko' ,'France'

------ Q4-------
create function f_04(@d1 datetime,@d2 datetime)
   returns table
   as return select * from Chambres 
                      where Numéro not in (select Chambre
					                       from Réservations
										   where @d1 > DateDébut and  @d1 < DateFin
										         or @d2 > DateDébut and @d2 < DateFin
												 or DateDébut > @d1 and DateDébut < @d2
												 or DateFin > @d1 and DateFin < @d2)

select * from Réservations
select * from f_04('02/02/2011','03/02/2011')

-------Q5-----------------
create function f_05()
 returns table
   as return select * from f_04(GETDATE(),getdate())

   select * from f_05()
   insert into Réservations values ('0000033','00007','ch001',
                                    DATEADD(hour,2,getdate()),
									DATEADD(day,15,GETDATE()))
	select cast(GETDATE() as date)
	select DATEADD(MILLISECOND,-1,cast(dateadd(day,1,cast(getdate() as date)) as datetime) 

------Q7-----------
create function f_07(@d1 datetime,@d2 datetime,@chambre varchar(20))
returns bit
   as begin
           if(exists (select * from f_04(@d1,@d2)
		                       where numéro = @chambre))
		   return 1

	   return 0
   end
   print dbo.f_07(getdate(), dateadd(day, 2, getdate()),'Ch003')

   -------------RAISERROR--Exemple------------

   begin try
   declare @i int = 1  --13 --15 ....
       if(@i%2 = 0) print 'ok'
	   else RAISERROR('probleme',16,1)
	                 --('%d n''est pas pair',16,1,@i)
   end try
   begin catch
   print error_message()
   print error_severity()
   print error_state()
   end catch
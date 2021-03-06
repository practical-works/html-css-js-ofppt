 			      
 		------------------------------------------------------------------------------------------------------------------
 		------------------------------------------------------------------------------------------------------------------
		--								Chapitre 3 : Procédures stockées et fonctions									--
 		------------------------------------------------------------------------------------------------------------------
 		------------------------------------------------------------------------------------------------------------------

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---
---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Base de données :

	set nocount on
	set dateformat dmy

	use master 
	go

	if exists (select	*
			   from		sys.databases
			   where	name = 'SGBD2_Chapitre3')
		drop database SGBD2_Chapitre3
	go

	create database SGBD2_Chapitre3
	go

	use SGBD2_Chapitre3
	go

	if exists (select	*
			   from		sys.tables
			   where	name = 'Employés')
		drop table Employés
	go

	create table Employés(
	Numéro			varchar(3)
					constraint PK_Employés primary key (Numéro),
	Courtoisie		varchar(5)
					constraint CK_Courtoisie check (Courtoisie in ('M', 'Mme', 'Mlle')),
	Nom				varchar(30),
	Prénom			varchar(30),
	DateNaissance	datetime)
	go	

	insert into Employés values ('E01', 'M', 'Jaber', 'Mohamed Reda', '17/12/1963')
	insert into Employés values ('E02', 'M', 'Mansouri', 'Mohssen', '2/7/1949')
	insert into Employés values ('E03', 'Mme', 'Colombos', 'Neven', '10/3/1964')
	insert into Employés values ('E04', 'Mme', 'Monsef', 'Chadia', '4/1/1951')
	insert into Employés values ('E05', 'M', 'Salmi', 'Wahid', '5/12/1961')
	insert into Employés values ('E06', 'Mme', 'Chraibi', 'Nour Al Houda', '3/8/1949')
	insert into Employés values ('E07', 'M', 'El Kharoubi', 'Marouane', '5/6/1953')
	insert into Employés values ('E08', 'M', 'Noah', 'Yannick', '17/12/1967')
	insert into Employés values ('E09', 'M', 'Salim', 'Mourad', '5/10/1951')
	insert into Employés values ('E10', 'M', 'Hilali', 'Abdessamad', '5/6/1960') 
	insert into Employés values ('E11', 'M', 'Daoudi', 'Youness', '7/11/1957')
	insert into Employés values ('E12', 'Mme', 'Halidday', 'Hannah', '17/12/1973')
	insert into Employés values ('E13', 'Mlle', 'Khalil', 'Aicha', '13/2/1977')
	insert into Employés values ('E14', 'M', 'Mjadli', 'Jamal', '17/2/1975')
	insert into Employés values ('E15', 'Mme', 'Saadi', 'aziza', '5/1/1975')
	insert into Employés values ('E16', 'M', 'Ismaili', 'Kamal', '21/5/1979')
	insert into Employés values ('E17', 'Mlle', 'Bakir', 'Fatima', '6/4/1983')
	insert into Employés values ('E18', 'Mme', 'Jalal', 'Samira', '24/3/1984')
	go

	select * from Employés
	go

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---
---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

/*																Procédures stockées
																-------------------																			  

	• Les procédures stockées permettent de disposer de méthodes encapsulées au niveau du serveur qui prendront 
	  en charge les transactions sur les données.

	• Différents avantages peuvent être tirés de cette approche :

		♦ Le code transactionnel n’est pas disséminé dans les différents composants logiciels manipulant les 
		  données mais centralisé sur le serveur. Cette approche permet la réutilisation de code. 

		♦ Elle respecte les normes de développement par couche : la couche transactionnelle est isolée des 
		  autres couches (métier, interface). Il est ainsi envisageable de confier le développement de cette 
		  couche à des spécialistes sous le contrôle du DBA (Data Base Administrator).

		♦ La mise au point est facilitée : une fois les tests unitaires des procédures stockées réalisés et leur 
		  conformité aux règles de gestion énoncées vérifiées, ces dernières peuvent être utilisées en toute confiance.

		♦ Cette approche apporte un niveau de sécurité supplémentaire. 

	 • Types :

		♦ SP_

		♦ XP_

		♦ Locales : Elles sont définies par l’utilisateur et sont stockées dans les bases de données utilisateur.

	• Queleques procédures systèmes utile

		♦ sp_help

		♦ sp_helpdb
																																							  */
---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---
---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Exemple 1 : Procédure sans paramètres

	-- Création : Une procédure est crée au niveau d'une base de données (NomDeLaBase \ Programmabilité \ ...)

	if (object_id('ps_1', 'P') is not null)
			drop procedure ps_1
	go

	create procedure ps_1 as
		begin	-- N'est pas obligatoire
			select	*
			from	Employés
		end
	
	-- Appel :
	
	exec ps_1

	-- Modification

	alter procedure ps_1 
	as	begin
			select	Numéro,
					Courtoisie + '. ' + Nom + ' ' + Prénom as [Nom Complet],
					datediff(year, DateNaissance, getdate()) as Age
			from	Employés
		end
	go

	exec ps_1
	go

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Exemple 2 : Procédure avec paramètres -1-

	-- Rechercher un employé par numéro

	create procedure ps_2(@numéro varchar(3))	-- Pas de declare, les paramètres d'une procédure ne sont que des paramètres formels
	as	begin
			select	*
			from	Employés
			where	Numéro = @numéro
		end
	go

	exec ps_2 'E1'	-- Passage par position
	go

	exec ps_2 @Numéro = 'E11'	-- Passage par référence nommée
	go

		-- Il n'est pas possible d'utiliser, à la fois, un passage par position et par référence nommée

	-- Amélioration :
	
	alter procedure ps_2 (@numéro varchar(3))
	as	begin
			set nocount on
			
			if not exists (select	*
						   from		Employés
						   where	Numéro = @numéro)
				print 'L''employé ' + @numéro + ' n''existe pas.'
			else
				select	*
				from	Employés
				where	Numéro = @numéro
		end
	go

	exec ps_2 @Numéro = 'E11'
	go

	exec ps_2 @Numéro = 'E35'
	go

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---
	
-- Exemple 3 : Procédure avec paramètres -2-

	-- Rechercher les employés nés entre 2 dates

	create procedure ps_3(@date1 datetime, @date2 datetime)
	as	begin
			select	*
			from	Employés
			where	(DateNaissance between @date1 and @date2)
		end
	go

	exec ps_3 @date1 = '2/4/1970', @date2 = '22/5/1975'
	go

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Exemple 4 : Procédure avec paramètres en sortie -1-

	-- Somme de 2 réels :

	create procedure ps_4(@a float, @b float, @somme float output)
	as	begin
			set @somme = @a + @b
		end
	go

	-- Utilisation :

	declare @s float

	--exec ps_4 12.3, -4, @s output
	exec ps_4 @a = 12.3, 
			  @b = -4, 
			  @somme = @s output

	print 'La somme est : ' + cast(@s as varchar)
	go

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Exemple 5 : 

	-- Sélection dynamique :

	use VolAvion
	go

	create procedure ps_5(@table varchar(50))
	as	begin	
			execute ('select * from ' + @table)
		end
	go

	exec ps_5 'Pilote'
	go

	exec ps_5 'Vol'
	go
	
	drop procedure ps_5
	go

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---
---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

/*																Fonctions																					  
																---------

	• Un fonction est un script nommé qui retourne quelque chose (?)

	• Il existe deux types de fonction :

		♦ Le premier type permet de renvoyer une valeur scalaire (int, float, varchar, ...)
		♦ Le deuxième type permet de renvoyer une table.
																																							  */
---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

	use SGBD2_Chapitre3
	
-- Exemple 1 : Fonction scalaire sans paramètre

	if (object_id('f_1', 'FN') is not null)	-- FN : Pour les fonctions scalaires
		drop function f_1
	go

	create function f_1()	-- Les parnthèses sont obligatoires même si la fonction n'a pas de paramètres
		returns int
	as	begin
			return @@langid
		end
	go

	-- Utilisation :

	print dbo.f_1() -- Il est necessaire de préciser le schéma
	
	-- Ou : 

	declare @numéroLangue int

	set @numéroLangue = dbo.f_1()

	print @numéroLangue
	go

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Exemple 2 : Fonction scalaire avec paramètre -1-

	-- Factoriel d'un entier :

	create function f_2(@n int)
		returns int
	as	begin
 			declare @factoriel int,
					@i int

			set @factoriel = 1
			set @i = 2

			while (@i <= @n)
				begin
					set @factoriel *= @i

					set @i = @i + 1
				end

			return @factoriel
		end
	go
	
	-- Utilisation :

	declare @n int
	declare @factoriel int

	set @n = 4
 
	set @factoriel = dbo.f_2(@N)

	print 'La factoriel de ' + cast(@n as varchar) + ' est ' + cast(@factoriel as varchar)
	
	-- Récursivité :
	
	alter function f_2(@n int)
		returns int
	as	begin
			if (@n = 0)	return 1	-- Point terminal
			return (@n * dbo.f_2(@n - 1))
		end
	go

	print dbo.f_2(5)
	go

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Exemple 3 : Fonction sans paramètres retournant une table -1-

	-- Requête directe - Table en ligne

	if (object_id('f_3', 'IF') is not null)	-- IF : Pour les fonctions retournant une table
		drop function f_3
	go 

	create function f_3()
		returns table	
	as	return	select	*
				from	Employés
	go

	select * from dbo.f_3()
	go
	
	select count(*) from dbo.f_3()
	go

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Exemple 4 : Fonction sans paramètres retournant une table -2-

	-- Construction et alimentation d'une table - Table multi instruction

	create function f_4()
		returns @multiplesDe5InfA100 table(Nombre int)	-- la portée de cette table dépend de la fonction
	as begin
			declare @i int

			set @i = 0

			while(@i <= 100)
				begin
					insert into @multiplesDe5InfA100 values (@i)
						
					set @i = @i + 5
				end

			return	
		end
	go

	select Nombre from dbo.f_4()
	go

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Exemple 5 : Fonction avec paramètres retournant une table -1-

	create function f_5(@idLangue int) 
		returns table
	as	return	select	*
				from	sys.syslanguages
				where	langid = @idLangue
	go

	select * from dbo.f_5(@@langid) 
	go

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Exemple 6 : Fonction avec paramètres retournant une table -2-

	create function f_6(@date1 datetime, @date2 datetime)
		returns table
	as return	select	*
				from	Employés
				where	(DateNaissance between @date1 and @date2)
	go

	select	*
	from	dbo.f_6('2/4/1970', '22/5/1975')
	go

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---
---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---
 			      
		------------------------------------------------------------------------------------------------------------------
 		------------------------------------------------------------------------------------------------------------------
		--									CHAPITRE 8 : TRANSACTIONS ET GESTION DES EXCEPTIONS							--
		------------------------------------------------------------------------------------------------------------------
 		------------------------------------------------------------------------------------------------------------------

/*
	- Références :

		- Transactions :
			https://msdn.microsoft.com/fr-fr/library/ms175523%28v=sql.105%29.aspx
			https://msdn.microsoft.com/fr-fr/library/ms174377%28v=sql.105%29.aspx

		- Exceptions :
			https://msdn.microsoft.com/fr-fr/library/ms175976%28v=sql.105%29.aspx
			https://msdn.microsoft.com/fr-fr/library/ms179296%28v=sql.105%29.aspx
*/

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---
---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Base de données :

	use master 
	go

	if exists (select	*
			   from		sys.databases
			   where	name = 'SGBD1_Chapitre8')
		drop database SGBD1_Chapitre8
	go

	create database SGBD1_Chapitre8
	go

	use SGBD1_Chapitre8
	go

	if exists (select	*
			   from		sys.tables
			   where	name = 'Personnes')
		drop table Personnes
	go
	create table Personnes(
		Numéro		int
					constraint PK_Personnes primary key,
		NomComplet	varchar(60))
	go

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---
---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Exemple 1 : 

	-- Problème : Violation des contraintes :
	
		insert into Personnes values ('1', 'Jaber Mohamed Reda')	
		insert into Personnes values ('2', 'Mansouri Mohssen')
		insert into Personnes values ('2', 'Colombos Neven')		-- Problème
		insert into Personnes values ('A', 'Monsef Chadia')			-- Problème
		insert into Personnes values ('5', 'Salmi Wahid')
		go

		select * from Personnes -- Seuls deux enregistrements ont été insérés, les autres sont rejetés
		go

		delete Personnes
		go

	-- Solution : Transactions 
	
		begin tran -- Ou begin transaction
		
		set nocount on
		
		declare @problème int

		insert into Personnes values ('1', 'Jaber Mohamed Reda')
		if (@@error <> 0)	set @problème = 1

		insert into Personnes values ('2', 'Mansouri Mohssen')
		if (@@error <> 0)	set @problème = 1

		insert into Personnes values ('2', 'Colombos Neven')	-- Problème
		if (@@error <> 0)	set @problème = 1

		insert into Personnes values ('A', 'Monsef Chadia')		-- Problème
		if (@@error <> 0)	set @problème = 1

		insert into Personnes values ('5', 'Salmi Wahid')
		if (@@error <> 0)	set @problème = 1

		if (@problème = 1)	rollback tran	-- Annuler la transaction
		else				commit tran		-- Terminer la transaction : Très importante
		go

		select * from Personnes
		go

	-- Amélioration : Exemple 3

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---
---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Exemple 2 : 

	-- Problème : Division par 0

		declare @a real,
				@b real,
				@quotient real

		set @a = 2.3
		set @b = 0
		set @quotient = @a/@b

		print '--- Résultat ---'
		print @quotient

	-- Solution : Gestion des exceptions TRY ... CATCH

		begin try
			declare @a real,
					@b real,
					@quotient real

			set @a = 2.3
			set @b = 0
			set @quotient = @a/@b

			print '--- Résultat ---'
			print @quotient
		end try
		begin catch
			print 'Attention : Divison par 0'
		end catch

	-- Amélioration : Récupérer des infos. sur l'erreur

		begin try
			declare @a real,
					@b real,
					@quotient real

			set @a = 2.3
			set @b = 0
			set @quotient = @a/@b

			print '--- Résultat ---'
			print @quotient
		end try
		begin catch
			print 'Numéro = ' + cast(error_number() as varchar)
			print 'Gravité = ' + cast(error_severity() as varchar)
			print 'Ligne = ' + cast(error_line() as varchar)
			print 'Message = ' + error_message()
		end catch

	-- sys.messages contient la liste des erreurs prédéfinies. Il est possible d'ajouter des messages utilisateur
	
		select * from sys.messages

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---
---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---

-- Exemple 3 :

	begin tran
	
	set nocount on

	begin try
		insert into Personnes values ('1', 'Jaber Mohamed Reda')
		insert into Personnes values ('2', 'Mansouri Mohssen')
		insert into Personnes values ('2', 'Colombos Neven')	-- Problème
		insert into Personnes values ('A', 'Monsef Chadia')		-- Problème
		insert into Personnes values ('5', 'Salmi Wahid')

		print 'L''insertion a été effectué avec success.'

		commit tran -- Très importante
	end try
	begin catch
		print 'L''insertion a généré des erreurs. Aucun enregistrement n''a été inséré. Veuillez corriger les erreurs et réessayer.'

		print 'Ligne = ' + cast(error_line() as varchar)
		print 'Message = ' + error_message()

		rollback tran
	end catch
	go

	select * from Personnes

---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---
---**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**-.__.-**---
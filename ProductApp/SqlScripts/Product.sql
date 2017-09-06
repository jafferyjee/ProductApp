CREATE TABLE Product (
	ProductId int NOT NULL 
                IDENTITY(1,1) 
	              PRIMARY KEY NONCLUSTERED,
	ProductName varchar(150) NOT NULL,
	IntroductionDate datetime NOT NULL,
	Url varchar(255) NOT NULL,
	Price money NOT NULL
)
GO

SET IDENTITY_INSERT Product ON;
INSERT Product (ProductId, ProductName, IntroductionDate, Url, Price) 
VALUES (1, 'Extending Bootstrap with CSS, JavaScript and jQuery', '2015-06-11', 'http://bit.ly/1SNzc0i', 29.0000);
INSERT Product (ProductId, ProductName, IntroductionDate, Url, Price) 
VALUES (2, 'Build your own Bootstrap Business Application Template in MVC', '2015-01-29', 'http://bit.ly/1I8ZqZg', 29.0000);
INSERT Product (ProductId, ProductName, IntroductionDate, Url, Price) 
VALUES (3, 'Building Mobile Web Sites Using Web Forms, Bootstrap, and HTML5', '2014-08-28', 'http://bit.ly/1J2dcrj', 29.0000);
INSERT Product (ProductId, ProductName, IntroductionDate, Url, Price) 
VALUES (4, 'How to Start and Run A Consulting Business', '2013-09-12', 'http://bit.ly/1L8kOwd', 29.0000);
INSERT Product (ProductId, ProductName, IntroductionDate, Url, Price) 
VALUES (5, 'The Many Approaches to XML Processing in .NET Applications', '2013-07-22', 'http://bit.ly/1DBfUqd', 29.0000);
INSERT Product (ProductId, ProductName, IntroductionDate, Url, Price) 
VALUES (6, 'WPF for the Business Programmer', '2009-06-12', 'http://bit.ly/1UF858z', 29.0000);
INSERT Product (ProductId, ProductName, IntroductionDate, Url, Price) 
VALUES (7, 'WPF for the Visual Basic Programmer - Part 1', '2013-12-16', 'http://bit.ly/1uFxS7C', 29.0000);
INSERT Product (ProductId, ProductName, IntroductionDate, Url, Price) 
VALUES (8, 'WPF for the Visual Basic Programmer - Part 2', '2014-02-18', 'http://bit.ly/1MjQ9NG', 29.0000);
SET IDENTITY_INSERT Product OFF;


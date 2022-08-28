SERVER SETUP PROCESS
================================
1. Create database using MySQL using the 2 scripts 
   "CreateTables.sql" and "InsertData.sql"

2. Enter password for your SQL Database in application.properties
   Go to server1 > src > main > resources > application.properties
   Edit line 3 "spring.datasource.password="
   Add password behind

3. Run src > main > java > com > example > demo > DemoApplication.java
   to set up server

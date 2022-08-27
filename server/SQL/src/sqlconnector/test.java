package sqlconnector;

import java.sql.*;
import java.io.*;
import java.util.*;

public class test {
    public static void main(String[] args) {
        try (
           // Step 1: Construct a database 'Connection' object called 'conn'
           Connection conn = DriverManager.getConnection(
                 "jdbc:mysql://127.0.0.1:3306/servicefinder",
                 "root", "0000");   // For MySQL only
                 // The format is: "jdbc:mysql://hostname:port/databaseName", "username", "password"
   
           // Step 2: Construct a 'Statement' object called 'stmt' inside the Connection created
           Statement stmt = conn.createStatement();
        ) {
         // String sqlDelete = "delete from solution where title = 'Banking - Transaction Banking'";
         // System.out.println("The SQL statement is: " + sqlDelete + "\n");  // Echo for debugging
         // int countDeleted = stmt.executeUpdate(sqlDelete);
         // System.out.println(countDeleted + " records deleted.\n");

         

         //   try{
         //      Scanner sc = new Scanner(new File("solution.txt"));

         //       String currentLine = sc.nextLine();

         //       sc.useDelimiter(",|\r\n|\n");
         //       while (sc.hasNext()) {
         //          int sid = Integer.parseInt(sc.next());
         //          String title = sc.next();

         //          String sqlInsert = "insert into solution values (" + sid + ", '" + title + "')";
         //          System.out.println("The SQL statement is: " + sqlInsert + "\n");  // Echo for debugging
               
         //          int countInserted = stmt.executeUpdate(sqlInsert);
               
         //          System.out.println(countInserted + " records inserted.\n");
         //       }


         //   } catch (Exception e) {

         //   }
         } catch(SQLException ex) {
            ex.printStackTrace();
         }  // Step 5: Close conn and stmt - Done automatically by try-with-resources (JDK 7)
      }
   }


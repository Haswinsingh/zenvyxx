import java.io.*;
import java.util.*;
interface A {
    public void display();	
}
public class StringDemo implements A {
    public void display() {
        String s = "Sri Sairam Engineering College - Department of CSE";
        System.out.println("String length = " + s.length());
        System.out.println("Character at 3rd position = " + s.charAt(3));
        System.out.println("Substring " + s.substring(3));
        System.out.println("Substring = " + s.substring(2, 5));
        String s1 = "Sairam";
        String s2 = "II CSE C";
        System.out.println("Concatenated string = " + s1.concat(s2));
        String s4 = "Learn Share Learn";
        System.out.println("Index of Share " + s4.indexOf("Share"));
        System.out.println("Index of a = " + s4.indexOf('a', 3));
        Boolean out = "Sairam".equals("Sairam");
        System.out.println("Checking Equality " + out);
        out = "sairam".equals("Sairam");
        System.out.println("Checking Equality " + out);
        out = "saiRaM".equalsIgnoreCase("sairam");
        System.out.println("Checking Equality " + out);
        int out1 = s1.compareTo(s2);
        System.out.println("The difference between ASCII value is = " + out1);
        String word1 = "CSE C II Year";
        System.out.println("Changing to lower Case " + word1.toLowerCase());
        String word2 = "II Year cse C";
        System.out.println("Changing to UPPER Case " + word2.toUpperCase());
        String word4 = " Learn Share Learn ";
        System.out.println("Trim the word " + word4.trim());
        String str1 = "Sairam CSE Dept";
        System.out.println("Original String " + str1);
        String str2 = str1.replace('C', 'I');
        System.out.println("Replaced C with I -> " + str2);  
  }
    public static void main(String[] args) {
        A obj = new StringDemo();
        obj.display();  
  }		
}

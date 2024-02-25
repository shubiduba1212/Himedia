package project.javachip.attendancemanagement.run;

import project.javachip.attendancemanagement.menu.SystemMenu;

import java.sql.Connection;

import static project.javachip.attendancemanagement.common.JDBCTemplate.getConnection;

public class Application {
  public static void main(String[] args) {
    Connection con = getConnection();
    System.out.println(con);

//    SystemMenu systemMenu = new SystemMenu();
//
//    systemMenu.loginMenu();

  }
}

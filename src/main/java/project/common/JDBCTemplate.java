package project.common;

import java.io.FileReader;
import java.io.IOException;
import java.sql.*;
import java.util.Properties;

public class JDBCTemplate {

  //config에 있는 connection-info.properties에 있는 정보로 데이터베이스 연결
  public static Connection getConnection() {

    //DB접속을 위한 Connection instance를 만들기 위한 레퍼런스 변수 선언
    Connection con = null;

    //Properties 선언 및 초기화
    Properties prop = new Properties();

    try {

      //DB 접속 정보 읽어오기
      prop.load(new FileReader("src/main/java/project/config/connection-info.properties"));

      String driver = prop.getProperty("driver"); //driver 속성값 저장
      String url = prop.getProperty("url"); //url 속성값 저장

      //사용할 Driver 등록
      Class.forName(driver);

      con = DriverManager.getConnection(url,prop);

      System.out.println("connection = " + con);

    } catch (IOException e) {
      throw new RuntimeException(e);
    } catch (SQLException e) {
      throw new RuntimeException(e);
    } catch (ClassNotFoundException e) {
      throw new RuntimeException(e);
    }

    return con;
  }

  //Connection 자원 반환
  public static void close(Connection con) {
    try {
      if (con != null && !con.isClosed()) {
        con.close();
      }
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
  }

  //Statement 자원 반환
  public static void close(Statement stmt) {
    try {
      if (stmt != null && !stmt.isClosed()) {
        stmt.close();
      }
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
  }

  //ResultSet 자원 반환
  public static void close(ResultSet rset) {
    try {
      if (rset != null && !rset.isClosed()) {
        rset.close();
      }
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
  }
}

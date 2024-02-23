package project.dao;

import project.dto.MenuDTO;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

import static project.common.JDBCTemplate.close;

public class MenuDAO {

  private Properties prop = new Properties();

  public MenuDAO(){
    try {
      prop.loadFromXML(new FileInputStream("src/main/java/project/mapper/menu-query.xml"));
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  public List<Map<Integer, String>> selectAllCategory(Connection con) {
    /* 쿼리문을 저장하고 실행하는 기능을 하는 용도의 인터페이스 */
    /* Connection의 createStatement()를 이용한 Statement 인스턴스 생성 */
    PreparedStatement pstmt = null;

    /* select 결과집합을 받아 올 용도의 인터페이스 */
    ResultSet rset = null;

    //카테고리 리스트를 저장할 변수 선언 및 초기화
    List<Map<Integer, String>> categoryList = null;

    String query = prop.getProperty("selectAllCategoryList");

    try {
      pstmt = con.prepareStatement(query);

      rset = pstmt.executeQuery();

      categoryList = new ArrayList<>();

      while (rset.next()) {
        /* next() : ResultSet의 커서 위치를 하나 내리면서 행이 존재하면 true, 존재하지 않으면 false를 반환 */
        Map<Integer, String> category = new HashMap<>();
        category.put(rset.getInt("CATEGORY_CODE"), rset.getString("CATEGORY_NAME"));

        categoryList.add(category);
      }
    } catch (SQLException e) {
      throw new RuntimeException(e);
    } finally {

      close(rset);
      close(pstmt);
    }

    return categoryList;
  }

  public int selectLastCategoryCode(Connection con) {
    PreparedStatement pstmt = null;
    ResultSet rset = null;

    int maxCategoryCode = 0;
    int result = 0;

    String query = prop.getProperty("selectLastCategoryCode");

    try {
      pstmt = con.prepareStatement(query);
      rset = pstmt.executeQuery();
      System.out.println("query = " + query);
      System.out.println("pstmt = " + pstmt);
      System.out.println("rset = " + rset);
      if (rset.next()) {
        /* next() : ResultSet의 커서 위치를 하나 내리면서 행이 존재하면 true, 존재하지 않으면 false를 반환 */

        maxCategoryCode = rset.getInt("MAX(CATEGORY_CODE)");
        System.out.println("rset.next()의 값 : " + rset.next());
      }

    } catch (SQLException e) {
      throw new RuntimeException(e);
    } finally {
      close(pstmt);
      close(rset);
    }

    return maxCategoryCode;
  }

  public int insertNewCategory(Connection con, MenuDTO newCategory) {

    PreparedStatement pstmt = null;
    int result = 0;

    String query = prop.getProperty("insertCategory");
    try {
      pstmt = con.prepareStatement(query);

      pstmt.setInt(1, newCategory.getCategoryCode());
      pstmt.setString(2, newCategory.getCategoryName());
      pstmt.setInt(3, newCategory.getRefCategoryCode());

      result = pstmt.executeUpdate();
      //executeUpdate()
      //Executes the SQL statement in this PreparedStatement object,
      //which must be an SQL Data Manipulation Language (DML) statement,
      // such as INSERT, UPDATE or DELETE;
      // or an SQL statement that returns nothing, such as a DDL statement.
      //Returns:
      //either (1) the row count for SQL Data Manipulation Language (DML) statements or (2)
      // 0 for SQL statements that return nothing

    } catch (SQLException e) {
      throw new RuntimeException(e);
    } finally {
      close(pstmt);
    }
    return result;
  }

  public int deleteCategory(Connection con, String deletedCategoryName) {
    PreparedStatement pstmt = null;

    int result = 0;
    String query = prop.getProperty("deleteCategory");

    try {
      pstmt = con.prepareStatement(query);
      pstmt.setString(1, deletedCategoryName);

      result = pstmt.executeUpdate();

    } catch (SQLException e) {
      throw new RuntimeException(e);
    } finally {
      close(pstmt);
    }
    return result;
  }
}

package project.run;

import project.dao.MenuDAO;
import project.dto.MenuDTO;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Scanner;

import static project.common.JDBCTemplate.getConnection;

public class Application {

  public static void main(String[] args) {

    Connection con = getConnection();

    MenuDAO registerDAO = new MenuDAO();

    /* 카테고리의 마지막 번호 조회 */
    int maxCategoryCode = registerDAO.selectLastCategoryCode(con);
    System.out.println("maxCategoryCode = " + maxCategoryCode);

    /* 카테고리 조회 */
    List<Map<Integer, String>> categoryList = registerDAO.selectAllCategory(con);
    for (Map<Integer, String> category : categoryList) {
      System.out.println(category);
    }

//    while (true) {
//
//    }

    /* 신규 카테고리 추가 */
    int categoryCode = maxCategoryCode + 1;
    Scanner sc = new Scanner(System.in);

    System.out.print("등록한 신규 카테고리의 이름을 입력하세요 : ");
    String categoryName = sc.nextLine();
    System.out.print("등록한 신규 카테고리의 참조 코드를 입력하세요 : ");
    int refCategoryCode = sc.nextInt();

    MenuDTO newCategory = new MenuDTO(categoryCode, categoryName, refCategoryCode);

    int result = registerDAO.insertNewCategory(con, newCategory);

    if (result > 0) {
      System.out.println("신규 카테고리 등록 성공\uD83C\uDF8A");
    } else {
      System.out.println("신규 카테고리 등록 실패🙅‍♀️🙅‍♂️");
    }

    /* 카테고리 삭제 */
//    Scanner sc2 = new Scanner(System.in);
//
//    System.out.print("삭제할 카테고리 이름을 입력하세요 : ");
//    String deletedCategoryName = sc2.nextLine();
//
//    int result2 = registerDAO.deleteCategory(con, deletedCategoryName);
//
//    if (result2 > 0) {
//      System.out.println("카테고리 : " + deletedCategoryName + " 삭제 성공\\uD83C\\uDF8A");
//    } else {
//      System.out.println("카테고리 : "+ deletedCategoryName + " 삭제 실패‍️🙅‍🙅‍♂️");
//    }


  }
}


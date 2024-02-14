package com.ohgiraffers.test.view;

import com.ohgiraffers.test.controller.BookManager;
import com.ohgiraffers.test.model.dto.BookDTO;

import java.util.Scanner;

public class BookMenu {

  Scanner sc = new Scanner(System.in);
  BookManager bm = new BookManager();

  //Book

  //기본생성자
  public BookMenu() {
  }

  //menu 메소드 - 도서관리 프로그램에 해당하는 메인 메뉴 출력
  public void menu() {
    //반복 출력되게 한다.
    //1. 도서 추가하기
    //2. 도서 삭제하기
    //3. 도서 검색하기
    //4. 도서 정보 출력하기
    //5. 도서목록 전체 출력하기
    //6. 카테고리 오름차순 정렬하기
    //7. 카테고리 내림차순 정렬하기
    //8.
    //9. 프로그램 종료
    while (true) {
      System.out.println();
      System.out.println("=========== 도서관리 프로그램 ==========");
      System.out.println("1. 도서 추가하기\n2. 도서 삭제하기\n3. 도서 검색하기\n4. 도서 정보 출력하기\n5. 도서목록 전체 출력하기\n6. 카테고리 오름차순 정렬하기\n7. 카테고리 내림차순 정렬하기");
      System.out.print("해당하는 메뉴를 선택하세요 : ");
      int menuNum = sc.nextInt(); // 선택한 번호 입력값 저장
      switch (menuNum) {
        case 1:
          bm.addBook(this.inputBook());
          break;
        case 2:
          System.out.print("삭제하실 도서 번호를 입력해주세요 : ");
          int bNum = sc.nextInt();
          bm.deleteBook(bNum);
          break;
        case 3:
          System.out.print("검색할 도서 제목을 입력해주세요 : ");
          String bTitle = sc.next();
          bm.searchBook(bTitle);
          break;
        case 4:
          System.out.print("도서 정보를 출력할 도서 번호를 입력해주세요 : ");
          int bNum2 = sc.nextInt();
          bm.printBook(bNum2);
          break;
        case 5:
          bm.displayAll();
          break;
        case 6:
          System.out.print("도서를 해당 카테고리로 정렬합니다. : ");
          int bNum3 = sc.nextInt();
          bm.sortedBookList(bNum3);
          break;
      }

      if (menuNum == 9) {

      }
    }
  }

  //BookDTO 객체의 필드값을 키보드로 입력 받아 초기화하고 객체 리턴
  public BookDTO inputBook() {

    BookDTO bookDTO = new BookDTO();

    System.out.print("도서 분류코드를 입력해주세요 : ");
    bookDTO.setCategory(sc.nextInt());

    System.out.print("도서 제목을 입력해주세요 : ");
    bookDTO.setTitle(sc.next());

    System.out.print("도서 저자를 입력해주세요 : ");
    bookDTO.setAuthor(sc.next());

    return bookDTO;
  }



  //검색할 도서제목을 키보드로 입력 받아 리턴
  public String inputBookTitle() {
    System.out.println("검색할 도서제목을 입력해주세요 : ");
    String title = sc.next();

    return title;
  }

}

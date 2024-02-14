package com.ohgiraffers.test.controller;

import com.ohgiraffers.test.model.dto.BookDTO;

import java.util.ArrayList;

public class BookManager {

  //기본 생성자 - ArrayList<BookDTO> 인스턴스 생성

  ArrayList<BookDTO> bookList = new ArrayList<BookDTO>();

  // 전달받은 BookDTO 객체를 생성자시 선언한 ArrayList객체에 추가
  public void addBook(BookDTO book) {
    this.bookList.add(book);
  }

  //전달받은 도서 번호로 ArrayList 안에 있는 정보 삭제
  public void deleteBook(int index) {
    this.bookList.remove(index);
  }

  //전달받은 도서 제목으로 도서를 검색하고 결과값 반환
  public int searchBook(String bTitle) {
    System.out.println(this.bookList.contains(bTitle));
    return this.bookList.contains(bTitle) ? 1 : -1;
  }

  //전달받은 인덱스에 있는 도서정보 출력
  public void printBook(int index) {
    System.out.println(this.bookList.get(index));
  }

  //도서 목록 전체 출력
  public void displayAll() {
    System.out.println(this.bookList.size());
    System.out.println(this.bookList);
  }

  // 전달받은 번호를 기준으로 해당 카테고리순으로 정렬해서 ArrayList<BookDTO>에 담아서 리턴
  public ArrayList<BookDTO> sortedBookList(int select) {
    //정렬 관련 메소드 호출 필요
    ArrayList<BookDTO> assignedArr = new ArrayList<>();

    return assignedArr;
  }

  // 전달받은 ArrayList<BookDTO>를 향상된 for문을 이용하여 출력
  public void printBookList(ArrayList<BookDTO> br) {
    for (BookDTO book : br) {
      System.out.println(br);
    }
  }

}

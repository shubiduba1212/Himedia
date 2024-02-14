package com.ohgiraffers.test.run;

import com.ohgiraffers.hw2.model.comparator.AscCategory;
import com.ohgiraffers.hw2.model.comparator.DescCategory;
import com.ohgiraffers.test.model.dto.BookDTO;

import java.util.ArrayList;
import java.util.List;

public class ApplicationTest {
  public static void main(String[] args) {
    List<BookDTO> bookList = new ArrayList<>();

    bookList.add(new BookDTO(2, "목민심서", "정약용"));
    bookList.add(new BookDTO(1, "홍길동전", "허균"));
    bookList.add(new BookDTO(2, "명심보감", "정약용"));
    bookList.add(new BookDTO(3, "동의보감", "허준"));
    bookList.add(new BookDTO(1, "춘향전", "허균"));
    bookList.add(new BookDTO(3, "해리포터", "조앤K롤링"));
    bookList.add(new BookDTO(4, "최부자집", "최부자"));
    bookList.add(new BookDTO(1, "난중일기", "이순신"));
    bookList.add(new BookDTO(5, "삼국유사", "일연"));
    bookList.add(new BookDTO(4, "삼국사기", "김부식"));
    bookList.add(new BookDTO(1, "징비록", "류성룡"));

    for (BookDTO bookDTO : bookList) {
      System.out.println(bookDTO);
    }

    bookList.sort(new AscCategory());

    System.out.println("=========== 카테고리 오름차순 정렬 ==============");
    for (BookDTO bookDTO : bookList) {
      System.out.println(bookDTO);
    }

    bookList.sort(new DescCategory());
    System.out.println("=========== 카테고리 내림차순 정렬 ==============");
    for (BookDTO bookDTO : bookList) {
      System.out.println(bookDTO);
    }

  }
}

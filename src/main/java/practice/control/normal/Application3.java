package practice.control.normal;

import java.util.Scanner;

public class Application3 {

  public static void main(String[] args) {
    /* 문자열을 입력 받아서 문자열의 각 인덱스별로 한 글자씩 출력하세요
     *
     * 참고) 문자열의 길이는 String 클래스의 length() 메소드를 이용할 수 있습니다.
     *
     * -- 입력 예시 --
     * 문자열을 입력하세요 : apple
     *
     * -- 출력 예시 --
     * 0 : a
     * 1 : p
     * 2 : p
     * 3 : l
     * 4 : e
     * */


    Scanner sc = new Scanner(System.in);//문자열을 입력받을 Scanner 객체 선언
    System.out.print("문자열을 입력하세요 : ");
    String str = sc.nextLine(); // 입력받은 문자열을 저장할 변수 선언 // good

    // 문자열의 길이값 확인하는 출력구문
    System.out.println("문자열 길이 : " + str.length()); // 4

    //for문 사용
    for (int i = 0; i < str.length(); i++) {
      // 문자열의 길이 = str.length() 를 초과하기 전까지 반복한다. // 0 1 2 3
      System.out.println(i + " : " + str.charAt(i));

      //str.charAt(i)
      //str = good;
      //str.charAt(0) : g
      //str.charAt(1) : o
      //str.charAt(2) : o
      //str.charAt(3) : d
    }

    //while문 사용
    int i = 0;//while 반복문에 사용할 초기값 설정
    while (i < str.length()) {// i가 문자열의 길이 = str.length() 를 초과하기 전까지 반복한다.
      System.out.println(i + " : " + str.charAt(i));

      i++;
    }
  }
}

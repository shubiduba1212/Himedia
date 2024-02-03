package practice.control.basic;

import java.util.Scanner;

public class Application3 {

  public static void main(String[] args) {
    /* 정수 한 개를 입력 받고, 1부터 입력 받은 정수까지의 합을 계산해서 출력하세요
     *
     * -- 입력 예시 --
     * 정수를 입력하세요 : 5
     *
     * -- 출력 예시 --
     * 1부터 5까지의 합 : 15
     *
     * */

    //입력값을 받을 scanner클래스 객체로 선언
    Scanner sc = new Scanner(System.in);
    System.out.print("정수를 입력하세요 : ");
    int num = sc.nextInt(); // 콘솔창에서 입력받은 값 저장

    //합계 초기값 설정
    int sum = 0;

    //반복문
    for (int i = 1; i <= num; i++) {
      sum += i; // i가 입력한 정수 num보다 큰 값이 될때까지 반복
      System.out.println(i + ":" + sum);
    }
    System.out.println("1부터 " + num + "까지의 합 : " + sum);

    //while
    //초기값 설정
    int num2 = 1;

    //1부터 입력한 정수까지의 합을 저장할 변수 선언
    int sum2 = 0;

    //while문 사용
    while (num2 <= num) {//num2가 입력한 정수 num보다 큰 값이 될때까지 반복
      sum2 += num2;

      System.out.println("whlie : 1부터 " + num2 + "까지의 합 : " + sum2);
      num2++; //num2를 1씩 증가
    }
    System.out.println("whlie : 1부터 " + num2 + "까지의 합 : " + sum2);
  }
}

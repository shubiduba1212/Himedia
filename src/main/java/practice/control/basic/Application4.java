package practice.control.basic;

import java.util.Scanner;

public class Application4 {

  public static void main(String[] args) {

    /* 1부터 입력받은 정수까지의 짝수의 합을 구하세요
     *
     * -- 입력 예시 --
     * 정수를 입력하세요 : 10
     *
     * -- 출력 예시 --
     * 1부터 10까지 짝수의 합 : 30
     * */

    //입력값을 받을 scanner클래스 객체로 선언
    Scanner sc = new Scanner(System.in);
    System.out.print("정수를 입력하세요 : ");
    int num = sc.nextInt(); // 콘솔창에서 입력받은 값 저장

    int sum = 0; //짝수의 합을 저장할 변수 초기화 설정
    for (int i = 1; i <= num; i++) {//i가 입력한 정수 num보다 큰 값일때까지 반복

      //i가 짝수인지 확인하는 조건문
      if (i % 2 == 0) { // 2로 i를 나눈 나머지가 0이라면 짝수
        sum += i;
        System.out.println("짝수에 해당하는 i : " + i + "이고 1부터 " + num + "까지 짝수의 합 : " + sum);
      }
    }
    System.out.println("1부터 " + num + "까지 짝수의 합 : " + sum);


    //while
    int num2 = 1; //초기값 설정

    int sum2 = 0; //짝수의 합을 저장할 변수 초기화

    //while문
    while (num2 <= num) { //num2가 입력한 정수 num보다 큰 값일때까지 반복

      //i가 짝수인지 확인하는 조건문
      if (num2 % 2 == 0) { //2로 i를 나눈 나머지가 0이라면 짝수
        sum2 += num2;
        System.out.println(num2 + ":" + sum2);
      }
      num2++;
    }
    System.out.println("while : 1부터 " + num2 + "까지의 합 : " + sum2);
  }
}

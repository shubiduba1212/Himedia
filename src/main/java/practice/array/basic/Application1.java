package practice.array.basic;

import java.util.Scanner;

public class Application1 {
  public static void main(String[] args) {

    /* 길이가 10인 정수형 배열을 선언 및 할당한 뒤
     * 각 인덱스에 차례대로 1부터 10까지 값을 넣고 출력하세요
     * */

    //길이가 10인 정수형 배열 선언
    int[] iarr = new int[10];
    int iarr2[]  = new int[10];

    for (int i = 0; i < iarr.length; i++) {
      iarr[i] = i + 1;
      System.out.println("iarr 배열의 "+i+"번째 인덱스의 값은 : "+iarr[i]);
    }

    /* 길이가 5인 String 배열을 선언하고
     * "딸기", "바나나", "복숭아", "키위", "사과" 로 초기화를 하고
     * 스캐너로 0부터 4까지의 정수를 입력 받아
     * 해당 정수의 인덱스에 있는 과일을 출력하세요
     *
     * 단, 배열의 인덱스 범위를 벗어나는 경우 "준비된 과일이 없습니다." 를 출력하세요
     *
     * -- 입력 예시 --
     * 0부터 4까지의 정수를 입력하세요 : 2
     *
     * -- 출력 예시 --
     * 복숭아
     *
     * -- 입력 예시 --
     * 0부터 4까지의 정수를 입력하세요 : 5
     *
     * -- 출력 예시 --
     * 준비된 과일이 없습니다.
     * */

    //길이가 5인 String 배열을 선언 하고 "딸기", "바나나", "복숭아", "키위", "사과" 로 초기화
    String[] fruits = new String[]{"딸기", "바나나", "복숭아", "키위", "사과"};
    String[] fruits2 = {"딸기", "바나나", "복숭아", "키위", "사과"};

    //스캐너로 0부터 4까지의 정수를 입력 받아
    Scanner sc = new Scanner(System.in);//스캐너 객체 선언
    System.out.print("0부터 4까지의 정수를 입력하세요 : ");
    int index = sc.nextInt();//스캐너로 입력받은 값 저장

    //단, 배열의 인덱스 범위를 벗어나는 경우 "준비된 과일이 없습니다." 를 출력하세요
    //!!! 입력받은 정수가 지정한 0 ~ 4 사이인 경우 와 0 ~ 4사이가 아닌 경우를 구분해야한다 !!!
    //조건문 if문 사용
    if (index >= 0 && index <= 4) { //입력한 정수가 0 ~ 4 사이인 경우

      //해당 정수의 인덱스에 있는 과일을 출력하세요
      System.out.println("현재 입력한 정수는 : "+index);
//      System.out.println("과일 배열 fruits의 배열 데이터 : "+fruits[index]);
      System.out.println("과일 배열 fruits의 인덱스[" + index + "]에 담긴 과일 : " + fruits[index]);
      System.out.println();
    } else { //입력한 정수가 0 ~ 4 사이가 아닌 경우
      System.out.println("준비된 과일이 없습니다.");
    }
  }
}

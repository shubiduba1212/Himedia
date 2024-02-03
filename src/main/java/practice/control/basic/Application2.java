package practice.control.basic;

public class Application2 {

  public static void main(String[] args) {

    /* 1부터 10까지 합계를 구하고 결과를 출력하세요
     *
     * -- 출력 예시 --
     * 1부터 10까지의 합 : 55
     * */

    /* for문 사용 */
    //합계 초기화
    int sum = 0;

    // 반복문 사용
    for (int i = 1; i <= 10; i++) {

      sum += i;
    }
    System.out.println("for : 1부터 10까지의 합 : " + sum);


    /* while문 사용 */
    //초기값 및 합계값의 초기화 설정
    int sum2 = 0; //합계값 초기화
    int j = 0; //while문 조건식에 사용할 초기값 선언
    while (j <= 10) { // 정수 j가 10보다가 크거나 같을때까지 반복
      sum2 += j; // sum2에 j를 더한다.

      j++; // j의 값을 1 증가시킨다.
    }
    System.out.println("while : 1부터 10까지의 합 : " + sum2);
  }
}

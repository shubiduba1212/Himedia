package practice.operator.normal;

public class Application1 {

  public static void main(String[] args) {
    /* 실수를 변수로 선언하여 점수를 저장하고,
     * 이를 정수로 변환하여 점수가 90점 이상이면 "A",
     * 80점 이상이면 "B", 70점 이상이면 "C", 60점 이상이면 "D",
     * 60점 미만이면 "F"를 출력하는 프로그램을 작성해본다.
     *
     * -- 출력 예시 --
     *
     * 홍길동의 이번 점수등급은 B입니다.
     *
     * */

    double num1 = 94.4;
    double num2 = 83.6;
    double num3 = 77.9;
    double num4 = 62.2;
    double num5 = 35.3;
    /*Mistake : 실수를 정수로 변환하지 않았다.*/

    //수정 후 - 실수를 정수로 변환
    int score1 = (int)num1;
    int score2 = (int)num2;
    int score3 = (int)num3;
    int score4 = (int)num4;
    int score5 = (int)num5;

    String result1 = score1 >= 90 ? "A" : score1 >= 80 ? "B" : score1 >= 70 ? "C" : score1 >= 60 ? "D" : "F";
    String result2 = score2 >= 90 ? "A" : score2 >= 80 ? "B" : score2 >= 70 ? "C" : score2 >= 60 ? "D" : "F";
    String result3 = score3 >= 90 ? "A" : score3 >= 80 ? "B" : score3 >= 70 ? "C" : score3 >= 60 ? "D" : "F";
    String result4 = score4 >= 90 ? "A" : score4 >= 80 ? "B" : score4 >= 70 ? "C" : score4 >= 60 ? "D" : "F";
    String result5 = score5 >= 90 ? "A" : score5 >= 80 ? "B" : score5 >= 70 ? "C" : score5 >= 60 ? "D" : "F";

    System.out.println("홍길동의 이번 점수등급은 " + result1 + "입니다");
    System.out.println("홍길동의 이번 점수등급은 " + result2 + "입니다");
    System.out.println("홍길동의 이번 점수등급은 " + result3 + "입니다");
    System.out.println("홍길동의 이번 점수등급은 " + result4 + "입니다");
    System.out.println("홍길동의 이번 점수등급은 " + result5 + "입니다");
  }
}

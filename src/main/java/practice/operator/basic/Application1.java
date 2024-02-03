package practice.operator.basic;

public class Application1 {

  public static void main(String[] args) {
    /* 두 개의 정수형 변수를 선언하고, 삼항 연산자를 사용하여
     * 두 수 중 큰 수를 출력하는 프로그램을 작성해본다.
     *
     *
     * -- 출력 예시 --
     *
     * 두 수 중 큰 수는 20입니다.
     *
     * */

    int num1 = 10;
    int num2 = 20;

    String result1 = (num1 >= num2) ? ("두 수 중 큰 수는 "+num1+"입니다") : ("두 수 중 큰 수는 "+num2+"입니다");

    System.out.println(result1);


    /* 정수형 변수를 선언하여 점수를 저장하고,
     * 삼항 연산자를 사용하여 점수가 60점 이상이면 “합격입니다”,
     * 그렇지 않으면 “아쉽지만 불합격입니다.” 을 출력하는 프로그램을 작성해본다.
     *
     *
     * -- 출력 예시 --
     *
     * 합격입니다~~!!! 또는 아쉽지만 불합격입니다..
     *
     * */

    int score1 = 85;
    int score2 = 49;

    String result2 = score1 >= 60 ? "🎊합격입니다🎉" : "아쉽지만 불합격입니다🤦‍♀️🤦‍♂️";
    String result3 = score2 >= 60 ? "🎊합격입니다🎉" : "아쉽지만 불합격입니다🤦‍♀️🤦‍♂️";

    System.out.println(result2);
    System.out.println(result3);
  }
}

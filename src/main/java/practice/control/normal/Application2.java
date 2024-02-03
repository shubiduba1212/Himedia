package practice.control.normal;


import java.util.Scanner;

public class Application2 {

  public static void main(String[] args) {
    /* BMI(신체질량지수)를 계산하고, 계산된 값에 따라
     * 저체중(20 미만)인 경우 "당신은 저체중 입니다.",
     * 정상체중(20이상 25미만)인 경우 "당신은 정상체중 입니다.",
     * 과제충(25이상 30미만)인 경우 "당신은 과체중 입니다.",
     * 비만(30이상)인 경우 "당신은 비만 입니다." 를  출력하세요
     *
     * BMI 계산 방법은 체중(kg) / (신장(m) * 신장(m)) 이다.
     *
     * 계산 예시) BMI = 67 / (1.7 * 1.7)
     * */

    Scanner sc2 = new Scanner(System.in);
    System.out.print("당신의 키를 입력해주세요 : ");
    //Double height = sc2.nextDouble() / 10;
    Double height = sc2.nextDouble() / 100; // 175 / 100 = 1.75
    System.out.print("당신의 체중을 입력해주세요 : ");
    int weight = (int)(sc2.nextDouble()); //65.8
    int bmiFiqures = (weight / (int)(height * height));

    //System.out.println("키는 " + height + " 체중은 " + weight + " 키를 100으로 나눈 값은 "+(weight / (int)(height * height));

    if(bmiFiqures >= 30){ //BMI가 30이상인 경우

      System.out.println("당신은 비만입니다.");

    } else if (bmiFiqures >= 25) {

      System.out.println("당신은 과체중 입니다.");

    } else if (bmiFiqures >= 20) {

      System.out.println("당신은 정상체중 입니다.");
    } else {

      System.out.println("당신은 저체중 입니다.");

    }
  }
}

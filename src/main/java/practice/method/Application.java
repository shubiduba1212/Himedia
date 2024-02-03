package practice.method;

public class Application {

  public static void main(String[] args) {
    Caculator calc = new Caculator();

    calc.checkMethod();
    System.out.println("1부터 10까지의 합 : " + calc.sum1to10());
    calc.checkMaxNumber(10, 20);
    System.out.println("10과 20의 합 : " + calc.sumTwoNumber(10,20));
    System.out.println("10과 5의 차 : " + calc.minusTwoNumber(10,5));
  }
}

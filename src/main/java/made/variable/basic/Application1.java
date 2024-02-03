package made.variable.basic;

public class Application1 {

  public static void main(String[] args) {
    //Basic Exercise
    /* 삼각형의 넓이를 구하기 */
    /* 삼각형의 밑변 길이값 = 4cm 이고 높이 길이값 = 5cm 일 때, 각각 정수형 변수로 선언한 후 */
    /* 삼각형의 넓이를 구해 다음과 같이 출력하세요. */

    //삼각형의 넓이 = (밑변 * 높이) / 2

    int base = 4;
    int height = 5;

    System.out.println("삼각형의 넓이 : " + (base*height)/2 + "cm" );


    //int로 형변환하는 식을 2가지 제출하시오.
    byte byum = 15;
    long lnum = 113;

    int inum = byum;
    int inum2 = (int)lnum;

    System.out.println(inum);
    System.out.println(inum2);


    /* 에러가 난 코드이다. 에러를 수정하고 이유를 써보자.*/

    //int k-pop = 25;
    //int final = 4;

    //int plus = k-pop + final;

    //System.out.println("plus = " + plus);

    //풀이과정

    int kPop = 25;
    int num = 4;

    int plus = kPop + num;

    System.out.println("plus = " + plus);

    //에러가 난 이유는
    //에러가 난 이유는 변수명 k-pop에서 하이픈(-)은 변수명명규칙에서 사용할 수 없기 때문이다.
    //final은 상수를 선언할 때 사용하는 예약어로 변수명으로 사용할 수 없다.
  }
}

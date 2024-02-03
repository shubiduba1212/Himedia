package made.variable.normal;

public class Application1 {
  public static void main(String[] args) {
    //Normal Exercise
    /*정수형 변수를 2개 선언하여 각각 알파벳 J의 유니코드 값인 74, 알파벳 V의 86를 대입한 후,
      문자열 변수 str을 선언하여 다음과 같이 출력하세요.

      📍정수형 변수 2개를 모두 사용하세요.
      📍문자열 데이터 "A"를 사용하세요.*/

    int num1 = 74; //
    int num2 = 86; //


    String str = (char)num1 + "A" + (char)num2 + "A";
    System.out.println("현재 우리가 공부하는 언어는 : " +str);


    //국어 'a'점 수학 60.5점 과학 80.5 영어 'A'점을 얻었습니다.
    //합과 평균값을 재출하시오.

    int korean = (int)'a';
    double math = 60.5;
    double science = 80.5;
    int english = (int)'A';

    System.out.println("점수 합계 = " + (int)(korean + math + science + english));
    System.out.println("점수 합계 = " + ((int)(korean + math + science + english)) / 4);


    /* 자동차의 앞바퀴 1회전 주행거리 : 12.3cm, 뒷바퀴 1회전 주행거리 :17.8cm
     * 앞바퀴와 뒷바퀴 1회전 주행거리를 실수 형태로 저장하고
     * 앞바퀴는 1.7회전, 뒷바퀴는 2회전 했을 때,
     * 앞바퀴와 뒷바퀴의 회전주행거리를 더한 값을 정수의 형태로 출력하세요.*/

    // 출력예시
    // 앞바퀴와 뒷바귀의 회전주행거리의 합은 : 56

    double frontWheel = 12.3;
    double backWheel = 17.8;

    int sum = (int)(frontWheel * 1.7 + backWheel * 2);

    System.out.println("앞바퀴와 뒷바귀의 회전주행거리의 합은 : " + sum);

  }
}

package tinyproject.polymorphism;

public class Bar implements Questions, Answers, Drinks {
  //Bar 클래스에 바텐더의 기본 행위 및 음료관련 인터페이스 구현

  //인사 또는 배웅하기
  public void greetCustomer(String status) {
      System.out.println("어서오세요-고객님.✨\n방문을 환영합니다.🎉");
      System.out.println();
  }

  //interface 구현하기

  @Override
  // 고객에게 질문하기
  public void askQuestion(String str1, String str2){
    //Questions 인터페이스에서 오버라이딩

  };

  // 고객의 답변을 토대로 음료 추천멘트 설정하기
  public void recommendsWords(int num1, int num2, int num3, int questions){
    //recommendsWords 인터페이스에서 오버라이딩
    //각 num
    String[] strArr = new String[questions]; //  질문에 대한 해당 답변을 문자열 배열로 저장
    int[] intArr = new int[]{num1, num2, num3}; // 1번부터 3번 질문까지의 고객이 선택한 답변 번호를 배열로 저장
    for (int i = 0; i < intArr.length; i++) { // 3가지 질문에 차례대로 접근하여 선택한 번호에 해당하는 문자열 값을 배열에 저장
      if (i == 2) {
        switch (intArr[i]) {
          case 1:
            strArr[i] = "단 맛을 좋아하는/원하는 ";
            break;
          case 2:
            strArr[i] = "드라이한 맛을 좋아하는/원하는 ";
            break;
          case 3:
            strArr[i] = "특별한 맛을 좋아하는/원하는 ";
            break;
          case 4:
            strArr[i] = "어떤 맛을 좋아하는지/원하는지 모르겠는 ";
            break;
        }
      }
    }
  };

  //음료 선정하기
  public String selectDrinks(){
    //Drinks 인터페이스에서 오버라이딩

    //Drinks 인터페이스의 String타입 배열 참조

    return "음료 이름"; // 임의 drinkArr의 배열 인덱스에 해당하는 값 반환
  };

}

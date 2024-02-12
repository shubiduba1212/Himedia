package tinyproject.polymorphism;

public class Customer {
  /*
  [고객의 행위]
  고객은 바에 들어가기, 음료 추천 요청하기, 바텐더의 질문에 답하기 or 노코멘트, 재추천요청하기, 주문하기, 계산하기, 바에서 나가기
  */

  //필드


  //Bartender 객체 생성
  Bartender bartender = new Bartender();

  //Bar에 들어가기
  public void enterBar() {
    bartender.greetCustomer("hello"); //Bartender 인사하기 및 음료추천진행여부 물어보기 메소드 호출
  }

  //음료 추천받기(Alcohol Therapy 진행)
  public void requestTherapy(String str) {
    bartender.startTherapy(str); // Bartender 음료 추천 진행 - 질문 시작하기
  }

  //Alcohol Therapy 질문에 답하기 (1 - 3번째까지)

  public void answerTherapy1() {
    bartender.askQuestion("🗨오늘 기분은 어떠신가요?😀", "1. 좋아요😊 || 2. 보통😐 || 3. 별로에요😑 || 4. 모르겠어요🙄 ");
  }
  public void answerTherapy2() {
    bartender.askQuestion("🗨오늘 컨디션은 어떠신가요?😀", "1. 좋아요😊 || 2. 보통😐 || 3. 별로에요😑 || 4. 모르겠어요🙄 ");
  }

  public void answerTherapy3() {
    bartender.askQuestion("🗨평소 좋아하는 맛 또는 원하는 맛을 골라주세요😀", "1. 단맛 || 2. 드라이한맛 || 3. 특별한맛 || 4. 모르겠어요🙄 ");
  }

  //음료 주문하기
  public void orderDrinks() {
    bartender.takeOrder();
  }

  //음료 계산하기
  public void payment() {
    bartender.receivePayment();
  }

  //Bar에서 나가기
  public void leaveBar() {
    bartender.greetCustomer("bye"); //Bartender 이별인사하기 메소드 호출
  }

}

package tinyproject.polymorphism.chocolatefactory;

public class Customer {


  ChocolateMaker chocolateMaker = new ChocolateMaker();

  // 가게 나가기
  public void leaveStore() {
    chocolateMaker.goodbye();
  }

  // 초콜릿 선택하기
  public void selectChocolate(int num) {
    chocolateMaker.introduceChocolate(num);
  }

  // 초콜릿 구매하기
  public void buyChocolate() {
    chocolateMaker.askAmount();
  }

  // 결제하기
  public void payment() {
   chocolateMaker.receivePayment();
  }
}

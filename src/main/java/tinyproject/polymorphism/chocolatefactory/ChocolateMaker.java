package tinyproject.polymorphism.chocolatefactory;

public class ChocolateMaker {

  // 소개하기, 주문받기, 결제하기

  private boolean isHere;
  Chocolate barChocolate = new BarChocolate();
  Chocolate pralineChocolate = new PralineChocolate();
  Chocolate truffleChocolate = new TruffleChocolate();

  // 소개하기


  // 인사하기
  public void goodbye() {
    this.isHere = false;
    System.out.println("안녕히가세요! 다음에 또 찾아주세요🙌");
  }

  // 초콜릿 소개 및 수량 및 가격 안내
  public void introduceChocolate(int num) {
    if (num == 1) {
      barChocolate.introduce();
      barChocolate.entityPerBox();
      barChocolate.price();
    } else if (num == 2) {
      pralineChocolate.introduce();
      pralineChocolate.entityPerBox();
      pralineChocolate.price();
    } else if (num == 3) {
      truffleChocolate.introduce();
      truffleChocolate.entityPerBox();
      truffleChocolate.price();
    }
  }

  // 초콜릿 구매 수량 묻기
  public void askAmount() {
    System.out.println("================== 초콜릿 팩토리 ================");
    System.out.println();
    System.out.println("몇 상자 준비해드릴까요?🎁");
    System.out.println();
    System.out.println("==============================================");
    System.out.println();
    System.out.print("구매할 수량 : ");
  }

  //결제받기
  public void receivePayment() {
    System.out.println("================== 초콜릿 팩토리 ================");
    System.out.println();
    System.out.println("결제 진행하겠습니다. 잠시만 기다려주세요.");
    System.out.println("결제가 완료되었습니다.");
    System.out.println("영수증 필요하신가요?");
    System.out.println();
    System.out.println("1. 예");
    System.out.println("2. 아니요");
    System.out.println("==============================================");
    System.out.println();
    System.out.print("선택한 메뉴 : ");
  }


  public void setHere(boolean isHere) {
    this.isHere = isHere;
  }

  public boolean isHere() {
    return this.isHere;
  }

}

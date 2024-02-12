package tinyproject.polymorphism.chocolatefactory;

public class TruffleChocolate extends Chocolate {
  @Override
  //초콜릿 소개하기
  public void introduce() {
    System.out.println("트러플 초콜릿은 생크림과 섞은 초콜릿(가나슈)를\n한 입 크기로 떠서 코코아 가루 등에 굴려 만든 초콜릿입니다.");
    System.out.println("저희 초콜릿 팩토리에서는 프랑스산 코코아 파우더만을 사용하여\n산지에서 맛볼 수 있는 고퀄리티 제품을 판매합니다.");
  }

  //초콜릿 1상자 당 갯수
  public void entityPerBox() {
    System.out.println("트러플 초콜릿은 1 상자 당 10개가 들어있습니다.");
  }

  //초콜릿 1상자 당 가격
  public void price() {
    this.price = 12000;
    System.out.println("트러플 초콜릿은 1 상자 당 " + this.price + "원 입니다.");
  }
}

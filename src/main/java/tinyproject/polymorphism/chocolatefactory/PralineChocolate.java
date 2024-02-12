package tinyproject.polymorphism.chocolatefactory;

public class PralineChocolate extends Chocolate {
  @Override
  //초콜릿 소개하기
  public void introduce() {
    System.out.println("프랄린 초콜릿은 겉껍질을 초콜릿으로 만들고\n안쪽에 가나슈나 과일, 견과류 등을 넣어 채운 초콜릿입니다.");
    System.out.println("저희 초콜릿 팩토리에서는 바 초콜릿과 마찬가지로\n국내산 견과류과 과일을 곁들여 고품질의 제품으로 제공합니다.");
  }

  //초콜릿 1상자 당 갯수
  public void entityPerBox() {
    System.out.println("프랄린 초콜릿은 1 상자 당 12개가 들어있습니다.");
  }

  //초콜릿 1상자 당 가격
  public void price() {
    this.price = 10000;
    System.out.println("프랄린 초콜릿은 1 상자 당 " + this.price + " 입니다.");
  }
}

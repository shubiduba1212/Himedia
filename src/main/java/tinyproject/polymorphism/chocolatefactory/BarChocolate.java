package tinyproject.polymorphism.chocolatefactory;

public class BarChocolate extends Chocolate {

//  private int barStock; // 재고수량
//  public int barPrice; // 상자 당 가격

  @Override
  //초콜릿 소개하기
  public void introduce() {
    System.out.println("바 초콜릿은 직사각형 틀에 원료를 부어 굳힌 초콜릿으로\n초콜릿하면 떠오르는 가장 기본적인 모양입니다.");
    System.out.println("저희 초콜릿 팩토리에서는 국내산 견과류를 듬뿍 넣어 크런치한 식감을 자랑합니다.");
  }

  //초콜릿 1상자 당 갯수
  public void entityPerBox() {
    System.out.println("바 초콜릿은 1 상자 당 5개가 들어있습니다.");
  }

  //초콜릿 1상자 당 가격
  public void price() {
    this.price = 5000;
    System.out.println("바 초콜릿은 1 상자 당 " + this.price + "원 입니다.");
  }
}

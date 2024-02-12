package tinyproject.polymorphism.chocolatefactory;

public class Chocolate {
  //판 초콜릿, 프랄린 초콜릿, 트러플 초콜릿

  private int stock; // 재고수량
  public int price; // 상자 당 가격

  //초콜릿 소개하기
  public void introduce() {
    System.out.println("초콜릿은 카카오열매로 만들어집니다.");
  }

  //초콜릿 1상자 당 갯수
  public void entityPerBox() {
    System.out.println("초콜릿은 1 상자 당 10개가 들어있습니다.");
  }

  //초콜릿 1상자 당 가격
  public void price() {
    System.out.println("초콜릿은 1 상자 당 5000원 입니다.");
  }

  public void setStock(int stock) {
    this.stock = stock;
  }

  public int getStock() {
    return this.stock;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  public int getPrice() {
    return this.price ;
  }
}

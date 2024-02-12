package tinyproject.polymorphism.chocolatefactory;

import java.util.Scanner;

public class Application {
  public static void main(String[] args) {

    Customer customer = new Customer();

    Scanner scanner = new Scanner(System.in);

    //초콜릿 재고수량 random 설정
    int randomStock = (int)(Math.random() * 100); // 1부터 100까지의 숫자 중 난수 생성
    customer.chocolateMaker.setHere(true);


    while (true) {

      System.out.println("================== 초콜릿 팩토리 ================");
      System.out.println("🍫초콜릿팩토리에 오신것을 환영합니다.🍬\n어떤 초콜릿을 준비해드릴까요?🍫");
      System.out.println();
      System.out.println("1. 바 초콜릿");
      System.out.println("2. 프랄린 초콜릿");
      System.out.println("3. 트러플 초콜릿");
      System.out.println("4. 가게 나가기");
      System.out.println();
      System.out.println("==============================================");
      System.out.print("선택한 메뉴 : ");
      int selectNum1 = scanner.nextInt();

      switch (selectNum1) {
        case 1 : customer.selectChocolate(1); break;
        case 2 : customer.selectChocolate(2); break;
        case 3 : customer.selectChocolate(3); break;
        case 4 : customer.leaveStore(); break;
        default:
          System.out.println("선택하신 제품은 현재 품절상태입니다.\n다른 제품을 선택해주세요.");
      }

      if (selectNum1 == 1 || selectNum1 == 2 || selectNum1 == 3) { //초콜릿을 선택한 상태라면
        while (true) {
          System.out.println("================== 초콜릿 팩토리 ================");
          System.out.println();
          System.out.println("1. 초콜릿 설명 다시 듣기");
          System.out.println("2. 초콜릿 구매하기");
          System.out.println("3. 초콜릿 다시 고르기");
          System.out.println("4. 가게 나가기");
          System.out.println();
          System.out.println("==============================================");
          System.out.print("선택한 메뉴 : ");
          int selectNum2 = scanner.nextInt();

          switch (selectNum2) {
            case 1:
              customer.selectChocolate(selectNum1);
              break;
            case 2:
              while (true) {
                customer.buyChocolate();
                int selectNum3 = scanner.nextInt();

                if (randomStock < selectNum3) { //재고 수량보다 많은 수량을 구매하는 경우
                  System.out.println("================== 초콜릿 팩토리 ================");
                  System.out.println();
                  System.out.println("현재 최대 구매 가능한 수량은 " + randomStock + " 상자 입니다.");
                  System.out.println("최대 수량으로 준비해드릴까요?");
                  System.out.println();
                  System.out.println("1. 예");
                  System.out.println("2. 아니요.");
                  System.out.println();
                  System.out.println("==============================================");
                  System.out.print("선택한 메뉴 : ");
                  int yesOrNo = scanner.nextInt();

                  if (yesOrNo == 1) { //최대 구매 가능 수량으로 구매하는 경우
                    switch (selectNum1) {
                      case 1:
                        customer.chocolateMaker.barChocolate.getPrice();
                        System.out.println("바 초콜릿 1상자 가격 : " + customer.chocolateMaker.barChocolate.getPrice());
                        System.out.println("구매하실 수량은 " + randomStock + "상자이며, 총 가격은 " + (randomStock * customer.chocolateMaker.barChocolate.getPrice()) + "원입니다.");
                        break;
                      case 2:
                        customer.chocolateMaker.pralineChocolate.getPrice();
                        System.out.println("바 초콜릿 1상자 가격 : " + customer.chocolateMaker.pralineChocolate.getPrice());
                        System.out.println("구매하실 수량은 " + randomStock + "상자이며, 총 가격은 " + (randomStock * customer.chocolateMaker.pralineChocolate.getPrice()) + "원입니다.");
                        break;
                      case 3:
                        customer.chocolateMaker.truffleChocolate.getPrice();
                        System.out.println("바 초콜릿 1상자 가격 : " + customer.chocolateMaker.truffleChocolate.getPrice());
                        System.out.println("구매하실 수량은 " + randomStock + "상자이며, 총 가격은 " + (randomStock * customer.chocolateMaker.truffleChocolate.getPrice()) + "원입니다.");
                        break;
                    }
                  } // 최대 구매 가능 수량으로 구매하는 경우 //

                } else { //재고 수량보다 적은 수량을 구매하는 경우
                  //System.out.println("구매하실 수량은 "+selectNum3 +"상자이며, 총 가격은 "+  +"입니다.");
                  switch (selectNum1) {
                    case 1:
                      customer.chocolateMaker.barChocolate.getPrice();
                      System.out.println("바 초콜릿 1상자 가격 : " + customer.chocolateMaker.barChocolate.getPrice());
                      System.out.println("구매하실 수량은 " + selectNum3 + "상자이며, 총 가격은 " + (selectNum3 * customer.chocolateMaker.barChocolate.getPrice()) + "원입니다.");
                      System.out.println();
                      System.out.println("================== 초콜릿 팩토리 ================");
                      System.out.println();
                      System.out.println("결제해드릴까요?");
                      System.out.println();
                      System.out.println("1. 예");
                      System.out.println("2. 아니요.");
                      System.out.println();
                      System.out.println("==============================================");
                      System.out.print("선택한 메뉴 : ");
                      int yesOrNo = scanner.nextInt();

                      if (yesOrNo == 1) {
                        customer.payment();
                        int yesOrNo2 = scanner.nextInt();

                        if (yesOrNo2 == 1) {
                          System.out.println("영수증 여기 있습니다. 구매 감사합니다.");
                        }
                        customer.leaveStore();
                        customer.chocolateMaker.setHere(false);
                      }
                      break;
                    case 2:
                      customer.chocolateMaker.pralineChocolate.getPrice();
                      System.out.println("바 초콜릿 1상자 가격 : " + customer.chocolateMaker.pralineChocolate.getPrice());
                      System.out.println("구매하실 수량은 " + selectNum3 + "상자이며, 총 가격은 " + (selectNum3 * customer.chocolateMaker.pralineChocolate.getPrice()) + "원입니다.");
                      System.out.println();
                      System.out.println("================== 초콜릿 팩토리 ================");
                      System.out.println();
                      System.out.println("결제해드릴까요?");
                      System.out.println();
                      System.out.println("1. 예");
                      System.out.println("2. 아니요.");
                      System.out.println();
                      System.out.println("==============================================");
                      System.out.print("선택한 메뉴 : ");
                      int yesOrNo2 = scanner.nextInt();

                      if (yesOrNo2 == 1) {
                        customer.payment();
                        int yesOrNo3 = scanner.nextInt();

                        if (yesOrNo3 == 1) {
                          System.out.println("영수증 여기 있습니다. 구매 감사합니다.");
                        }
                        customer.leaveStore();
                        customer.chocolateMaker.setHere(false);
                      }
                      break;
                    case 3:
                      customer.chocolateMaker.truffleChocolate.getPrice();
                      System.out.println("바 초콜릿 1상자 가격 : " + customer.chocolateMaker.truffleChocolate.getPrice());
                      System.out.println("구매하실 수량은 " + selectNum3 + "상자이며, 총 가격은 " + (selectNum3 * customer.chocolateMaker.truffleChocolate.getPrice()) + "원입니다.");
                      break;
                  }
                  break;
                }
                break;
              }

              break;
            case 3:
              break;
            case 4:
              customer.leaveStore();
              customer.chocolateMaker.setHere(false);
              break;
            default:
              System.out.println("선택하신 제품은 현재 품절상태입니다.\n다른 제품을 선택해주세요.");
          }

          if (selectNum2 == 3 || selectNum2 == 4 || !customer.chocolateMaker.isHere()) {
            break;
          }
        }
      } else {
        break;
      }

    }


  }
}

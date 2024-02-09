package tinyproject.coffeemachine;

import java.util.Scanner;

public class Application {

  /* 시스템 요구사항 */
  /* 커피머신을 사용하는 프로그램 */
  // 1. 커피 마시는 사람(CoffeeDrinker)은 원두와 물을 넣기, 커피머신 켜기, Start버튼 누르기, 커피머신 끄기를 할 수 있다.
  // 2. 커피머신(CoffeeMachine)은 원두와 물을 충전하기, 커피머신 켜기, 커피 추출하기, 커피머신 끄기를 할 수 있다.
  // 3. 커피머신은 작동하지 않은 상태로 대기하고 있는다.
  // 4. 커피 마시는 사람이 원두와 물을 넣는다. 이미 원두와 물을 넣은 상태라면 다시 넣을 수 없다.
  //    원두와 물은 커피머신이 작동하지 않은 상태에서만 넣고 충전할 수 있다.
  // 4. 커피 마시는 사람이 커피 머신을 켠다. 이미 켜져있는 경우 다시 켤 수 없다.
  // 5. 커피 마시는 사람이 원두와 물을 넣는다. 이미 원두와 물을 넣은 상태라면 다시 넣을 수 없다.
  // 6. 커피 마시는 사람이 커피머신의 START 버튼을 누른다. 원두와 물이 있는 상태인 경우에만 버튼이 작동한다.
  // 7. 커피머신은 충전한 원두와 물을 사용해 커피를 추출한다. 이때, 원두와 물이 없는 상태라면 추출할 수 없다.
  // 8. 커피머신은 한번 추출할때마다 원두와 물을 모두 소진한다. 이때, 원두와 물을 충전하면 다시 추출가능하다.
  // 9. 사람이 커피머신의 전원을 끄면 커피머신은 더이상 작동하지 않는다.

  public static void main(String[] args) {

    CoffeeDrinker coffeeHolic = new CoffeeDrinker();
    //커피마시는 사람 객체 생성


    Scanner scanner = new Scanner(System.in); // 스캐너 생성

    //while문으로 커피머신 프로그램 동작
    while (true) {
      System.out.println("============= 커피머신 프로그램 =============");
      System.out.println(" 1. 원두와 물 넣기 ");
      System.out.println(" 2. 커피 머신 전원 켜기 ");
      System.out.println(" 3. START 버튼 누르기 ");
      System.out.println(" 4. 커피 머신 전원 끄기 ");
      System.out.println(" 7. 프로그램 종료 ");
      System.out.println();
      System.out.print(" 메뉴 선택 : ");
      int menuNum = scanner.nextInt(); // 입력한 메뉴 번호 저장


      //switch문으로 menuNum와 일치하는 메뉴의 커피머신 프로그램 동작
      switch (menuNum) {
        case 1 :
          coffeeHolic.putCoffeeBinsAndWater(); //커피머신에 원두와 물 넣기
          break;
        case 2 :
          coffeeHolic.turnOn(); //커피머신 전원 켜기
          break;
        case 3 :
          coffeeHolic.pressButton(); //커피머신에 START 버튼 누르기(커피추출)
          break;
        case 4 :
          coffeeHolic.turnOff(); // 커피머신 전원 끄기
          break;
        case 7 :
          System.out.println(" 커피머신 프로그램을 종료합니다.");
          break;
        default:
          System.out.println("메뉴 번호 입력을 잘못하셨습니다. 다시 입력해주세요.");

      }

      if (menuNum == 7) { //입력한 번호가 7 이라면 break로 while문 종료
        break;
      }
    }
  }
}

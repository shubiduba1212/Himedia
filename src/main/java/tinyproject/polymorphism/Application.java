package tinyproject.polymorphism;

//import tinyproject.coffeemachine.CoffeeDrinker;

import java.util.Scanner;

public class Application {
  public static void main(String[] args) {

    /*
    * Project Title : Alcohol Theraphy에 오신 것을 환영합니다.
    *
    summary : Alcohol Theraphy Bar 바 의 바텐더(Bartender)가 고객에게 몇가지 질문을 통해 어울리는 음료를 추천해주고 페어링해주는 프로그램
    고객의 답변을 바탕으로 음료 및 음식을 추천한다.
    질문의 종류 : 1. 오늘의 기분, 2. 건강 상태, 3. 좋아하는 맛 또는 원하는 맛
    음료의 종류 : 와인(화이트/레드), 위스키(싱글몰트, 버번, 스카치), 칵테일

    시스템 요구사항
    [고객의 행위]
    고객은 바에 입장하기, 바텐더의 질문에 답하기 or 노코멘트, 음료 추천 요청하기, 재추천요청하기, 주문하기, 계산하기, 나가기

    [바텐더의 행위]
    바텐더는 고객에게 인사하기, 고객에게 질문하기, 음료 추천하기, 재추천요청받기, 식음료제공하기, 계산하기, 인사하기

    고객은 바에 입장한다. 고객이 바에 입장하지 않으면 프로그램은 시작하지 않는다.
    * 고객은 주문전까지는 바를 자유롭게 나갈 수 있으나, 식음료 주문 후, 계산하기전에는 바를 나갈 수 없다.
    바텐더는 처음에 고객에게 인삿말과 함께 주류 또는 음식 추천을 받을 것인지 묻는다. (보기 : 1. 주류 2. 음식 3. 모두)
    고객은 바텐더의 질문에 답하고 노코멘트할 수 있다. 이때, 질문에 답을 하고 다음 질문으로 넘어갔다면 이전 질문에 대한 답을 바꿀 수 없다. (바로 이전 질문으로 프로그램을 롤백할 수 없다.)
    고객은 재추천요청하기를 통해 처음 질문으로 돌아갈 수 있다.
    고객은 노코멘트시 다음 질문을 받거나 질문은 더이상 안받을 수도 있다.(바텐더의 질문 종료 언제든지 가능)
    고객은 바텐더가 메뉴를 추천한 이후에만, 재추천을 요청할 수 있다.
    고객은 바텐더의 추천메뉴가 맘에 드는 경우, 주문완료를 한다. 이때, 고객은 주문을 한 후에는 식음료 추천을 (재)요청할 수 없다.
    바텐더는 고객에게 질문하고 고객의 답변을 통해 추천할 식음료를 정한다. (각 질문에 대한 답변에 따라 추천 메뉴는 달라진다.)
    바텐더는 고객이 재추천을 요청시에 다시 질문을 한다.
    바텐더는 주문완료된 식음료를 제공한다.
    바텐더는 고객이 주문하지 않은 채 나가거나, 계산을 한 후에는 배웅인사한다.
    * 고객이 나가면 프로그램은 종료한다.
    *
    * */

//    CoffeeDrinker coffeeHolic = new CoffeeDrinker();
    //커피마시는 사람 객체 생성


    Scanner scanner = new Scanner(System.in); // 스캐너 생성

    //while문으로 커피머신 프로그램 동작
//    while (true) {
//      System.out.println("============= 커피머신 프로그램 =============");
//      System.out.println(" 1. 원두와 물 넣기 ");
//      System.out.println(" 2. 커피 머신 전원 켜기 ");
//      System.out.println(" 3. START 버튼 누르기 ");
//      System.out.println(" 4. 커피 머신 전원 끄기 ");
//      System.out.println(" 7. 프로그램 종료 ");
//      System.out.println();
//      System.out.print(" 메뉴 선택 : ");
//      int menuNum = scanner.nextInt(); // 입력한 메뉴 번호 저장
//
//
//      //switch문으로 menuNum와 일치하는 메뉴의 커피머신 프로그램 동작
//      switch (menuNum) {
//        case 1 :
//          coffeeHolic.putCoffeeBinsAndWater(); //커피머신에 원두와 물 넣기
//          break;
//        case 2 :
//          coffeeHolic.turnOn(); //커피머신 전원 켜기
//          break;
//        case 3 :
//          coffeeHolic.pressButton(); //커피머신에 START 버튼 누르기(커피추출)
//          break;
//        case 4 :
//          coffeeHolic.turnOff(); // 커피머신 전원 끄기
//          break;
//        case 7 :
//          System.out.println(" 커피머신 프로그램을 종료합니다.");
//          break;
//        default:
//          System.out.println("메뉴 번호 입력을 잘못하셨습니다. 다시 입력해주세요.");
//
//      }
//
//      if (menuNum == 7) { //입력한 번호가 7 이라면 break로 while문 종료
//        break;
//      }
//    }
  }
}

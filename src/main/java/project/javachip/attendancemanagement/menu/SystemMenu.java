package project.javachip.attendancemanagement.menu;

import java.util.InputMismatchException;
import java.util.Scanner;

public class SystemMenu {
  private Scanner scanner = new Scanner(System.in);
  public void loginMenu() {
    //scanner = new Scanner(System.in);

    //시스템 처음 접속시 로그인 실행
    while (true) {
      System.out.println("[JAVACHIP 근태관리 시스템]");
      System.out.println("=======================");
      System.out.print("ID : ");
      String inputId = scanner.nextLine();
      System.out.print("PW : ");
      //비밀번호 입력시 console에 입력하는 내용이 노출됨 - *로 변경가능한 방법 있는지 검색필요
      String inputPw = scanner.nextLine();
      System.out.println("=======================");

      if (inputId.equals("abc") && inputPw.equals("1234")) {
        // DB 내 아이디와 비밀번호 일치여부 확인하는 메소드 호출해서 비교
        System.out.println(inputId + "회원님 로그인하셨습니다.");

        //관리자 인지 아닌지 여부 확인
        if (inputId.equals("abc")) { // 관리자가 접속한 경우
          System.out.println("JAVACHIP 근태관리 관리자님 메뉴로 이동합니다.");
          managerMenu();
        }
        // 로그인한 아이디에 따라 관리자 메뉴 와 일반직원 메뉴 관련 메소드 호출
        break;
      } else { // DB 내 아이디와 비밀번호 일치하지 않는 경우
        System.out.println("inputId = " + inputId);
        System.out.println("inputPw = " + inputPw);
        System.out.println("아이디와 비밀번호가 일치하지 않거나 올바르지 않습니다.");
        System.out.println("다시 입력해주세요.");
      }
    }
  }

  //출근하기




  //퇴근하기



  //관리자 메뉴
  public void managerMenu() {
    System.out.println("[JAVACHIP 근태관리 시스템]");
    System.out.println("=======================");
    System.out.println("관리자님 환영합니다.");
    System.out.println("-----------------------");
    System.out.println("    Today : 2024/02/29    ");
    System.out.println("-----------------------");
    System.out.println("오늘의 임직원 근태 현황");

    //관리자 메뉴
    while (true) {

      // 전체 직원 근태정보 조회 내용 출력
      System.out.println();
      System.out.println("1. 개별 직원 근태 현황");
      System.out.println("2. 일정정보");
      System.out.println("3. 출근정보");
      System.out.println("4. 당일근무현황");
      System.out.println("5. 퇴근정보 조회");
      System.out.println("=======================");
      System.out.print("메뉴를 선택하세요 : ");
      int menuNum = 0; // 입력한 메뉴 번호 저장
      try {
        menuNum = scanner.nextInt();

        switch (menuNum) {// 올바른 메뉴를 입력한 경우 해당 메뉴 메소드 호출
          case 1 : // 개별 직원 근태 현황
            System.out.println("개별 직원 근태 현황 조회 메뉴입니다.");
            break;

          case 2 : // 일정정보
            System.out.println("일정정보 메뉴입니다.");
            break;

          case 3 : // 출근정보
            System.out.println("출근정보 메뉴입니다.");
            break;

          case 4 : // 당일근무현황
            System.out.println("당일근무현황 메뉴입니다.");
            break;

          case 5 : // 퇴근정보 조회
            System.out.println("퇴근정보 메뉴입니다.");
            break;

          default:// 입력한 메뉴 번호가 올바르지 않은 경우 다시 입력하도록
            System.out.println("메뉴를 잘못 선택했습니다. 다시 선택해주세요.");
            break;
        }
        break;
      } catch (InputMismatchException e) { //menuNum에 정수가 아닌 타입으로 입력한 경우
        System.out.println("메뉴를 잘못 선택했습니다. 다시 선택해주세요.");
        scanner.nextLine(); // Scanner에 입력되어있던 내용 버퍼 비우기
      }
    }
  }


  // 개별 직원 근태 현황


  // 일정정보


  // 출근정보


  // 당일근무현황


  // 퇴근정보 조회
}

package tinyproject.coffeemachine;

public class CoffeeMachine {

  //필드 선언

  private boolean isOn; // 커피머신의 전원 상태 = 초기값은 전원 off 상태로 false

  private boolean isCoffeeBinsAndWater; // 커피머신에 원두와 물 충전 여부

  //커피 머신의 전원 켜기
  public void machineOn() {
    if (isOn) { //커피머신 전원이 이미 켜진 상태라면
      System.out.println("💡커피머신의 전원이 이미 켜진 상태입니다.");
    } else { //커피머신 전원 꺼진 상태
      this.isOn = true; //커피머신의 전원 상태를 켜진 상태로 변경
      System.out.println("💡커피머신의 전원이 켜졌습니다.");
    }
  }

  //커피머신에 원두와 물 충전하기
  public void chargeBinsAndWater() {

    // 시스템 요구사항에서 커피머신의 전원이 꺼진 상태에서만 원두와 물을 넣을 수 있다면
    if (isCoffeeBinsAndWater) { //원두와 물이 이미 준비된 상태라면
//      if (isOn) { //커피머신 전원 켜진 상태
//        System.out.println("커피머신에 이미 원두와 물이 있습니다. START 버튼을 눌러주세요!");
//      } else { //커피머신 전원 꺼진 상태
//        System.out.println("커피머신에 이미 원두와 물이 있습니다. 커피머신의 전원을 켜주세요.");
//      }

      System.out.println( "👉커피머신에 이미 원두와 물이 있습니다." + (isOn ? " 🚩START 버튼을 눌러주세요!" : " 💡커피머신의 전원을 켜주세요."));

    } else { //원두와 물이 아직 준비되지 않은상태라면
      this.isCoffeeBinsAndWater = isOn ? false : true;
      System.out.println( isOn ? "🔌커피머신의 전원을 끈 후, 원두와 물을 넣어주세요." : "👉커피머신에 원두와 물이 준비되었습니다. 💡커피머신의 전원을 켜주세요.");
    }

//    if (isOn) { //커피머신 전원 켜진 상태
//      if (isCoffeeBinsAndWater) { //원두와 물이 이미 준비된 상태라면
//        System.out.println("👉커피머신에 이미 원두와 물이 있습니다. 🚩START 버튼을 눌러주세요!");
//      } else { //원두와 물이 아직 준비되지 않은상태라면
//        this.isCoffeeBinsAndWater = true; // 원두와 물이 준비된 상태로 변경
//        System.out.println("👉커피머신에 원두와 물이 준비되었습니다. 🚩START 버튼을 눌러주세요!");
//      }

//        System.out.println( (isCoffeeBinsAndWater ? "\uD83D\uDC49커피머신에 이미 원두와 물이 있습니다. " : "👉커피머신에 원두와 물이 준비되었습니다. ") + "\uD83D\uDEA9START 버튼을 눌러주세요!");
//        this.isCoffeeBinsAndWater = true;
//    } else { //커피머신 전원 꺼진 상태
//      System.out.println("🔌커피머신의 전원상태를 확인해주세요.");
//    }
  }

  //커피 추출하기
  public void extractCoffee() {
    if (isOn) { //커피머신 전원 켜진 상태
//      if(isCoffeeBinsAndWater){ //원두와 물이 준비된 상태라면
//        this.isCoffeeBinsAndWater = false; // 원두와 물이 없는 상태로 초기화
//        System.out.println("☕커피머신이 커피를 추출했습니다. 🚨뜨거우니 조심하세요!");
//      }else {//원두와 물이 준비되지 않은상태라면
//        System.out.println("👉커피머신을 끈후🔌, 원두와 물을 먼저 넣어주세요.");
//      }
      System.out.println(isCoffeeBinsAndWater ? "☕커피머신이 커피를 추출했습니다. \uD83D\uDEA8뜨거우니 조심하세요!" : "👉커피머신을 끈후🔌, 원두와 물을 먼저 넣어주세요.");
      this.isCoffeeBinsAndWater = false;

    } else { //커피머신 전원 꺼진 상태
      System.out.println("🔌커피머신의 전원상태를 확인해주세요.");
    }

  }

  //커피머신의 작동 끄기
  public void machineOff() {
    if (isOn) {  //커피머신 전원 켜진 상태
      this.isOn = false; //커피머신의 전원을 꺼진 상태로 변경
      System.out.println("🔌커피머신의 전원이 꺼졌습니다.");
    } else { //커피머신 전원 꺼진 상태
      System.out.println("🔌커피머신의 전원이 이미 꺼진 상태입니다.");
    }

  }
}

package tinyproject.coffeemachine;

public class CoffeeDrinker {

  //커피머신 클래스 객체 생성
  CoffeeMachine coffeeMachine = new CoffeeMachine();


  //커피머신의 전원 켜기
  public void turnOn() {
    coffeeMachine.machineOn(); // 커피머신의 전원을 켜는 메소드 호출
  }

  //커피머신에 원두와 물을 넣기
  public void putCoffeeBinsAndWater() {
    coffeeMachine.chargeBinsAndWater(); //커피머신의 원두와 물을 충전하는 메소드 호출
  }

  //커피머신의 START 버튼 누르기
  public void pressButton(){
    coffeeMachine.extractCoffee(); //커피머신의 커피 추출하기 메소드 호출
  }


  //커피머신의 전원 끄기
  public void turnOff() {
    coffeeMachine.machineOff(); // 커피머신의 전원을 끄는 메소드 호출
  }
}

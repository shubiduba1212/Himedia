package tinyproject.polymorphism;

public class Bartender extends Bar {
  /*
  [바텐더의 행위]
  바텐더는 고객에게 인사하기, 고객에게 질문하기, 음료 추천하기, 재추천요청받기, 식음료제공하기, 계산하기, 인사하기
  */


  //필드
  private boolean isEnter; //고객의 Bar 입장여부 - 초기값은 false로 미입장 상태
  private int answer1; //질문 1번에 대한 답변 번호
  private int answer2; //질문 2번에 대한 답변 번호
  private int answer3; //질문 3번에 대한 답변 번호


  //고객에게 인사하기 및 배웅하기
  @Override
  public void greetCustomer(String status) { // Bar클래스에서 오버라이딩 후 내용 변경
    if (status == "hello") { // bar에 들어가기를 선택했다면
      System.out.println("============================================");
      System.out.println("어서오세요-고객님.✨\nAlcohol Therapy에 오신 것을 환영합니다.🎉");
      System.out.println("저희 Alcohol Therapy에서는 고객님께 몇가지 질문을 통해\n고객님의 상태에 맞는 음료를 추천드리고 있습니다.");
      System.out.println("Alcohol Therapy를 진행해드릴까요?");
      System.out.println();
    } else if (status == "bye") { // bar에서 나가기를 선택했다면
      System.out.println("============================================");
      System.out.println("안녕히가십시오-고객님.🙏\nAlcohol Theraphy에 다시 방문해주시길 기다리겠습니다.🙇‍♀️🙇‍♂️👋");
    }
  }

  //고객에게 음료추천하기(Alcohol Therapy 진행하기)
  public void startTherapy(String str) {
    //문자열 매개변수를 전달받아 음료 추천이 처음인지, 다시 추천인지 구분
    System.out.println();
    System.out.println("============================================");
    if (str.equals("다시")) { //다시 추천받기인 상태라면
      System.out.println("Alcohol Therapy를 다시 진행하겠습니다.✨");
    } else { //처음 추천받는 거라면
      System.out.println("감사합니다 - 고객님✨ Alcohol Therapy를 진행하겠습니다.✨");
    }
  }


  /* 질문의 종류 : 1. 오늘의 기분, 2. 건강 상태, 3. 좋아하는 맛 또는 원하는 맛 */
  @Override
  public void askQuestion(String str1, String str2) {
    //Questions에서 기본 질문 askQuestion메소드 오버라이딩하여 고객이 선택하는 부분 추가
    System.out.println("============================================");
    System.out.println();
    System.out.println(str1); // 질문 내용
    System.out.println();
    System.out.println(str2); // 질문에 대한 답변 보기
    System.out.println();
    System.out.println("============= Alcohol Theraphy =============");
    System.out.println();
    System.out.print(" 고객님의 선택 : ");
  }

  /* 각 질문에 대한 답변을 출력하는  */
  @Override
  public void recommendsWords(int num1, int num2, int num3, int questions) {
    num1 = this.answer1; //1번 질문에 대한 답변 보기 번호 저장
    num2 = this.answer2; //2번 질문에 대한 답변 보기 번호 저장
    num3 = this.answer3; //3번 질문에 대한 답변 보기 번호 저장
    String[] strArr = new String[questions]; // 매개변수에 전달받은 질문 갯수만큼의 문자열 배열을 만들어 해당 질문에 대한 답변을 문자열데이터로 저장
    int[] intArr = new int[]{num1, num2, num3}; // 1번부터 3번 질문까지의 고객이 선택한 답변 번호를 배열로 저장
    for (int i = 0; i < intArr.length; i++) { // 3가지 질문에 차례대로 접근하여 선택한 번호에 해당하는 문자열 값을 배열에 저장
      if (i == 2) { //마지막 질문의 경우, 답변의 보기 내용이 1,2번과 다르므로 조건문으로 구분
        switch (intArr[i]) {
          case 1:
            strArr[i] = "단 맛을 좋아하는/원하는 ";
            break;
          case 2:
            strArr[i] = "드라이한 맛을 좋아하는/원하는 ";
            break;
          case 3:
            strArr[i] = "특별한 맛을 좋아하는/원하는 ";
            break;
          case 4:
            strArr[i] = "어떤 맛을 좋아하는지/원하는지 모르겠는 ";
            break;
        }
      } else { //1,2번 질문에 대한 답변 보기의 내용 저장
        switch (intArr[i]) {
          case 1:
            strArr[i] = "좋고, ";
            break;
          case 2:
            strArr[i] = "보통이고, ";
            break;
          case 3:
            strArr[i] = "별로이고, ";
            break;
          case 4:
            strArr[i] = "모르겠고, ";
            break;
        }
      }
    }
    //고객의 답변을 토대로한 고객의 선택내용 정리
    System.out.println("기분이 " + strArr[0] + "컨디션이 " + strArr[1] + strArr[2] + "고객님께");
    System.out.println("다음과 같은 음료를 추천드립니다 : " + selectDrinks());
    System.out.println("메뉴가 맘에 드신다면 주문해주시고 아니면 재추천드리겠습니다.");
  }


  //고객에게 맞는 추천음료 제시하기
  @Override
  public String selectDrinks() {
    //Bar 클래스에 구현된 Drinks 인터페이스의 selectDrinks 오버라이딩

    //랜덤으로 생성되는 난수 범위 설정
    int randomNum = (int) (Math.random() * drinkArr.length); // 1 ~ Drink 인터페이스의 drinkArr의 길이까지 출력되는 난수
    String[] bartenderDrinksArr = new String[drinkArr.length]; // 바텐더가 제조할 수 있는 음료의 배열 할당;

    for (int i = 0; i < drinkArr.length; i++) { // 깊은 복사로 interface에 선언한 배열과 분리
      bartenderDrinksArr[i] = drinkArr[i];
    }

    return bartenderDrinksArr[randomNum]; // 랜덤으로 생성되는 난수 인덱스에 해당하는 음료 제시
  }

  public void recommendDrinks() {
    System.out.println();
  }


  //고객에게 주문받기
  public void takeOrder() {
    System.out.println("============================================");
    System.out.println("주문을 받았습니다. 잠시만 기다려주세요.🍾");
    System.out.println("주문하신 음료가 나왔습니다. 즐거운 Therapy시간 되시길 바랍니다.");
  }

  //고객 주문 결제하기
  public void receivePayment() {
    System.out.println("============================================");
    System.out.println("즐거운 시간 되셨습니까?");
    System.out.println("결제하겠습니다. 잠시만 기다려주세요.");
    System.out.println("결제완료되었습니다.");
  }


  //질문 3가지에 대한 setter&getter 설정
  public void setAnswer1(int num) {
    this.answer1 = num;
  }

  public void setAnswer2(int num) {
    this.answer2 = num;
  }

  public void setAnswer3(int num) {
    this.answer3 = num;
  }

  public int getAnswer1() {
    return this.answer1;
  }

  public int getAnswer2() {
    return this.answer2;
  }

  public int getAnswer3() {
    return this.answer3;
  }


}

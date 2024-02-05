package made.abstraction.basic;

public class Application {

  public static void main(String[] args) {
    /* Application 클래스와 MemberVO클래스를 생성하고
     *  Application 클래스에 다음과 같이 출력할 수 있도록
     *  MemberVO클래스를 만들어주세요.
     *  단, parking의 경우, 논리 자료형을 사용해 참일때 가능 / 거짓일 때 불가 가라고 나오도록
     *  MemberVO클래스에서 설정해주세요.
     *  */

    //getter를 이용해서 필드의 초기값 확인
    //getter를 이용해서 변경된 필드값 확인
    //setter를 이용해서 필드 값 변경

    /* 출력예시 */
    //초기값 name : null
    //초기값 branch : null
    //초기값 phone : null
    //초기값 parking : false

    //변경 후 name : 하이미디어
    //변경 후 branch : 강남점
    //변경 후 phone : 02-1234-5678
    //변경 후 parking : 가능


    //MemberVO 클래스 객체 생성
    MemberVO member = new MemberVO();

    //getter를 호출해 MemberVO클래스의 초기 필드값 출력
    System.out.println("초기값 name : " + member.getName());
    System.out.println("초기값 branch : " + member.getBranch());
    System.out.println("초기값 phone : " + member.getPhone());
    System.out.println("초기값 parking : " + member.getParking());

    //setter를 호출해 MemberVO클래스의 필드값 변경
    member.setName("하이미디어");
    member.setBranch("강남점");
    member.setPhone("02-1234-5678");
    member.setParking(false);

    //getter를 호출해 MemberVO클래스의 1차 변경한 필드값 출력
    System.out.println("변경 후 name : " + member.getName());
    System.out.println("변경 후 branch : " + member.getBranch());
    System.out.println("변경 후 phone : " + member.getPhone());
    System.out.println("변경 후 parking : " + (member.getParking() == true ? "가능" : "불가능"));

    //setter를 호출해 MemberVO클래스의 필드값 변경
    member.setName(null);
    member.setBranch(null);
    member.setPhone(null);
    member.setParking(false);

    //getter를 호출해 MemberVO클래스의 1차 변경한 필드값 출력
    System.out.println("2ck 변경 후 name : " + member.getName());
    System.out.println("2ck 변경 후 branch : " + member.getBranch());
    System.out.println("2ck 변경 후 phone : " + member.getPhone());
    System.out.println("2ck 변경 후 parking : " + (member.getParking() == false ? null : true));

  }

}

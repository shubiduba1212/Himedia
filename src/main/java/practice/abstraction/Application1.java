package practice.abstraction;

public class Application1 {

  public static void main(String[] args) {

    //getter를 이용해서 필드의 초기값 확인
    //setter를 이용해서 필드 값 변경
    //getter를 이용해서 변경된 필드값 확인

    /* 출력값
      id : null
      pwd : null
      name : null
      age : 0
      gender :
      phone : null
      email : null
      변경 후 id : user01
      변경 후 pwd : pass01
      변경 후 name : 홍길동
      변경 후 age : 20
      변경 후 gender : M
      변경 후 phone : 010-1234-5678
      변경 후 email : hong123@greedy.com
    */

    MemberVO member = new MemberVO();//클래스 객체 생성

    System.out.println("==================== 필드값 변경 전 ==================");
    System.out.println("id : " + member.getId());
    System.out.println("pwd : " + member.getPwd());
    System.out.println("name : " + member.getName());
    System.out.println("age : " + member.getAge());
    System.out.println("gender : " + member.getGender());
    System.out.println("phone : " + member.getPhone());
    System.out.println("emaiil : " + member.getEmail());

    //==================== 필드값 변경 ==================
    member.setId("user01");
    member.setPwd("pass01");
    member.setName("홍길동");
    member.setAge(20);
    member.setGender('M');
    member.setPhone("010-1234-5678");
    member.setEmail("hong123@greedy.com");

    System.out.println("==================== 필드값 변경 후 ==================");
    System.out.println("id : " + member.getId());
    System.out.println("pwd : " + member.getPwd());
    System.out.println("name : " + member.getName());
    System.out.println("age : " + member.getAge());
    System.out.println("gender : " + member.getGender());
    System.out.println("phone : " + member.getPhone());
    System.out.println("emaiil : " + member.getEmail());
  }
}

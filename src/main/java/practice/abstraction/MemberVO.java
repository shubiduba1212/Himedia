package practice.abstraction;

public class MemberVO {

  private String id; //user01
  private String pwd; //pass01
  private String name; //홍길동
  private int age; //20
  private char gender; //M
  private String phone; //010-1234-5678
  private String email; //hong123@greedy.com

  //필드 수정용 메소드 Setter
  public void setId(String id) {
    this.id = id;
  }

  public void setPwd(String pwd) {
    this.pwd = pwd;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public void setGender(char gender) {
    this.gender = gender;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public void setEmail(String email) {
    this.email = email;
  }



  //필드값 리턴용 메소드 Getter
  public String getId() {
    return id;
  }

  public String getPwd() {
    return pwd;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public char getGender() {
    return gender;
  }

  public String getPhone() {
    return phone;
  }

  public String getEmail() {
    return email;
  }
}

package made.abstraction.basic;

public class MemberVO {

//  //필드명 선언
//  private String name;
//  private int age;
//  private String addr;
//  private String job;
//  private char marry;
//
//  //Setter 설정자 메소드 선언
//  public void setName(String name) {
//    this.name = name;
//  }
//
//  public void setAge(int age) {
//    this.age = age;
//  }
//
//  public void setAddr(String addr) {
//    this.addr = addr;
//  }
//
//  public void setJob(String job) {
//    this.job = job;
//  }
//
//  public void setMarry(char marry) {
//    this.marry = marry;
//  }
//
//  public String getName() {
//    return name;
//  }
//

//  getter 설정자 메소드 선언
//  public int getAge() {
//    return age;
//  }
//  public String getAddr() {
//    return addr;
//  }
//
//  public String getJob() {
//    return job;
//  }
//
//  public char getMarry() {
//    return marry;
//  }

  //필드명 선언
  private String name;
  private String branch;
  private String phone;
  private boolean parking;


  //Setter 설정자 메소드 선언
  public void setName(String name) {
    this.name = name;
  }

  public void setBranch(String branch) {
    this.branch = branch;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public void setParking(boolean parking) {
    this.parking = parking;
  }

  //getter 설정자 메소드 선언
  public String getName() {
    return name;
  }

  public String getBranch() {
    return branch;
  }

  public String getPhone() {
    return phone;
  }

  public boolean getParking() {
    return parking;
  }
}

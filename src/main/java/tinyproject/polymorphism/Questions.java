package tinyproject.polymorphism;

public interface Questions {
  /* 질문의 종류 : 1. 오늘의 기분, 2. 건강 상태, 3. 좋아하는 맛 또는 원하는 맛 */
  /* Q. 🗨오늘 기분은 어떠신가요?😀 */
  /* A. 1. 좋아요😊 || 2. 보통😐 || 3. 별로에요😑 || 4. 모르겠어요🙄*/
  //기본 질문 틀
  public abstract void askQuestion(String str1, String str2);
  //질문을 할때 1.질문 내용, 2. 질문에 대한 보기 두 가지 매개변수가 필요하므로 문자열 매개변수 2개 기본 설정
}

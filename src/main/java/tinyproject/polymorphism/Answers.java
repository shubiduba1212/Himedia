package tinyproject.polymorphism;

public interface Answers {
  /* 질문에 대한 답변 종류 각각 4가지 */
  /*"1. 좋아요😊 || 2. 보통😐 || 3. 별로에요😑 || 4. 모르겠어요🙄 "*/
  /*"1. 좋아요😊 || 2. 보통😐 || 3. 별로에요😑 || 4. 모르겠어요🙄 "*/
  /*"1. 단맛 || 2. 드라이한맛 || 3. 특별한맛 || 4. 모르겠어요🙄 "*/

  public abstract void recommendsWords(int num1, int num2, int num3, int questions);
  //3가지 질문에 대해 고객이 선택한 답변 보기를 저장하기 위해 정수형 매개변수 3개 기본 설정.
}

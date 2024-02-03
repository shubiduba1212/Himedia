package practice.array.basic;

public class Application2 {

  public static void main(String[] args) {

    /* 행의 길이가 3, 열의 길이가 4인 정수형 2차원 배열을 선언 및 할당하고,
     * 각 인덱스에 차례대로 1부터 12까지의 정수를 대입한 뒤
     * 그 값을 출력하는 코드를 작성하시오.
     *
     * -- 출력 예시 --
     * 1  2  3  4
     * 5  6  7  8
     * 9 10 11 12
     *
     * 단, 출력물의 줄맞춤은 신경쓰지 말고 풀어보세요
     * */

    // 1. 행의 길이가 3, 열의 길이가 4인 정수형 2차원 배열을 선언 및 할당
    int numArr[][] = new int[3][4];
    System.out.println();

    // 행의 인덱스 : 0, 1, 2
    // 열의 인덱스 : 0, 1, 2, 3

    // 배열 인덱스별
    // numArr[0][0] = 1
    // numArr[0][1] = 2
    // numArr[0][2] = 3
    // numArr[0][3] = 4
    // numArr[1][0] = 5
    // numArr[1][1] = 5
    // numArr[1][2] = 5
    // numArr[1][3] = 5
    // numArr[2][0] = 9
    // numArr[2][0] = 10
    // numArr[2][0] = 11
    // numArr[2][0] = 12

    // 2. 1부터 12로 1씩 증가시킬 변수 초기화
    int num = 0;

    for (int i = 0; i < numArr.length; i++) {
      for (int j = 0; j < numArr[i].length; j++) {
        // 1, 2, 3, 4
        // 5, 6, 7, 8
        // 9, 10, 11, 12

        num++;//초기값을 1씩 증가
        numArr[i][j] = num; //1씩 증가시킨 num을 해당배열에 대입

        System.out.print(numArr[i][j] + " "); //해당 배열 데이터 출력
        // System.out.println("numArr["+i+"]["+j+"] : "+numArr[i][j]);
        // System.out.println("배열 numArr["+i+"]행 ["+j+"]열의 데이터 : "+numArr[i][j]);
      }
      System.out.println();
    }
  }
}

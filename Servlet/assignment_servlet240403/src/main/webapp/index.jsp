<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
  <title>Forward</title>
</head>
<body>
  <h1>✨Forward Your MBTI</h1>
  <form action="mbti" method="post">
    <label for="name">
      What is your <b>name</b>?
      <input type="text" name="username" id="name">
    </label>
    <br>
    <br>
    <label for="content">
      Tell me your <b>MBTI</b>
      <input type="text" name="mbti" id="content">
    </label>
    <br>
    <br>
    <button type="submit">✔입력완료</button>
  </form>
</body>
</html>
package com.ohgiraffers.assignment_servlet240403;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/mbti")
public class ForwardServlet extends HttpServlet {
  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    if(req.getParameter("mbti").length() != 4){
      resp.sendError(404, "MBTI를 잘못 입력하셨습니다. 다시 입력해주세요.");
    } else {
      RequestDispatcher reqDispatcher = req.getRequestDispatcher("showmbti");
      reqDispatcher.forward(req, resp);
    }
  }
}

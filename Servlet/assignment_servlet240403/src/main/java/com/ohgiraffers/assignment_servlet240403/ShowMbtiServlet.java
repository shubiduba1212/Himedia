package com.ohgiraffers.assignment_servlet240403;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/showmbti")
public class ShowMbtiServlet extends HttpServlet {

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    //System.out.println("showmbti page now"); // forward 확인
    String name = req.getParameter("username");
    String mbti = req.getParameter("mbti");

    StringBuilder pageContext = new StringBuilder();
    pageContext.append("<!doctype html>\n")
            .append("<head>\n")
            .append("<style>\n")
            .append("h1 {padding-top:200px; padding-bottom: 20px; text-align:center;}\n")
            .append("div { width:300px; margin:0 auto; padding:20px; border-radius:10px; background-color:#fa3; text-align:center; color:#fff }\n")
            .append("p { font-size:24px; font-weight:500; }\n")
            .append("p:last-child { padding-top:10px; font-size:36px; font-weight:bold; }\n")
            .append("</style>\n")
            .append("</head>\n")
            .append("<body>\n")
            .append("<h1>🎊결과확인✨</h1>")
            .append("<div>\n")
            .append("<p>")
            .append(name)
            .append("님의 MBTI는")
            .append("</p>\n")
            .append("<p>")
            .append(mbti)
            .append("</p>\n")
            .append("</div>\n")
            .append("</body>\n")
            .append("</html>\n");

    resp.setContentType("text/html");
    PrintWriter out = resp.getWriter();
    out.print(pageContext);
    out.flush();
    out.close();
  }
}

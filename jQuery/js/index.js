"use strict";

$(function () {
  $("#Q1").click(function () {
    $("#text").html("NEWGATE");
  });
  $("#Q2").click(function () {
    $("#text").css("color", "red");
  });
  $("#Q3").click(function () {
    $("#text").css("color", "black");
  });

  $("#Q4").click(function () {
    if ($("#text").css("color") === "rgb(0, 0, 0)") {
      $("#text").css("color", "red");
    } else {
      $("#text").css("color", "black");
    }
  });

  $("#Q5").click(function () {
    $("#memo").append(
      "<li id='list2'>チーズ</li><li id='list3'>オリーブオイル</li>"
    );
  });
  $("#Q6").click(function () {
    $("#list2").remove();
  });
  $("#Q7").click(function () {
    $("#memo").fadeOut();
  });
  $("#Q8").click(function () {
    $("#memo").fadeIn();
  });
  $("#Q9").click(function () {
    $("#memo").slideToggle();
  });
  $("#Q10").click(function () {
    $("#text").animate(
      {
        marginLeft: "+=100px",
      },
      1000
    );
  });
});

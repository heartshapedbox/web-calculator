/*assigning variables*/
var input = document.querySelector(".input");
var log = document.querySelector(".log");
var division = document.getElementById("division");
var addition = document.getElementById("addition");
var subtraction = document.getElementById("subtraction");
var multiplication = document.getElementById("multiplication");
var point = document.getElementById("point");
var zero = document.getElementById("zero");
var equals = document.getElementById("equals");


/*primary condition*/
log.style.color = "#6E8B3D";


/*get value & display it on screen*/
function getValue(x) {
  input.textContent = input.textContent + x;

  /*input maximum lenght of the string*/
  var maxLength = 13;
  if (input.textContent.length > maxLength) {
    input.textContent = input.textContent.substr(0, maxLength);
  }

    /*prevention appearance reset*/
    if (x === "C") {
      input.textContent = "";
      log.style.color = "#6E8B3D";
    }

    /*prevention appearance duplicating point*/
    else if (x === ".") {
      if (input.textContent.match(/\./)) {
        input.textContent = input.textContent.replace("..", ".");
      }
    }

    /*prevention appearance left bracket after number*/
    else if (x === "(") {
      if (input.textContent.match(/\d+\(/)) {
          input.textContent = input.textContent.slice(0,-1);
        }

        /*prevention appearance left bracket after operator*/
        else if (x === "(") {
          if (input.textContent.match(/[*/+-]\(/)) {
            input.textContent = input.textContent.slice(0,-1);
          }

            /*prevention apperance point before left bracket*/
            else if (x === "(") {
              if (input.textContent.match(/\d+\.\(/)) {
            input.textContent = input.textContent.replace(".(", ".");
            }

              /*prevention appearance duplicating left bracket*/
              else if (x === "(") {
                if (input.textContent.match(/\(/)) {
                input.textContent = input.textContent.replace("((", "(");
              }
            }
          }
        }
      }

    /*prevention appearance duplicating right bracket*/
    else if (x === ")") {
      if (input.textContent === ")") {
        input.textContent = "";
      }
        /*prevention appearance right bracket at the beginning of the string*/
      else if (x === ")") {
        if (input.textContent.match(/\d+[*/+-]\d+\)/)) {
          input.textContent = input.textContent.replace("))", ")");
        }

        /*prevention appearance right bracket after number*/
        else if (x === ")") {
          if (input.textContent.match(/\d+\)/)) {
          input.textContent = input.textContent.replace(")", "");
        }

          /*prevention appearance right bracket right after left bracket*/
          else if (x === ")") {
            if (input.textContent.match(/\(\)/)) {
            input.textContent = input.textContent.replace(")", "");
          }

            /*prevention appearance right bracket after operator*/
            else if (x === ")") {
              if (input.textContent.match(/[*/+-]\)/)) {
              input.textContent = input.textContent.replace(")", "");
            }

              /*prevention apperance point before right bracket*/
              else if (x === ")") {
                if (input.textContent.match(/\.\)/)) {
                input.textContent = input.textContent.replace(".)", ".");
              }
            }
          }
        }
      }
    }
  }

    /*prevention appearance duplicating operator*/
    else if (x === "-") {
      if (input.textContent.match(/\-/)) {
        input.textContent = input.textContent.replace("--", "-");
      }
    }else if (x === "+") {
      if (input.textContent.match(/\+/)) {
        input.textContent = input.textContent.replace("++", "+");
      }
    }else if (x === "*") {
      if (input.textContent.match(/\*/)) {
        input.textContent = input.textContent.replace("**", "*");
      }
    }else if (x === "/") {
      if (input.textContent.match(/\//)) {
        input.textContent = input.textContent.replace("//", "/");
      }
    }

    /*prevention appearance duplicating zero at the beginning of the string*/
    else if (x === "0") {
      if (input.textContent === "00") {
        input.textContent = "0";
      }
    }

    /*prevention apperance zero before 1 at the beginning of the string*/
    else if (x === "1") {
      if (input.textContent === "01") {
        input.textContent = "1";
      }

      /*prevention apperance zero before 1 in the middle of the string*/
      else if (x === "1") {
        if (input.textContent.match(/\d+[+]\d+/)) {
            input.textContent = input.textContent.replace("+01", "+1");
      }else if (x === "1") {
        if (input.textContent.match(/\d+[-]\d+/)) {
            input.textContent = input.textContent.replace("-01", "-1");
      }else if (x === "1") {
        if (input.textContent.match(/\d+[*]\d+/)) {
            input.textContent = input.textContent.replace("*01", "*1");
      }else if (x === "1") {
        if (input.textContent.match(/\d+[/]\d+/)) {
            input.textContent = input.textContent.replace("/01", "/1");
          }
        }
      }
    }
  }
}

    /*prevention apperance zero before 2 at the beginning of the string*/
    else if (x === "2") {
      if (input.textContent === "02") {
        input.textContent = "2";
      }

      /*prevention apperance zero before 2 in the middle of the string*/
      else if (x === "2") {
        if (input.textContent.match(/\d+[+]\d+/)) {
            input.textContent = input.textContent.replace("+02", "+2");
      }else if (x === "2") {
        if (input.textContent.match(/\d+[-]\d+/)) {
            input.textContent = input.textContent.replace("-02", "-2");
      }else if (x === "2") {
        if (input.textContent.match(/\d+[*]\d+/)) {
            input.textContent = input.textContent.replace("*02", "*2");
      }else if (x === "2") {
        if (input.textContent.match(/\d+[/]\d+/)) {
            input.textContent = input.textContent.replace("/02", "/2");
          }
        }
      }
    }
  }
}

    /*prevention apperance zero before 3 at the beginning of the string*/
    else if (x === "3") {
      if (input.textContent === "03") {
        input.textContent = "3";
      }

      /*prevention apperance zero before 3 in the middle of the string*/
      else if (x === "3") {
        if (input.textContent.match(/\d+[+]\d+/)) {
           input.textContent = input.textContent.replace("+03", "+3");
      }else if (x === "3") {
        if (input.textContent.match(/\d+[-]\d+/)) {
            input.textContent = input.textContent.replace("-03", "-3");
      }else if (x === "3") {
        if (input.textContent.match(/\d+[*]\d+/)) {
            input.textContent = input.textContent.replace("*03", "*3");
      }else if (x === "3") {
        if (input.textContent.match(/\d+[/]\d+/)) {
            input.textContent = input.textContent.replace("/03", "/3");
          }
        }
      }
    }
  }
}

    /*prevention apperance zero before 4 at the beginning of the string*/
    else if (x === "4") {
      if (input.textContent === "04") {
        input.textContent = "4";
      }

      /*prevention apperance zero before 4 in the middle of the string*/
      else if (x === "4") {
        if (input.textContent.match(/\d+[+]\d+/)) {
            input.textContent = input.textContent.replace("+04", "+4");
      }else if (x === "4") {
        if (input.textContent.match(/\d+[-]\d+/)) {
            input.textContent = input.textContent.replace("-04", "-4");
      }else if (x === "4") {
        if (input.textContent.match(/\d+[*]\d+/)) {
            input.textContent = input.textContent.replace("*04", "*4");
      }else if (x === "4") {
        if (input.textContent.match(/\d+[/]\d+/)) {
            input.textContent = input.textContent.replace("/04", "/4");
          }
        }
      }
    }
  }
}

    /*prevention apperance zero before 5 at the beginning of the string*/
    else if (x === "5") {
      if (input.textContent === "05") {
        input.textContent = "5";
      }

        /*prevention apperance zero before 5 in the middle of the string*/
        else if (x === "5") {
          if (input.textContent.match(/\d+[+]\d+/)) {
              input.textContent = input.textContent.replace("+05", "+5");
        }else if (x === "5") {
          if (input.textContent.match(/\d+[-]\d+/)) {
              input.textContent = input.textContent.replace("-05", "-5");
        }else if (x === "5") {
          if (input.textContent.match(/\d+[*]\d+/)) {
              input.textContent = input.textContent.replace("*05", "*5");
        }else if (x === "5") {
          if (input.textContent.match(/\d+[/]\d+/)) {
              input.textContent = input.textContent.replace("/05", "/5");
            }
          }
        }
      }
    }
  }

    /*prevention apperance zero before 6 at the beginning of the string*/
    else if (x === "6") {
      if (input.textContent === "06") {
        input.textContent = "6";
      }

      /*prevention apperance zero before 6 in the middle of the string*/
      else if (x === "6") {
        if (input.textContent.match(/\d+[+]\d+/)) {
            input.textContent = input.textContent.replace("+06", "6");
      }else if (x === "6") {
        if (input.textContent.match(/\d+[-]\d+/)) {
            input.textContent = input.textContent.replace("-06", "-6");
      }else if (x === "6") {
        if (input.textContent.match(/\d+[*]\d+/)) {
            input.textContent = input.textContent.replace("*06", "*6");
      }else if (x === "6") {
        if (input.textContent.match(/\d+[/]\d+/)) {
            input.textContent = input.textContent.replace("/06", "/6");
          }
        }
      }
    }
  }
}

    /*prevention apperance zero before 7 at the beginning of the string*/
    else if (x === "7") {
      if (input.textContent === "07") {
        input.textContent = "7";
      }

      /*prevention apperance zero before 7 in the middle of the string*/
      else if (x === "7") {
        if (input.textContent.match(/\d+[+]\d+/)) {
            input.textContent = input.textContent.replace("+07", "+7");
      }else if (x === "7") {
        if (input.textContent.match(/\d+[-]\d+/)) {
            input.textContent = input.textContent.replace("-07", "-7");
      }else if (x === "7") {
        if (input.textContent.match(/\d+[*]\d+/)) {
            input.textContent = input.textContent.replace("*07", "*7");
      }else if (x === "7") {
        if (input.textContent.match(/\d+[/]\d+/)) {
            input.textContent = input.textContent.replace("/07", "/7");
          }
        }
      }
    }
  }
}

    /*prevention apperance zero before 8 at the beginning of the string*/
    else if (x === "8") {
      if (input.textContent === "08") {
        input.textContent = "8";
      }

      /*prevention apperance zero before 8 in the middle of the string*/
      else if (x === "8") {
        if (input.textContent.match(/\d+[+]\d+/)) {
            input.textContent = input.textContent.replace("+08", "+8");
      }else if (x === "8") {
        if (input.textContent.match(/\d+[-]\d+/)) {
            input.textContent = input.textContent.replace("-08", "-8");
      }else if (x === "8") {
        if (input.textContent.match(/\d+[*]\d+/)) {
            input.textContent = input.textContent.replace("*08", "*8");
      }else if (x === "8") {
        if (input.textContent.match(/\d+[/]\d+/)) {
            input.textContent = input.textContent.replace("/08", "/8");
          }
        }
      }
    }
  }
}

    /*prevention apperance zero before 9 at the beginning of the string*/
    else if (x === "9") {
      if (input.textContent === "09") {
        input.textContent = "9";
      }

      /*prevention apperance zero before 9 in the middle of the string*/
      else if (x === "9") {
        if (input.textContent.match(/\d+[*/+-]\d+/)) {
            input.textContent = input.textContent.replace("09", "9");
      }else if (x === "9") {
        if (input.textContent.match(/\d+[-]\d+/)) {
            input.textContent = input.textContent.replace("-01", "-1");
      }else if (x === "9") {
        if (input.textContent.match(/\d+[*]\d+/)) {
            input.textContent = input.textContent.replace("*01", "*1");
      }else if (x === "9") {
        if (input.textContent.match(/\d+[/]\d+/)) {
            input.textContent = input.textContent.replace("/01", "/1");
          }
        }
      }
    }
  }
}

  log.textContent = input.textContent;
  log.style.color = "#6E8B3D";
}


/*prevention appearance division at the beginning of the string*/
division.addEventListener("click", deleteDivision);
function deleteDivision() {
  if (input.textContent === "/") {
    input.textContent = "";
    log.textContent = input.textContent;
  }

  /*prevention appearance division after another operator*/
  else if (input.textContent.match(/[*/+-]\//)) {
    input.textContent = input.textContent.replace("/", "");
  }

  /*prevention apperance division after point*/
  else if (input.textContent.match(/\d+\.\//)) {
    input.textContent = input.textContent.replace("./", ".");
    log.textContent = input.textContent;
  }

  /*prevention apperance division after left bracket*/
  else if (input.textContent.match(/\(\//)) {
    input.textContent = input.textContent.replace("(/", "(");
    log.textContent = input.textContent;
  }
}


/*prevention appearance addition at the beginning of the string*/
addition.addEventListener("click", deleteAddition);
function deleteAddition() {
  if (input.textContent === "+") {
    input.textContent = "";
    log.textContent = input.textContent;
  }

  /*prevention apperance addition after another operator*/
  else if (input.textContent.match(/[*/+-]\+/)) {
    input.textContent = input.textContent.replace("+", "");
  }

  /*prevention apperance addition after point*/
  else if (input.textContent.match(/\d+\.\+/)) {
    input.textContent = input.textContent.replace(".+", ".");
    log.textContent = input.textContent;
  }

  /*prevention apperance addition after left bracket*/
  else if (input.textContent.match(/\(\+/)) {
    input.textContent = input.textContent.replace("(+", "(");
    log.textContent = input.textContent;
  }
}


/*prevention apperance multiplication at the beginning of the string*/
multiplication.addEventListener("click", deleteMultiplication);
function deleteMultiplication() {
  if (input.textContent === "*") {
    input.textContent = "";
    log.textContent = input.textContent;
  }

  /*prevention apperance multiplication after another operator*/
  else if (input.textContent.match(/[*/+-]\*/)) {
    input.textContent = input.textContent.replace("*", "");
  }

  /*prevention apperance multiplication after point*/
  else if (input.textContent.match(/\d+\.\*/)) {
    input.textContent = input.textContent.replace(".*", ".");
    log.textContent = input.textContent;
  }

  /*prevention apperance multiplication after left bracket*/
  else if (input.textContent.match(/\(\*/)) {
    input.textContent = input.textContent.replace("(*", "(");
    log.textContent = input.textContent;
  }
}


/*prevention appearance point at the beginning of the string*/
point.addEventListener("click", deletePoint);
function deletePoint() {
  if (input.textContent === ".") {
    input.textContent = "";
    log.textContent = input.textContent;
  }

  /*prevention appearance point after operator*/
  else if (input.textContent.match(/[*/+-]\./)) {
    input.textContent = input.textContent.replace(".", "");
  }

  /*prevention appearance of multiple points within a number*/
  else if (input.textContent.match(/\.\d+\./)) {
    input.textContent = input.textContent.slice(0, -1);
    log.textContent = input.textContent;
  }

  /*prevention apperance point after left bracket*/
  else if (input.textContent.match(/\(\./)) {
    input.textContent = input.textContent.replace("(.", "(");
    log.textContent = input.textContent;
  }
}


/*prevention apperance double zero after operator*/
zero.addEventListener("click", deleteZero);
function deleteZero() {
  if (input.textContent.match(/\d+[*]\d+/)) {
    input.textContent = input.textContent.replace("*00", "*0");
    log.textContent = input.textContent;
  }else if (input.textContent.match(/\d+[/]\d+/)) {
    input.textContent = input.textContent.replace("/00", "/0");
    log.textContent = input.textContent;
  }else if (input.textContent.match(/\d+[+]\d+/)) {
    input.textContent = input.textContent.replace("+00", "+0");
    log.textContent = input.textContent;
  }else if (input.textContent.match(/\d+[-]\d+/)) {
    input.textContent = input.textContent.replace("-00", "-0");
    log.textContent = input.textContent;
  }
}


/*get negative number*/
subtraction.addEventListener("click", addSubtraction);
function addSubtraction() {
  if (input.textContent === "") {
    input.textContent = "-";
    log.textContent = input.textContent;
  }

  /*prevention apperance subtraction after point*/
  else if (input.textContent.match(/\d+\.\-/)) {
    input.textContent = input.textContent.replace(".-", ".");
    log.textContent = input.textContent;
  }
}


/*remove point from log on condition there was nothing in the string after point and equals was pushed*/
equals.addEventListener("click", removePointLog);
function removePointLog() {
  if (log.textContent.match(/\d+\.\d+/)) {
    log.textContent = log.textContent.replace(".", ".");
  }else {
    log.textContent = log.textContent.replace(".", "");
  }
}


/*remove last symbol*/
function back() {
  input.textContent = input.textContent.slice(0, -1);
  log.textContent = input.textContent;
  log.style.color = "#6E8B3D";
}


/*get result*/
function result() {
  x = input.textContent;
  x = eval(x);

  /*fixing floating point (example: 0.1 + 0.2 = 0.300000004)*/
  x = Math.round(x * 1000);
  x = x * 0.001;

  input.textContent = x;
  log.style.color = "rgb(51, 50, 51)";

  /*result maximum length of the string*/
  var maxResultLength = 13;
  if (input.textContent.length > maxResultLength) {
    input.textContent = input.textContent.substr(0, maxResultLength);
  }
}

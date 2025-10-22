function append(value) {
      document.getElementById("result").value += value;
    }

    function clearResult() {
      document.getElementById("result").value = "";
    }

    function calculate() {
      try {
        document.getElementById("result").value = eval(document.getElementById("result").value);
      } catch (e) {
        alert("Invalid Expression");
      }
    }
    document.addEventListener("keydown", function(event) {
      const key = event.key;
      if (!isNaN(key) || "+-*/.".includes(key)) {
        append(key);
      } else if (key === "Enter") {
        calculate();
      } else if (key === "Backspace") {
        let current = document.getElementById("result").value;
        document.getElementById("result").value = current.slice(0, -1);
      } else if (key.toLowerCase() === "c") {
        clearResult();
      }
    });
// Tab functionality
function openTab(evt, tabId) {
    let tabContents = document.querySelectorAll(".tab-content");
    let tabButtons = document.querySelectorAll(".tab-button");
  
    tabContents.forEach(tab => tab.classList.remove("active"));
    tabButtons.forEach(btn => btn.classList.remove("active"));
  
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
  }
  
  function checkAnswers() {
    const total = document.getElementById("total").value.trim();
    const boys = document.getElementById("boys").value.trim();
    const girls = document.getElementById("girls").value.trim();
    const term = document.getElementById("term").value.trim();
    const step1 = document.getElementById("step1").value.trim();
    const step2 = document.getElementById("step2").value.trim();
    const result = document.getElementById("result").value.trim();
  
    const correct = (
      total === "4" &&
      boys === "2" &&
      girls === "2" &&
      term.toLowerCase() === "6l2p2" &&
      step1 === "6(1/2)^2(1/2)^2" &&
      step2 === "6/16 x 100%" &&
      result === "37,5"
    );
  
    const feedback = document.getElementById("feedback");
    if (correct) {
      feedback.innerHTML = "✅ Jawaban kamu benar!";
      feedback.style.color = "green";
    } else {
      feedback.innerHTML = "❌ Beberapa jawaban salah. Coba lagi!";
      feedback.style.color = "red";
    }
  }
  
  function resetQuiz() {
    document.querySelectorAll('#latihan1 input[type="text"]').forEach(input => input.value = "");
    document.getElementById("feedback").innerText = "";
  }
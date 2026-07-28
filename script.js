const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const root = document.documentElement;
const savedTheme = localStorage.getItem("java-notes-theme");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = savedTheme || (preferredDark ? "dark" : "light");

function updateThemeIcon() {
  $(".theme-icon").textContent = root.dataset.theme === "dark" ? "☀" : "☾";
}
updateThemeIcon();

$(".theme-toggle").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("java-notes-theme", root.dataset.theme);
  updateThemeIcon();
});

$(".mobile-menu").addEventListener("click", (event) => {
  const nav = $(".main-nav");
  nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", nav.classList.contains("open"));
});
$$(".main-nav a").forEach(link => link.addEventListener("click", () => $(".main-nav").classList.remove("open")));

const observed = $$(".observe");
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.08 });
observed.forEach(section => revealObserver.observe(section));

const spyLinks = $$("#scrollspy a");
const spySections = spyLinks.map(link => $(link.getAttribute("href"))).filter(Boolean);
const spyObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  spyLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
}, { rootMargin: "-18% 0px -68% 0px", threshold: [0, .15, .5] });
spySections.forEach(section => spyObserver.observe(section));

const backToTop = $("#back-to-top");
function updateScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const progress = max > 0 ? Math.round((scrollY / max) * 100) : 0;
  $("#reading-progress").style.width = `${progress}%`;
  $("#progress-value").textContent = `${progress}%`;
  backToTop.classList.toggle("show", scrollY > 650);
}
addEventListener("scroll", updateScroll, { passive: true });
updateScroll();
backToTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

const termInput = $("#term-input");
const terms = $$("#term-list details");
termInput.addEventListener("input", () => {
  const query = termInput.value.toLowerCase().trim();
  let shown = 0;
  terms.forEach(term => {
    const match = term.textContent.toLowerCase().includes(query) || term.dataset.term.includes(query);
    term.hidden = !match;
    if (match) shown++;
  });
  $("#term-count").textContent = `${shown} istilah`;
  $("#term-empty").hidden = shown !== 0;
});

$$(".copy-button").forEach(button => button.addEventListener("click", async () => {
  const code = button.closest(".code-block").querySelector("code").innerText;
  try {
    await navigator.clipboard.writeText(code);
    button.textContent = "Copied ✓";
  } catch {
    button.textContent = "Pilih & salin";
  }
  setTimeout(() => button.textContent = "Copy", 1600);
}));

const flashcards = [
  ["Apa itu javac?", "Compiler yang menukar fail .java menjadi .class."],
  ["Apakah tugas JVM?", "Membaca dan menjalankan Java bytecode dalam fail .class."],
  ["Apa itu Servlet?", "Class Java di server yang menerima Request dan menghasilkan Response."],
  ["Tomcat 9 menggunakan javax atau jakarta?", "Tomcat 9 menggunakan javax.servlet. Tomcat 10+ menggunakan jakarta.servlet."],
  ["Apa fungsi WEB-INF?", "Menyimpan konfigurasi, Class dan library yang dilindungi daripada akses terus browser."],
  ["Apa beza Class dan Object?", "Class ialah pelan; Object ialah instance sebenar yang dicipta daripada pelan itu."],
  ["Bila doGet() digunakan?", "Apabila Servlet menerima HTTP GET Request."],
  ["Apa itu JAR?", "Java Archive yang mengumpulkan Class dan resource Java dalam satu fail."]
];
let flashIndex = 0;
const flashcard = $("#flashcard");
$("#flash-total").textContent = flashcards.length;
function renderFlash() {
  flashcard.classList.remove("flipped");
  $("#flash-question").textContent = flashcards[flashIndex][0];
  $("#flash-answer").textContent = flashcards[flashIndex][1];
  $("#flash-index").textContent = flashIndex + 1;
}
flashcard.addEventListener("click", () => flashcard.classList.toggle("flipped"));
$(".flash-nav.next").addEventListener("click", () => { flashIndex = (flashIndex + 1) % flashcards.length; renderFlash(); });
$(".flash-nav.prev").addEventListener("click", () => { flashIndex = (flashIndex - 1 + flashcards.length) % flashcards.length; renderFlash(); });

const quizData = [
  ["Apakah sambungan fail source code Java?", [".class", ".java", ".jar", ".jvm"], 1, "Source code Java disimpan dalam fail .java."],
  ["Tool manakah menukar .java kepada .class?", ["JVM", "Tomcat", "javac", "JRE"], 2, "javac ialah Java compiler."],
  ["Apakah fungsi utama JVM?", ["Menulis kod", "Menjalankan bytecode", "Menyimpan database", "Melayari web"], 1, "JVM menjalankan bytecode dalam fail .class."],
  ["Apakah Tomcat dalam latihan ini?", ["Database", "Browser", "Servlet Container", "Programming language"], 2, "Tomcat mengurus dan menjalankan Servlet."],
  ["Namespace manakah sesuai untuk Tomcat 9?", ["jakarta.servlet", "javax.servlet", "java.servlet", "tomcat.servlet"], 1, "Tomcat 9 menggunakan javax.servlet."],
  ["Method manakah mengendalikan HTTP GET?", ["doPost()", "getHttp()", "doGet()", "main()"], 2, "doGet() dipanggil untuk GET Request."],
  ["Apakah yang mewakili permintaan daripada browser?", ["Response", "Request", "JAR", "Class"], 1, "Request membawa maklumat daripada client kepada server."],
  ["Folder manakah tidak boleh diakses terus melalui browser?", ["src", "java", "WEB-INF", "build"], 2, "WEB-INF dilindungi oleh Servlet specification."],
  ["Naming Convention bagi Class ialah...", ["camelCase", "lowercase", "UPPER_CASE", "PascalCase"], 3, "Class Java lazimnya menggunakan PascalCase."],
  ["Apakah maksud extends HttpServlet?", ["Memadam HttpServlet", "Mewarisi HttpServlet", "Menukar Package", "Mencipta JAR"], 1, "extends menunjukkan Inheritance."]
];
const quizForm = $("#quiz-form");
quizData.forEach((item, questionIndex) => {
  const section = document.createElement("section");
  section.className = "quiz-question";
  section.innerHTML = `<h3><span>${String(questionIndex + 1).padStart(2, "0")}</span>${item[0]}</h3>
    <div class="quiz-options">${item[1].map((answer, answerIndex) =>
      `<label><input type="radio" name="q${questionIndex}" value="${answerIndex}"><span>${answer}</span></label>`
    ).join("")}</div><p class="answer-note">${item[3]}</p>`;
  quizForm.append(section);
});
$("#check-quiz").addEventListener("click", () => {
  let score = 0;
  let unanswered = 0;
  const correctAnswers = [];
  const wrongAnswers = [];

  $$(".quiz-question").forEach((question, index) => {
    const selected = $(`input[name="q${index}"]:checked`);
    const correct = selected && Number(selected.value) === quizData[index][2];
    const correctText = quizData[index][1][quizData[index][2]];
    const selectedText = selected ? quizData[index][1][Number(selected.value)] : "Tidak dijawab";

    question.classList.remove("correct", "wrong", "unanswered");
    question.classList.add("revealed");
    $$(".quiz-options label", question).forEach((label, answerIndex) => {
      label.classList.toggle("correct-answer", answerIndex === quizData[index][2]);
    });

    if (correct) {
      score++;
      question.classList.add("correct");
      question.querySelector(".answer-note").textContent = `✓ Betul — ${quizData[index][3]}`;
      correctAnswers.push({ number: index + 1, question: quizData[index][0], answer: correctText });
    } else {
      if (!selected) {
        unanswered++;
        question.classList.add("unanswered");
      } else {
        question.classList.add("wrong");
      }
      question.querySelector(".answer-note").textContent =
        `${selected ? `✕ Jawapan anda: ${selectedText}.` : "− Soalan tidak dijawab."} Jawapan betul: ${correctText}. ${quizData[index][3]}`;
      wrongAnswers.push({
        number: index + 1,
        question: quizData[index][0],
        selected: selectedText,
        answer: correctText
      });
    }
  });

  const wrong = quizData.length - score - unanswered;
  const percent = Math.round((score / quizData.length) * 100);
  const message = percent === 100 ? "Cemerlang—semua betul!" :
    percent >= 80 ? "Sangat baik!" :
    percent >= 60 ? "Baik, ulang sedikit lagi." :
    "Mari ulang kaji semula.";
  const description = percent === 100
    ? "Anda sudah memahami semua topik utama Day 1."
    : `Semak ${wrongAnswers.length} perkara di bawah, kemudian cuba semula.`;

  $("#quiz-score").textContent = `${score}/${quizData.length} · ${percent}%`;
  $("#correct-count").textContent = score;
  $("#wrong-count").textContent = wrong;
  $("#empty-count").textContent = unanswered;
  $("#score-percent").textContent = `${percent}%`;
  $("#score-message").textContent = message;
  $("#score-description").textContent = description;
  $("#score-ring").style.setProperty("--score", `${percent * 3.6}deg`);

  $("#correct-list").innerHTML = correctAnswers.length
    ? correctAnswers.map(item =>
      `<li><strong>Soalan ${item.number}: ${item.question}</strong>Jawapan anda: ${item.answer}</li>`
    ).join("")
    : '<li class="empty-list">Belum ada jawapan yang betul.</li>';
  $("#wrong-list").innerHTML = wrongAnswers.length
    ? wrongAnswers.map(item =>
      `<li><strong>Soalan ${item.number}: ${item.question}</strong>Anda jawab: ${item.selected}<br>Jawapan betul: ${item.answer}</li>`
    ).join("")
    : '<li class="empty-list">Tiada kesalahan—syabas!</li>';

  $("#quiz-report").hidden = false;
  $("#quiz-report").scrollIntoView({ behavior: "smooth", block: "start" });
});
$("#reset-quiz").addEventListener("click", () => {
  quizForm.reset();
  $$(".quiz-question").forEach(question => {
    question.classList.remove("revealed", "correct", "wrong", "unanswered");
    $$(".quiz-options label", question).forEach(label => label.classList.remove("correct-answer"));
  });
  $("#quiz-report").hidden = true;
  $("#quiz-score").textContent = "Belum dijawab";
});

const searchDialog = $("#search-dialog");
const globalSearch = $("#global-search");
const searchIndex = [
  ...terms.map(term => ({ title: $("summary b", term).textContent, text: $("p", term).textContent, href: "#terms" })),
  { title: "Java Compilation Flow", text: ".java, javac, .class dan JVM", href: "#compilation" },
  { title: "Eclipse IDE", text: "IDE yang digunakan dalam kelas", href: "#ide" },
  { title: "Apache Tomcat 9", text: "Servlet Container berasaskan javax", href: "#tomcat" },
  { title: "Struktur MyApp", text: "src main java webapp WEB-INF lib web.xml", href: "#project" },
  { title: "Hasil Praktikal Lab Day 1", text: "index.html HelloServlet.java Selamat Datang Hello from Java Servlet Eclipse Console", href: "#lab-project" },
  { title: "GET vs POST", text: "Perbandingan HTTP Method", href: "#http" },
  { title: "Object-Oriented Programming", text: "Class Object Method Constructor Inheritance", href: "#oop" }
];
function openSearch() {
  searchDialog.showModal();
  globalSearch.value = "";
  $("#search-results").innerHTML = '<p class="search-hint">Cuba cari “Servlet”, “JVM”, “Tomcat” atau “GET”.</p>';
  setTimeout(() => globalSearch.focus(), 20);
}
$(".search-trigger").addEventListener("click", openSearch);
addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault(); openSearch();
  }
});
globalSearch.addEventListener("input", () => {
  const query = globalSearch.value.toLowerCase().trim();
  const results = query ? searchIndex.filter(item => `${item.title} ${item.text}`.toLowerCase().includes(query)).slice(0, 8) : [];
  $("#search-results").innerHTML = results.length ? results.map(item =>
    `<a class="search-result" href="${item.href}"><strong>${item.title}</strong><small>${item.text.slice(0, 105)}...</small></a>`
  ).join("") : `<p class="search-hint">${query ? "Tiada hasil ditemui." : "Masukkan kata kunci untuk mula mencari."}</p>`;
  $$(".search-result").forEach(result => result.addEventListener("click", () => searchDialog.close()));
});
searchDialog.addEventListener("click", event => {
  if (event.target === searchDialog) searchDialog.close();
});

$("#print-sheet").addEventListener("click", () => window.print());

const checklistInputs = $$("#checklist input");
const savedChecks = JSON.parse(localStorage.getItem("java-notes-checklist") || "[]");
checklistInputs.forEach((input, index) => {
  input.checked = Boolean(savedChecks[index]);
  input.addEventListener("change", () => {
    localStorage.setItem("java-notes-checklist", JSON.stringify(checklistInputs.map(item => item.checked)));
  });
});

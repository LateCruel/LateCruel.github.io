  /* Button to scroll to the top */
  document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton");

    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    };

    scrollButton.onclick = function() {
      scrollToTop();
    };

    function scrollToTop() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    }
  });
  /* ------------------- */

  /* Main section scroll */
  function scrollToSection(event, sectionId) {
    var targetSection = document.getElementById(sectionId);
  
    if (targetSection) {
      event.preventDefault();
      var offset = 75; 
      window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  }
  /* ------------------- */

  /* nav-container fiksacija */
  document.addEventListener("DOMContentLoaded", function() {
    var navContainer = document.querySelector('.nav-container');
    var header = document.querySelector('.header');
    var headerHeight = header.offsetHeight;
  
    window.onscroll = function() {
      var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  
      if (scrollPosition > headerHeight) {
        navContainer.style.position = 'fixed';
        document.body.style.paddingTop = navContainer.offsetHeight + 'px';
      } else {
        navContainer.style.position = 'static';
        document.body.style.paddingTop = '0';
      }
    };
  });
  /* ------------------- */

  function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const studentId = document.getElementById("studentId").value;

    if (!/^\d+$/.test(studentId)) {
      alert("Pažymėjimo numeris turi būti sudarytas tik iš skaičių!");
      return;
    }

    const gradeInputs = document.querySelectorAll('[id^="grade"]');

    const grades = Array.from(gradeInputs).map(input => parseFloat(input.value));

    if (grades.every(isNaN)) {
      alert("Bent vienas pažymys turi būti įvestas!");
      return;
    }

    if (!validateGrades(grades)) {
      alert("Pažymiai turi būti nuo 1 iki 10!");
      return;
    }

    const validGrades = grades.filter(grade => !isNaN(grade));

    if (validGrades.length === 0) {
      alert("Bent vienas pažymys turi būti įvestas!");
      return;
    }

    const sum = validGrades.reduce((acc, grade) => acc + grade, 0);
    const averageGrade = Math.round(sum / validGrades.length).toString();


    let resultColorClass;
    if (averageGrade <= 4) {
      resultColorClass = "error";
    } else if (averageGrade <= 8) {
      resultColorClass = "warning";
    } else {
      resultColorClass = "success";
    }

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
      <p>Average Mark: </p>
      <p>${firstName} ${lastName} (${studentId}): <span class="${resultColorClass}">${averageGrade}</span></p>

    `;

    console.log(`${firstName} ${lastName} (${studentId}): <span class="${resultColorClass}">${averageGrade}</span>`.replace(/<\/?span[^>]*>/g, ""));
  }
  
  function validateGrades(grades) {
    return grades.every(grade => isNaN(grade) || (grade >= 1 && grade <= 10));
  }
  
  
  
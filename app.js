// Filter job cards by text and minimum fit score.
(function () {
  var q = document.getElementById("q"), min = document.getElementById("minfit"), count = document.getElementById("count");
  if (!q) return;
  var cards = Array.prototype.slice.call(document.querySelectorAll(".job"));
  function apply() {
    var text = q.value.trim().toLowerCase(), m = min ? +min.value : 0, shown = 0;
    cards.forEach(function (c) {
      var ok = +c.dataset.fit >= m && (!text || c.dataset.search.indexOf(text) !== -1);
      c.style.display = ok ? "" : "none";
      if (ok) shown++;
    });
    count.textContent = shown + " of " + cards.length;
  }
  q.addEventListener("input", apply);
  if (min) min.addEventListener("change", apply);
  apply();
})();

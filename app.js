$ = (q) => {
  const els = document.querySelectorAll(q);

  if (els.length > 1) {
    return els;
  } else if (els.length === 1) {
    return els[0];
  }
};

function getValue() {
  var getSelectedValue = $('input[name="rating"]:checked');
  return getSelectedValue.value;
}

function renderDOM() {
  $("#rating-card").innerHTML = /*html*/ `
  <div id="thank-you" class="grid gap-8 text-center ">
    <div class="flex items-center justify-center">
      <img src="./images/illustration-thank-you.svg" alt="" />
    </div>
    <div>
      <label class="text-orange rounded-full bg-Dark-Blue p-2 px-4 text-Orange my-8">
        You selected ${getValue()} out of 5
      </label>
    </div>
    <h1>Thank you!</h1>
    <p>
      We appreciate you taking the time to give a rating. If you ever need
      more support, don't hesitate to get in touch!
    </p>
  </div>`;
}

$("#submit").onclick = () => {
  renderDOM();
};

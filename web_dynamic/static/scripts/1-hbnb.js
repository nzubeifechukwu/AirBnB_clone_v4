$(document).ready(function() {
  let checked_list = [];
  let h4_text = "";
  $("li>input").each(function() {
    $(this).on("click", function() {
      if ($(this).prop("checked")) {
        checked_list.push($(this).attr("data-id"));
      } else {
	const idx = checked_list.indexOf($(this));
	if (idx != -1) {
          checked_list.splice(idx, 1);
	}
      }
      for (const item of checked_list) {
	if (checked_list.indexOf(item) === checked_list.length - 1) {
          h4_text = `${h4_text}${item}`;
	} else {
	  h4_text = `${h4_text}${item}, `;
	}
      }
      $("div.amenities h4").text(h4_text);
    });
  });
});

$(function() {
  function addUser(user) {
    let html =
      `<div class="member">
        <p class="member__name">${user.name}</p>
        <div class="member__add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
      </div>`;
    $(".search__add").append(html);
  }

  function addNoUser() {
    let html = 
      `<div class="member">
        <p class="member__name">ユーザーが見つかりません</p>
      </div>`;
    $(".search__add").append(html);
  }

  function addMember(name, id) {
    let html =
      `<div class="member">
        <p class="member__name">${name}</p>
        <input name="group[user_ids][]" type="hidden" value="${id}" />
        <div class="member__remove">削除</div>
      </div>`;
    $(".search__delete").append(html);
  }

  $("#search__field").on("keyup", function() {
    let input = $("#search__field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
    })
    .done(function(users) {
      $(".search__add").empty();
      if (users.length !== 0) {
        users.forEach(function(user) {
          addUser(user);
        });
      } else if (input.length == 0) {
        return false;
      } else {
        addNoUser();
      }
    })
    .fail(function() {
      alert("通信エラーです。ユーザーが表示できません。");
    });
  });
  $(".search__add").on("click", ".member__add", function() {
    const userName = $(this).attr("data-user-name");
    const userId = $(this).attr("data-user-id");
    $(this).parent().remove();
    addMember(userName, userId);
  });
  $(".search__delete").on("click", ".member__remove", function() {
    $(this).parent().remove();
  });
});


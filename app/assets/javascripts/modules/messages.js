$(function(){
  function Chat (message) {
    if ( message.image ) {
      let html =
        `<div class="MessageId" data-message-id=${message.id}>
          <div class="body__main">
            <div class="body__chat">
              <div class="body__name">
                ${message.user_name}
              </div>
              <div class="body__date">
                ${message.created_at}
              </div>
            </div>
            <div class="body__message">
              <div class="body__text">
                ${message.content}
              </div>
              <div class="body__picture">
                <img src="${message.image}">
              </div>
            </div>
          </div>
        </div>`
      return html;
    } else {
      let html =
        `<div class="MessageId" data-message-id=${message.id}>
          <div class="body__main">
            <div class="body__chat">
              <div class="body__name">
                ${message.user_name}
              </div>
              <div class="body__date">
                ${message.created_at}
              </div>
            </div>
            <div class="body__message">
              <div class="body__text">
                ${message.content}
              </div>
            </div>
          </div>
        </div>`
      return html;
    };
  }
  $(".form").on("submit", function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(message){
      let html = Chat(message);
      $(".body").append(html);
      $("form")[0].reset();
      $(".body").animate({ scrollTop: $(".body")[0].scrollHeight});
      $(".form__submit").prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $(".form__submit").prop("disabled", false);
    });
  });
  $(".button__left").on("click", ".rakuten", function() {
    alert("楽天レシピに移行します。会員登録なしでも無料でお使い頂けます！！")
  });
});
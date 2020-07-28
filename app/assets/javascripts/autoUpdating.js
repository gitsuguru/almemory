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
  
  let AutomaticUpdating = function() {
    let last_message_id = $(".MessageId:last").data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: "get",
      data: {id: last_message_id},
      dataType: "json"
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let BoxHtml = '';
        $.each(messages, function(i, message) {
          BoxHtml += Chat(message)
        });
        $(".body").append(BoxHtml);
        $(".body").animate({ scrollTop: $(".body")[0].scrollHeight});
      }
    })
    .fail(function() {
      alert("エラー");
    });
  };
  setInterval(AutomaticUpdating, 7000);
});
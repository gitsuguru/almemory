$(function(){
  $(".button__left").on("click", ".rakuten", function() {
    alert("楽天レシピに移行します。会員登録なしでも無料でお使い頂けます！！")
  });
});

$(function() {
  function addPrice(price) {
    let html = 
      `<div class="search__display">
        <div class="search__name">${price.name}<span class="search__number">${price.number}円</span></div>
      </div>`;
    $(".search__result").append(html);
  }
  
  function addNoPrice() {
    let html = 
      `<div class="search__display">
        <div class="search__none">品物が見つかりません</div>
      </div>`;
    $(".search__result").append(html);
  }

  $(".search__field").on("keyup", function() {
    let input = $(".search__field").val();
    $.ajax({
      type: "GET",
      url:  "/groups/:group_id/api/prices",
      data: { keyword: input },
      dataType: "json"
    })
    .done(function(prices) {
      $(".search__result").empty();
      if (prices.length !== 0) {
        prices.forEach(function(price) {
          addPrice(price);
        });
      } else if (input.length == 0) {
        return false;
      } else {
        addNoPrice();
      }
    })
    .fail(function() {
      alert("通信エラーです。");
    });
  });
});
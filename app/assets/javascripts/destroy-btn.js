$(function() {
  $('.destroy-btn').on("click", function(e) {
    var result = window.confirm('本当にこの投稿を消しちまっていいのか？')
    e.preventDefault();
    if (result) {
      e.stopPropagation();
      console.log('OK');
      window.alert('オレ達がやってきたこと全部、無かったことになんてできねーんだってばよ！！')
    }
    else {
      e.stopPropagation();
      console.log('cancel');
      window.alert('キャンセルしたってばよ！')
    }
  });
});

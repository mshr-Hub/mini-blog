$(function() {
  $('.destroy-btn').on("click", function(e) {
    var result = window.confirm('本当にこの投稿を消しちまっていいのか？')
    e.preventDefault();
    if (result) {
      e.stopPropagation();
      console.log('OK');
      window.alert('まっすぐ自分の投稿は消さねえ…  それがオレの忍道だ!!')
    }
    else {
      e.stopPropagation();
      console.log('cancel');
      window.alert('キャンセルしたってばよ！')
    }
  });
});

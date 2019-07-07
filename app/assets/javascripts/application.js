// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(function() {
  $('.destroy-btn').click(function(e) {
    var result = window.confirm('投稿を削除しますか？')
    e.preventDefault();
    if (result) {
      window.alert('投稿の削除が実行されました')
    }
    else {
      e.stopPropagation();
      window.alert('投稿の削除が取り消されました')
    }
  });
});
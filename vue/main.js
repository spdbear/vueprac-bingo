var app = new Vue({
  // マウントする要素
  el: "#app",

  // 用いるデータ
  data: {
    list: [],
    listed: []
  },

  // 算出プロパティ
  // （関数によって算出されたデータ）
  computed: {},

  // ライフサイクルハック
  // created: DOM構築直前
  mounted: function() {
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
      }
      return array;
    }
    for (var i = 1; i <= 75; i++) {
      this.listed.push(i);
    }
    shuffleArray(this.listed);
    this.listed = numbers;
  },

  // このアプリケーションで使うメソッド
  methods: {
    draw: function() {
      if (this.listed.length != 0) {
        this.list.unshift(this.listed.pop());
      }
    }
  }
});

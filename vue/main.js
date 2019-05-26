var app = new Vue({
  // マウントする要素
  el: "#app",

  // 用いるデータ
  data: {
    selectedNumbers: [],
    unselectedNumbers: []
  },

  // 算出プロパティ
  // （関数によって算出されたデータ）
  computed: {
    drawnNumber: function() {
      var num = "";
      if (this.selectedNumbers.length != 0) {
        num = this.selectedNumbers[this.selectedNumbers.length - 1];
      }
      return num;
    }
  },

  // ライフサイクルハック
  // mounted: DOM構築直後
  mounted: function() {
    // 配列をシャッフル（破壊的変更）
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
      this.unselectedNumbers.push(i);
    }
    shuffleArray(this.unselectedNumbers);
  },

  // このアプリケーションで使うメソッド
  methods: {
    draw: function() {
      if (this.unselectedNumbers.length != 0) {
        this.selectedNumbers.push(this.unselectedNumbers.pop());
      }
    }
  }
});

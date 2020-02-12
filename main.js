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
    drawnNumber: function () {
      let num = "";
      if (this.selectedNumbers.length != 0) {
        num = this.selectedNumbers[this.selectedNumbers.length - 1];
      }
      return num;
    },
    drawTimes: function () {
      return 75 - this.unselectedNumbers.length;
    }
  },

  // ライフサイクルハック
  // mounted: DOM構築直後
  mounted: function () {
    this.loadNumbers();
  },

  // このアプリケーションで使うメソッド
  methods: {
    init() {
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
      this.selectedNumbers.length = 0;
      this.unselectedNumbers.length = 0;
      for (var i = 1; i <= 75; i++) {
        this.unselectedNumbers.push(i);
      }
      shuffleArray(this.unselectedNumbers);
    },

    draw() {
      if (this.unselectedNumbers.length != 0) {
        this.selectedNumbers.push(this.unselectedNumbers.pop());
        this.saveNumbers();
      }
    },

    // 番号を引いた履歴をリセット
    restart() {
      if (window.confirm("Are you sure you want to restart?")) {
        this.init();
        this.saveNumbers();
      }
    },

    loadNumbers() {
      const myStorage = localStorage;
      if (myStorage.getItem("BingoMachineStorage")) {
        try {
          const loadData = JSON.parse(myStorage.getItem("BingoMachineStorage"));
          this.selectedNumbers = loadData.selected;
          this.unselectedNumbers = loadData.unselected;
        } catch (e) {
          const loadData = {
            "selected": this.selectedNumbers,
            "unselected": this.unselectedNumbers
          };
          myStorage.setItem("BingoMachineStorage", JSON.stringify(loadData));
        }
      }
    },

    saveNumbers() {
      const myStorage = localStorage;
      const saveData = {
        "selected": this.selectedNumbers,
        "unselected": this.unselectedNumbers
      };
      myStorage.setItem("BingoMachineStorage", JSON.stringify(saveData));
    }

  }
});
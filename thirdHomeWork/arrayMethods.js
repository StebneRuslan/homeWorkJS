let arrayMethods = {
  push: function (element) {
      this[this.length] = element;
      return this.length;
  },

  pop: function () {
      if (this.length === 0) {
          return;
      }
      let deleted = this[this.length - 1];
      this.length = this.length - 1;
      return deleted;
  },

  slice: function (begin = 0, end = this.length) {
      if (this.length === 0) {
          return [];
      }
      if (begin < 0) {
          begin = this.length - (-begin);
      }
      if (end < 0) {
          end = this.length - (-end);
      }

      let resArr = [];
      let j = 0;
      for (let i = begin; i < end; i++) {
          resArr[j] = this[i];
          j++;
      }
      return resArr;
  },

  join: function (string) {
      let resString ='';
      for (let i = 0; i < this.length; i++) {
          resString += this[i];
          if (i !== this.length - 1) {
              resString += string;
          }
      }
      return resString;
  },

  reverse: function () {
      let tmp = this.slice();
      let j = 0;
      for (let i = tmp.length -1; i >= 0; i--) {
          this[j] = tmp[i];
          j++;
      }
      return this;
  }

};



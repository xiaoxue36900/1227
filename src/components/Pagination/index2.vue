<template>
  <div class="pagination">
    <button
      :disabled="myCurrentPage === 1"
      @click="setCurrentPage(myCurrentPage - 1)"
    >
      上一页
    </button>
    <button v-if="startEnd.start > 1" @click="setCurrentPage(1)">1</button>
    <button disabled v-if="startEnd.start > 2">···</button>
    <button
      v-for="num in startEnd.end"
      v-if="num >= startEnd.start"
      :class="{ active: num === myCurrentPage }"
      @click="setCurrentPage(num)"
    >
      {{ num }}
    </button>
    <!-- 只有在end小于totalPages-1 -->
    <button disabled v-if="startEnd.end < totalPages - 1">···</button>
    <!-- 只有在end小于totalPages -->
    <button
      v-if="startEnd.end < totalPages"
      @click="setCurrentPage(totalPages)"
    >
      {{ totalPages }}
    </button>
    <button
      :disabled="myCurrentPage === totalPages"
      @click="setCurrentPage(myCurrentPage + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px" disabled>共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    },
    showPageNo: {
      type: Number,
      // 最好指定为奇数
      default: 5,
    },
  },

  data() {
    return {
      // 将外部传入的当前页码作为当前组件的当前面页码初始值
      myCurrentPage: this.currentPage,
    };
  },

  computed: {
    totalPages() {
      const { total, pageSize } = this;
      return Math.ceil(total / pageSize);
    },
    startEnd() {
      let start, end;
      const { myCurrentPage, showPageNo, totalPages } = this;
      start = myCurrentPage - Math.floor(showPageNo / 2);
      if (start < 1) {
        start = 1;
      }
      end = start + showPageNo - 1;
      if (end > totalPages) {
        end = totalPages;
        start = end - showPageNo + 1;
        if (start < 1) {
          start = 1;
        }
      }

      return { start, end };
    },
  },

  methods: {
    setCurrentPage(page) {
      this.myCurrentPage = page;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
